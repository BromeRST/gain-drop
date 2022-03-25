import { writeFile } from 'node:fs/promises'
import { CeramicClient } from '@ceramicnetwork/http-client'
import { model as profileModel } from '@datamodels/identity-profile-basic'
import { ModelManager } from '@glazed/devtools'
import { DID } from 'dids'
import { Ed25519Provider } from 'key-did-provider-ed25519'
import { getResolver } from 'key-did-resolver'
import { fromString } from 'uint8arrays'

//if (!process.env.SEED) {
//  throw new Error('Missing SEED environment variable')
//}

const CERAMIC_URL = process.env.CERAMIC_URL || 'https://ceramic-clay.3boxlabs.com'

// The seed must be provided as an environment variable
const seed = fromString('264fa1d973db7b70710f063ce58387e1264fa1d973db7b70710f063ce58387e1', 'base16')
// Create and authenticate the DID
const did = new DID({
  provider: new Ed25519Provider(seed),
  resolver: getResolver(),
})
await did.authenticate()

// Connect to the Ceramic node
const ceramic = new CeramicClient(CERAMIC_URL)
ceramic.did = did

// Create a manager for the model
const manager = new ModelManager(ceramic)

// Add basicProfile to the model
manager.addJSONModel(profileModel)

// Create the schemas
const campaignSchemaID = await manager.createSchema('Campaign', {
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Campaign',
  type: 'object',
  properties: {
    date: {
      type: 'string',
      format: 'date-time',
      title: 'date',
      maxLength: 30,
    },
    brand: {
      type: 'string',
      title: 'brand',
      maxLength: 4000,
    },
    NFTamt: {
      type: 'integer',
      title: 'No. of NFTS',
      maxLength: 1000,
    },
  },
})
const campaignsSchemaID = await manager.createSchema('Campaigns', {
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'CampaignsList',
  type: 'object',
  properties: {
    notes: {
      type: 'array',
      title: 'campaigns',
      items: {
        type: 'object',
        title: 'CampaignItem',
        properties: {
          id: {
            $comment: `cip88:ref:${manager.getSchemaURL(campaignSchemaID)}`,
            type: 'string',
            pattern: '^ceramic://.+(\\?version=.+)?',
            maxLength: 150,
          },
          title: {
            type: 'string',
            title: 'title',
            maxLength: 100,
          },
        },
      },
    },
  },
})

// Create the definition using the created schema ID
await manager.createDefinition('campaigns', {
  name: 'campaigns',
  description: 'Simple text campaigns',
  schema: manager.getSchemaURL(campaignsSchemaID),
})

// Create a Note with text that will be used as placeholder
await manager.createTile(
  'placeholderCampaign',
  { text: 'This is a placeholder for the note contents...' },
  { schema: manager.getSchemaURL(campaignSchemaID) }
)

// Write model to JSON file
await writeFile(new URL('model.json', import.meta.url), JSON.stringify(manager.toJSON()))
console.log('Encoded model written to scripts/model.json file')

import { useSigner } from '../context/signer';

function Login() {
  const {
    login, connected, signerAddress,
  } = useSigner();

  return (
    !connected || !signerAddress ? (
      <div style={{color: 'white'}} className="d-block" onClick={login}>
        Connect Wallet
      </div>
    ) : (
      <div style={{color: 'white'}} className="d-block">

        {`${signerAddress?.substring(0, 6)
        }...${
          signerAddress?.substring(36)}`}

      </div>
    )
  );
}

export default Login;
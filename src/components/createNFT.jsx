import abi from "../utils/contractABI.json";
import Login from "./Login.tsx";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { useSigner } from "../context/signer.tsx";
import { main } from "../utils/nftStorageAPI";

const contractAddress = "0x9132dc34c978C67E045B6d9B4b1edED9941e5858";

function CreateNFT() {

  const [mumbaiProvider, setMumbaiProvider] = useState(null);
  const [thisContract, setThisContract] = useState(null);
  const [daysToMint, setDaysToMint] = useState(null);
  const [mintCap, setMintCap] = useState(null);
  const [NFTMinted, setNFTMinted] = useState(null);
  const [nftIdGenerated, setNftIdGenerated] = useState(null);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  const [firstTrait, setFirstTrait] = useState(null);
  const [firstTraitValue, setFirstTraitValue] = useState(null);
  const [secondTrait, setSecondTrait] = useState(null);
  const [secondTraitValue, setSecondTraitValue] = useState(null);
  const [creating, setCreating] = useState(false);


  const { signer, provider, signerAddress } = useSigner();

  const generateNFT = async () => {
    if (signerAddress) {
      setCreating(true);
      const uri = await main(name, description, image, firstTrait, firstTraitValue, secondTrait, secondTraitValue);
      const tx = await thisContract.generateNFT(daysToMint * 86400, mintCap, uri);
      const rc = await tx.wait();
      const event = rc.events.find(event => event.event === 'IDCreated');
      const [_id] = event.args;
      setNftIdGenerated(parseInt(ethers.utils.formatUnits(_id, 0)));
    }
  }


  // const setUri = async () => {
  //   if (signerAddress) {
  //     const tx = await thisContract.setUri(nftIdGenerated, myURI);
  //     notify.hash(tx.hash);
  //     // await tx.wait();
  //     console.log(tx);
  //   }
  // }

  const nftMinted = async () => {
    if (signerAddress) {
      const tx = await thisContract.getCountForId(idForBalance);
      // await tx.wait();
      setNFTMinted(parseInt(ethers.utils.formatUnits(tx, 0)));
    }
  }

  const handleDaysToMint = (e) => {
    setDaysToMint(e.target.value);
  }

  const handleMintCap = (e) => {
    setMintCap(e.target.value);
  }

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleDescription = (e) => {
    setDescription(e.target.value);
  }

  const readFiles = (event) => {
    const [file] = event.target.files;
    setImage(file);
  };

  // const handleURI = () => {
  //   main(name, description, image, firstTrait, firstTraitValue, secondTrait, secondTraitValue);
  // }

  const handleFirstTrait = (e) => {
    setFirstTrait(e.target.value);
  }

  const handleFirstTraitValue = (e) => {
    setFirstTraitValue(e.target.value);
  }

  const handleSecondTrait = (e) => {
    setSecondTrait(e.target.value);
  }

  const handleSecondTraitValue = (e) => {
    setSecondTraitValue(e.target.value);
  }

  // const handleMyURI = (e) => {
  //   setMyURI(e.target.value);
  // }

  useEffect(() => {
    const mProvider = new ethers.providers.JsonRpcProvider(
      "https://polygon-mumbai.g.alchemy.com/v2/SeyWmSZubocxNcqaWaiR--xe00RiT1ig"
    );
    setMumbaiProvider(mProvider);

  }, []);


  useEffect(() => {
    if (signer || provider || mumbaiProvider) {
      setThisContract(
        new ethers.Contract(
          contractAddress,
          abi,
          signer || provider || mumbaiProvider
        )
      );
    }
  }, [provider, signer, mumbaiProvider]);

  return (
      <div className="wrapper">
  {/* Navbar */}
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button">
          <i className="fas fa-bars" />
        </a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="index3.html" className="nav-link">
          Home
        </a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="#" className="nav-link">
          Contact
        </a>
      </li>
    </ul>
    {/* Right navbar links */}
    <ul className="navbar-nav ml-auto">{/* Messages Dropdown Menu */}</ul>
  </nav>
  {/* /.navbar */}
  {/* Main Sidebar Container */}
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="index3.html" className="brand-link">
      {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8"> */}
      <span className="brand-text font-weight-light">Gain Drop Dashboard</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="info">
          <Login />
        </div>
      </div>
      {/* SidebarSearch Form */}
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          <li className="nav-item menu-open"></li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <p>Dashboard</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/createNFT" className="nav-link active">
              <p>Create NFT</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/createCampaign" className="nav-link">
              <p>Create Campaign</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/profile" className="nav-link">
              <p>Profile</p>
            </a>
          </li>
          <li className="nav-item">
              <a href="/mint" className="nav-link">
                <p>Mint</p>
              </a>
            </li>
          <li className="nav-item">
            <a href="/settings" className="nav-link">
              <p>Settings</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              <p>Logout</p>
            </a>
          </li>
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Create NFT</h1>
          </div>
          {/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active">Create NFT</li>
            </ol>
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <section style={{ padding: "20%", paddingTop: 0, paddingBottom: 0 }}>
      <div style={{ padding: 41 }}>
        <label className="form-label">Name</label>
        <input className="form-control" type="text" onChange={handleName}/>
        <p>Image or 3D Model</p>
        <input className="form-control" type="file" onChange={readFiles}/>
        <p>Description</p>
        <textarea className="form-control" defaultValue={""} onChange={handleDescription}/>
        <p>Type of NFT</p>
        <select className="form-select">
          <optgroup label="Select Type of NFT">
            <option value="coupon" selected="">
              Discount Coupon
            </option>
            <option value="loyalty" selected="">
              Loyalty NFT
            </option>
          </optgroup>
        </select>
        <p>Attributes:</p>
        <label className="form-label" htmlFor="first-trait">First Trait</label>
        <input
          className="form-control"
          type="text"
          placeholder="name of the first trait"
          id="first-trait"
          onChange={handleFirstTrait}
        />
        <label className="form-label" htmlFor="first-trait-value">First Trait Value</label>
        <input
          className="form-control"
          type="text"
          placeholder="trait value"
          id="first-trait-value"
          onChange={handleFirstTraitValue}
        />
        <label className="form-label" htmlFor="second-trait">Second Trait</label>
        <input
        className="form-control"
          type="text"
          placeholder="name of the second trait"
          id="second trait-trait"
          onChange={handleSecondTrait}
        />
        <label className="form-label" htmlFor="second-trait-value">First Trait Value</label>
        <input
          className="form-control"
          type="text"
          placeholder="trait value"
          id="second-trait-value"
          onChange={handleSecondTraitValue}
        />
        {/* <p>Type of NFT</p>
        <select className="form-select">
          <optgroup label="Select Type of NFT">
            <option value={12} selected="">
              Discount Coupon
            </option>
          </optgroup>
        </select>
        <p>Value</p>
        <input className="form-control" type="text" />
        <p>Minimum Spend Required</p>
        <input className="form-control" type="text" /> */}
        {/* <p>Expiration</p>
        <select className="form-select">
          <optgroup label="">
            <option value={12} selected="">
              Yes
            </option>
            <option value={13}>No</option>
          </optgroup>
        </select> */}
        <p>Days to mint</p>
        <input className="form-control" type="number" onChange={handleDaysToMint}/>
        {/* <p>External Link</p>
        <input className="form-control" type="url" /> */}
        <p>Quantity</p>
        <input className="form-control" type="number" onChange={handleMintCap}/>
        <button className="btn btn-primary" onClick={generateNFT}>
          {creating ? "wait a second and confirm transaction" : "create"}
        </button>
        {nftIdGenerated === null ? "" : <p>NFT ID generated: {nftIdGenerated}</p>}
        </div>
    </section>
    {/* /.content */}
  </div>
  {/* /.content-wrapper */}
  <footer className="main-footer">
    <strong>
      Copyright © 2022 <a href="">Gain Drop</a>.
    </strong>
    All rights reserved.
    {/* <div class="float-right d-none d-sm-inline-block">
<b>Version</b> 3.2.0
    </div> */}
  </footer>
  {/* Control Sidebar */}
  <aside className="control-sidebar control-sidebar-dark">
    {/* Control sidebar content goes here */}
  </aside>
  {/* /.control-sidebar */}
</div>

);
}
 
export default CreateNFT;
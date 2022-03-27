import Login from "./Login"
import abi from "../utils/contractABI.json";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { useSigner } from "../context/signer.tsx";

const contractAddress = "0x9132dc34c978C67E045B6d9B4b1edED9941e5858";

function Mint() {

    const [mumbaiProvider, setMumbaiProvider] = useState(null);
    const [thisContract, setThisContract] = useState(null);
    const [idForBalance, setIdForBalance] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [idToMint, setIdToMint] = useState(null);

    const { signer, provider, signerAddress } = useSigner();

    const mint = async () => {
        if (signerAddress) {
            const tx = await thisContract.mint(idToMint);
            // await tx.wait();
            console.log(tx)
            alert(`nft minted tx: https://mumbai.polygonscan.com/tx/${tx.hash}`)
        }
    }

    const handleIdToMint = (e) => {
        setIdToMint(e.target.value);
    }
    const handleIdToBalance = (e) => {
        setUserBalance(null)
        setIdForBalance(e.target.value);
    }

    const balanceOfSigner = async () => {
        if (signerAddress) {
          const tx = await thisContract.balanceOf(signerAddress, idForBalance);
          // await tx.wait();
          setUserBalance(parseInt(ethers.utils.formatUnits(tx, 0)))
        }
    }

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
        <>
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
      <a href="/index" className="brand-link">
        {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8"> */}
        <span className="brand-text font-weight-light">Gain Drop</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          {/* <div className="image">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
          </div> */}
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
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>Dashboard</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/createNFT" className="nav-link">
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
              <a href="/mint" className="nav-link active">
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
              <h1 className="m-0">Minting Page</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Minting Page</li>
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
      <section className="content">
        <div style={{ padding: 41 }}>
            <input className="form-control" type="number" placeholder="NFT id to mint" onChange={handleIdToMint}/>
            <button className="btn btn-primary" onClick={mint}>mint an nft</button>
            <input className="form-control" type="number" placeholder="NFT id to check" onChange={handleIdToBalance}/>
            <button className="btn btn-primary" onClick={balanceOfSigner}>your balance</button>
            {userBalance === null ? "" : <p>Your balance for ID {idForBalance} is: {userBalance}</p>}
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
  {/* ./wrapper */}
</>



    );
  }




export default Mint;

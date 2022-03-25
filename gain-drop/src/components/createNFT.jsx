import React, { Component } from "react";


class CreateNFT extends Component {
    state = {  } 
    render() { 
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
          <a href="#" className="d-block">
            User Wallet address
          </a>
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
      <form style={{ padding: 41 }}>
        <label className="form-label">Name</label>
        <input className="form-control" type="text" />
        <p>Image or 3D Model</p>
        <input className="form-control" type="file" />
        <p>Description</p>
        <textarea className="form-control" defaultValue={""} />
        <p>Type of NFT</p>
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
        <input className="form-control" type="text" />
        <p>Expiration</p>
        <select className="form-select">
          <optgroup label="">
            <option value={12} selected="">
              Yes
            </option>
            <option value={13}>No</option>
          </optgroup>
        </select>
        <p>Date</p>
        <input className="form-control" type="date" />
        <p>External Link</p>
        <input className="form-control" type="url" />
        <p>Quantity</p>
        <input className="form-control" type="number" />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
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
}
 
export default CreateNFT;
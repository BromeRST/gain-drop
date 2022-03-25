import React, { Component } from "react";

class CreateCampaign extends Component {
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
            <a href="/createNFT" className="nav-link">
              <p>Create NFT</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/createCamp" className="nav-link active">
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
            <h1 className="m-0">Create Campaign</h1>
          </div>
          {/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active">Create Campaign</li>
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
        <p>Company Name:&nbsp;</p>
        <p>Brand</p>
        <label className="form-label">Campaign Name</label>
        <input className="form-control" type="text" />
        <p>Start Date</p>
        <p>
          <input className="form-control" type="date" />
          End Date
        </p>
        <input className="form-control" type="date" />
        <p>Country</p>
        <input className="form-control" type="text" />
        <p>Choose NFT Collection</p>
        <select className="form-select">
          <optgroup label="This is a group">
            <option value={12} selected="">
              This is item 1
            </option>
            <option value={13}>This is item 2</option>
            <option value={14}>This is item 3</option>
          </optgroup>
        </select>
        <p>Blockchain</p>
        <select className="form-select">
          <optgroup label="This is a group">
            <option value={12} selected="">
              This is item 1
            </option>
            <option value={13}>This is item 2</option>
            <option value={14}>This is item 3</option>
          </optgroup>
        </select>
        <p>Destination</p>
        <select className="form-select">
          <optgroup label="This is a group">
            <option value={12} selected="">
              This is item 1
            </option>
            <option value={13}>This is item 2</option>
            <option value={14}>This is item 3</option>
          </optgroup>
        </select>
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
 
export default CreateCampaign;
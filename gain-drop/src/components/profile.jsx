import React, { Component } from "react";

class Profile extends Component {
    state = { 
      userW: '1F1tA......az5x1H'
     }
     
     profileSubmit(){
       console.log("submit button is clicked");
     }
     
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
            {this.state.userW}
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
            <a href="./index.html" className="nav-link">
              <p>Dashboard</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="./createNFT.html" className="nav-link">
              <p>Create NFT</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="./createCamp.html" className="nav-link">
              <p>Create Campaign</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="./profile.html" className="nav-link active">
              <p>Profile</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="./settings.html" className="nav-link">
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
            <h1 className="m-0">Create Profile</h1>
          </div>
          {/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active">Profile</li>
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
    {/* write profile code from here */}
    <div>
      <h1 className="text-center">Brand Profile</h1>
      <p className="text-center">
        Creating your profile is saving in the Blockchain
      </p>
      <p className="text-center">Make your NFT Profile Awesome</p>
      <section style={{ padding: "20%", paddingTop: 0, paddingBottom: 0 }}>
        <form style={{ padding: 41 }}>
          <label className="form-label">Company Name</label>
          <input className="form-control" type="text" />
          <p>Brand Name</p>
          <input className="form-control" type="text" />
          <p>Business Address</p>
          <input className="form-control" type="text" />
          <p>Country</p>
          <input className="form-control" type="text" />
          <p>Province</p>
          <input className="form-control" type="text" />
          <p>City</p>
          <input className="form-control" type="text" />
          <p>Industry</p>
          <input className="form-control" type="text" />
          <p>Upload Image</p>
          <p>File Types Supportes JPEG and PNG</p>
          <input className="form-control" type="file" />
          <p>Company Description</p>
          <textarea className="form-control" defaultValue={""} />
          <button onClick={this.profileSubmit} className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </section>
    </div>
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
 
export default Profile;
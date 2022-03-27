import React, { Component } from "react";
import Login from "./Login"

class Dashboard extends Component {
  state = {
      info : {
        sales : 23,
        totalNFT: 53,
        totalMint: 33,
        NFTcir: 21 
      },
      userW: '1F1tA......az5x1H'
  };
  render() {
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
              <a href="/" className="nav-link active">
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
              <h1 className="m-0">Dashboard</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
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
        <div className="container-fluid">
          {/* Small boxes (Stat box) */}
          <div className="row">
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>{this.state.info.sales}</h3>
                  <p>Sales Generated</p>
                </div>
                <div className="icon">{/* <i class="ion ion-bag"></i> */}</div>
                <a href="#" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>
                  {this.state.info.totalNFT}<sup style={{ fontSize: 20 }}>%</sup>
                  </h3>
                  <p>Total NFT Redemption</p>
                </div>
                <div className="icon">
                  {/* <i class="ion ion-stats-bars"></i> */}
                </div>
                <a href="#" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>{this.state.info.totalMint}</h3>
                  <p>Total NFT Minted</p>
                </div>
                <div className="icon">
                  {/* <i class="ion ion-person-add"></i> */}
                </div>
                <a href="#" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>{this.state.info.NFTcir}</h3>
                  <p>NFT in circulation</p>
                </div>
                <div className="icon">
                  {/* <i class="ion ion-pie-graph"></i> */}
                </div>
                <a href="#" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* ./col */}
          </div>
          {/* /.row */}
          {/* Main row */}
          <div className="row">
            {/* Left col */}
            <section className="col-lg-7 connectedSortable">
              {/* Custom tabs (Charts with tabs)*/}
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">
                    <i className="fas fa-chart-pie mr-1" />
                    Overview
                  </h3>
                  <div className="card-tools">
                    <ul className="nav nav-pills ml-auto">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          href="#revenue-chart"
                          data-toggle="tab"
                        >
                          Area
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#sales-chart"
                          data-toggle="tab"
                        >
                          Donut
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <div className="tab-content p-0">
                    {/* Morris chart - Sales */}
                    <div
                      className="chart tab-pane active"
                      id="revenue-chart"
                      style={{ position: "relative", height: 300 }}
                    >
                      <canvas
                        id="revenue-chart-canvas"
                        height={300}
                        style={{ height: 300 }}
                      />
                    </div>
                    <div
                      className="chart tab-pane"
                      id="sales-chart"
                      style={{ position: "relative", height: 300 }}
                    >
                      <canvas
                        id="sales-chart-canvas"
                        height={300}
                        style={{ height: 300 }}
                      />
                    </div>
                  </div>
                </div>
                {/* /.card-body */}
              </div>
            </section>
            {/* right col */}
          </div>
          {/* /.row (main row) */}
        </div>
        {/* /.container-fluid */}
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
}




export default Dashboard;

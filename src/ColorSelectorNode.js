import React, { memo } from "react";

import { Handle } from "react-flow-renderer";

import "./style.css";
export default memo((props) => {
  // console.log("LIne 6", props);

  const [offcanvasHandler, setOffcanvasHandler] = React.useState('');

  const handleClick = (value) => {
    switch (value) {
      case 1:
        // setOffcanvasHandler('');
        break;
      case 2:
        setOffcanvasHandler('#offcanvasNavbar');
        break;
      case 3:
        console.log("triple click");
        break;
    }
  }
  return (
    <div>
      <Handle
        type="target"
        position="left"
        style={{ background: "#784be8" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      // isConnectable={true}
      />
      <div>
        <div className="single-node">
          <small style={{ cursor: "pointer" }} onClick={() => {
            props.data.openDrawer(props.id);
          }} className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target={'#offcanvasNavbar'} aria-controls="offcanvasNavbar">{props.data?.label}</small>
          <div
            className="close-icon"
            style={{ cursor: "pointer" }}
            onClick={() => props.data?.deleteNode(props.id)}
          >
            X
          </div>
        </div>
      </div>
      {/* <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: 30, background: "#555" }}
        // isConnectable={true}
      /> */}
      <Handle
        type="source"
        position="right"
        id="b"
        style={{ bottom: 5, top: "auto", background: "#784be8" }}
      // isConnectable={true}
      />

      {/* <nav className="navbar bg-light fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Offcanvas navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
   
    */}
    </div>
  );
});

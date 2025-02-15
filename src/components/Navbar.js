import React from "react";
import { Link } from "react-router-dom";

const Navbar= () =>{
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">
        <img src="./heels.png" width={100}/>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="pro">Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="con">Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="about">About</Link>
        </li>
        
        <form class="container-fluid justify-content-start">
    <Link class="btn btn-outline-secondary me-2 bg-dark" to="log" type="button">Login</Link>
    <Link class="btn btn-sm btn-outline-secondary bg-dark" to="reg" type="button">Register</Link>
  </form>

      </ul>
    </div>
  </div>
</nav>
        </div>
    )

}

export default Navbar
import React from "react";
import { Link } from "react-router-dom";

const Register = () =>{
    return (
        <div>
          <div className="container h-100 w-75">
        <div className="row h-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">Sign up Form</h1>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="m-sm-4">
                    <form>
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          className="form-control form-control-lg"
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          name="password"
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="form-group">
                        <label>Photo</label>
                        <input
                          className="form-control form-control-lg"
                          type="file"
                          name="photo"
                        />
                      </div>

                      <div className="text-center mt-3">
                        <Link to="" className="singup btn btn-lg btn-primary">
                          Sign up
                        
                        </Link>

                        <Link to="/log" className="logout btn btn-lg btn-primary">
                          logout
                        </Link>
                        
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



        </div>
    )

}

export default Register
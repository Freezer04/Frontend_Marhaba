import React, {useState} from "react";
import {register} from "../../../Service/Auth/Authentication"

const Register = () => {

  const [data, setData] = useState()


  return (
    <div>
    <div className="auth-wrapper">
    <div className="auth-content">
        <div className="auth-bg">
            <span className="r"></span>
            <span className="r s"></span>
            <span className="r s"></span>
            <span className="r"></span>
        </div>
        <div className="card">
            <div className="card-body text-center">
                <div className="mb-4">
                    <i className="feather icon-user-plus auth-icon"></i>
                </div>
                <h3 className="mb-4">Sign up</h3>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Full Name"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Username"/>
                </div>
                <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email"/>
                </div>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Phone"/>
                </div>
                <div className="input-group mb-4">
                    <input type="password" className="form-control" placeholder="password"/>
                </div>
                <div className="form-group text-left">
                    <div className="checkbox checkbox-fill d-inline">
                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-1" checked=""/>
                        <label for="checkbox-fill-1" className="cr"> Save Details</label>
                    </div>
                </div>
                <div className="form-group text-left">
                    <div className="checkbox checkbox-fill d-inline">
                        <input type="checkbox" name="checkbox-fill-2" id="checkbox-fill-2"/>
                        <label for="checkbox-fill-2" className="cr">Send me the <a href="#!"> Newsletter</a> weekly.</label>
                    </div>
                </div>
                <button className="btn btn-primary shadow-2 mb-4">Sign up</button>
                <p className="mb-0 text-muted">Allready have an account? <a href="login"> Log in</a></p>
            </div>
        </div>
    </div>
</div>
    </div>
  );
}

export default Register;

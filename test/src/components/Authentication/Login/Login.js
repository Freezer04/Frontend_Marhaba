import '../../../assets/css/style.css'
import React, {useState} from 'react';
import {login} from "../../../Service/Auth/Authentication"

const Login = () => {

  const [ data, setData] = useState({
    email: "",
    password:"",
  });
  
  const [submited, setSubmitted] = useState(false);

  const handleEmail = (e) => {
    setData({...data, email: e.target.value});
  }

  const handlePassword = (e) => {
    setData({...data, password: e.target.value});
  }

  const handleSubmit =()=> {
    login( data.email, data.password).then((response) => {
        window.location = '/'
      })()
    ;
    setSubmitted(true);
  };

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
        <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}>
        <div className="card">
            <div className="card-body text-center">
                <div className="mb-4">
                    <i className="feather icon-unlock auth-icon"></i>
                </div>
                <h3 className="mb-4">Login</h3>
                <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email" onChange={handleEmail}/>
                </div>
                <div className="input-group mb-4">
                    <input type="password" className="form-control" placeholder="password" onChange={handlePassword}/>
                </div>
                <div className="form-group text-left">
                    <div className="checkbox checkbox-fill d-inline">
                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" checked=""/>
                        <label for="checkbox-fill-a1" className="cr"> Save Details</label>
                    </div>
                </div>
                <button className="btn btn-primary shadow-2 mb-4">Login</button>
                <p className="mb-2 text-muted">Forgot password? <a href="auth-reset-password.html">Reset</a></p>
                <p className="mb-0 text-muted">Don’t have an account? <a href="register">Signup</a></p>
            </div>
        </div>
        </form>
        
    </div>
</div>

    </div>
  );
}

export default Login;

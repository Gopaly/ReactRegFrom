import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
function RegisterTitle() {
  return (
    <center>
      <div className="gap"></div>
      <h1 className="margintop10"> Register form </h1>
      <div>Join the community and improve your game<br /> with ANGLR</div>
    </center>
  )
}
class Fromfields extends React.Component {
  constructor() {
    super()
    this.state = {
      fname: "",
      lname: "",
      zip: "",
      uname: "",
      email: '',
      password: '',
      cpassword: '',
      emailValidation: false,
      unameValidation: false,
      passwordValidation: false,
      cpasswordValidation: false,
    }
  }

  contactSubmit = (e) => {
    e.preventDefault();
    alert("Form Submited Successfully")
  }

  inputChanged = (e) => {
    const name = e.target.name;
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {this.chkvalidations(name)}
    );
  };

  chkvalidations = (name) =>{
    let errors = {};
    switch(name){
      case "email":
      const emailCheck = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if(!this.state.email.match(emailCheck)){
        errors.email = true;
      }else {
        errors.email = false;  
      }
      break;
      case "uname":
        errors.uname = this.state.uname.length < 6 ? true : false;
        break;
      case "password":
        errors.password = this.state.password.length < 6 ? true : false;
        break;
      case "cpassword":
        errors.cpassword = (this.state.password.length > 0 && this.state.password !== this.state.cpassword) ? true : false;
      default: 
      break;
    };
    this.setState({
      emailValidation: errors.email,
      unameValidation: errors.uname,
      passwordValidation: errors.password,
      cpasswordValidation: errors.cpassword
    });
  } 

  render() {
    return (
      <form onSubmit={this.contactSubmit}>
        <div className="form-group has-success">
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-user"></i></span>
            <input type="text"
              id="fname"
              name="fname"
              placeholder="First Name"
              onChange={this.inputChanged}
              value={this.state.fname}
            />
            <br />
          </div>
        </div>
        <div className="form-group has-success">
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-user"></i></span>
            <input type="text"
              onChange={this.inputChanged}
              id="lname"
              name="lname"
              placeholder="Last Name"
              value={this.state.lname}
            />
            <br />
          </div>
        </div>

        <div className="form-group has-success">
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-map-marker"></i></span>
            <input type="text"
              onChange={this.inputChanged}
              id="zip"
              onChange={this.inputChanged}
              name="zip"
              placeholder="Zip Code"
            />
            <br />
          </div>
        </div>
        <div className="form-group has-success">
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
            <input type="email"
              className={this.state.emailValidation ? 'showerror' : ''}
              onChange={this.inputChanged}
              id="email"
              name="email"
              placeholder="Email id"
              required
            />
            <br />
          </div>
        </div>

        <div className="form-group has-success">
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-user"></i></span>
            <input type="text"
              className={this.state.unameValidation ? 'showerror' : ''}
              onChange={this.inputChanged}
              id="uname"
              name="uname"
              placeholder="User Name"
              required
            />
            <br />
          </div>
        </div>
        <div className="form-group has-success">
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
            <input type="password"
              className={this.state.passwordValidation ? 'showerror' : ''}
              onChange={this.inputChanged}
              id="password"
              name="password"
              placeholder="Password"
              required
            />
            <br />
          </div>
        </div>
        <div className="form-group has-success">
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-unlock"></i></span>
            <input type="password"

              className={this.state.cpasswordValidation ? 'showerror' : ''}
              onChange={this.inputChanged}
              id="cpassword"
              name="cpassword"
              placeholder="Confirm Password"
              required
            />
            <br />
          </div>
        </div><br />
        <div className={(this.state.emailValidation || this.state.unameValidation || this.state.passwordValidation || this.state.cpasswordValidation)?"errorwrap":""}>
          <div className={this.state.emailValidation ? 'showeme' : 'hideme'}>Invalid email</div>
          <div className={this.state.unameValidation ? 'showeme' : 'hideme'}>user name is required(minimum 6 chacters)</div>
          <div className={this.state.passwordValidation ? 'showeme' : 'hideme'}>Password is required(minimum 6 chacters)</div>
          <div className={this.state.cpasswordValidation ? 'showeme' : 'hideme'}>Confirm Password is mismatched</div>
        </div>
        <div className="registerbtnwrap">
          <button className="registerbtn" tyep="submit" disabled={(!this.state.emailValidation || !this.state.unameValidation || !this.state.passwordValidation || !this.state.cpasswordValidation)}> Register </button>
        </div>
      </form>

    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="myContainer">
        <RegisterTitle />
        <Fromfields />
      </div>
    );
  }
}

export default App;

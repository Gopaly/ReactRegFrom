import React, { Component } from 'react';
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
      invalidData:true,
      errorsList: {
        emailValidation: true,
        unameValidation: true,
        passwordValidation: true,
        cpasswordValidation: true
      }
      
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
    let errors = this.state.errorsList;
    switch(name){
      case "email":
      const emailCheck = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if(!this.state.email.match(emailCheck)){
        errors.emailValidation = true;
      }else {
        errors.emailValidation = false;  
      }
      break;
      case "uname":
        errors.unameValidation = this.state.uname.length < 6 ? true : false;
        break;
      case "password":
        errors.passwordValidation = this.state.password.length < 6 ? true : false;
        break;
      case "cpassword":
        errors.cpasswordValidation = (this.state.password.length > 0 && this.state.password !== this.state.cpassword) ? true : false;
        break;
      default: 
      break;
    };
    this.setState({
      errorsList: errors
    });
    // console.log(this.state.errorsList);
    // console.log(errors)
    // console.log(this.state.emailValidation && this.state.unameValidation && this.state.passwordValidation && this.state.cpasswordValidation);
    if(!errors.emailValidation && !errors.unameValidation && !errors.passwordValidation && !errors.cpasswordValidation){
      this.setState({
        invalidData: false
      });
    }
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
          </div>
        </div>
        <div className="form-group has-success">
          <div className="input-group"> 
            <span className="input-group-addon">
            <i className={(this.state.email.length > 0 && this.state.errorsList.emailValidation) ? 'redme fa fa-envelope ' : 'fa fa-envelope'} ></i>
            </span>
            <input type="email"
              className={this.state.email.length > 0 && this.state.errorsList.emailValidation ? 'showerror' : ''}
              onChange={this.inputChanged}
              id="email"
              name="email"
              placeholder="Email id"
              required
            />
            <span>
              <i className= {this.state.email.length > 0 && this.state.errorsList.emailValidation ? 'fa fa-warning warnstytle' : ''} ></i>
            </span>
          </div>
        </div>

        <div className="form-group has-success">
          <div className="input-group">
          <span className="input-group-addon">
            <i className={(this.state.uname.length > 0 && this.state.errorsList.unameValidation) ? 'redme fa fa-user ' : 'fa fa-user'} ></i>
          </span>
             
            <input type="text"
              className={this.state.uname.length > 0 && this.state.errorsList.unameValidation ? 'showerror' : ''}
              onChange={this.inputChanged}
              id="uname"
              name="uname"
              placeholder="User Name"
              required
            />
            <span>
              <i className= {this.state.uname.length > 0 && this.state.errorsList.unameValidation ? 'fa fa-warning warnstytle' : ''} ></i>
            </span>
          </div>
        </div>
        <div className="form-group has-success">
          <div className="input-group">
          <span className="input-group-addon">
            <i className={(this.state.password.length > 0 && this.state.errorsList.passwordValidation) ? 'redme fa fa-lock ' : 'fa fa-lock'} ></i>
            </span>
            <input type="password"
              className={this.state.password.length > 0 &&this.state.errorsList.passwordValidation ? 'showerror' : ''}
              onChange={this.inputChanged}
              id="password"
              name="password"
              placeholder="Password"
              required
            />
            <span>
            <i className= {this.state.password.length > 0 &&this.state.errorsList.passwordValidation ? 'fa fa-warning warnstytle' : ''} ></i>
            </span>
          </div>
        </div>
        <div className="form-group has-success">
          <div className="input-group">
          <span className="input-group-addon">
            <i className={(this.state.cpassword.length > 0 && this.state.errorsList.cpasswordValidation) ? 'redme fa fa-unlock ' : 'fa fa-unlock'} ></i>
            </span>
            <input type="password"
              className={this.state.cpassword.length > 0 && this.state.errorsList.cpasswordValidation ? 'showerror' : ''}
              onChange={this.inputChanged}
              id="cpassword"
              name="cpassword"
              placeholder="Confirm Password"
              required
            />

            <span>
            <i className= {this.state.cpassword.length > 0 &&this.state.errorsList.cpasswordValidation ? 'fa fa-warning warnstytle' : ''} ></i>
            </span>
          </div>
        </div><br />
        <div className={(this.state.errorsList.emailValidation || this.state.errorsList.unameValidation || this.state.errorsList.passwordValidation || this.state.errorsList.cpasswordValidation)?"errorwrap":""}>
          <div className={(this.state.email.length > 0 && this.state.errorsList.emailValidation) ? 'showeme' : 'hideme'}>Invalid email</div>
          <div className={this.state.uname.length > 0 && this.state.errorsList.unameValidation ? 'showeme' : 'hideme'}>user name is required(minimum 6 chacters)</div>
          <div className={this.state.password.length > 0 && this.state.errorsList.passwordValidation ? 'showeme' : 'hideme'}>Password is required(minimum 6 chacters)</div>
          <div className={this.state.cpassword.length > 0 && this.state.errorsList.cpasswordValidation ? 'showeme' : 'hideme'}>Confirm Password is mismatched</div>
        </div>
        <div className="registerbtnwrap">
          <button className="registerbtn" tyep="button"
           disabled={this.state.invalidData}> Register </button>
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

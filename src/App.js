import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
function RegisterTitle(){
  return (
    <center>
      <div className="gap"></div>
      <h1 className="margintop10"> Register form </h1>
      <div>Join the community and improve your game<br /> with ANGLR</div>
    </center>  
  )
}
class Fromfields extends React.Component{
  constructor(){
    super()
    this.state ={
      fname:"",
      lname:"",
      zip:"",
      uname:"",
      email:'',
      password:'',
      cpassword:'' 
      
    }
 
  }
  contactSubmit = (e) =>{

    alert("Form Submited Successfully")
    e.preventDefault();
    console.log(this.state)
  }

  inputChanged = (e) => {
    const name = e.target.name;
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    );
    
  }; 
  render(){
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
                  <br/>
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
                  <br/>
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
                  <br/>
              </div>
          </div>
          <div className="form-group has-success">
              <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                  <input type="email" 
                         className={this.state.email.length===0 ? 'showerror' : ''}
                         onChange={this.inputChanged} 
                        id="email" 
                        name="email" 
                        placeholder="Email id" 
                        required
                  />
                  <br/>
              </div>
          </div>

          <div className="form-group has-success">
              <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-user"></i></span>
                  <input type="text" 
                         className={this.state.uname.length===0 ? 'showerror' : ''}
                         onChange={this.inputChanged}
                         id="uname" 
                         name="uname" 
                         placeholder="User Name"
                         required
                  />
                  <br/>
              </div>
          </div>
          <div className="form-group has-success">
              <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                  <input type="password" 
                         className={this.state.password.length===0 ? 'showerror' : ''}
                         onChange={this.inputChanged}
                         id="password" 
                         name="password" 
                         placeholder="Password" 
                         required
                  />
                  <br/>
              </div>
          </div>
          <div className="form-group has-success">
              <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-unlock"></i></span>
                  <input type="password" 
                         
                         className={this.state.cpassword.length===0 ? 'showerror' : ''}
                         onChange={this.inputChanged}
                         id="cpassword" 
                         name="cpassword" 
                         placeholder="Confirm Password" 
                         required
                  />
                  <br/>
              </div>
          </div><br />
          <div className="errorwrap">
            Errors<br />
            <div className = {this.state.email.length===0 ? 'showeme' : 'hideme'}>Email is required</div>
            <div className = {this.state.uname.length===0 ? 'showeme' : 'hideme'}>user name is required</div>
            <div className = {this.state.password.length===0 ? 'showeme' : 'hideme'}>Password is required</div>
            <div className = {this.state.cpassword.length===0 ? 'showeme' : 'hideme'}>Confirm Password is required</div>
          </div>
          <div className="registerbtnwrap">
              <button className="registerbtn" tyep="submit"> Register </button>
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

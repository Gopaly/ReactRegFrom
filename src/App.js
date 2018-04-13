import React, { Component } from 'react';
import './App.css';

function RegisterTitle() {
  return (
    <center>
      <div className="gap"></div>
      <div className="title">My COmpnay</div>
    </center>
  )
} 

class Comments extends React.Component{
  constructor(props){
    super(props)
  }
  add(){ 
    let newComment = {title:this.refs.title.value,desc:this.refs.desc.value}
    console.log(newComment)
    this.props.addComment(newComment);
  }
  render(){
    return (
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1"> 
          <div className="form-group">
            <label htmlFor="commenttitle">Comment Title</label>
            <input type="text" className="form-control" ref='title' placeholder="comment Title" />
          </div>
          <div className="form-group">
            <label htmlFor="commenttitle">Comment Description</label>
            <textarea type="text" className="form-control"  ref='desc' placeholder="comment description">
            </textarea> 
          </div>
          <button 
              className="btn btn-primary"
              onClick={this.add.bind(this)}
          >Add me </button>
        </div>
      </div>
    )
  }
} 

  class Comment extends React.Component{
    constructor(props){
      super(props)
    }
 
    removeBtn (){
     alert("e")
     console.log()
    } 
    render(){
      return (
        <div className="col-sm-3">
          <div className="panel panel-default">
            <div className="panel-heading"><h3>{this.props.title}</h3></div>
            <div className="panel-body">{this.props.desc}</div>
            <div className="panel-footer"> 
              <LikeButton />
              <div className="text-right">
                <button className="btn btn-danger btn-sm" onClick={this.removeBtn}>remove </button>
              </div>
            </div>  
          </div>
        </div>
      )
    }  
}
class CommentList extends React.Component{
  render(){
    return (
      <div>
        {
          this.props.commentsdata.map(function(comment,i){
            return  <Comment key={i} title={comment.title} desc={comment.desc}  />       
          })
        } 
    </div>
    ) 
  }
}
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      comments : [
          {title:"a1",desc:111},
          {title:"b1",desc:222},
          {title:"c1",desc:333},
      ]
    } 
  }
  
  addComment = (data) => {
    const myState = {...this.state};
    const newComments = myState.comments;
    newComments.push(data);
    this.setState({comments:newComments}); 
    console.log(this.state)
 
    
  }
  render() {
    return (
      <div>
        <div className="myContainer">
          <RegisterTitle /> 
          <hr />
          <Comments addComment={this.addComment}/>  <br />
        </div>
        <div className="container">
          <div className="row">
          <br />
              <CommentList commentsdata = {this.state.comments} /> 
          </div>
        </div>
      </div>
    );
  }
}
class LikeButton extends React.Component {
  constructor() {
  super();
  this.state = {
    liked: false
  };
  this.handleClick = this.handleClick.bind(this);
  } 

  handleClick() {
  this.setState({
    liked: !this.state.liked
  });
  }

  render() {
  const label = this.state.liked ? 'Unlike' : 'Like'
  return (
    <div className="customContainer">
      <div className="pull-left">
      <input className="btn btn-primary btn-sm " type="button" onClick={this.handleClick} value ={label} />
      
      </div>
    </div>
  );
  }
}

export default App;

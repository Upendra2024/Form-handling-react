import React from 'react';

export class FormHandle extends React.Component{

  constructor(){
    super()
    this.state ={
      name :"",
      email:""
    }

  }
  nameChangeHandle =event =>{
  this.setState({
      name : event.target.value
     

    })
  }
  emailChangeHandle =event =>{
    this.setState({
       
        email: event.target.value
  
      })
    }
  submitHandler =e=>{
    e.preventDefault()
    alert(`Name:${this.state.name}   Email: ${this.state.email}`)
    
  }


  render(){
    return(
      <div>
        <form action="" onSubmit ={this.submitHandler}>
        <label htmlFor="">Name :</label>
        <input type="text" name ="name" value ={this.state.name} onChange ={this.nameChangeHandle}  /><br/>
        <label htmlFor="">Email :</label>
        <input type="email"  name = "email"value ={this.state.email} onChange ={this.emailChangeHandle}  /><br/>
        <input type="submit"/>
        </form>

        
{/* 

     //for checking weather it is updating or not
        <div>
          Name : {this.state.name} <br/>
          Email : {this.state.email}
        </div> */}

      </div>
    )
  }
}
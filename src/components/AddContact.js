import React from "react";
import './App.css'

class AddContact extends React.Component {
  state={
    name:"",
    email:""
  }
  add=(e)=>{
    e.preventDefault();
    if(this.state.name==="" || this.state.email===""){
alert("All field are mendatory")
return
    }
   this.props.addContactHandler(this.state)
   this.setState({name:"",email:""})
    console.log(this.state);
  }
  render() {
    return (
        <>
      <div className="ui main addContentContainer">
        <h1>Add Contact</h1>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input type="text" 
            name="name" 
            placeholder="Enter Name..." 
            value={this.state.name}
            onChange={(e)=>this.setState({name:e.target.value})}/>
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email"
             name="email" 
             placeholder="email..." 
             value={this.state.email}
             onChange={(e)=>this.setState({email:e.target.value})}
             />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
      </>
    );
  }
}

export default AddContact;

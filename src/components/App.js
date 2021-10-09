import React,{useState,useEffect} from "react";
import {uuid} from 'uuidv4'
import Header from "./Header";
import "./App.css";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY="contacts"
 const [contacts,setContacts]=useState([])
 const removeContactList=(id)=>{
   const newContactList=contacts.filter((contact)=>{
     return contact.id !==id
   })
   setContacts(newContactList)
 }
 const addContactHandler=(contact)=>{
   setContacts([...contacts,{id:uuid(),...contact}])
 }
 useEffect(() => {
  const retriveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if(retriveContacts){
    setContacts(retriveContacts)
  }
}, [])
 useEffect(() => {
   localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
 }, [contacts])
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactList} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';

const AddUser = (props) => {

  const initialFormState = { 
    id: null, 
    name: '', 
    username: '' 
  };

  const [ user, setUser ] = useState(initialFormState)

  const handleChange = e => {
    const {name, value} = e.target;

    setUser({...user, [name]: value})
  }
  
  return (
    <form
      onSubmit={event=>{
        event.preventDefault()
        if(!user.name || !user.username) return
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Name</label>
      <input 
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <label>Surname</label>
      <input 
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
      />
      <button>Add new user</button>
    </form>
  )
}

export default AddUser;

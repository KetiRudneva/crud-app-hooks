import './App.css';
import React, { useState, Fragment } from 'react';
import UserTable from './Components/UserTable'
import AddUser from './Components/AddUser'

function App() {
  	// Data
	const usersData = [
		{ id: 1, name: 'Кети', username: 'Сванетти' },
		{ id: 2, name: 'Craig', username: 'List' },
		{ id: 3, name: 'Ben', username: 'Uncle' },
  ]

  // State
  const [ users, setUsers ] = useState(usersData)

  const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}


  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
        <Fragment>
          <h2>Edit user</h2>
        </Fragment>
        <Fragment>
          <h2>Add user</h2>
          <AddUser addUser={addUser} />
        </Fragment>
        </div>

      
      <div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} />
				</div>
      </div>
    </div>
    
  );
}

export default App;

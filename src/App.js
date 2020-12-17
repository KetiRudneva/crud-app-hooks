import './App.css';
import React, { useState } from 'react';
import UserTable from './Components/UserTable'

function App() {
  	// Data
	const usersData = [
		{ id: 1, name: 'Кети', username: 'Сванетти' },
		{ id: 2, name: 'Craig', username: 'List' },
		{ id: 3, name: 'Ben', username: 'Uncle' },
  ]

  const [ users, setUsers ] = useState(usersData)


  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} />
				</div>
    </div>
    
  );
}

export default App;

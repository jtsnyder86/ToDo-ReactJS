import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import axios from 'axios';
import ToDoList from './ToDoList'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  let [todoList, setTodoList] = useState ([]);
  const getTodo = () => {
    console.log('getting your to do list');

    axios.get('/api/todo')
      .then(response =>{
        console.log('response is,', response.data);
        setTodoList(response.data)
      }).catch(err => {
        console.log(err);
      })
  };

  useEffect( () => {
    getTodo()
  },[]);

  return (
    <><div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
    </div>
    <div>
      <ToDoList 
          key={todoList.id}
          list={todoList}/>
    </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

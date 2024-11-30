import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Card from './components/card/card'
import {posts} from "./data.js"
function App() {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState("")
  console.log(user)
  return (
    <div className='container'>
      {user? (
        <>
          <Navbar/>
          {posts.map((post)=>(
            <Card key = {post.id} post={post}/>

           ))}
          <Card/>
          <span className='username'>{user}</span>
        </>
      ):(
      <div className='login'>
        <input type='text' placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
        <button type='submit' onClick={()=>setUser(username)}>Login</button>
      </div>
      )}
    </div>
  )
}

export default App

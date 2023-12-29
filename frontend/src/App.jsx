import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';
function App() {
  const [jokes, setJokes] = useState([])


  useEffect(() => {
    axios.get('https://sample-tdqt.onrender.com/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => console.log(error))
  }, [])


  return (
    <>
      <h1>Chai aur Backend</h1>
      <h2>Total number of Jokes : {jokes.length}</h2>

      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>Joke Title : {joke.title}</h3>
            <h4>Joke Content : {joke.content}</h4>
          </div>
        ))
      }

    </>
  )
}

export default App

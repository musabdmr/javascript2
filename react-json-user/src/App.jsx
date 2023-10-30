import { useState, useEffect } from 'react'
import axios from "axios"

function App() {

  // States:
  const [users, setUsers] = useState([])


  // Functions: 
  const getUsers = () => {

    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((cevap) => {
        // handle success
        const geciciVeri = cevap.data
        setUsers([...users, ...geciciVeri])
        console.log('Kullanıcıların Adeti: ', geciciVeri.length)
      })
      .catch((error) => {
        // handle error
        console.log(error.message);
      })
      .finally(() => {
        // always executed
      });
    // .catch((error) => console.log('Bir hata oluştu: ', error))
  }


  return (
    <div
      style={{

        width: "500px",
        height: "500px",

        backgroundColor: 'dimgray',
        borderRadius: "8px"
      }}
    >
      <p>test</p>
      <button onClick={getUsers}>
        Verileri Getir 👍
      </button>

      <p>kullanıcıların adeti: {users.length}</p>

    </div>
  )
}

export default App

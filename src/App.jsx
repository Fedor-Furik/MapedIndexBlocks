import { useState } from "react"
import photos from "./photo.json"
import Card from "./Components/Card/Card"
import '/src/style/App.css'
function App() {
  const [arr, setArr] = useState(photos)

  function delCard(id){
    const copyArr = [...arr]
    const resultArr = copyArr.filter(item => item.id != id)
    setArr(resultArr)
  } 
  return <div>
    <div><button>Add 1 photo</button></div>
    {photos.map((item,index)=>(
      <Card object={item} delCard={delCard} key={index} />
    ))}
  </div>
}

export default App

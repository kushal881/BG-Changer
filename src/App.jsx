import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="duration-200"
      style={{ backgroundColor: color, width: "100%", height: "100vh" }}
    >
      <div className=""  style={{position:"fixed", display:"flex",flexWrap:"wrap",justifyContent:"center",bottom:"3em",padding:"0 0.5em 0 0.5em",marginLeft:"100px"}}>
        <div className=""
        style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"0.75rem",borderRadius:"1.5rem",padding:"0.5rem 0.75rem 0.5rem 0.75rem"}}>
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg mr-5"
            style={{ backgroundColor: "red", margin: "0 0 0 0" }}>Red</button>

          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg mr-5"
            style={{ backgroundColor: "green", margin: "0 5px 0 0" }}>Green</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg mr-5"
            style={{ backgroundColor: "blue", margin: "0 5px 0 0",color:"white"}}>Blue</button>
          <button onClick={() => setColor("olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg mr-5"
            style={{ backgroundColor: "olive", margin: "0 5px 0 0" }}>Olive</button>
          <button onClick={() => setColor("gray")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg mr-5"
            style={{ backgroundColor: "gray", margin: "0 5px 0 0" }}>Gray</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg mr-5"
            style={{ backgroundColor: "yellow", margin: "0 5px 0 0" }}>Yellow</button>
          <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg mr-5"
            style={{ backgroundColor: "pink", margin: "0 5px 0 0" }}>Pink</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg mr-5"
            style={{ backgroundColor: "purple", margin: "0 5px 0 0" }}>Purple</button>
          <button onClick={() => setColor("lavender")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg mr-5"
            style={{ backgroundColor: "lavender", margin: "0 5px 0 0" }}>Lavender</button>
          <button onClick={() => setColor("white")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg mr-5"
            style={{ backgroundColor: "white", margin: "0 5px 0 0" }}>White</button>
          <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg mr-5"
            style={{ backgroundColor: "orange", margin: "0 5px 0 0", color: "white" }}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App

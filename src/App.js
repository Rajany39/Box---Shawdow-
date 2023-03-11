import React, { useState } from 'react';
import './App.css';

function App() {
  const [hori,sethori]=useState(10)
  const [veri,setveri]=useState(10)
  const [blur,setblur]=useState(10)
  const [color,setcolor]=useState("black")
  const [checkon,setcheckon]=useState(false)
  return (
    <div className="App">
      <div className="controls">
        <label htmlFor="hori">Horizontal</label>
        <input type="range"  min="-200" max="200" value={hori}  onChange={(e)=>sethori(e.target.value)} />
        
        <label htmlFor="veri">Vertical</label>
        <input type="range"  min="-200" max="200" value={veri}  onChange={(e)=>setveri(e.target.value)} />
        
        <label htmlFor="blur">Blur</label>
        <input type="range"  min="-200" max="200" value={blur}  onChange={(e)=>setblur(e.target.value)} />

        <label htmlFor="color">Color</label>
        <input type="color"   value={color}  onChange={(e)=>setcolor(e.target.value)} />

        <div className="switch">
          <label >
            Outline
            <input type="checkbox" value={checkon} onChange={()=>{setcheckon(!checkon)}} />
            <span className="lever"></span>
            inset
          </label>
        </div>
        
      </div>

      <div className="output">
        <div className="box" style={{boxShadow:` ${checkon?"inset":""} ${hori}px ${veri}px ${blur}px  ${color} `}}>
        <p>
          boxShadow:{hori}px {veri}px {blur}px {color}
        </p>
        </div>
      </div>
      
    </div>
  );
}

export default App;

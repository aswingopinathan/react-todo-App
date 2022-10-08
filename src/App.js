import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([])
  // state is empty string initially
  const [toDo, setToDo] = useState('')
  const day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const days=new Date().getDay()
  
  function setToBlank(){
    setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
    setToDo('')
  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>To Do List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day[days]}🌝 ☕ </h2>
      </div>
      <div className="input">
        {/* new values are added as text and taken for displaying*/}
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        {/* click function is defined */}
        {toDo === '' ? null :<i onClick={setToBlank} className="fas fa-plus"></i>}
      </div>

      <div className="todos">
        {
          toDos.map((obj) => {
            return (
              <div className="todo">
                <div className="left">
                  <input onChange={(e) => {
                    console.log(e.target.checked);
                    console.log(obj);
                    setToDos(toDos.filter(obj2 => {
                      if (obj2.id === obj.id) {
                        obj2.status = e.target.checked
                      }
                      return obj2
                    }))
                  }} value={obj.status} type="checkbox" name="" id="" />
                  {obj.status ? <p style={{'text-decoration':'line-through'}}>{obj.text}</p>:<p style={{color:'blue'}}>{obj.text}</p>}
                </div>
                <div className="right">
                  <i onClick={()=>{
                    const removeArray = [...toDos].filter(toDo=>obj.id!==toDo.id)
                    setToDos(removeArray)
                  }} className="fas fa-times"></i>
                </div>
              </div>
            )
          })
        }

        {
          toDos.map((obj) => {
            if (obj.status) {
              return (<h1>{obj.text}</h1>)
            }
            return null;
          })
        }

      </div>

    </div>
  );
}

export default App;

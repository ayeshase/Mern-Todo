import './App.css';
import Todos from "./component/Todos";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <div className="App">
      <div className='container'>
        <h1>ToDo App</h1>
        <div className='top'>
          <input type='text' placeholder='Add Todos...' />
          <div className='add'>Add</div>
        </div>
        <div className='list'>
          <Todos />


        </div>
      </div>

    </div>
  );
}

export default App;


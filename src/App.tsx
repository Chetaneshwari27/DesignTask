import './App.css';
import ClassComponent from './components/ClassComponent';
import {data} from './utils/utils'
function App() {
  return (
    <div className="App">
      <ClassComponent title="Meet our founding team" employee={data}/>
    </div>
  );
}

export default App;

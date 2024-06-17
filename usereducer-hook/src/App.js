
import './App.css';
import { FetchExample } from './component/fetch';
import { Form } from './component/form';

function App() {
  return (
    <div className="App">
      <h1> useReducer </h1>
      {/* <FetchExample/> */}
      <Form/>
      <p> post data</p>
    </div>
  );
}

export default App;

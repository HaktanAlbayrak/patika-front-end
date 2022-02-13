import './App.css';
import { BoxList } from './container/BoxList';
import { Form } from './container/Form';
import { Header } from './container/Header';

function App() {
  return (
    <div className="App">
        <Header/>
        <Form/>
        <BoxList/>
    </div>
  );
}

export default App;

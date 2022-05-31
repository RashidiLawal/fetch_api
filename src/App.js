import { useState, useEffect } from "react";
import Form from "./Form";
import Table from "./Table";
import './index.css';

function App() {

const API_URL = 'https://jsonplaceholder.typicode.com/';
const [reqType, setReqType] = useState('users');
const [items, setItems] = useState([])


useEffect(() => {
   const fetchItems = async () => {
     try {
      const response = await fetch(`${API_URL}${reqType}`);
      if (!response.ok) throw Error('Did not receive expected data');
      const data = await response.json();
      setItems(data);
     }catch (err) {
      const errMgs = err.message
      console.log(errMgs)
   }
  }
   fetchItems();
}, [reqType])




 

  return (
    <header className="App">
     <Form reqType = {reqType} setReqType={setReqType}/>
     {/* <List items={items}/> */}
     <Table items={items}/>
    </header>
  );
}

export default App;

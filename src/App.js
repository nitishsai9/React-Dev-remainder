import './App.css';
import React,{useState} from 'react';
import data_users from './data';
import List from './list';
function App() {

  const [data,setData]=useState(data_users);
  const ClearAll=()=>{
    setData([]);

  };
  return (

    <main>
      <section className="container">
        <h3>Total Remainders by Dev {data.length}</h3>
        <List user_d={data} />
        <button onClick={ClearAll}>Clear</button>
      </section>
    </main>
  ); 
}

export default App;

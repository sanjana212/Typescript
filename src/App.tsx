import React from 'react';
import './App.css';
import Customer from './Components/Basics/Customer';
import Users from './Components/Basics/Users';
import FunctionalCompo from './Components/Basics/FunctionalCompo';
import ClassCompo from './Components/Basics/ClassCompo';
import Counter from './Components/Basics/Counter';
import MyProject from './Components/MyProject/MyProject';
import Todos from './Components/MyProject/Todos';
import Navbar from './Components/MyProject/Navbar';
import "./App.css";
function App() {

  return (

    <>
      {/* //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-6">
    //         <Customer name="sanjana" title="title"/>
    //       </div>
    //       <div className="col-md-6"></div>
    //       <Users userId={1} userName="makarand"/>
    //     </div>
    //     <div>
    //       <FunctionalCompo name="sanjana " age={25}/>
    //     </div>
    //     <div><ClassCompo name="sanjana" age={25}/></div>
    //     <div>
       
    //     </div>
    //   </div> */}
      {/* <Counter /> */}
      <div className="content">
      <h1 style={{borderBottom:'10px'}}>TODO REACT + TYPESCRIPT</h1>
        <main>
          <Navbar />
          <MyProject />
          <Todos />
        </main>
      </div>
    </>

  );
}

export default App;

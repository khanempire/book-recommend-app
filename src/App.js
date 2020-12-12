import react,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [showCategory1, setShowCategory1] = useState(false);
  const [showCategory2, setShowCategory2] = useState(false);
  const [showCategory3, setShowCategory3] = useState(false);
 
   const handleClick1 = () =>{
       setShowCategory1(true);
       setShowCategory2(false);
       setShowCategory3(false);
   }

   const handleClick2 = () =>{
    setShowCategory2(true);
    setShowCategory1(false);
    setShowCategory3(false);
  }

  const handleClick3 = (event) =>{
    setShowCategory3(true);
    setShowCategory1(false);
    setShowCategory2(false);
   // event.button.backgroundColor("green");

 /*  const value=event.target.attributeStyleMap;
   value.backgroundColor="green"
   console.log(event.target.attributeStyleMap);*/
  }

  const book1_category=["Eloquent javascript","HTML & CSS, and JavaScript & JQuery by Jon Duckett","You Don’t Know JS by Kyle Simpson","Don’t Make Me Think by Steve Krug","A beginner’s guide to HTML, CSS, Javascript, and Web Graphics, By Jennifer Niederst Robbins"];
  const book2_category=["The Art of Computer Programming by Donald Knuth","Agile Software Development: Principles, Patterns, and Practices by Robert"," Introduction to Algorithms by CLRS"," Introduction to Algorithms by Gayle","The Pragmatic Programmer"];
  const book3_category=[" Introduction to Machine Learning with Python: A Guide for Data Scientists"," Head First Statistics: A Brain-Friendly Guide","Introduction to Deep learning", "Introduction to Probability"," Python for data analysis"];

  const styles={
    backgroundColor:"green",
    color:"white"
  };
//style={showCategory3 ? {backgroundColor:"green"}:""}
  return (
    <div className="App">
      <h1>Find your best books</h1>
      <h4>Select the books category that you want to know</h4>
      <button className="btn btn1" onClick={handleClick1}>Web-development</button>
      <button className="btn btn2" onClick={handleClick2}>Software development</button>
      <button className="btn btn3" onClick={handleClick3} >Data Science</button>
      {showCategory1 ?
        book1_category.map((book)=>{
          return <div key={book} className="show1">{book}</div> 
        }) : ""
      }
      {showCategory2 ?
        book2_category.map((book)=>{
          return <div key={book} className="show2">{book}</div> 
        }) : ""
      }
      {showCategory3 ?
        book3_category.map((book)=>{
          return <div key={book} className="show3">{book}</div> 
        }) : ""
      }
    </div>
  );
}

export default App;

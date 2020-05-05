import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import FetchPost from './Components/FetchPost'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
/* useEffect example */
/* useEffect(() => {
  setTime(effecttime * 2)
  
  return () => {
  }
}, [effecttime, console.log('effect time track', effecttime)])
 */
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [limit, setLimit] = useState(1);
  const [collection, setCollection] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setIsLoaded(true);
         setItems(result);
        },
      )

  }, [])

  const addPost = () => {
    setLimit(limit + 1);
    const collections = items.filter(item=> item.id <= limit)
    setCollection(collections);
  }
   
    return (
       <div> 
         <button onClick={()=>{addPost()}}>Click me to add one more post</button>
        <ul>
          {collection && collection.map(item => 
          <div>
          <p key={item.id}>
          <b>Title: </b>   {item.title}
          </p>
          <li>
            {item.body}
          </li></div>
          )}
          <hr/>
        </ul>
        
        </div>
    )
  
}

export default App;

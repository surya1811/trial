import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import Details from "./Details";

const HOW_ARE=
  `
  {
    user(login : "surya1811") 
    {
      repositories(first: 10)
       {
        nodes 
        {
          name
          url
          id
          description
        }
        pageInfo 
        {
          hasNextPage
        }
      } 
    }
  
}`
 export default function Githubs() 
 {
const [repos,setRepos]=useState([]);
const [toget,setToget]=useState([]);
const [loaded, setLoaded] = useState(false);


// const [showrepos, setShowrepos] = useState([]);
// const [start, setStart] = useState(0);
 useEffect(()=>
  {
    fetch('https://api.github.com/graphql',
    {
      method: "POST",
      headers: { 
        'Authorization': 'Bearer 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', 
         'Content-Type': 'application/json'
      },
      body:JSON.stringify({query : HOW_ARE })
    }).then((response)=>response.json())
    .then((data) => {
      setRepos(data);
      //if else condition
      // setShowrepos(data.slice(0,5));
      setToget(data.data.user.repositories.nodes.map(itemx =>{
        return(
        <Details
        contact={itemx}
          key={itemx.id}
         />
        );
        }));
      setLoaded(true);
    })
    
  },[]);
 console.log(repos)

//  function add5(){
//    //if else condition
//  start = start + 5;
//    setShowrepos(repos.slice(start, start+5));
//  }

// same as previous which uses minus5
  
  return (
   <div>

     <h1>how are you</h1>
     
     <ul>
     {loaded && repos && repos.data.user.repositories.nodes.map(item =>(
      <div>
      
      <li key={item.id}> {item.name}
      <button> <a href={item.url} target="_blank" >click here</a></button>
      
      
          
            
          {/* <Link to='/details'
          state= {{
            message : 'hello',
          }}
          /> */}
          <Link to={{
            pathname:'/details',
            state:{
              name: item.name,
              id: item.id,
              url : item.url,
              desc: item.description
            }
          }}>
              <button>
             Details
             </button>
          </Link>
      
      
       </li>
     </div>
     ))}
   
      </ul>
     
   
      
      
        </div>
   
       );
 }

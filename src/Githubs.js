import { useState, useEffect } from "react";
import { graphql, usePreloadedQuery, loadQuery/* ... */ } from "react-relay";
const mytrail=`graphql
  
  query 
  {
    user(login : "surya1811") 
    {
      repositories(first: 5)
       {
        nodes 
        {
          name
          url
          id
        }
        pageInfo 
        {
          hasNextPage
        }
      }
      avatarUrl
      email
    }
  }
  
`;
const artistsQueryReference = loadQuery(
 name,
 url,
 id
);

function Githubs() 
{
  

    return (
      <Careosgit/>
     
    );
  }
  function Careosgit()
  {
    const data = usePreloadedQuery(mytrail, artistsQueryReference);
    return (
      <>
       {data?.mytrial?.name}
        {data?.mytrail.url}
      </>
    );
  }
  export default Githubs;
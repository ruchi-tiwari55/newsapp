
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

import { useState } from 'react';
import axios from 'axios'

function BasicExample() 
  {
       const [data,setData]=useState([])

         const getNews =()=>{
           axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=97e2b53e663c49a6b78cf2fc589bf6fa')
           .then((response)=>{
             setData(response.data.articles)
          })
    
        }
  return (
    <>
    <div className='container'>
    <button className='btn btn-primary' onClick={getNews}>International News</button>
    <div className='container'>
      <div className='row'>
        { 
            data.map((value)=>{
              return(
              <div className='col'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={value.urlToImage} />
                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>{value.description}</Card.Text>
                  <Button variant="primary">Main News</Button>
                </Card.Body>
              </Card>
              
              </div>
              )
            })
      
  }
   
    
    </div>
    </div>
    </div>
    </>
  );
}

export default BasicExample;

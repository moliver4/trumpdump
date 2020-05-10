import React, { useState } from 'react';
import ArticlesContainer from './ArticlesContainer.js'
require('dotenv').config()

const MainContainer = (props) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    console.log('hello',API_KEY)
    const [ articles, setArticles ] = useState([])
    
    // console.log(props)
    const { name, clickFunction, data } = props


    const getNews= () => { 
      fetch(`https://newsapi.org/v2/top-headlines?country=us&q=trump&apiKey=${API_KEY}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
          }
        })
      .then(res => res.json())
      .then(data => {
        // let artIndex = Math.floor(Math.random() * Math.floor(data.articles.length))
        setArticles(data.articles)
      })

    }
  
  
    return (
      <div className='MainContainer'>

        { articles.length > 0? <ArticlesContainer articlesList={articles}/> : null }
        <br></br>
        <button onClick={getNews}>Click Me </button> 
        <br></br>
        <button onClick= {clickFunction}> Secret</button>
      </div>
  
    );
  }
  
  export default MainContainer;
  
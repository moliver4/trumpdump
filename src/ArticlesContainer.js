import React from 'react';
import ArticleCard from './ArticleCard.js'


const ArticlesContainer = ( props ) => {
    
    const showArticles = () => {
      let example =  props.articlesList.map( (article, index) => {

        return <ArticleCard article={article.title} key={index}/>
      })
      

      return example
    }

    return (
      <div className='ArticlesContainer'>
        {showArticles()}
        <div> I am in the article Container</div>
      </div>
  
    );
  }
  
  export default ArticlesContainer;
  
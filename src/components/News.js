import React, { Component } from 'react';

import { Link } from "react-router-dom";



const News = props => (

    <div className="container">
        <div>{props.categoryTitle.length > 0 ? props.categoryTitle : ''}</div>
        <div className="row">
            
            {props.news.map((oneNews) =>{
                console.log(oneNews)
                return (
                    <div className="col-md-4" style={{marginBottom:"2rem"}}>
                        <div className="news__box">
                            <div key= {oneNews.author}>
                              <div className="news__text">
                                    <h5> 
                                        {oneNews.title.length < 20 ? `${oneNews.title}` : `${oneNews.title.substring(0,25)}...`} 
                                    </h5>
                                </div>
                                <img className="news__box-img" src={oneNews.urlToImage} alt={oneNews.title}/>
  
                                <button className="news_buttons">
                                    <Link to={{ 
                                        pathname:`/singleNews/${oneNews.source.id}`,
                                        state:{ oneNews: oneNews.title }
                                        }}>View Details</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}            
        </div>
    </div>

);

export default News;
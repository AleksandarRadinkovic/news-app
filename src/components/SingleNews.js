import React from 'react';

import {Link} from "react-router-dom";

const API_KEY = "05ff3be9461748178139f3d0801dd63e";

class SingleNews extends React.Component {
    state = {
        activeNews: []
    }
    componentDidMount = async () => {

        const title = this.props.location.state.oneNews;
        const req = await fetch(`https://newsapi.org/v2/top-headlines?country=us&q=${title}&apiKey=${API_KEY}`);
        const res = await req.json();
        this.setState({ activeNews: res.articles[0]})
        console.log(this.state.activeNews);
    }

    render(){
        const container = this.state.activeNews;
        console.log(this.props);
        return (
            <div className="container">
                
                {this.state.activeNews.length !== 0 &&
                <div className="active-news">
                    <h3 className="active-news__title">{ container.title }</h3>
                    <img className="active-news__img" src={ container.urlToImage } alt={ container.title }/>
                    <h4 className="active-news__publisher">Author name:
                        { container.author } 
                    </h4>
                    <p>Content: { container.content }</p>
                    <Link to="/" className="active-news__button">Go Back</Link>
                </div>
                }
            </div>
        )
    }
};

export default SingleNews;
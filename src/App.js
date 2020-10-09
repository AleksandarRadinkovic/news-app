import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import News from "./components/News";

const API_KEY = "05ff3be9461748178139f3d0801dd63e";


class App extends Component {
  state = {
    news: []
  }
  getNews = async (e) => {
    const newsName = e.target.elements.newsName.value;
    e.preventDefault();
    const api_call = await fetch(`https://newsapi.org/v2/top-headlines?country=us&q=${newsName}&apiKey=${API_KEY}`);
    const data = await api_call.json();
    this.setState({news: data.articles});
    console.log(this.state.news);
  }
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News</h1>
        </header>

        <Form getNews= {this.getNews} />
        <News news={this.state.news}/>

      </div>
    );
  }
}

export default App;
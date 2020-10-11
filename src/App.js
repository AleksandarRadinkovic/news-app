import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import News from "./components/News";

const API_KEY = "05ff3be9461748178139f3d0801dd63e";


class App extends Component {
  state = {
    loading: true,
    allNews: [],
    news: [],
    category: '',
    country: 'US',
    newsName: ''    
  }

  async componentDidMount() {
    this.handleFetchData();
    console.log(this.state.allNews);
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.category !== this.state.category || prevState.country !== this.state.country){
      this.handleFetchData();
    }
  }

  handleQueryChange = (query) => {
    this.setState({
      ...this.state,
      newsName: query
    });
  }

  handleSearchedNews = (e) => {
    e.preventDefault()
    this.setState({
      ...this.state,
      category: ''
    })
    this.handleFetchData();
  }
  

  handleFetchData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=${API_KEY}`
    if (this.state.category.length !== 0) {url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=${API_KEY}`}
    if(this.state.newsName.length !== 0) {url=`https://newsapi.org/v2/top-headlines?country=${this.state.country}&q=${this.state.newsName}&apiKey=${API_KEY}`}
    const api_call = await fetch(url);
    const data = await api_call.json();
    this.setState({
      ...this.state,
      allNews: data.articles
    });
  }

  handleCategoryChange = (category) => {
    this.setState({
      ...this.state,
      newsName: '',
      category
    })
  }
  handleCountryChange = (country) => {
    this.setState({
      ...this.state,
      country
    })
    console.log(this.state.country)
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News</h1>
        </header>
        <Form getSearchedNews={this.handleSearchedNews} getNews= {this.getNews} categoryChange={this.handleCategoryChange} countryChange={this.handleCountryChange} queryChange={this.handleQueryChange}/>
        <News categoryTitle={this.state.category} news={this.state.allNews}/>
      </div>
    ); 
  }
}

export default App;
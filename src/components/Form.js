import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props)
    this.state={
      categoryValue: '',
      countryValue: 'US',
      queryValue: ''
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.categoryValue !== this.state.categoryValue) {
      this.props.categoryChange(this.state.categoryValue)
    }
    if(prevState.countryValue !== this.state.countryValue) {
      this.props.countryChange(this.state.countryValue);
    }
    if(prevState.queryValue !== this.state.queryValue){
      this.props.queryChange(this.state.queryValue)
    }
  }

  handleCategoryChange = (e) => {
    this.setState({
      ...this.state,
      queryValue: '',
      categoryValue: e.target.value
    })
  }

  handleCountryChange = (e) => {
    this.setState({
      ...this.state,
      countryValue: e.target.value
    })
  }

  handleQueryChange = (e) => {
    this.setState({
      ...this.state,
      queryValue: e.target.value
    })
  }
  


    render() {
    return (
      <form onSubmit= {this.props.getSearchedNews} style={{ marginBottom:"2rem",marginTop:"3rem"}}>

    <input onChange={this.handleQueryChange} value={this.state.queryValue} className="form__input" type="text"name="newsName" placeholder="Type..."/>

    <button className="form__button">Search</button>

    <select value={this.state.categoryValue} onChange={this.handleCategoryChange} class="form-control form-select1"  name="category">
      <p>Choose</p>
      <option >General</option>
      <option >Sports</option>
      <option >Business</option>
      <option>Health</option>
      <option>Science</option>
    </select>
    <select value={this.state.countryValue} onChange={this.handleCountryChange} class="form-control form-select2"  name="country">
      <option>US</option>
      <option>GB</option>
    </select> 

  </form>
    );
  }
}

export default Form;
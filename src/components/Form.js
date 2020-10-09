import React from 'react';

const Form = props => (

  <form onSubmit= {props.getNews} style={{ marginBottom:"2rem",marginTop:"3rem"}}>

    <input className="form__input" type="text"name="newsName"/>

    <button className="form__button">Search</button>

    {/* <select class="form-control" id="exampleFormControlSelect1" name="category">
      <option>general</option>
      <option>sports</option>
      <option>business</option>
      <option>health</option>
      <option>science</option>
    </select>
    <select class="form-control" id="exampleFormControlSelect1" name="country">
      <option>US</option>
      <option>GB</option>
    </select> */}

  </form>
);

export default Form;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { addCar } from '../actions';

class CarsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group"> <label>{field.label}</label>
        <input className="form-control" type={field.type} {...field.input}/>
      </div>
    )
  }

  render() {
    return (
      <form>
        <Field label="Title" name="title" type="text" component={this.renderField} />
        <button type="submit">Create Post</button>
      </form>
    )
  }


}

export default reduxForm({ form: 'newCarForm' })(connect(null, { addCar })(CarsNew));

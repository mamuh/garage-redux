import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { addCar } from '../actions';
import { Link } from 'react-router-dom';

class CarsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type={field.type} {...field.input}/>
      </div>
    )
  }

  onSubmit = (values) => {
    this.props.addCar("gaudin", values, (car) => {
      this.props.history.push('/');
      return car;
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>

        <Field
          className="form-control"
          label="brand"
          name="brand"
          type="text"
          component={this.renderField}
        />

        <Field
          className="form-control"
          label="model"
          name="model"
          type="text"
          component={this.renderField}
        />

        <Field
          className="form-control"
          label="owner"
          name="owner"
          type="text"
          component={this.renderField}
        />

        <Field
          className="form-control"
          label="plate"
          name="plate"
          type="text"
          component={this.renderField}
        />
        <button className="btn btn-primary" type="submit">
            Add new car
          </button>
        </form>
        <Link to="/">
          Back
        </Link>
      </div>
    )
  }


}


export default reduxForm({ form: 'newCarForm' })(connect(null, { addCar })(CarsNew));

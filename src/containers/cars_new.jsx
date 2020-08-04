import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { addCar } from '../actions';
import { Link } from 'react-router-dom';
import SideBar from '../components/sidebar';

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
      <div className="container d-flex justify-content-between">
        <SideBar />
        <div id="form">
        <form className="form-group" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <h3>Add new car</h3>

          <Field
            className="form-control"
            label="Brand"
            name="brand"
            type="text"
            component={this.renderField}
          />

          <Field
            className="form-control"
            label="Model"
            name="model"
            type="text"
            component={this.renderField}
          />

          <Field
            className="form-control"
            label="Owner"
            name="owner"
            type="text"
            component={this.renderField}
          />

          <Field
            className="form-control"
            label="Plate"
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
      </div>
    )
  }


}


export default reduxForm({ form: 'newCarForm' })(connect(null, { addCar })(CarsNew));

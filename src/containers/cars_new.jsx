import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { addCar } from '../actions';

const CarsNew = () => {

    return (
      <div>
       <form>
         <input type="text" name="brand" />
       </form>
      </div>
    )

}

export default reduxForm({ form: 'newCarForm' })( connect(null, { addCar })(CarsNew));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions';

class CarsIndex extends Component {

  componentWillMount() {
    this.props.fetchCars("gaudin");
  }

  renderCars = (car) => {
    return (
      <li key={car.id}>
        {car.brand} {car.model}
      </li>
    )
  }

  render() {
    const {cars} = this.props;
    return (
      <div className="cars-index">
        <ul>
          {cars.map(this.renderCars)}
         </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    cars: state.cars
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
  { fetchCars: fetchCars },
  dispatch
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);

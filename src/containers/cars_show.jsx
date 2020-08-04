import React, { Component } from 'react';
import { fetchCar } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CarsShow extends Component {
  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id)
    }
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>
    }
    const {car} = this.props
    return (
      <div className="cars-index">
        {this.props.car.brand}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl  = parseInt(ownProps.match.params.id, 10); //from url
  const car = state.cars.find(car => car.id === idFromUrl);
  return {
    cars: state.cars,
    car: car
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
  { fetchCar: fetchCar },
  dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);

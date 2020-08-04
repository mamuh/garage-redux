import React, { Component } from 'react';
import { fetchCar, deleteCar } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CarsShow extends Component {
  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id)
    }
  }

  handleClick = () => {
    this.props.deleteCar(this.props.history, this.props.car)
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>
    }
    const {car} = this.props
    return (
      <div className="cars-index">
        <div className="card-product" key={car.id}>
          <img src="https://i.pinimg.com/originals/bb/e9/0e/bbe90e4b183a7c06b6941053c8f63c18.jpg" />
          <div className="card-product-infos">
            <h3>{car.brand} {car.model}</h3>
            <p><b>Owner:</b> {car.owner}</p>
            <p id="plate">{car.plate}</p>
            <button onClick={this.handleClick}>Delete</button>
          </div>
        </div>
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
  {
    fetchCar: fetchCar,
    deleteCar: deleteCar
  },
  dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);

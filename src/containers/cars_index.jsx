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
      <li className="card-product" key={car.id}>
        <img src="https://i.pinimg.com/originals/bb/e9/0e/bbe90e4b183a7c06b6941053c8f63c18.jpg" />
        <div class="card-product-infos">
          <h2>{car.brand} {car.model}</h2>
          <p><b>Owner:</b> {car.owner}</p>
        </div>
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

import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  selectedCityId: state.selectedCityId,
  cities: state.cities
});

const mapDispatchToProps = (dispatch) => ({
  onCitySelect: (cityId, cityTitle) => {
    dispatch(ActionCreator.changeCity(cityId));
    dispatch(ActionCreator.getOffers(cityTitle));
  }
});

class CitiesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {selectedCityId, cities} = this.props;

    return (
      <div className="cities tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => (
              <li className="locations__item" key={city.id}>
                <a className={selectedCityId === city.id ?
                  `locations__item-link tabs__item tabs__item--active` :
                  `locations__item-link tabs__item`}
                href="#"
                onClick={() => this.props.onCitySelect(city.id, city.title)}>
                  <span>{city.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  selectedCityId: PropTypes.number.isRequired,
  onCitySelect: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

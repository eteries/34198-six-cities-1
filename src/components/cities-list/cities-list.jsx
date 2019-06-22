import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';

export class CitiesList extends React.Component {
  _handleClick(id, title) {
    const {onItemSelect, onCitySelect} = this.props;

    onCitySelect(title);

    if (typeof onItemSelect === `function`) {
      onItemSelect(id);
    }
  }

  render() {
    const {selectedId, cities} = this.props;

    return (
      <div className="cities tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => (
              <li className="locations__item" key={city.id}>
                <a className={selectedId === city.id ?
                  `locations__item-link tabs__item tabs__item--active` :
                  `locations__item-link tabs__item`}
                href="#"
                onClick={() => this._handleClick(city.id, city.title)}>
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
  selectedId: PropTypes.number,
  onCitySelect: PropTypes.func.isRequired,
  onItemSelect: PropTypes.func
};

const mapStateToProps = (state) => ({
  cities: state.cities
});

const mapDispatchToProps = (dispatch) => ({
  onCitySelect: (cityTitle) => {
    dispatch(ActionCreator.getOffers(cityTitle));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);

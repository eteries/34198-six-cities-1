import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import {connect} from 'react-redux';

import {MapDefaultConfig as Config} from './map-default-config';
import PropTypes from 'prop-types';

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: state.offers
});

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.map = null;
    this.city = [52.38333, 4.9];
  }

  init() {
    this.map = leaflet.map(`map`, Object.assign({center: this.city}, Config.OPTIONS));
    this.map.setView(this.city, Config.OPTIONS.zoom);

    leaflet
      .tileLayer(Config.SOURCE_URL, Config.SOURCE_OPTIONS)
      .addTo(this.map);
  }

  addMarkers() {
    this.markers.forEach((offerCords) => {
      leaflet
        .marker(offerCords, {icon: leaflet.icon(Config.ICON)})
        .addTo(this.map);
    });
  }

  get markers() {
    return this.props.offers.reduce((acc, offer) => {
      acc.push(offer.coords);
      return acc;
    }, []);
  }

  componentDidMount() {
    this.init();
    this.addMarkers();
  }

  componentWillUnmount() {
    this.map = null;
  }

  render() {
    return <section className="cities__map map" id="map" />;
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        isPremium: PropTypes.bool,
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number,
        coords: PropTypes.arrayOf(PropTypes.number)
      })).isRequired,
};

export default connect(mapStateToProps)(Map);


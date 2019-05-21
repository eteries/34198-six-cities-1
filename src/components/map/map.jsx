import React, {PureComponent} from 'react';
import leaflet from 'leaflet';

import {MapDefaultConfig as Config} from './map-default-config';

export class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.map = null;
    this.city = [52.38333, 4.9];
    this.markers = [
      [52.3709553943508, 4.89309666406198]
    ];
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


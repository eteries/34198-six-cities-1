export const MapDefaultConfig = {
  SOURCE_URL: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  SOURCE_OPTIONS: {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
  },
  ICON: {
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  },
  ZOOM_CONTROL: false,
  SHOW_MARKER: true,
  OPTIONS: {
    center: [0, 0],
    zoomControl: false,
    marker: true,
    zoom: 12
  }
};

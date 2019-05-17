import React, { FC, useState, useEffect } from 'react';
import ReactMapGL, {
  NavigationControl,
  ViewState,
  GeolocateControl,
} from 'react-map-gl';

import { WindowSizeState } from '../models';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN || '';
const viewportState: ViewState = {
  latitude: 37.776021,
  longitude: -122.4171949,
  zoom: 14,
};
const windowSizeState: WindowSizeState = {
  width: window.outerWidth,
  height: window.outerHeight,
};

const Map: FC = () => {
  const [windowSize, setWindowSize] = useState(windowSizeState);
  const [viewport, setViewport] = useState(viewportState);
  const setResizeState = (): void =>
    setWindowSize({ height: window.innerHeight, width: window.innerWidth });
  const followResize = (): void =>
    window.addEventListener<'resize'>('resize', setResizeState);
  const unfollowResize = (): void =>
    window.removeEventListener<'resize'>('resize', setResizeState);
  const updateViewport = (viewport: ViewState): void => setViewport(viewport);

  useEffect(() => {
    followResize();

    return unfollowResize();
  });

  return (
    <ReactMapGL
      {...windowSize}
      {...viewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      onViewportChange={updateViewport}
      style={{
        position: 'absolute',
        right: 0,
        bottom: 0,
        zIndex: -1,
      }}
    >
      <GeolocateControl
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        showUserLocation={true}
        onViewportChange={updateViewport}
      />
      <div style={{ position: 'absolute', right: 30, bottom: 30 }}>
        <NavigationControl onViewportChange={updateViewport} />
      </div>
    </ReactMapGL>
  );
};

export default Map;

import React, { Component } from 'react';
import ReactMapGL, { NavigationControl, ViewState } from 'react-map-gl';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN || '';

interface State {
  viewport: ViewState;
  height: number;
  width: number;
}

const initialState: State = {
  viewport: {
    latitude: 37.776021,
    longitude: -122.4171949,
    zoom: 14,
  },
  height: 400,
  width: 400,
};

export default class Map extends Component<{}, State> {
  public state: State = initialState;

  public componentDidMount(): void {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  public componentWillUnmount(): void {
    window.removeEventListener('resize', this.resize);
  }

  public updateViewport = (viewport: ViewState) => {
    this.setState(prevState => ({
      viewport: { ...prevState.viewport, ...viewport },
    }));
  };

  public resize = () => {
    this.setState(prevState => ({
      ...prevState,
      height: window.innerHeight,
      width: window.innerWidth,
    }));
  };

  public render(): any {
    return (
      <ReactMapGL
        {...this.state}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={(v: ViewState) => this.updateViewport(v)}
      >
        <div style={{ position: 'absolute', right: 30, bottom: 30 }}>
          <NavigationControl onViewportChange={this.updateViewport} />
        </div>
      </ReactMapGL>
    );
  }
}

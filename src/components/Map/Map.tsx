import { ViewStateProps } from "@deck.gl/core/lib/deck";
import DeckGL, { FlyToInterpolator } from "deck.gl";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import StaticMap from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Arc, useStore } from "@/stores";
import { Drawer, Form } from "@/components";
import "./Map.scss";

const INITIAL_VIEW_STATE = {
  longitude: 0,
  latitude: 0,
  zoom: 1,
  pitch: 0,
  bearing: 0,
};

export const Map = observer(function Map() {
  const store = useStore();
  const [viewState, setViewState] =
    useState<ViewStateProps>(INITIAL_VIEW_STATE);

  useEffect(() => {
    document
      .getElementById("deckgl-wrapper")
      ?.addEventListener("contextmenu", (e) => e.preventDefault());
  }, []);

  useEffect(() => {
    const viewStateProps = store.viewStateProps;
    if (viewStateProps) {
      setViewState({
        ...viewStateProps,
        transitionInterpolator: new FlyToInterpolator(),
        transitionDuration: 500,
      });
    }
  }, [store.viewStateProps]);

  const handleViewStateChange = (event: any) => setViewState(event.viewState);
  return (
    <main className="Map" id="Map">
      <section className="Map-content">
        <Form />
        <DeckGL
          viewState={viewState || INITIAL_VIEW_STATE}
          onViewStateChange={handleViewStateChange}
          layers={store.arcsLayer}
          controller={true}
          getTooltip={({ object }) => {
            if (object) {
              const arc = object as unknown as Arc;
              return { text: `${arc.from.name} to ${arc.to.name}` };
            }
            return null;
          }}
        >
          <StaticMap
            style={{ width: "100%", height: "100%" }}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN || ""}
          />
        </DeckGL>
      </section>
      <Drawer />
    </main>
  );
});

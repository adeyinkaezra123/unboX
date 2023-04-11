// @ts-ignore
import mapbox from "mapbox-gl/dist/mapbox-gl";
import * as mapboxSdk from "@mapbox/mapbox-sdk";
import geocoding from "@mapbox/mapbox-sdk/services/geocoding";

const accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

mapbox.accessToken = accessToken as string;
const { default: mapWorkerClass } = import(
  "mapbox-gl/dist/mapbox-gl-csp-worker"
);
mapbox.workerClass = mapWorkerClass;

export { mapbox, mapboxSdk, geocoding };

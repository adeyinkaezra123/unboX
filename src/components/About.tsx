import { observer } from "mobx-react";
import React from "react";
import { useStore } from "../stores/store.context";

export const About = observer(function About() {
  const store = useStore();

  return (
    <section className={`content ${store.uiStore.isMobile ? "pb-2" : "p-2"}`}>
      <h3>About Parcel Tracker</h3>
      <p>
        This tool is built for people who like to keep track of their online
        purchases or shipments across major couriers all in one app.
      </p>
      <p>
        It can be frustrating not knowing the whereabouts of a package or when
        it will arrive, especially if it's a time-sensitive delivery.
      </p>
      <p>
        For the technical details and to peak into the code, checkout the For
        technical details and insight into the development approach, checkout
        the <a href="https://githuib.com/adeyinkaezra123">Github Repo.</a>
      </p>
      <p>
        If you find any bugs or have a way to improve this, feel free to raise
        an issue or make a PR
      </p>
    </section>
  );
});

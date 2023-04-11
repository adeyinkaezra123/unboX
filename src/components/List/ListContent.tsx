import { observer } from "mobx-react";
import React from "react";
import { useStore } from "@/stores";
import { About, List } from "@/components";

const Examples = () => {
  return (
    <ul>
      <li>
        <b>{"YYC -> YYZ -> YYC:"}</b> 4337360760364248
      </li>
      <li>
        <b>Two stops:</b> 4010765063638021
      </li>
    </ul>
  );
};

export const ListContent = observer(function ListContent() {
  const store = useStore();
  return store.parcelData.length > 0 ? (
    <List />
  ) : (
    <>
      <About />
      {process.env.NODE_ENV === "development" && <Examples />}
    </>
  );
});

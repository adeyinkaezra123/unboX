import { observer } from "mobx-react";
import { Footer, ListContent } from "@/components";
import React from 'react'
import "./Sidebar.scss";

export const Sidebar = observer(function Sidebar() {
  return (
    <aside className="Sidebar is-hidden-mobile">
      <header className="Sidebar-header has-background-light">
        <h2 className="title is-4">📦 unboX</h2>
      </header>
      <section className="Sidebar-content py-4 mb-0">
        <div className="has-text-left px-3 mt-2">
          <ListContent />
        </div>
      </section>
    </aside>
  );
});

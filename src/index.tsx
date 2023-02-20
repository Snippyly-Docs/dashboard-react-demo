import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { SnippylyProvider, SnippylyCursor, SnippylyHuddle } from '@snippyly/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <React.StrictMode>

    {/**
     * Snippyly Code Example
     * Code initialization for Huddle and Cursor features.
     * Feature: Huddle -- Step #1
     * Feature: Live Cursors
     */}
    <SnippylyProvider apiKey="WDMgKshFEsPTqvBjUcH3">
      <SnippylyHuddle />
      <SnippylyCursor />
      <App />
    </SnippylyProvider>

  </React.StrictMode>
);
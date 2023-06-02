import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { VeltProvider, VeltCursor, VeltHuddle } from '@veltdev/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <>
    {/**
     * Velt Code Example
     * Code initialization for Huddle and Cursor features.
     * Feature: Huddle -- Step #1
     * Feature: Live Cursors
     */}
    <VeltProvider apiKey="WDMgKshFEsPTqvBjUcH3">
      <VeltHuddle />
      <VeltCursor />
      <App />
    </VeltProvider>
  </>
);
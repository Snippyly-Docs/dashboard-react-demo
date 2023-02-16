import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { SnippylyProvider, SnippylyCursor, SnippylyHuddle } from '@snippyly/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <React.StrictMode>
    <SnippylyProvider apiKey="WDMgKshFEsPTqvBjUcH3">
      <SnippylyHuddle />
      <SnippylyCursor />
      <App />
    </SnippylyProvider>
  </React.StrictMode>
);
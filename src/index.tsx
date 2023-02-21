import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { 
  SnippylyProvider, 
  SnippylyCursor, 
  SnippylyHuddle,
  SnippylyRecorderControlPanel,
  SnippylyRecorderNotes,
  SnippylyTags,
  SnippylyComments,
  SnippylyCommentsSidebar
} from '@snippyly/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <>
    {/**
     * Snippyly Code Example
     * Initialize features at the root.
     * Feature: Huddle -- Step #1
     * Feature: Recorder -- Step #1
     * Feature: Tags -- Step #1
     * Feature: Comments -- Step #1
     * Feature: Comments Sidebar -- Step #1
     * Feature: Live Cursors
     */}
    <SnippylyProvider apiKey="WDMgKshFEsPTqvBjUcH3">
      <SnippylyHuddle />
      <SnippylyRecorderControlPanel />
      <SnippylyRecorderNotes />
      <SnippylyTags />
      <SnippylyComments />
      <SnippylyCommentsSidebar />
      <SnippylyCursor />
      <App />
    </SnippylyProvider>
  </>
);
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { 
  VeltProvider, 
  VeltCursor, 
  VeltHuddle,
  VeltRecorderControlPanel,
  VeltRecorderNotes,
  VeltTags,
  VeltComments,
  VeltCommentsSidebar
} from '@veltdev/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <>
    {/**
     * Velt Code Example
     * Initialize features at the root.
     * Feature: Huddle -- Step #1
     * Feature: Recorder -- Step #1
     * Feature: Tags -- Step #1
     * Feature: Comments -- Step #1
     * Feature: Comments Sidebar -- Step #1
     * Feature: Live Cursors
     */}
    <VeltProvider apiKey="WDMgKshFEsPTqvBjUcH3">
      <VeltHuddle />
      <VeltRecorderControlPanel />
      <VeltRecorderNotes />
      <VeltTags />
      <VeltComments />
      <VeltCommentsSidebar />
      <VeltCursor />
      <App />
    </VeltProvider>
  </>
);
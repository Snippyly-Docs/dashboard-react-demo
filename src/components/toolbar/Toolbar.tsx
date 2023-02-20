import styles from './Toolbar.module.css';

import { SnippylyPresence, SnippylyHuddleTool, SnippylyCommentTool, SnippylyRecorderTool, SnippylyTagTool, SnippylySidebarButton } from '@snippyly/react';

const Toolbar = () => {
  return (
    <div className={styles['toolbar']}>
      {/**
       * Snippyly Code Example
       * Feature: Huddle -- Step #2
       * Feature: Recorder -- Step #2
       * Feature: Tags -- Step #2
       * Feature: Comments -- Step #2
       * Feature: Comments Sidebar -- Step #2
       * Feature: Presence
       */}
      <SnippylyTagTool />
      <SnippylyCommentTool />
      <SnippylySidebarButton />
      <SnippylyRecorderTool type="all" />
      <SnippylyHuddleTool type="all" />
      <SnippylyPresence containerClass={styles['presence']} />
    </div>
  );
};

export default Toolbar;
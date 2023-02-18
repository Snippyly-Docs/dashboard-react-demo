import styles from './Toolbar.module.css';

import { SnippylyPresence, SnippylyHuddleTool } from '@snippyly/react';

const Toolbar = () => {
  return (
    <div className={styles['toolbar']}>
      {/**
       * Snippyly Code Example
       * Feature: Huddle -- Step #2
       * Feature: Presence
       */}
      <SnippylyHuddleTool type="all" />
      <SnippylyPresence containerClass={styles['presence']} />
    </div>
  );
};

export default Toolbar;
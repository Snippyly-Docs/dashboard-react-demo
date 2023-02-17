import styles from './Toolbar.module.css';

import { SnippylyPresence, SnippylyHuddleTool } from '@snippyly/react';

const Toolbar = () => {
  return (
    <div className={styles['toolbar']}>
      {/**
       * Snippyly Code Example
       * Adding the Huddle tool and Presence component to the application toolbar.
       */}
      <SnippylyHuddleTool type="all" />
      <SnippylyPresence containerClass={styles['presence']} />
    </div>
  );
};

export default Toolbar;
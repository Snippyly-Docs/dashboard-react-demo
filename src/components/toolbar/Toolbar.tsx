import styles from './Toolbar.module.css';

import { VeltPresence, VeltHuddleTool } from '@veltdev/react';

const Toolbar = () => {
  return (
    <div className={styles['toolbar']}>
      {/**
       * Velt Code Example
       * Feature: Huddle -- Step #2
       * Feature: Presence
       */}
      <VeltHuddleTool type="all" />
      <VeltPresence />
    </div>
  );
};

export default Toolbar;
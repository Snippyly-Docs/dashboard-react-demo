import styles from './Toolbar.module.css';

import { VeltPresence, VeltHuddleTool, VeltCommentTool, VeltRecorderTool, VeltTagTool, VeltSidebarButton } from '@veltdev/react';

const Toolbar = () => {
  return (
    <div className={styles['toolbar']}>
      {/**
       * Velt Code Example
       * Feature: Huddle -- Step #2
       * Feature: Recorder -- Step #2
       * Feature: Tags -- Step #2
       * Feature: Comments -- Step #2
       * Feature: Comments Sidebar -- Step #2
       * Feature: Presence
       */}
      <VeltTagTool />
      <VeltCommentTool />
      <VeltSidebarButton />
      <VeltRecorderTool type="all" />
      <VeltHuddleTool type="all" />
      <VeltPresence />
    </div>
  );
};

export default Toolbar;
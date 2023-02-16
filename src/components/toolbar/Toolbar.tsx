import styles from './Toolbar.module.css';

import { SnippylyPresence, SnippylyHuddleTool } from '@snippyly/react';

const Toolbar = () => {
  return (
    <div className={styles['toolbar']}>
      <SnippylyHuddleTool />
      <SnippylyPresence containerClass={styles['presence']} />
    </div>
  );
};

export default Toolbar;
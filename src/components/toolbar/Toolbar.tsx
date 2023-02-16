import styles from './Toolbar.module.css';

import { SnippylyPresence } from '@snippyly/react';

const Toolbar = () => {
  return (
    <div className={styles['toolbar']}>
      <SnippylyPresence />
    </div>
  );
};

export default Toolbar;
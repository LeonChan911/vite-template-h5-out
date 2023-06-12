import React from 'react';
import styles from './index.module.scss';

type Props = {
  children: any;
};
const BasicLayout = (props: Props) => {
  const { children } = props;
  return <div className={styles['basic-layout']}>{children}</div>;
};

export default BasicLayout;

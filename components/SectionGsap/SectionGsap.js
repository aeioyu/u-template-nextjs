import React from 'react';
import style from './SectionGsap.module.css';

function SectionGsap({ children, ...props }) {
  return <section className={style.container}>{children}</section>;
}

export default SectionGsap;

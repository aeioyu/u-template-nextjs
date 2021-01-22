import React from 'react';
import style from './SectionGsapScroll.module.css';

function SectionGsapScroll({ children, ...props }) {
  return (
    <section className={style.container} {...props}>
      {children}
    </section>
  );
}

export default SectionGsapScroll;

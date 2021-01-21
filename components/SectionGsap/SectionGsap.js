import React from 'react';
import style from './SectionGsap.module.css';

function SectionGsap({ children, ...props }) {
  return (
    <section className={style.sectionGsap} {...props}>
      {children}
    </section>
  );
}

export default SectionGsap;

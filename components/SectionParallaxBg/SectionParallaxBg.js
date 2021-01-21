import React from 'react';
import style from './SectionParallaxBg.module.css';

function SectionParallaxBg({ children, ...props }) {
  return (
    <section className={style.sectionParallaxBg} {...props}>
      {children}
    </section>
  );
}

export default SectionParallaxBg;

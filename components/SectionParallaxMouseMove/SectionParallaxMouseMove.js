import React from 'react';
import style from './SectionParallaxMouseMove.module.css';

function SectionParallaxMouseMove({ children, ...props }) {
  return (
    <section className={style.container} {...props}>
      <div className={style.container}>
        <div className="js-elem-1">ELEM 1</div>
        <div className="js-elem-2">ELEM 1</div>
        <div className="js-elem-3">ELEM 1</div>
      </div>
    </section>
  );
}

export default SectionParallaxMouseMove;

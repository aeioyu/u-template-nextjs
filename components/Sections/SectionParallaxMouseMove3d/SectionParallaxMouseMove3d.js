import { Power2, TweenLite } from 'gsap';
import React, { useCallback, useRef } from 'react';
import style from './SectionParallaxMouseMove3d.module.scss';

function SectionParallaxMouseMove3d({ children, ...props }) {
  const section = useRef();
  const elem1 = useRef();
  const elem2 = useRef();
  const elem3 = useRef();

  const setScreenPosition = useCallback((mouseX, mouseY) => {
    var cx = window.innerWidth / 2;
    var cy = window.innerHeight / 2;
    const dx = mouseX - cx;
    const dy = mouseY - cy;

    const tiltx = dy / cy;
    const tilty = -(dx / cx);
    const radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
    const degree = radius * 20;

    TweenLite.to([section.current], 1, {
      transform: 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)',
      ease: Power2.easeOut,
    });
  }, []);

  return (
    <section className={style.container} {...props}>
      <div
        ref={section}
        className={style.elemList}
        onMouseMove={({ clientX: x, clientY: y }) => setScreenPosition(x, y)}
      >
        <div ref={elem2} className={style.contentItem}>
          ELEM 2
        </div>
        <div ref={elem3} className={style.bgItem}></div>
      </div>
    </section>
  );
}

export default SectionParallaxMouseMove3d;

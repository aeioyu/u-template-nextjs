import { Power2, TweenLite } from 'gsap';
import React, { useCallback, useRef } from 'react';
import style from './SectionParallaxMouseMove.module.scss';

function SectionParallaxMouseMove({ children, ...props }) {
  const section = useRef();
  const elem1 = useRef();
  const elem2 = useRef();

  const tweenFunction = useCallback((elem, mouseX, mouseY, movement) => {
    const rect = elem.current.getBoundingClientRect();
    // const elem2Rect = elem2.current.getBoundingClientRect();
    // console.log({ rect });
    var relX = mouseX - rect.left;
    var relY = mouseY - rect.top;

    // console.log({ relX, relY, innerWidth: elem1.current.offsetWidth });

    TweenLite.to([elem.current], 1, {
      x: ((relX - [elem.current.offsetWidth] / 2) / [elem.current.offsetWidth]) * movement,
      y: ((relY - [elem.current.offsetHeight] / 2) / [elem.current.offsetHeight]) * movement,
    });
  }, []);

  const setScreenPosition = useCallback((mouseX, mouseY) => {
    tweenFunction(elem1, mouseX, mouseY, -50);
    tweenFunction(elem2, mouseX, mouseY, -20);
  });

  return (
    <section className={style.container} {...props}>
      <div
        ref={section}
        className={style.elemList}
        onMouseMove={({ clientX: x, clientY: y }) => setScreenPosition(x, y)}
      >
        <div ref={elem1} className={style.contentItem}>
          ELEM 2
        </div>
        <div ref={elem2} className={style.bgItem}></div>
      </div>
    </section>
  );
}

export default SectionParallaxMouseMove;

import { TimelineLite } from 'gsap';
import React, { useCallback, useEffect, useRef } from 'react';
import style from './SectionAnimationScroll.module.scss';

function SectionAnimationScroll({ children, ...props }) {
  const elem1 = useRef();
  const elem2 = useRef();
  const elem3 = useRef();
  const trigger = useRef();

  useEffect(() => {
    const tl = new TimelineLite({
      scrollTrigger: {
        trigger: [trigger.current],
        // markers: true,
        // scrub: true,
        start: 'top center',
        end: 'bottom center',
        onLeaveBack: function () {
          tl.reverse(0);
        },
      },
    });
    tl.fromTo([elem1.current], 1, { x: 0, opacity: 0 }, { x: 300, opacity: 1 });
    tl.fromTo([elem2.current], 1, { x: 0, opacity: 0 }, { x: -300, opacity: 1 }, '-=1');
    tl.fromTo([elem3.current], 1, { y: 0, opacity: 0 }, { y: -100, opacity: 1 }, '-=1');
  });

  return (
    <section ref={trigger} className={style.container} {...props}>
      <div className={style.elemList}>
        <div ref={elem1} className={style.elementItem}>
          ELEM 1
        </div>
        <div ref={elem2} className={style.elementItem}>
          ELEM 2
        </div>
        <div ref={elem3} className={style.elementItem}>
          ELEM 3
        </div>
      </div>
    </section>
  );
}

export default SectionAnimationScroll;

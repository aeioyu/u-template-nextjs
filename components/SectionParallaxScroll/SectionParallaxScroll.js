import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import style from './SectionParallaxScroll.module.scss';

function SectionParallaxScroll({ children, ...props }) {
  const elem1 = useRef();
  const elem2 = useRef();
  const elem3 = useRef();
  const section = useRef();

  useEffect(() => {
    gsap.to([elem1.current], {
      yPercent: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: [section.current],
        scrub: true,
      },
    });

    gsap.to([elem2.current], {
      yPercent: -200,
      ease: 'none',
      scrollTrigger: {
        trigger: [section.current],
        scrub: true,
      },
    });

    gsap.to([elem3.current], {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: [section.current],
        scrub: true,
      },
    });
  });

  return (
    <section className={style.container} {...props}>
      <div ref={section} className={style.elemList}>
        <div ref={elem1} className={style.elementItem}>
          ELEM 1
        </div>
        <div ref={elem2} className={style.contentItem}>
          ELEM 2
        </div>
        <div ref={elem3} className={style.bgItem}>
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=1350&q=80" alt="" />
        </div>
      </div>
    </section>
  );
}

export default SectionParallaxScroll;

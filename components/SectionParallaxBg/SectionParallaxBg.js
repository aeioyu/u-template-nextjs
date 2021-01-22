import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import style from './SectionParallaxBg.module.scss';

function SectionParallaxBg({ children, ...props }) {
  const bgSection = useRef();
  const bgItem = useRef();

  const bgSection2 = useRef();
  const bgItem2 = useRef();

  const bgSection3 = useRef();
  const bgItem3 = useRef();

  useEffect(() => {
    gsap.set([bgItem.current], { 'background-position': `50% ${-innerHeight / 2}px` });
    gsap.set([bgItem2.current], { 'background-position': `50% ${-innerHeight / 2}px` });
    gsap.set([bgItem3.current], { 'background-position': `50% ${-innerHeight / 2}px` });

    gsap.to([bgItem.current], {
      'background-position': `50% ${innerHeight / 2}px`,
      scrollTrigger: {
        trigger: [bgSection.current],
        scrub: true,
        // markers: true,
        start: 'top bottom',
      },
    });

    gsap.to([bgItem2.current], {
      'background-position': `50% ${innerHeight / 2}px`,
      scrollTrigger: {
        trigger: [bgSection2.current],
        scrub: true,
        start: 'top bottom',
      },
    });

    gsap.to([bgItem3.current], {
      'background-position': `50% ${innerHeight / 2}px`,
      scrollTrigger: {
        trigger: [bgSection3.current],
        scrub: true,
        start: 'top bottom',
      },
    });
  });

  return (
    <section className={style.container} {...props}>
      <div ref={bgSection} className={style.item}>
        <div
          ref={bgItem}
          className={style.itemBg}
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=1352&q=80)',
          }}
        />
      </div>
      <div ref={bgSection2} className={style.item}>
        <div
          ref={bgItem2}
          className={style.itemBg}
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=1350&q=80)',
          }}
        />
      </div>
      <div ref={bgSection3} className={style.item}>
        <div
          ref={bgItem3}
          className={style.itemBg}
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?fit=crop&w=1352&q=80)',
          }}
        />
      </div>
    </section>
  );
}

export default SectionParallaxBg;

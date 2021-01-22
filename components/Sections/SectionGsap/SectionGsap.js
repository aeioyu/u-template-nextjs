import { Canon } from '@/components/Typography';
import React, { useEffect, useMemo, useState } from 'react';
import style from './SectionGsap.module.scss';

function SectionGsap({ children, ...props }) {
  const [loading, setLoading] = useState(true);
  const images = useMemo(() => {
    return [
      'https://images.unsplash.com/photo-1611054477600-6a02f1ab4d8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2133&q=80',
      'https://images.unsplash.com/photo-1610971441253-ab06498a0749?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
      'https://images.unsplash.com/photo-1611039238231-df8e31c5cb47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
      'https://images.unsplash.com/photo-1598209494655-b8e249540dfc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
      'https://images.unsplash.com/photo-1583679723452-7df3a2cfe247?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
      'https://images.unsplash.com/photo-1610840020401-98d02f31cb03?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80',
      'https://images.unsplash.com/photo-1610812557356-d8bb3c359979?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1605484236796-ffde7811bf9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    ];
  }, []);

  useEffect(() => {
    const inBrowser = typeof window !== 'undefined';
    if (inBrowser) {
      let imageLoaded = 0;
      for (const imageSrc of images) {
        const img = new Image();
        img.src = imageSrc;

        // eslint-disable-next-line no-loop-func
        img.onload = () => {
          imageLoaded++;
          if (imageLoaded === images.length) {
            setLoading(false);
          }
        };
      }
    }
  }, [images]);

  return (
    <section className={style.container}>
      {loading && <div className={style.loading}>Loading</div>}

      <Canon textAlign="center" color="mantis">
        Main Header
      </Canon>

      <div className={style.grid}>
        {images.map((img, idx) => (
          <div key={idx} className={style.gridItem}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionGsap;

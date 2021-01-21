import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

import 'normalize.css';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  return <Component {...pageProps} />;
}

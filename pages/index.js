import SectionGsap from '@/components/SectionGsap';
import SectionParallaxBg from '@/components/SectionParallaxBg';
import { AppMeta, AppLayout } from '@/components/App';
import configs from '@/configs/app.config';
import SectionParallaxScroll from '@/components/SectionParallaxScroll';
import SectionAnimationScroll from '@/components/SectionAnimationScroll';
import SectionParallaxMouseMove from '@/components/SectionParallaxMouseMove';

export default function Home() {
  return (
    <AppLayout>
      <AppMeta
        title={configs.title}
        favicon={configs.favicon}
        description={configs.description}
        url={'http://localhost:3000'}
        image={configs.image}
      />
      <SectionGsap id="Home" />
      <SectionParallaxMouseMove />
      <SectionParallaxBg id="About" />
      <SectionParallaxScroll id="Service" />
      <SectionAnimationScroll id="Contact" />
    </AppLayout>
  );
}

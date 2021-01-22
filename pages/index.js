import SectionGsap from '@/components/SectionGsap';
import SectionParallaxBg from '@/components/SectionParallaxBg';
import { AppMeta, AppLayout } from '@/components/App';
import configs from '@/configs/app.config';
import SectionParallaxScroll from '@/components/SectionParallaxScroll';
import SectionAnimationScroll from '@/components/SectionAnimationScroll';
import SectionParallaxMouseMove from '@/components/SectionParallaxMouseMove';
import SectionParallaxMouseMove3d from '@/components/SectionParallaxMouseMove3d';

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
      <SectionParallaxMouseMove id="About" />
      <SectionParallaxMouseMove3d />
      <SectionParallaxBg id="Product" />
      <SectionParallaxScroll id="Service" />
      <SectionAnimationScroll id="Contact" />
    </AppLayout>
  );
}

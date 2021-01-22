import { AppMeta, AppLayout } from '@/components/App';
import SectionGsap from '@/components/Sections/SectionGsap';
import SectionParallaxBg from '@/components/Sections/SectionParallaxBg';
import SectionParallaxScroll from '@/components/Sections/SectionParallaxScroll';
import SectionAnimationScroll from '@/components/Sections/SectionAnimationScroll';
import SectionParallaxMouseMove from '@/components/Sections/SectionParallaxMouseMove';
import SectionParallaxMouseMove3d from '@/components/Sections/SectionParallaxMouseMove3d';
import configs from '@/configs/app.config';

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

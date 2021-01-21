import SectionGsap from '@/components/SectionGsap';
import SectionParallaxBg from '@/components/SectionParallaxBg';
import { AppMeta, AppLayout } from '@/components/App';
import configs from '@/configs/app.config';
import style from './homepage.module.css';

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
      <SectionParallaxBg />
      <SectionGsap />
    </AppLayout>
  );
}

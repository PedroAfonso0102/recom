import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import { InteractiveHero } from '../components/home/InteractiveHero';
import { PartnerMarquee } from '../components/home/PartnerMarquee';
import { HomeBento } from '../components/home/HomeBento';

export const Home = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <InteractiveHero />
        <PartnerMarquee />
        <HomeBento />
      </motion.div>
    </Layout>
  );
};

export default Home;

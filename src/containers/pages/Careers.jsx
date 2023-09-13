import Footer from '../../components/navigation/Footer';
import Header from '../../components/careers/Header';
import Navbar from '../../components/navigation/Navbar';
import Layout from '../../hocs/layouts/Layout';
import { useEffect } from 'react';
import Testimonial from '../../components/careers/Testimonial';
import LogoCloud from '../../components/careers/LogoCloud';
import Features from '../../components/careers/Features';
import PositionsList from '../../components/careers/PositionsList';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <Layout>
      <Navbar />
      <div className='pt-28'>
        <Header />
        <Testimonial />
        <LogoCloud />
        <Features />
        <PositionsList />
      </div>
      <Footer />
    </Layout>
  );
}

export default Careers;

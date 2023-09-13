import Navbar from '../../components/navigation/Navbar';
import Header from '../../components/cases/Header';
import Layout from '../../hocs/layouts/Layout';
import Footer from '../../components/navigation/Footer';
import CasesList from '../../components/cases/CasesList';
import { useEffect } from 'react';

const Cases = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <Layout>
      <Navbar />
      <Header />
      <CasesList />
      <Footer />
    </Layout>
  );
}

export default Cases;

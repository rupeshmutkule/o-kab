'use client';

import dynamic from 'next/dynamic';
import Header from './components/Header';
import Banners from './components/Banners';
import NewArrivals from './components/NewArrivals';
import SalesEvent from './components/SalesEvent';
import PopularProducts from './components/PopularProducts';
import LatestPosts from './components/LatestPosts';
import Footer from './components/Footer';

// Import Slider with no SSR to avoid hydration issues
const Slider = dynamic(() => import('./components/Slider'), {
  ssr: false,
  loading: () => (
    <div className="tp-banner-container" style={{ minHeight: '650px', background: '#f5f5f5' }}>
      <div className="tp-banner minfullwidth" style={{ minHeight: '650px' }}></div>
    </div>
  )
});

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <div className="dima-main">
        <Banners />
        <NewArrivals />
        <SalesEvent />
        <PopularProducts />
        <LatestPosts />
      </div>
      <Footer />
    </>
  );
}

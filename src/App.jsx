import NavBar from './components/layout/navBar';
import HeroSection from './components/sections/hero';
import Partners from './components/sections/partners';
import FeaturedCoins from './components/sections/featuredCoins';
import WhyChoose from './components/sections/whyChoose';
import KpiCards from './components/sections/kpiCards';
import WeProvide from './components/sections/weProvide';
import FramerBanner from './components/sections/framerBanner';
import NowIsTheTime from './components/sections/nowIsTheTime';
import ExpandYourCrypto from './components/sections/expandYourCrypto';
import ByYourSide from './components/sections/byYourSide';
import Faqs from './components/sections/faqs';
import Footer from './components/sections/footer';
import BackToTopBtn from './components/ui/backToTop';

function App() {
  return (
    <div className='container mx-auto flex flex-col items-center px-4 md:px-0 overflow-x-hidden'>
      <NavBar />

      <HeroSection 
        id="hero"
      />

      <Partners 
        id="partners"
      />

      <FeaturedCoins 
        id="featuredCoins"
      />
      
      <WhyChoose 
        id="whyChoose"
      />

      <KpiCards 
        id="kpiCards"
      />

      <WeProvide 
        id="weProvide"
      />

      <FramerBanner 
        id="framerBanner"
      />

      <NowIsTheTime 
        id="nowIsTheTime"
      />

      <ExpandYourCrypto 
        id="expandYourCrypto"
      />

      <ByYourSide 
        id="byYourSide"
      />

      <Faqs 
        id="faqs"
      />

      <Footer 
        id="footer"
      />

      <BackToTopBtn />
    </div>
  )
}

export default App
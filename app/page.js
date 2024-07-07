import Navbar from '@/components/Navbar/Navbar';
import Carousal from '@/components/Carousal/Carousal';
import Clients from '@/components/Clients/Clients';
import ThirdSection from '@/components/ThirdSection/ThirdSection';
import FourthSection from '@/components/FourthSection/FourthSection';
import CountUpSection from '@/components/CountUp/CountUp';
import SixthSection from '@/components/SixthSection/Sixthsectoin';
import SeventhSection from '@/components/SeventhSection/seventhSection';
import CardSection from '@/components/CardSection/CardSection';
import DemoSection from '@/components/DemoSection/DemoSection';
import Footer from '@/components/Footer/Footer';
const page = () => {
  return (
    <div>
      <Navbar />
      <Carousal />
      <Clients />
      <ThirdSection />
      <FourthSection />
      <CountUpSection />
      <SixthSection />
      <SeventhSection />
      <CardSection />
      <DemoSection />
      <Footer />
    </div>
  );
};

export default page;

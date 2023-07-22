import ContactSection from "../components/ContactSection";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HereSection from "../components/HereSection";
import Portfolia from "../components/Portfolia";
import Sevices from "../components/Sevices";

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <HereSection />
      <ContactSection />
      <Sevices />
      <ExperienceSection/>
      <EducationSection/>
      <Portfolia/>
      <Footer />
    </div>
  );
}

export default HomePage;

import HeroSection from './../components/HeroSection';
import FeaturesSection from './../components/FeaturesSection';
import ContactForm from './../components/ContactForm';
import DescriptionSection from './../components/DescriptionSection';

const Home = () => {
    const scrollToFeatures = () => {
        const featuresSection = document.getElementById('features-section');
        if (featuresSection) {
          featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <HeroSection scrollToFeatures={scrollToFeatures} />
            <FeaturesSection id="features-section" />
            <DescriptionSection />
            <ContactForm />
        </>
    )
}

export default Home;
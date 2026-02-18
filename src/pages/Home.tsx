import Hero from "../components/Hero";
import Services from "../components/Services";
import CEOMessage from "../components/CEOMessage";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      {/* CEO Message Section */}
      <CEOMessage />

      {/* Services Section */}
      <Services />
    </div>
  );
};

export default Home;

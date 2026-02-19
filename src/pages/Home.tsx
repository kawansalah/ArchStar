import Hero from "../components/Hero";
import CEOMessage from "../components/CEOMessage";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* CEO Message */}
      <CEOMessage />

      {/* Services */}
      <Services />
    </div>
  );
};

export default Home;

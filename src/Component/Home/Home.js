import About from "../About/About";
import Feature from "../Feature/Feature";
import Functional from "../Functional/Functional";
import Information from "../Information/Information";
import Parallax from "../Parallax/Parallax";
import Service from "../Service/Service";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <About />
      <Feature />
      <Service />
      <Information />
      <Parallax/>
      <Services/>
      <Functional/>
    </div>
  );
};

export default Home;

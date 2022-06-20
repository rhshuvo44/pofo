import About from "../About/About";
import Advantage from "../Advantage/Advantage";
import Client from "../Client/Client";
import Counter from "../Counter/Counter";
import Development from "../Development/Development";
import Feature from "../Feature/Feature";
import Functional from "../Functional/Functional";
import Information from "../Information/Information";
import Parallax from "../Parallax/Parallax";
import Service from "../Service/Service";
import Services from "../Services/Services";
import Slide from "../Slide/Slide";
import Video from "../Video/Video";

const Home = () => {
  return (
    <div>
      <About />
      <Feature />
      <Service />
      <Information />
      <Parallax />
      <Services />
      <Functional />
      <Development />
      <Advantage />
      <Counter />
      <Video />
      <Slide />
      <Client/>
    </div>
  );
};

export default Home;

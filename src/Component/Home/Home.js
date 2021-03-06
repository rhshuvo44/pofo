import About from "../About/About";
import Advantage from "../Advantage/Advantage";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Client from "../Client/Client";
import Counter from "../Counter/Counter";
import Development from "../Development/Development";
import Feature from "../Feature/Feature";
import Functional from "../Functional/Functional";
import Information from "../Information/Information";
import Parallax from "../Parallax/Parallax";
import Portfolio from "../Portfolio/Portfolio";
import Service from "../Service/Service";
import Services from "../Services/Services";
import Slide from "../Slide/Slide";
import Video from "../Video/Video";

const Home = () => {
  return (
    <div>
      <Banner/>
      <About />
      <Feature />
      <Service />
      <Portfolio/>
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
      <Blog/>
    </div>
  );
};

export default Home;

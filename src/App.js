import './App.css';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import GetInTouch from './components/Getintouchform';
// import Getintouchform from './components/Getintouchform';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Ourprojects from './components/Ourprojects';
import Service from './components/Service';
import Testimonial from './components/Testimonial';
import Users from './components/Users';
import Whyus from './components/Whyus';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Aboutus />
      <Service />
      <Users />
      <Ourprojects/>
      <Whyus />
      <Testimonial />
      <GetInTouch />
      <Footer/>

    </>
  );
}

export default App;

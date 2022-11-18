import Header from "../../components/header/Header";
import Carousel from "../../components/carousel/Carousel";
import NavBar from "../../components/nav_bar/NavBar";
import Footer from "../../components/footer/Footer";

import './section.css';
const HomePage = () => {

  return (
    <>
      <Header />
      <NavBar />
      <Carousel />
      <section className="section">
        <div className="my_container">
          <p>내용</p>
        </div>
      </section>
      <Footer/>
    </>
  );
}
 
export default HomePage;
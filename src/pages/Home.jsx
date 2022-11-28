import Navbar from "../components/Navbar";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <section>
        <div class="box">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <h2>Sobre nosotros </h2>
            <p>
              <a>
                Lorem all our modules are designed to play nicely with
                responsive of course. At the end of the day it comes down to the
                theme you use - our code doesn't get in your way.At the end of
                the day it comes down to
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

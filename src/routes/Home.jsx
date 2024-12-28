import "../style/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import Call from "../assets/undraw.png"
import Typewriter from "../components/Typewriter.jsx";
const Home = () => {
  return (
    <>
      <Header/>
      <div className="bg">
        <div className="main-text">
          <Typewriter
            dataPeriod="2000"
            dataType='["Depression?", "Anxiety?", "Frustration?", "WellNest."]'
          />
        </div>
      </div>

      <div className="svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="wave"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,64L40,101.3C80,139,160,213,240,240C320,267,400,245,480,208C560,171,640,117,720,133.3C800,149,880,235,960,261.3C1040,288,1120,256,1200,229.3C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div id="about">
        <div className="container-fluid mt-5 mb-5">
          <div className="row">
            <div className="col-md-7">
              <div className="row">
                <div className="col-12 text-center">
                  <img src={Call} alt="Illustration" width="800" />
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="row mt-2">
                <div className="col-12 text-center">
                  <h2 className="about-head">About</h2>
                </div>
              </div>
              <div className="row mb-5 mt-3">
                <div className="col-12 text-center">
                  Something is making you feel anxious? We are here. Something is
                  causing you pain? We are here. Something is causing you
                  depression? We are here. We are ready to listen. We are there
                  for you. No Judgments, No questions, only someone to listen to
                  you, to help you let go of the pain and stress. Talk to our
                  specialists, listen to songs, read memes and quotes, and live
                  your best life. <br />
                  #YOLO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;

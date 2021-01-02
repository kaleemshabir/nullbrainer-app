import "../style.css";
import image from "../cbimage1.jpg";
import cbimage from "../cbimage.jpg";

const Main = () => {
  return (
    <main>
      <div className="main-section">
        <section id="cards">
          <section>
            <h1>GROUND-TRUTH DATA EVERYONE TRUSTS</h1>
          </section>
          <section>
            <p>
              We have combined the best-of-breed technology platforms with an
              eye towards relieving you of administrative burden. Matterport 3D
              scans augmented by TrueSketch PLUS are used to generate consistent
              Xactimate sheets that are delivered in accord with Actionable
              Insights compliance rule sets. Each mpartial is produced with full
              transparency, unprecedented forensic photography, and infallible
              geospatial data that collectively result in rapid approvals.
            </p>
          </section>
        </section>
        <section className="image-section">
          <img src={image} id="image1" alt="image1" />
        </section>
        <div>
          <button className="try-btn"> Try Today</button>
        </div>
      </div>

      <div className="mpartial_section">
        <div className="container howitworks">
          <div className="title">
           
                <h2 className="section_title_text">How It Works</h2>
              </div>
           
          <div className="data_points">
            <div className="row no-gutters">
              <div className="col-md-4 col-sm-12">
                <div className="data_point_item row no-gutters">
                  <div className="data_number data_number_1 col-md-4 col-sm-12">
                    1
                  </div>
                  <div className="data_text  col-md-8 col-sm-12 ">
                    <a href="https://www.getinsights.org/matterport-standards/">
                      Perform pre-mitigation and post-mitigation scans with a
                      Matterport Pro Series camera.
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="data_point_item row no-gutters">
                  <div className="data_number data_number_2 col-md-4 col-sm-12">
                    2
                  </div>
                  <div className="data_text  col-md-8 col-sm-12 ">
                    <span>
                      Submit the Matterport scans via the mpartial portal and
                      then go back to what you do great.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="data_point_item row no-gutters">
                  <div className="data_number data_number_3 col-md-4 col-sm-12">
                    3
                  </div>
                  <div className="data_text  col-md-8 col-sm-12 ">
                    <span>
                      Receive a well-formatted, fully documented Xactimate PDF,
                      ESX &amp; Matterport TrueSketch PLUS SKX.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="try_now_btn">
            <a href="/login">
              <button className="btn">Get Started</button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;

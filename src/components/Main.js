import "../style.css";
import image from "../cbimage1.jpg";

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
            We have combined the best-of-breed technology platforms with an eye
            towards relieving you of administrative burden. Matterport 3D scans
            augmented by TrueSketch PLUS are used to generate consistent
            Xactimate sheets that are delivered in accord with Actionable
            Insights compliance rule sets. Each mpartial is produced with full
            transparency, unprecedented forensic photography, and infallible
            geospatial data that collectively result in rapid approvals.
          </p>
        </section>
      </section>
      <section className="image-section">
        <img src={image} id="image1" />
      </section>
      <div >
        <button className="try-btn"> Try Today</button>
      </div>
      </div>

    </main>
  );
};

export default Main;

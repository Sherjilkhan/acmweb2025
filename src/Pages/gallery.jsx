import bb2 from "/assets/Event-data/bb2.jpg";
import cc2 from "/assets/Event-data/cc2.JPG";
import cs1 from "/assets/Event-data/cs1.jpg";
import ee1 from "/assets/Event-data/ee1.jpg";
import ee2 from "/assets/Event-data/ee2.jpg";
import ee3 from "/assets/Event-data/ee3.jpg";
import esp2 from "/assets/Event-data/esp2.jpg";
import hoc1 from "/assets/Event-data/hoc1.jpg";
import hoc2 from "/assets/Event-data/hoc2.jpg";
import hoc3 from "/assets/Event-data/hoc3.jpg";
import kl1 from "/assets/Event-data/kl1.jpg";
import ky1 from "/assets/Event-data/ky1.jpg";
import ky2 from "/assets/Event-data/ky2.jpg";
import vr1 from "/assets/Event-data/vr1.jpg";
import wip3 from "/assets/Event-data/wip3.jpg";
const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-head">
        <h2>Our Gallery</h2>
        <h4>Where all the fun stuff lies.</h4>
      </div>
      <div className="gallery-grid">
        <img className="gd1 gd lt" src={cc2} alt="" />
        <img className="gd2 gd rt" src={hoc1} alt="" />
        <img className="gd3 gd lt" src={cs1} alt="" />
        <img className="gd4 gd rt" src={ky1} alt="" />
        <img className="gd5 gd lt" src={ee1} alt="" />
        <img className="gd6 gd rt" src={ee3} alt="" />
        <img className="gd7 gd lt" src={kl1} alt="" />
        <img className="gd8 gd rt" src={vr1} alt="" />
        <img className="gd9 gd lt" src={ky2} alt="" />
        <img className="gd10 gd rt" src={bb2} alt="" />
        <img className="gd11 gd lt" src={esp2} alt="" />
        <img className="gd12 gd rt" src={ee2} alt="" />
        <img className="gd13 gd lt" src={hoc3} alt="" />
        <img className="gd14 gd rt" src={wip3} alt="" />
        <img className="gd15 gd lt" src={hoc2} alt="" />
      </div>
    </div>
  );
};

export default Gallery;

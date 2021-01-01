import '../style.css';
import photo from '../download.png'
import mpartial from "./mpartial.mp4";



const Header = () => {
  return (
    <>
     <video loop muted autoPlay id="myVideo" >
    <source src={mpartial} type="video/mp4"  />
   </video>
<div className="header">
  <div className="navbar">
    <div className="logo">
      <img src={photo} />
    </div>
    <div className="menu">
      <ul>
        <li>Ground Truth Data</li>
        <li>How it works</li>
        <li>Fee structure</li>
        <li>Example Deliverables</li>
        <li>Submission Portal</li>
        <li>Contact Us</li>
        <li>  <button className="signin">Sign In</button></li>
      </ul>
    
    </div>
  </div>
   </div>
    </>
   
  )
}

export default Header;
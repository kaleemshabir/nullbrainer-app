import mpartial from "./mpartial.mp4";
const Video = () => {
  return (
    <video width="100%" height="100%" controls >
    <source src={mpartial} type="video/mp4" loop muted autoPlay />
   </video>
  );
}

export default Video;
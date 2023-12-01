import DayImg from "../img/day.jpg";
import NightImg from "../img/night.jpg";
const BackgroundImg = ({ loading, isDay }) => {
  return (
    <div className="bg-img-container position-fixed top-0 bottom-0 start-0 end-0 p-0">
      <div>
        <img
          src={isDay ? DayImg : NightImg}
          className="bg-img w-100"
          loading="lazy"
          alt="Background image"
        />
      </div>
    </div>
  );
};
export default BackgroundImg;

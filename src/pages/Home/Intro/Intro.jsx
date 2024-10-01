import './Intro.css';
import Button from '../../../components/Button/Button';
const Intro = () => {
  return (
    <div className="section intro">
      <div className="texts">
        <h3>Giới thiệu về AdventurePlan!</h3>
        <p>
        Chào mừng bạn đến vớ - AdventurePlan! - ứng dụng gợi ý lịch trình du lịch thông minh,
        giúp bạn khám phá thế giới một cách dễ dàng và thú vị hơn bao giờ hết!
        </p>
        <Button>Download</Button>
      </div>
      <div className="image">
        <img src="/images/laptop.png" alt="" />
      </div>
    </div>
  );
};

export default Intro;

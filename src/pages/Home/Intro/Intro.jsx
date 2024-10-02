import './Intro.css';

const Intro = () => {
  return (
    <div className="section intro">
      <div className="texts">
        <h3>Giới thiệu về AdventurePlan!</h3>
        <p>
          Chào mừng bạn đến với AdventurePlan! - ứng dụng gợi ý lịch trình du lịch thông minh,
          giúp bạn khám phá thế giới một cách dễ dàng và thú vị hơn bao giờ hết!
        </p>
        <a 
          href="https://github.com/fhihung/adventure_planner_web/releases/download/1.0.0/app-production.apk" 
          download 
          className="button"
        >
          Download
        </a>
      </div>
      <div className="image">
        <img src="/images/laptop.png" alt="Laptop" />
      </div>
    </div>
  );
};

export default Intro;
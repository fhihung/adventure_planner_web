import './Download.css';
import Button from '../../../components/Button/Button';

const Download = () => {
  return (
    <div className="section download">
      <img src="/images/avt.png" alt="AdventurePlan Avatar" />
      <div className="texts">
        <h3>Tải ngay AdventurePlan!</h3>
        <p>
          Đừng chần chừ nữa! Hãy tải ngay AdventurePlan! để bắt đầu hành trình khám phá của bạn!
        </p>
        <a 
          href="https://github.com/fhihung/adventure_planner_web/releases/download/1.0.0/app-production.apk" 
          download 
          className="button"
        >
          Tải xuống
        </a>
      </div>
    </div>
  );
};

export default Download;
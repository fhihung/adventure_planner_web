import './Download.css';
import Button from '../../../components/Button/Button';

const Download = () => {
  return (
    <div className="section download">
      <img src="/images/avt.png" alt="" />
      <div className="texts">
        <h3>Tải ngay AdventurePlan!</h3>
        <p>
        Đừng chần chừ nữa! Hãy tải ngay AdventurePlan! trên App Store hoặc Google Play để bắt đầu hành trình khám phá của bạn!
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Download;

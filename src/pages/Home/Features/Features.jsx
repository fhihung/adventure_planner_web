import './Features.css';

const Features = () => {
  return (
    <div className="section features">
      <h3 className="title">Tính năng nổi bật</h3>
      <div className="content">
        <div className="item">
          <img src="/images/phone.png" alt="" />
          <div className="texts">
            <h3>Tại sao chọn AdventurePlan?</h3>
            <ul>
              <li>Tiết kiệm thời gian: Không cần tìm kiếm thông tin từ nhiều nguồn khác nhau.</li>
              <li>Linh hoạt: Có thể điều chỉnh lịch trình mọi lúc, mọi nơi.</li>
            </ul>
          </div>
        </div>
        <div className="item">
          <div className="texts">
            <h3>Gợi ý lịch trình cá nhân hóa</h3>
            <p>
            AdventurePlan! sử dụng công nghệ AI để phân tích sở thích của bạn và tạo ra những lịch trình du lịch phù hợp nhất.
            Dù bạn thích khám phá văn hóa, ẩm thực hay thiên nhiên, chúng tôi có giải pháp cho bạn!
            </p>
          </div>
        </div>
        <div className="item">
          <div className="texts">
            <h3>Lập kế hoạch dễ dàng</h3>
            <p>
            Giao diện thân thiện giúp bạn dễ dàng tạo và chỉnh sửa lịch trình của mình. Chỉ cần chọn điểm đến và thời gian,
             AdventurePlan! sẽ lo phần còn lại!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

import React from 'react';
import '../css/TimeLine.css';
function TimeLine (){
    return (
            

    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <h6 class="card-title">Timeline</h6>
                    <div id="content">
                        <ul class="timeline">
                            <li class="event" data-date="2007-2013">
                                <h3>Trường Tiểu Học Cam Lộc I</h3>
                                <p>Trường tiểu học là giai đoạn đầu tiên giúp hình thành giáo dục cho học sinh, ngôi trường tiểu học Cam Lộc I đã giúp em trở thành 1 học sinh, sinh viên có ích cho xã hội.</p>
                            </li>
                            <li class="event" data-date="2013-2017">
                                <h3>Trường Trung Học Cơ Sở Lê Hồng Phong</h3>
                                <p>Sau 4 năm học tại trường, em có thêm rất nhiều người bạn và gặp được các thầy cô luôn nhiệt huyết với học sinh và có rất nhiều kỉ niệm khó quên. </p>
                            </li>
                            <li class="event" data-date="2017-2020">
                                <h3>Trường Trung Học Phổ Thông Trần Hưng Đạo</h3>
                                <p>Ngôi trường đầy kỉ niệm của thời học sinh, là ngôi trường mang đến cho học sinh đầy hoài bảo về nghề nghiệp, cuộc sống và tinh thần. </p>
                            </li>
                            <li class="event" data-date="2020 - nay">
                                <h3>Đại Học Sư Phạm Thành Phố Hồ Chí Minh</h3>
                                <p>Là một ngôi trường tốt, nơi đây đáp ứng đầy đủ nhu cầu học tập về ngành công nghệ thông tin của em. Môi trường học tập khá tốt, sinh viên thân thiện.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}
export default TimeLine;

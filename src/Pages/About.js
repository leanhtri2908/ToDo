import React  from 'react'
import * as FaIcons from "react-icons/fa";
import logo from '../Image/mytui.jpg';
import  '../css/about.css';

// import { IconName } from "react-icons/go";
export const About = () => {

    return (
        <React.Fragment>
        <section>
            <div class="abs-left">
                <div class="abs-profile">
                <img src={logo} />
                </div>
                <div class="abs-content"> 
                    <div class="abs-item abs-infor">
                        <div class="title">
                            <p class="bold">Thông tin cá nhân</p>
                        </div>
                        <ul>
                            <li>
                                <span className="text">Name : Lê Anh Trí</span>
                            </li>
                            <li>
                                <span className="text">MSSV: 46.01.104.195</span>
                            </li>


                            <li>
                                <span className="text">SĐT: 0989020814</span>
                            </li>

                            <li>
                                <span className="text">Email: trihandsome5@gmail.com</span>
                            </li>

                            <li>
                                <span className="text">Address: Cam Ranh, Khánh Hòa</span>
                            </li>                        
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="experience section-padding">
   <div class="container">
   <h3 class="experience-title">WORK EXPERIENCE</h3>
      
      <div class="experience-wrapper">
       <div class="company-wrapper clearfix">
       <div class="experience-title">Thông Tin Cơ Bản</div> 
          <div class="time">Nhóm: CTQM Sep</div> 
          <div>Giời Gian: Sep 2021 - Dec 2021</div>
          <div>GVHD: Nguyễn Viết Hưng </div>
          <div>Vị Trí: Thiết kế giao diện</div>
       </div>
        
        <div class="job-wrapper clearfix">
         <div class="experience-title">Môn: Lý Thuyết Đồ Thị và ứng dụng</div> 
          <div class="company-description">
           <p>Nhóm CTQM chúng tôi đã phát triển ứng dụng thực hiện trực quan 2 thuật toán là: Prim & Dijkstra. Nhóm chúng tôi đã hoàn thành dự án này khá thành công.Tuy nhiên vẫn còn vài điểm thiếu sót chưa hoàn thiện được.</p>  
          </div>
        </div>
        
        <div class="company-wrapper clearfix">
       <div class="experience-title">Thông Tin Cơ Bản</div> 
          <div class="time">Nhóm: CTQM</div> 
          <div>Giời Gian: Sep 2021 - Dec 2021</div>
          <div>GVHD: Lương Trần Ngọc Khiết </div>
          <div>Vị Trí: Code Phụ </div>
       </div>
        
         <div class="job-wrapper clearfix">
         <div class="experience-title">Môn: Cấu Trúc Dữ Liệu</div> 
          <div class="company-description">
           <p>Nhóm CTQM tôi đã cùng nhau thực hiện đề tài mô phỏng giả lập cách hoạt động của máy ATM trên code C++.Nhóm chúng tôi đã thực hiện khá thành công. Tuy nhiên vẫn còn vài thiếu sót nhóm chúng tôi chưa thực hiện được. </p> 
          </div>
        </div>
        
        <div class="company-wrapper clearfix">
       <div class="experience-title">Thông Tin Cơ Bản</div>
          <div class="time">Nhóm: CTQM</div>
          <div>Thời Gian: Sep 2021 - Dec 2021</div>
          <div>GVHD: Lê Hoàng Việt Tuấn </div>
          <div>Vị Trí: Thiết kế giao diện</div>
       </div> 
        
         <div class="job-wrapper clearfix">
         <div class="experience-title">Môn: Lập Trình Windows</div>
          <div class="company-description">
           <p>Nhóm CTQM chúng tôi đã cùng nhau thực hiện đề tài quản lý shop giày. Đây là dự án mà nhóm chúng tôi đã hội ý và suy nghĩ rất kĩ để đưa ra ý tưởng hay để hoàn thành. Dự án của chúng tôi đã thực hiện rất tốt và cũng là dự án thành công nhất của nhóm chúng tôi.</p>   
          </div>
        </div>
        
      </div>
      
      <div class="section-wrapper clearfix">
       <h3 class="section-title">Skills</h3>
         <ul>
         <li class="skill-percentage">+ HTML</li>
         <li class="skill-percentage">+ CSS</li>
         <li class="skill-percentage">+ JavaScript</li>
         <li class="skill-percentage">+ C/C++</li>
         </ul>
      </div>
      <div class="section-wrapper clearfix">
        <h3 class="section-title">INTERESTS</h3>  
        <p>+ Traveling</p>
        <p>+ Play Games</p> 
        <p>+ Watch Movies</p> 
        <p>+ Listen to Music</p> 
      </div>
   </div>
  </section>
        </React.Fragment>
    )
};
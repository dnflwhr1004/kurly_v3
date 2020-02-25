"use strict"
var homeVue = homeVue || {}
homeVue = {

    home_main:()=>{
        return `
        <div id="body" >
      <!--마켓컬리 배너1-->
      <section style="overflow: hidden; ">
        <div id="carouselExampleControls" style="width: 100%" class="carousel slide" data-ride="carousel" >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="https://img-cf.kurly.com/shop/data/main/1/pc_img_1569230790.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="https://img-cf.kurly.com/shop/data/main/1/pc_img_1580262479.jpg" alt="Second slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="https://img-cf.kurly.com/shop/data/main/1/pc_img_1580376394.jpg" alt="Third slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="https://img-cf.kurly.com/shop/data/main/1/pc_img_1580465698.jpg" alt="Forth slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="https://img-cf.kurly.com/shop/data/main/1/pc_img_1581302984.jpg" alt="Fifth slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="https://img-cf.kurly.com/shop/data/main/1/pc_img_1581321403.jpg" alt="Sixth slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="https://img-cf.kurly.com/shop/data/main/1/pc_img_1581411976.jpg" alt="Seventh slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="https://img-cf.kurly.com/shop/data/main/1/pc_img_1581671914.jpg" alt="Eighth slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="https://img-cf.kurly.com/shop/data/main/1/pc_img_1581915776.jpg" alt="Nineth slide">
                </div>
                  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
              </div>
        </div>
      </section>
      <!--마켓컬리 배너1 끝-->
      
      <!--마켓컬리 배너2-->
      <div style="background-color: #38165f; overflow: hidden; width: 100%">
          <div class="row" > 
          <div class="col-md-5" style="text-align: right;padding-top: 5%; letter-spacing: -1px; ">
              <span style="color: #eee; font-size: 2rem;font-weight:500">마트와 작별하고 </span>  
              <br>
              <span style="color: #eee; font-size: 2rem;font-weight:500">퀄리티 있게 새벽배송</span>
              <br>
              <span style="color: #eee;font-size: 1.2em;"> 한숟갈도 헛되이 하지 않기</span>
              <br>
              <span style="color: #eee">마켓컬리 샛별배송</span>
          </div>
          <div class="col-md-2" style="padding-top: 4%;">
              <img src="/resources/img/model.png" alt="">
          </div>
          <div class="col-md-5" >
              <div class="embed-responsive embed-responsive-16by9" >
                <iframe  class="embed-responsive-item" width="560" height="315"  src="https://www.youtube.com/embed/qs1belxHJOo?autoplay=1&amp;loop=1;playlist=fn5OBAfHLKQ" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
          </div>
        </div>
      </div>
     
       <!--마켓컬리 배너2 끝-->
       
       <!--이상품 어떄요?-->
        <div id="thisProduct" class="container" style="padding: 3%;">
            <h3 style="text-align: center;color: #333;font-family: noto sans;">이 상품 어때요?</h3>
            
            <!-- 이상품 어떄요  slide  -->
              <div id="myCarousel" class="carousel slide" data-ride="carousel">
                 <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                  </ol>
                  <!-- 회전광고판 항목 -->
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                         <div id="pibody" class="row" >
                            
                            
                            
                        </div>
                    </div>
                    <!--두번째 슬라이드 -->
                    <div class="carousel-item ">
                        <div id="pibody" class="row" >
                            <div id="pi1" class=" col-md-3" style="padding: 1%;">
                                <img class="card-img-top img-zoom" src="https://img-cf.kurly.com/shop/data/goods/1579514501249l0.jpg" alt="">
                                <span class="name"><a href="">[맛있닭] 다이어트 도시락 3종</a></span>
                                <br>
                                <span class="price"> 4,320원</span>
                            </div>
                            <div id="pi2" class=" col-md-3" style="padding: 1%; ">
                                <img class="card-img-top img-zoom" src="https://img-cf.kurly.com/shop/data/goods/1475633955339l0.jpg" alt="">
                                <span class="name"><a href="">MY FIRST 처음 만나는 진짜 식빵</a></span>
                                <br>
                                <span class="price"> 4,900원</span>
                            </div>
                            <div id="pi3" class=" col-md-3" style="padding: 1%;">
                                <img class="card-img-top img-zoom" src="https://img-cf.kurly.com/shop/data/goods/1535621905610l0.jpg" alt="">
                                <span class="name"><a href="">GAP 인증 실속 사과 한봉지 5~6입</a></span>
                                <br>
                                <span class="price"> 5,610원</span>
                            </div>
                            <div id="pi4" class=" col-md-3" style="padding: 1%;">
                                <img class="card-img-top img-zoom" src="https://img-cf.kurly.com/shop/data/goods/1546580814429l0.jpg" alt="">
                                <span class="name"><a href="">[루토사] 벨지안 와플</a></span>
                                <br>
                                <span class="price"> 6,320원</span>
                            </div>
                        </div>
                    </div>  
                  </div>
                  <!-- 좌우 클릭버튼 -->
                  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control" aria-hidden="true">
                    <img src="https://res.kurly.com/pc/service/main/1908/btn_prev_default_hover_x1.png?v=1" alt=""></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control" aria-hidden="true"> <img src="https://res.kurly.com/pc/service/main/1908/btn_next_default_hover_x1.png?v=1" alt=""></span>
                    <span class="sr-only">Next</span>
                  </a>
                  <!-- 좌우 클릭버튼 -->
              </div>
        </div>
        <!--이상품어떄요 끝-->
        <!--이벤트 소식-->
        <section  style="padding: 3%; background-color: #f7f7f7;">
            <div id="savingProduct" class="container">
               <h3 style="text-align: center;color: #333;font-family: noto sans;"> 이벤트 소식&nbsp;></h3>
                <div class="row" style="text-align: center;">
                    <div id="pi1" class="col-md-4" >
                        <img class="card-img-top img-zoom" src="https://img-cf.kurly.com/shop/data/main/3/pc_img_1581670796.jpg" alt="">
                        <span class="name" ><a href="">티 & 디저트 최대 20% 할인</a></span>
                        <br>
                        <span class="price" style="color: #999;"> 5,610원</span>
                    </div>
                    <div id="pi2" class="col-md-4 "  >
                        <img class="card-img-top img-zoom" src="https://img-cf.kurly.com/shop/data/main/3/pc_img_1581673424.jpg" alt="">
                        <span class="name" ><a href="">양포어장 최대 20% 할인</a></span>
                        <br>
                        <span class="price" style="color: #999;"> 겨울 포항 바다를 집에서 즐겨요</span>
                    </div>
                    <div id="pi3" class="col-md-4 " >
                        <img class="card-img-top img-zoom" src="https://img-cf.kurly.com/shop/data/main/3/pc_img_1581673465.jpg" alt="">
                        <span class="name" ><a href="">샤브샤브 재료 최대 20% 할인</a></span>
                        <br>
                        <span class="price" style="color: #999;"> 야들야들한 고기와 아삭한 채소</span>
                    </div>
                </div>
            </div>
        </section>
        <!--이벤트 소식끝-->
        <!--알뜰 상품 -->
        <div id="todayNewProduct" class="container" style="padding: 3%;">
            <a href="#" id="todayNewProductBtn"><h3 style="text-align: center;color: #333;font-family: noto sans;"> 알뜰 상품 &nbsp;></h3></a>
            <div class="row">
                <div id="pi1" class=" col-md-3" style="padding: 1%;">
                    <img class="card-img-top img-zoom" src="https://img-cf.kurly.com/shop/data/goods/1571798327828l0.jpg" alt="">
                    <span class="name"><a href="">[부농산업] 무항생제 1등급 한우 불고기 200g (냉장) </a></span>
                    <br>
                    <span class="price"> 11,400원</span>
                </div>
                <div id="pi2" class=" col-md-3" style="padding: 1%; ">
                    <img class="card-img-top img-zoom" src="https://img-cf.kurly.com/shop/data/goods/150028273622l0.jpg" alt="">
                    <span class="name"><a href="">[Everyday] 새송이버섯 조림</a></span>
                    <br>
                    <span class="price"> 3,400원</span>
                </div>
                <div id="pi3" class=" col-md-3" style="padding: 1%;">
                    <img class="card-img-top img-zoom" src="https://img-cf.kurly.com/shop/data/goods/1561353146387l0.jpg" alt="">
                    <span class="name"><a href="">[울쿡]우렁이 쌈장</a></span>
                    <br>
                    <span class="price"> 6,175원</span>
                </div>
                <div id="pi4" class=" col-md-3" style="padding: 1%;">
                    <img class="card-img-top img-zoom" src="https://img-cf.kurly.com/shop/data/goods/1558688849261l0.jpg" alt="">
                    <span class="name"><a href="">[Kurly]동해물,우리콩 두부 380g</a></span>
                    <br>
                    <span class="price"> 3,420원</span>
                </div>
            </div>
        </div>
        <!--친구초대-->
        <div id="inviteFriend" style="background-color:rgb(230, 237, 242);">
            <div class="container" style="padding: 3%;">
                <h3 style="font-family: noto sans;color: #344b57;">친구 초대하면 친구도 나도 5천원씩!</h3>
                <h5  style="font-family: noto sans; color: #344b57;">무제한 적립금 해택 받아가세요!</h5>
            </div>
        </div>
        <!--친구초대-->
        
        <!--컬리의 레시피-->
        <section id="kurlyRecipy"  style="padding: 3%;">
            <div id="savingProduct" class="container">
               <h3 style="text-align: center;color: #333;font-family: noto sans;">컬리의 레시피 &nbsp;></h3>
                <div class="row" style="text-align: center;">
                    <div id="pi1" class="col-md-4" >
                        <img class="card-img-top img-zoom" src="https://img-cf.kurly.com/shop/data/board/recipe/m/main_v2_42f045fa69eb2d84.jpg" alt="">
                        <span class="name"  ><a href="">메로 미소된장조림</a></span>
                    </div>
                    <div id="pi2" class="col-md-4 "  >
                        <img class="card-img-top img-zoom" src="https://img-cf.kurly.com/shop/data/board/recipe/m/main_v2_f2216709d5d57777.jpg" alt="">
                        <span class="name" ><a href="">햄버거</a></span>
                    </div>
                    <div id="pi3" class="col-md-4 " >
                        <img class="card-img-top img-zoom" src="https://img-cf.kurly.com/shop/data/board/recipe/m/main_v2_88b3baeb966ed16c.jpg" alt="">
                        <span class="name" ><a href="">등심 안살 구이</a></span>
                    </div>
                </div>
            </div>
        </section>
        <!--컬리의 레시피 끝-->
        <div id="customerInsta">
            <h3 style="text-align: center;color: #333;font-family: noto sans;"> 인스타그램 후기 &nbsp; > </h3>
             <div class="container">
                <div class="row">
                    <div id="pi1" class="col-md-2 "  style="padding: 0%;">
                        <img class="card-img" src="https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/83801544_2506394399679551_7222761764848214724_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=019AJcfbeS4AX8xMa07&oh=b72d0ec7d301be3e75e5d026ad6cdea9&oe=5ECF362F" alt="">
                    </div>
                    
                    <div id="pi1" class="col-md-2 " style="padding: 0%;">
                        <img class="card-img" src="https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/83093611_574252680089677_2365184544678504634_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=VxD5ujMTg8cAX9wo6RO&oh=76a5f4e3b03e7b17f4c27bfd178b8475&oe=5EDFDF82" alt="">
                    </div>
                    <div id="pi1" class="col-md-2 " style="padding: 0%;">
                        <img class="card-img" src="https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/83105525_2171236839852333_7182421402606767019_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=Agry--vNI5MAX8qheJu&oh=9770fa3b8c8dbdc0f782579dbe4994f1&oe=5EFCA1DB" alt="">
                    </div>
                    <div id="pi1" class="col-md-2 " style="padding: 0%;">
                        <img class="card-img" src="https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/82482192_183043603052972_6747936582163991225_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=Jse882F2sYkAX8NZx2o&oh=322ee97e02b933260bc46cc7a723a1b2&oe=5EE01F54" alt="">
                    </div>
                    <div id="pi1" class="col-md-2 " style="padding: 0%;">
                        <img class="card-img" src="https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/83118726_647988295741316_5051757811708469898_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=P1fx5LQ84V4AX9XQaM_&oh=d08b05be471d6801478c739c3e6a1d82&oe=5EE52B24" alt="">
                    </div>
                    <div id="pi1" class="col-md-2 " style="padding: 0%;">
                        <img class="card-img" src="https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/82801882_865916787198024_7996514619966832358_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=7QPpQF0aCcEAX8Y6xwi&oh=bf6107556552b9e2d01e8a1e48d22ef5&oe=5ECE539C" alt="">
                    </div>
                    
                </div>
                <div style="padding: 3%;">
                    <h6 style="text-align: center;color: #999;font-family: noto sans;">더많은 고객 후기가 궁금하다면?</h6>
                    <a href="https://www.instagram.com/p/B8NHIhpJnEt/" style="text-align:center;color: #333;font-family: noto sans;font-weight: 500;"><h6> @marketkurly_regram</h6></a>
                </div>
            </div> 
        </div>
        <div id="deliveryPic" class="container">
             <img src="https://img-cf.kurly.com/shop/data/main/15/pc_img_1568875999.png" style="width: 100%" alt="">
        </div>
        
    </div>`
    },

    home_nav:()=>{
        return `
        <div class="container">
      <div class="float-right " style=" width: 20%;" >
      <div class="row " style="color: #333333;font-size: 0.8em; ">
            <div style="color: #5f0080; margin-right: 5%"><a id="gojoin" href="">회원가입 </a> </div>
            <div id="gologin_btn" style="margin-right: 5%"><a id="gologin" href="">로그인</a></div>
            <div><a href="">배송지역 검색</a></div>
     </div>
   </div>
      <div class="header ">
        <img width="120rem" src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png" alt="" />
      </div>
   </div>
        <div id="navbar">
      <div class="container" >
          <div class="row"  style="border: solid;border-color: darkblue;">
             <button class="dropdown-toggle" style="background-color: #fff;border: 0;outline: 0;" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <img width="22px" src="/resources/img/open-menu.png" alt="" /></button>
             <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div> 
          <div> <a href="">
            전체 카테고리</a>
         </div>
          <div class="col-md-1"><a href="">신상품</a> </div>
          <div class="col-md-1"> <a>베스트</a> </div> 
          <div class="col-md-2">  <a id="good_shop">알뜰쇼핑</a> </div>  
          <div class="col-md-2" > <a>이벤트</a> </div>  
          <div class="input-group col-md-3 ">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
            <div class="input-group-append ">
              <button class="btn btn-outline-secondary" type="button"  ><img style="width: 20px;" src="/resources/img/search.png" alt="" /></button>
            </div>
          </div>
          <a href="javascript:void(0)"><img width="35px" src="https://res.kurly.com/pc/ico/1908/ico_cart_x2_v2.png" alt="" /></a>
        </div>
        
      </div>
      
    </div>`
    },
    home_footer:()=>{
        return `
        <div id="footer" style="color: #4c4c4c; font-family: noto sans; padding-top: 3%;">
        <div class="container">
            <div class="row">
                <div class="col-md-5" >
                    <h5 style="color: #000; font-weight: 600;">고객행복 센터</h5>
                    <div class="col-md-6" >
                        <span class="col-md-1" style="color: #333; font-size: 2rem; font-weight: 700;">1644-1107</span>
                        <p style="color: #333; font-size: 14px;">365고객센터  오전 7시- 오후 7시 </p>
                    </div>
                    <div>
                         <button type="button" class="btn" style="border: 0.5px solid #eee; color:#4c4c4c;background: #fff; padding-left: 10%;padding-right: 10%;"> 카카오톡 문의</button>
                        <button type="button" class="btn " style="border: 0.5px solid #eee; color:#4c4c4c;background: #fff; padding-left: 10%; padding-right: 10%;"> 1:1문의</button>
                    </div>
                    
                    
                </div>
                <div class="col-md-7">
                    
                        <div class="row" style="font-size:14px;text-align: center;">
                            <div class="col-md-2" > 컬리소개</div>
                            <div class="col-md-2" > 컬리소개영상 </div>
                            <div class="col-md-2" >  인재채용</div>
                            <div class="col-md-1.5" >  이용약관</div>
                            <div class="col-md-3" >  개인정보처리방침</div>
                            <div class="col-md-1.5" >  이용안내</div>
                        </div>
                        
                        <div id="footerExp" style="color: #999999;padding: 5%;font-size: 12px;">
                           <div>
                               <span> 법인명 (상호) : 주식회사 컬리 </span>
                                <span>|&nbsp; 사업자등록번호 : 261-81-23567 </span>
                                <span ><a style="color: #5f0080; font-weight: 400;" href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=2618123567&apv_perm_no=">&nbsp; 사업자정보 확인</a></span>
                           </div>
                           <div>
                               <span> 통신판매업 : 제 2018-서울강남-01646 호 </span>
                                <span>|&nbsp;  개인정보보호책임자 : 이지훈 </span>
                           </div>
                           <div>
                               <span> 주소 : 서울시 도산대로 16길 20, 이래빌딩 B1 ~ 4F </span>
                                <span>|&nbsp;  대표이사 : 김슬아 </span>
                           </div>
                            <div>
                               <span> 입점문의하기 : </span>
                                 <span ><a style="color: #5f0080; font-weight: 400;" href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=2618123567&apv_perm_no="> 입점문의하기:</a></span>
                                 <span>|&nbsp; 제휴문의: </span>
                                 <span ><a style="color: #5f0080; font-weight: 400;" href="mailto:business@kurlycorp.com">&nbsp; business@kurlycorp.com</a></span>
                           </div>
                           <div>
                               <span> 채용문의 : </span>
                                 <span ><a style="color: #5f0080; font-weight: 400;" href="mailto:recruit@kurlycorp.com">&nbsp; recruit@kurlycorp.com</a></span>
                           </div>  
                            <div>
                               <span>팩스: 070 - 7500 - 6098  : </span>
                               <span>&nbsp;|&nbsp;이메일</span>
                                 <span ><a style="color: #5f0080; font-weight: 400;" href="mailto:recruit@kurlycorp.com">&nbsp; recruit@kurlycorp.com</a></span>
                           </div>
                           <div style="color: #999999;font-size: 14px; padding-top: 2%;">
                            © KURLY CORP. ALL RIGHTS RESERVED
                           </div>
                        </div>
                </div>
            </div>
             <hr style="color: #eee">
             <div class="row justify-content-md-center">
                 <span class="col-md-2.4" style="padding: 1%">
                    <img src="resources/img/instagram.svg" width="30px" alt="">
                 </span>
                 <span class="col-md-2.4" style="padding: 1%">
                    <img src="resources/img/youtube.svg" width="30px" alt="">
                 </span>
                 <span class="col-md-2.4" style="padding: 1%">
                    <img src="resources/img/facebook.svg" width="30px" alt="">
                 </span>
             </div>
        </div>
       
        
    </div>
    <script>
   
    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
    }
</script>
    `
    }
}

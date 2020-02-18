"use strict"
var homeVue = homeVue || {}
var homeVueVue = homeVueVue || {}
homeVue = {

	mainimg :()=>{
		return `<div id="main" style="width:1500px; height:300px; border: 1px solid black;
								text-align: center;">
				메인이미지
			</div>
			<div style="height:50px; width : 1500px; text-align: center;">
			이 상품 어때요? 
		</div>

		<div>
			<table style="border: 1px solid black;
						height : 500px; width : 1500px;">
				<tr>
					<td id="product1" style="border:1px solid black;
								width:300px; text-align: center;">
								<button id="product1_btn" type="button" style="background : none; border: none;">1</button>
					</td>
					<td id="product2"  style="border:1px solid black;
								width:300px; text-align: center;">
								<button id="product2_btn" type="button" style="background : none; border: none;">2</button>

					</td>
					<td id="product3" style="border:1px solid black;
								width:300px; text-align: center;">
								<button id="product3_btn" type="button" style="background : none; border: none;">3</button>

					</td>
					<td id="product4" style="border:1px solid black;
								width:300px; text-align: center;">
								<button id="product4_btn" type="button" style="background : none; border: none;">4</button>

					</td>
				</tr>
			</table>
		</div>`
	}
}

homeVueVue = {
	homeNavBar:()=>{
		return ` <!--navbar -->
			<div id="navbar">
				dfsdfs
			</div>
   <!--navbar -->`
	},
	homeFooter:()=>{
		return `    <div id="footer" style="color: #4c4c4c; font-family: noto sans; padding-top: 3%;">
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
                    <img src="/resources/img/instagram.svg" width="30px" alt="">
                 </span>
                 <span class="col-md-2.4" style="padding: 1%">
                    <img src="/resources/img/youtube.svg" width="30px" alt="">
                 </span>
                 <span class="col-md-2.4" style="padding: 1%">
                    <img src="/resources/img/facebook.svg" width="30px" alt="">
                 </span>
             </div>
        </div>
       
        
    </div>
`
	},


    homeMain:()=>{
		return ` <div id="body">
        <div id="pic" style="border: solid;border-color: blue">
            dfsdfsdf
        </div>
        <div id="thisProduct" class="container" style="border: solid;border-color: rebeccapurple; padding: 3%;">
            <h3 style="text-align: center;color: #333;font-family: noto sans;">이 상품 어때요?</h3>
            <div class="row">
                <div id="pi1" class="col-md-3 " style="border: solid;border-color: rebeccapurple">1</div>
                <div id="pi2" class="col-md-3 " style="border: solid;border-color: rebeccapurple">2</div>
                <div id="pi3" class="col-md-3 " style="border: solid;border-color: rebeccapurple">3</div>
                <div id="pi4" class="col-md-3 " style="border: solid;border-color: rebeccapurple">4</div>
            </div>
        </div>
        <div id="savingProduct" class="container" style="padding: 3%;">
           <h3 style="text-align: center;color: #333;font-family: noto sans;"> 알뜰상품</h3>
            <div class="row">
                <div id="pi1" class="col-md-3 " style="border: solid;border-color: rebeccapurple">1</div>
                <div id="pi2" class="col-md-3 " style="border: solid;border-color: rebeccapurple">2</div>
                <div id="pi3" class="col-md-3 " style="border: solid;border-color: rebeccapurple">3</div>
                <div id="pi4" class="col-md-3 " style="border: solid;border-color: rebeccapurple">4</div>
            </div>
        </div>
        
        <div id="inviteFriend" style="background-color:rgb(230, 237, 242);">
            <div class="container" style="padding: 3%;">
                <h3 style="font-family: noto sans;color: #344b57;">친구 초대하면 친구도 나도 5천원씩!</h3>
                <h5  style="font-family: noto sans; color: #344b57;">무제한 적립금 해택 받아가세요!</h5>
            </div>
        </div>
        <div id="todayNewProduct" class="container" style="padding: 3%;">
            <a href=""><h3 style="text-align: center;color: #333;font-family: noto sans;"> 오늘의 신상품 &nbsp;></h3></a>
            <h6 style="text-align: center;color: #999;font-family: noto sans;">매일 정오, 컬리의 새로운 상품을 만나보세요</h6>
            <div class="row">
                <div id="pi1" class="col-md-3 " style="border: solid;border-color: rebeccapurple">1</div>
                <div id="pi2" class="col-md-3 " style="border: solid;border-color: rebeccapurple">2</div>
                <div id="pi3" class="col-md-3 " style="border: solid;border-color: rebeccapurple">3</div>
                <div id="pi4" class="col-md-3 " style="border: solid;border-color: rebeccapurple">4</div>
            </div>
        </div>
        <div id="easyBreakFast"  style="padding: 3%;background-color:#f7f7f7;">
            <h3 style="text-align: center;color: #333;font-family: noto sans;"> 간편한 아침식사 </h3> 
            <div class="container">
                <div class="row">
                    <div id="pi1" class="col-md-3 " style="border: solid;border-color: rebeccapurple">1</div>
                    <div id="pi2" class="col-md-3 " style="border: solid;border-color: rebeccapurple">2</div>
                    <div id="pi3" class="col-md-3 " style="border: solid;border-color: rebeccapurple">3</div>
                    <div id="pi4" class="col-md-3 " style="border: solid;border-color: rebeccapurple">4</div>
                </div>
            </div>        
        </div>
        <div id="kurlyRecipy" style="padding: 3%;">
           <h3 style="text-align: center;color: #333;font-family: noto sans;"> 컬리의 레시피 &nbsp; > </h3> 
           <div class="container">
                <div class="row">
                    <div id="pi1" class="col-md-4 " style="border: solid;border-color: rebeccapurple">1</div>
                    <div id="pi2" class="col-md-4 " style="border: solid;border-color: rebeccapurple">2</div>
                    <div id="pi3" class="col-md-4 " style="border: solid;border-color: rebeccapurple">3</div>
                </div>
            </div> 
        </div>
        <div id="customerInsta">
            <h3 style="text-align: center;color: #333;font-family: noto sans;"> 인스타그램 후기 &nbsp; > </h3>
             <div class="container">
                <div class="row">
                    <div id="pi1" class="col-md-2 " style="border: solid;border-color: rebeccapurple">1</div>
                    <div id="pi2" class="col-md-2 " style="border: solid;border-color: rebeccapurple">2</div>
                    <div id="pi3" class="col-md-2 " style="border: solid;border-color: rebeccapurple">3</div>
                    <div id="pi3" class="col-md-2 " style="border: solid;border-color: rebeccapurple">4</div><div id="pi3" class="col-md-2 " style="border: solid;border-color: rebeccapurple">5</div>
                    <div id="pi3" class="col-md-2 " style="border: solid;border-color: rebeccapurple">6</div>
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

		home_VueVue : () =>{
		return `<div class="wrapper" style="width: 1500px; border: 1px solid black;
								margin : 0 auto;">

	<div id="usermenu" style="width:1500px; height:50px;border: 1px solid black;
								text-align: right;">
			<a href="#" id = "gojoin"> 회원가입</a> <a href="#" id="gologin">로그인</a>  고객센터 | 배송지역검색
	</div>
	
	<div id="head" style="width:1500px; height:80px; border: 1px solid black;
								text-align: center;
								">
								헤더이미지
	</div>
		<div id="nav" style="height : 50px; width:1500px; text-align: center;">
				<a href="" id ="good_shop">알뜰쇼핑</a>
				</div>
		
		<div class = "hcontainer" style="width: 1500px; border:2px solid red;">
			

		</div>

		<!--mainimg-->
		
		<!--recommand-->

		
	</div>`
	}
}
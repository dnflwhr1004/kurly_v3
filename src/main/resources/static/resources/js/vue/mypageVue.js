var mypageVue = mypageVue || {}

mypageVue = {
	mypageVuego :()=>{
		return `<style>
       .dropdown-item-text{
           color: #333;
           font-size: 11px;
       }
       .dropdown-item-text:hover{
           background-color: #eee;
           color: #5f0080;
       } 
       .dropdown-item-text-active{
           background-color: #eee;
           color: #5f0080;
       }
   </style>
    <div id="mypagev" style="background-color:#f7f7f7 ">
        <div class="container" style="padding: 4%;">
           <div class="row">
               <div class="col-md-5" style="background-color: #fff; padding: 5%;">
                   <h1 id="userName"></h1>
                   <h6>반갑습니다.</h6> 
               </div>
               <div class="col-md-2" style="background-color: #fff;margin-left: 0.4%;padding: 2%;">
                    <h6>적립금</h6>
                    <h9>지원하지 않는 기능입니다.</h9>
               </div>
               <div class="col-md-2" style="background-color: #fff;margin-left: 0.4%;padding: 2%;">
                    <h6>쿠폰</h6>
                    <h9>지원하지 않는 기능입니다.</h9>
               </div>
               <div class="col-md-2" style="background-color: #fff;margin-left: 0.4%; padding: 2%;">
                   <h6>컬리패스</h6>
                    <h9>지원하지 않는 기능입니다.</h9>
               </div>
           </div>
        </div>
    </div>
    <div class="container" style="padding: 4%;">
        <div class="row">
            <div class="col-md-3">
                <h1 style="font-size: 30px;color: #333;">마이컬리</h1>
                <div style="border: 0.8px solid #D4D4D4">
                      <a class="dropdown-item dropdown-item-text" href="#" style="border-bottom: 0.8px solid #D4D4D4;color: #333;font-size: 14px;padding: 6%;">주문내역&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></a>
                      <a class="dropdown-item dropdown-item-text" href="#" style="border-bottom: 0.8px solid #D4D4D4;color: #333;font-size: 14px;padding: 6%;">늘 사는것&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> </a>
                      <a class="dropdown-item dropdown-item-text" href="#" style="border-bottom: 0.8px solid #D4D4D4;color: #333;font-size: 14px;padding: 6%;">상품후기 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></a>
                      <a class="dropdown-item dropdown-item-text" href="#" style="border-bottom: 0.8px solid #D4D4D4;color: #333;font-size: 14px;padding: 6%;">적립금 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></a>
                      <a class="dropdown-item dropdown-item-text" href="#" style="border-bottom: 0.8px solid #D4D4D4;color: #333;font-size: 14px;padding: 6%;">쿠폰 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></a>
                      <a class="dropdown-item dropdown-item-text dropdown-item-text-active" href="#" style="border-bottom: 0.8px solid #D4D4D4;color: #333;font-size: 14px;padding: 6%;">개인 정보 수정 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></a>
                </div>
                <div>
                   <div style="background-color: #eee; margin-top: 6%; border-top-right-radius: 30px;border-bottom-right-radius: 30px;padding: 1%">
                       <h1 style="color: #333; font-size: 18px;">도움이 필요하신가요 ?</h1>
                       <h1 style="color: #333; font-size: 14px;">1:1 문의하기</h1>
                   </div>
                    
                </div>
            </div>
            <div class="col-md-9" style="color: #333;font-weight: 600; letter-spacing: -1px;">
                <h1 style="font-size: 1.5rem;">개인 정보 수정</h1>
                <hr style="border: 1px solid #5f0080; ">
                <h1 style="text-align: center;font-size: 1.5rem;color: #333;font-weight: 600; letter-spacing: -1px;">비밀번호   재확인</h1>
                <h1 style="text-align: center;color: #333333;font-size: 14px; "><strong>회원님의 정보를 안전하게 보호</strong>하기 위해 <strong>비밀번호를 다시 한번</strong> 확인해주세요.</h1>
                
                <div style="border: 2px solid #eee; margin: 2%;padding: 6%;">
                    <h1 style="text-align: center;color: #333333;font-size: 14px; ">아이디</h1>
                    <h1 id="userid" style="text-align: center;color: #5f0080;font-size: 14px; "></h1>
                    <h1 style="text-align: center;color: #333333;font-size: 14px; ">비밀번호</h1>
                    <input id="userpasswd" type="text" value maxlength="16"
                     label="password"  style="margin: 0 35%;height:40px; border-radius: 5px;  border: 0.5px solid #5f0080; text-align: center" placeholder="   비밀번호 확인">
                </div>
                <div class="row justify-content-md-center"  style="margin-top: 3%;">
                    <div class="col-md-5">
                        <button id="validpasswd" type="button" style="width: 100%; height:50px;background-color: #5f0080;color: #fff;border-radius: 5px;letter-spacing: -1px;font-weight: 500;">
                        확인</button>
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>`
	}
}

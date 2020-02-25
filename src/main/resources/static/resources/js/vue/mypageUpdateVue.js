var mypageUpdateVue = mypageUpdateVue || {}
mypageUpdateVue = {
	maypageUpdateVuego :()=>{
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
    <div style="background-color:#f7f7f7 ">
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
                <h1 style="font-size: 1.3em;color: #333;font-weight: 600; letter-spacing: -1px;">
                    기본정보
                </h1>
                <div class="row" style="margin: 2%;padding: 3%;">
                    <h1 class="col-md-3" style="color: #333333;font-size: 14px; margin-top: 3%; ">아이디*</h1>
                    <input id="userId" class="col-md-6" type="text" 
                     label="password"  style="width: 60%; height:40px; border-radius: 5px; border: 0.5px solid #c0c0c0; text-align: center" >
                     <div class="col-md-3" style="opacity: 0;">d</div>
                     <h1 class="col-md-3" style="color: #333333;font-size: 14px; margin-top: 3%; ">현재비밀번호*</h1>
                    <input id="currentPass" class="col-md-6" type="text" 
                     label="password"  style="margin-top: 2%;width: 60%; height:40px; border-radius: 5px; border: 0.5px solid #c0c0c0; text-align: center;" >
                     <div class="col-md-3" style="opacity: 0;">d</div>
                     <h1 class="col-md-3" style="color: #333333;font-size: 14px; margin-top: 3%; ">새 비밀번호</h1>
                    <input id="newPass" class="col-md-6" type="text" 
                     label="password"  style="margin-top: 2%;width: 60%; height:40px; border-radius: 5px; border: 0.5px solid #c0c0c0; text-align: center" >
                     <div class="col-md-3" style="opacity: 0;">d</div>
                     <h1 class="col-md-3" style="color: #333333;font-size: 14px; margin-top: 3%; ">새 비밀번호 확인</h1>
                    <input class="col-md-6" type="text" 
                     label="password"  style="margin-top: 2%;width: 60%; height:40px; border-radius: 5px; border: 0.5px solid #c0c0c0; text-align: center" >
                     <div class="col-md-3" style="opacity: 0;">d</div>
                     <h1 class="col-md-3" style="color: #333333;font-size: 14px; margin-top: 3%; ">이름*</h1>
                    <input id="usrName" class="col-md-6" type="text" 
                     label="name"  style="margin-top: 2%;width: 60%; height:40px; border-radius: 5px; border: 0.5px solid #c0c0c0; text-align: center" >
                     <div class="col-md-3" style="opacity: 0;">d</div>
                     <h1 class="col-md-3" style="color: #333333;font-size: 14px; margin-top: 3%; ">이메일*</h1>
                    <input id="usrEmail" class="col-md-6" type="text" 
                     label="email"  style="margin-top: 2%;width: 60%; height:40px; border-radius: 5px; border: 0.5px solid #c0c0c0; text-align: center" >
                     <div class="col-md-3"  style="margin-top: 2%;">
                          <button id="emailVali" type="button" style="width: 100%; height:40px;background-color: #5f0080;color: #fff;border-radius: 5px;letter-spacing: -1px;font-weight: 300;">
                        이메일 중복 확인</button>
                     </div>
                     <h1 class="col-md-3" style="color: #333333;font-size: 14px; margin-top: 3%; ">휴대폰*</h1>
                    <input id="usrMobile" class="col-md-6" type="text" 
                     label="mobile"  style="margin-top: 2%;width: 60%; height:40px; border-radius: 5px; border: 0.5px solid #c0c0c0; text-align: center" >
                     <div class="col-md-3"  style="margin-top: 2%;">
                          <button type="button" style="width: 100%; height:40px;background-color: #5f0080;color: #fff;border-radius: 5px;letter-spacing: -1px;font-weight: 300;">
                        다른번호 인증</button>
                     </div>
                     <h1 class="col-md-3" style="opacity: 0; ">휴대폰*</h1>
                    <input class="col-md-6" type="text" 
                     label="password"  style="margin-top: 2%;width: 60%; height:40px; border-radius: 5px; border: 0.5px solid #c0c0c0; text-align: center" >
                     <div class="col-md-3" style="margin-top: 2%;">
                          <button type="button" style="width: 100%; height:40px;background-color: #fff;color: #c0c0c0;border-radius: 5px;letter-spacing: -1px;font-weight: 300;">
                        인증번호 확인</button>
                     </div>
                    
                </div>
                <div class="row "  style="margin-top: 6%;">
                  <div class="col-md-1" style="opacity: 0;">d</div>
                   <div class="col-md-5">
                        <button id="deleteAccount" type="button" style="width: 100%; height:50px;background-color: #fff; color:#5f0080;border-radius: 5px;letter-spacing: -1px;font-weight: 500; border: 1px solid #5f0080; ">
                        회원탈퇴</button>
                    </div>
                    <div class="col-md-5">
                        <button id="updateDetail" type="button" style="width: 100%; height:50px;background-color: #5f0080;color: #fff;border-radius: 5px;letter-spacing: -1px;font-weight: 500;">
                        회원정보 수정</button>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    </div>`
	}
}
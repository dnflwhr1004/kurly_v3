"use strict"
var loginVue = loginVue || {}
loginVue = {
   loginVuego : ()=>{
      return `<div>
        <div class="container" style="padding: 5%;">
            <h1 style="font-size: 20px;text-align: center">로그인</h1>
            <div class="row justify-content-md-center"  style="margin-top: 3%;">
                <div class="col-md-5">
                    <input id="userId" type="text" value maxlength="16"
                     label="userid"  style="width:100%; height:50px;margin-top: 2%;border-radius: 5px;  border: 0.5px solid #D4D4D4; " placeholder="   ID">
                </div>
            </div>
            <div class="row justify-content-md-center"  >
                <div class="col-md-5">
                    <input id="passwd" type="text" value maxlength="16"
                     label="password"  style="width:100%; height:50px;margin-top: 2%;border-radius: 5px;  border: 0.5px solid #D4D4D4; " placeholder="   PASSWORD">
                </div>
            </div>
            <div class="row justify-content-around" style="margin-top: 3%;">
                <span class="col-5" style="opacity: 0;">d</span>
                <span class="col-5" >
                <a id="search_id" href="" style="color: #333; font-size: 14px;">아이디찾기</a> | <a id="search_pw" href="" style="color: #333;font-size: 14px;">비밀번호 찾기</a></span>
            </div>
            <div class="row justify-content-md-center"  style="margin-top: 3%;">
                <div class="col-md-5">
                    <button id="loginbtn" type="button" style="width: 100%; height:50px;background-color: #5f0080;color: #fff;border-radius: 5px;letter-spacing: -1px;font-weight: 500;">
                    로그인</button>
                </div>
            </div>
            <div class="row justify-content-md-center"  style="margin-top: 1%;">
                <div class="col-md-5">
                    <button id="go_join" type="button" style="width: 100%; height:50px;background-color: #fff;color: #5f0080;border-radius: 5px;letter-spacing: -1px;font-weight: 500;">
                    회원가입</button>
                </div>
            </div>
            
        </div>
    </div>`
   
   }
}
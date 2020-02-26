var pwsearchVue = pwsearchVue || {}

pwsearchVue = {
   pwsearchVue_go:()=>{
      return `<div class="container" style="padding:5%;">
        <h1 style="text-align: center;color: #333;font-size: 30px;letter-spacing: -1px;">비밀번호 찾기</h1>
        <div class="" style=" width: 50%; margin-left: 25%">
            <h1 class="col align-self-center"  style="color: #333;font-size: 14px;letter-spacing: -1px;">이름</h1>
            <div class="col align-self-center">
                 <input id="userName" style="width: 100%; height:50px; display: block;" type="text">
            </div>
            <h1 class="col align-self-center"  style="color: #333;font-size: 14px;letter-spacing: -1px;">아이디</h1>
            <div class="col align-self-center">
                 <input id="userId" style="width: 100%; height:50px; display: block;" type="text">
            </div>
            <h1 class="col align-self-center"  style="color: #333;font-size: 14px;letter-spacing: -1px;">이메일</h1>
            <div class="col align-self-center">
                 <input id="email" style="width: 100%; height:50px; display: block;" type="text">
            </div>
            <div>
                <button id="searchPw" type="submit"
            style="display: block;
            width:340px; height:54px;
            margin:45px auto 0;
            border: 0;
            border-radius: 3px;
            background-color: #5f0080;
            font-size: 16px;
            color:#fff;
            line-height: 44px;
            letter-spacing: -3.px;">
               찾기
            </button>
            </div>
        </div>
            
        
    </div>`
   }
}
"use strict"
var loginVue = loginVue || {}
loginVue = {
	loginVuego : ()=>{
		return `<div id="loginform" style="width:1500px; border:1px solid black; text-align:center;">

			<h3>로그인</h3>
			<div id="write_form">
				<div style="display:inline-block;">
				<input style="display:block; float:center; width:340px; height:50px;" type="text" placeholder="아이디를 입력해주세요">
				
				<input style="display:block; float:center; width:340px; height:50px; margin-top:5px;" type="text" placeholder="비밀번호를 입력해주세요">
				</div>

			<div class="searchs" style="">
				<div class="check">
						<label for="check_id">보안접속</label>
						<input type="checkbox" name="" id="">
				</div>

				<div class="login_search">
					<a href="" target="_'blank" id="search_id">아이디 찾기</a>
						<span>|</span>
					<a href="">비밀번호 찾기</a>
				</div>
			</div>

				<div style="display:inline-block;">
					<button type="submit"  style="display: block;
						width:340px; height:54px;
						margin:45px auto 0;
						border: 0;
						border-radius: 3px;
						background-color: #5f0080;
						font-size: 16px;
						color:#fff;
						line-height: 44px;
						letter-spacing: -3.px;">
						<span>로그인</span>
					</button>
					<button style="display:block; float:center; width:340px; height:50px; margin-top:5px;"><a id="go_join">회원가입</a></button>
				</div>
			
			</div>

		</div>`
	}
}
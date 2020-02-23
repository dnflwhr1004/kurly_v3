"use strict"
var loginVue = loginVue || {}
loginVue = {
	loginVuego : ()=>{
		return `<div>

			<h3>회원로그인</h3>
			<div id="write_form"  style="float: left; width:50%;">
				<div>
				<input id="userId" style="display:block; float:center; width:340px; height:50px;" type="text" placeholder="아이디를 입력해주세요">
				
				<input id="passwd" style="display:block; float:center; width:340px; height:50px; margin-top:5px;" type="text" placeholder="비밀번호를 입력해주세요">
				</div>

			<div class="searchs">

				<div class="login_search">
					<a href="" id="search_id">아이디 찾기</a>
						<span>|</span>
					<a href="" id="search_pw">비밀번호 찾기</a>
				</div>
			</div>

				<div style="display:inline-block;">
					<button id="loginbtn" type="submit"  style="display: block;
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
					<button id="go_join" type="button" style="display:block; float:center; width:340px; height:50px; margin-top:5px;">회원가입</button>
				</div>
			
			</div>

			<h3>관리자로그인</h3>
			<div  style="float: left; width:50%;">
				<div>
				<input id="adminId" style="display:block; float:center; width:340px; height:50px;" type="text" placeholder="아이디를 입력해주세요">
				
				<input id="apasswd" style="display:block; float:center; width:340px; height:50px; margin-top:5px;" type="text" placeholder="비밀번호를 입력해주세요">
				</div>

				<div style="display:inline-block;">
					<button id="adminbtn" type="submit"  style="display: block;
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
					<button id="go_join" type="button" style="display:block; float:center; width:340px; height:50px; margin-top:5px;">회원가입</button>
				</div>
			
			</div>

		</div>`
	}
}
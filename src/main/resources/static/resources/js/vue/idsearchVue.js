"use strict"
var idsearchVue = idsearchVue || {}

idsearchVue = {
	idsearchVue_go :()=>{
		return `<div class="idsearchch" style="text-align:center;">
				<div><h2 style="text-align: center;">아이디 찾기</h2></div>

				<h4 style="text-align: center;">이름</h4>
			<div style="display: inline-block;">
				<div style="border:1px solid blue; display: block;">
					<input id="userName" style="width:340px; height:50px; display: block;" type="text" placeholder="고객님의 이름을 입력해주세요">
				</div>

				<h4 style="text-align: center;">이메일</h4>

				<div style="border:1px solid red; display: block;">
					<input id="email" style="width:340px; height:50px; display: block;" type="text" placeholder="가입시 등록하신 이메일 주소를 입력해주세요">
				</div>
			</div>
			
		</div>

			<div> 
				<button id="findById" type="submit"
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
					확인
				</button>
			</div>`
	}
}
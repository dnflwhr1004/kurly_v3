var pwsearch = pwsearch || {}

pwsearch = {
	pwsearchs:()=>{
		return `<div><h2 style="text-align: center;">비밀번호 찾기</h2></div>

				<h4 style="text-align: center;">이름</h4>
			<div style="display: inline-block;">
				<div style="border:1px solid blue; display: block;">
					<input style="width:340px; height:50px; display: block;" type="text">
				</div>

				<h4 style="text-align: center;">아이디</h4>
					<div style="display: inline-block;">
						<div style="border:1px solid blue; display: block;">
							<input style="width:340px; height:50px; display: block;" type="text">
						</div>

				<h4 style="text-align: center;">이메일</h4>
					<div style="border:1px solid red; display: block;">
						<input style="width:340px; height:50px; display: block;" type="text">
					</div>

				</div>
			</div>
		</div>

			<div>
				<button type="submit"
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
			</div>`
	}
}
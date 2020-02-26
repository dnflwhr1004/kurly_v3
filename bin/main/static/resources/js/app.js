"use strict"
var app = app || {};

app = (() => {
	let init = () => {
		$('body').html(homeVue.home_nav).append(homeVue.home_main).append(homeVue.home_footer);
		go_join(), go_login(), get_recommands(), goodshop(), smartProducts(), get_recommands_slide()
	}
	let run = () => {
		import('/resources/js/vue/homeVue.js').then(() => { console.log('import homeVue') }),
			import('/resources/js/vue/joinVue.js').then(() => { console.log('import joinVue') }),
			import('/resources/js/vue/loginVue.js').then(() => { console.log('import loginVue') }),
			import('/resources/js/vue/detailVue.js').then(() => { console.log('import detailVue') }),
			import('/resources/js/vue/goodshopVue.js').then(() => { console.log('import goodshopVue') }),
			import('/resources/js/vue/idsearchVue.js').then(() => { console.log('import idsearchVue') }),
			import('/resources/js/vue/pwsearchVue.js').then(() => { console.log('import pwsearchVue') }),
			import('/resources/js/vue/mypageVue.js').then(() => { console.log('import mypageVue') }),
			import('/resources/js/vue/mypageUpdateVue.js').then(() => { console.log('import mypageUpdateVue') }),
			import('/resources/js/member/auth.js').then(() => { console.log('import auth') }),
			import('/resources/js/vue/productListVue.js').then(()=>{console.log('import productListVue.js')})
		init()
	}
	let go_join = () => {
		$('#gojoin').click(e => {
			e.preventDefault()

			$('#body').empty()
			$('#body').html(joinVue.joininfofo)
			$('#idVali').click(e => {
				e.preventDefault()
				alert('asd' + $('#userId').val())
				let userId = $('#userId').val()

				$.getJSON('/members/' + userId + '/existId', d => {
					alert('asdsad' + d)
					if (d == 'SUCCESS') {
						alert('사용가능한 아이디 입니다')
					} else {
						alert('중복된 아이디 입니다')
					}
				})



			})
			$('#joinbtn').click(e => {
				e.preventDefault()

				auth.join({
					userId: $('#userId').val(),
					userName: $('#userName').val(),
					gender: $(`input[name="radio_btn"]:checked`).val(),
					passwd: $('#passwd').val(),
					email: $('#email').val(),
					mobile: $('#mobile').val(),
					birthday: $('#birthday').val(),
					addr: $('#sample6_address').val() + " " + $('#sample6_detailAddress').val()
				})
				if (!$('#userId').val() || !$('#passwd').val()) {
					alert('아이디와 비밀번호를 입력해 주세요')
				}
			})
		})


	}

	let go_login = () => {
		$('#gologin').click(e => {
			e.preventDefault()
			alert('gologin')
			$('#body').empty()
			$('#body').html(loginVue.loginVuego)
			
			$('#search_id').click(e => {
				e.preventDefault()
				alert('search_id')
				$('#body').empty()
				$('#body').html(idsearchVue.idsearchVue_go)
				$('#findById').click(e => {
					e.preventDefault()
					alert('findById');
					console.log('email::' + $('#email').val() + 'userName::' + $('#userName').val())
					$.ajax({
						url: '/members/searchUserById',
						type: 'POST',
						data: JSON.stringify({
							email: $('#email').val(),
							userName: $('#userName').val()
						}),
						dataType: 'json',
						contentType: 'application/json',
						success: d => {

							let userId = d.userId
							alert('find id success ::: ' + userId)
								$('#body').empty()
								$('#body').html(loginVue.loginVuego)
						},
						error: e => {
							alert('잘못된 id 또는 pw 입니다')
						}
					})
				})
			})
			$('#search_pw').click(e => {
				e.preventDefault()
				alert('search_pw')
				$('#body').empty()
				$('#body').html(pwsearchVue.pwsearchVue_go)
				$('#searchPw').click(e => {
					/*alert('findsearchPwsearchPwsearchPw');*/
					console.log('username::' + $('#userName').val() + 'userID::' + $('#userId').val() + 'useremail::' + $('#email').val())
					$.ajax({
						url: '/members/searchPassword',
						type: 'POST',
						data: JSON.stringify({
							email: $('#email').val(),
							userName: $('#userName').val(),
							userId: $('#userId').val()

						}),
						dataType: 'json',
						contentType: 'application/json',
						success: d => {

							let passwd = d.passwd
							alert('귀하의 비밀번호는  ' + passwd + '  입니다')
								$('#body').empty()
								$('#body').html(loginVue.loginVuego)
						},
						error: e => {
							alert('잘못된 id 또는 pw 입니다')
						}
					})
				})
			})
			$('#loginbtn').click(e => {
				e.preventDefault()

				auth.login({
					userId: $('#userId').val(),
					passwd: $('#passwd').val()
				})
				
				
			})

			$('#adminbtn').click(e => {
				e.preventDefault()
				$.ajax({
					url: '/admin/alogin',
					type: 'POST',
					data: JSON.stringify({
						adminId: $('#adminId').val(),
						apasswd: $('#apasswd').val()
					}),
					dataType: 'json',
					contentType: 'application/json',
					success: d => {
						let asd = d.adminId
						alert(JSON.stringify(asd))
						sessionStorage.setItem("adminid", asd)
						sessionStorage.setItem("apasswd", d.apasswd)
						console.log(sessionStorage.getItem("adminid"))
						console.log(sessionStorage.getItem("apasswd"))

						if (asd == null) {
							$('#body').empty()
							$('#body').append(homeVue.home_main);
						} else {
							$('#body').empty()
							$('#body').append(homeVue.home_main);
							$('#gologin_btn').empty()
							$('#gologin_btn').html('<a id="logout1" href="">로그아웃</a>')
						}


					},
					error: e => {
						alert('잘못된 id 또는 pw 입니다')
					}
				})
			})

		})
	}
	let get_recommands_slide = d => {
		$.each([d[0], d[1], d[2], d[3]], (i, j) => {
			$(`<div id="pi${j.prodSeq}" class=" col-md-3" style="padding: 1%;">
			                          <a href="" id="${j.prodSeq}">
                                <img class="card-img-top img-zoom" src="${j.prodImg}" alt="">
                                <span class="name">${j.prodName}</span>
                                <br>
                                <span class="price">${j.price}</span></a>
                            </div>`).appendTo(`#pibody_1`)

				.click(e => {
					e.preventDefault()
					alert('>>> 1')
					$.getJSON(`/products/${j.prodSeq}`, d => {
						alert('>>> 4')
						$(`#body`).empty()

						$(`#body`).html(`<table style="border: 1px solid black;
						height : 500px; width : 1300px;">
				<tr>
					<td style="border:1px solid black;
								width:100px; text-align: center;">
						<img style="height:500px; width:500px;" src ="${d.prodImg}">
					</td>
					<td style="border:1px solid black;
								width:200px;">
						<p>
							<strong>
								${j.prodName}
							</strong><br>
							<span>
							</span>
						</p>
						<p>
							<span>
								${j.price}
							</span>
						</p>
						<div class="info" style = "height:500px;
						border-top: 1px solid #f4f4f4;">
							<dl id="list">
								<dt style="float: left;">
									판매단위 
								</dt>
								<br> 
								<dd style="float: center;">
								${j.saleUnit}
								</dd>
							</dl>
							<dl id="list">
								<dt style="float: left;">
									중량/용량
								</dt>
								<br> 
								<dd style="float: center;">
									400g x 2봉(세트)
								</dd>
							</dl>
							<dl id="list">
								<dt style="float: left;">
									배송구분
								</dt>
								<br> 
								<dd style="float: center;">
									샛별배송 / 택배배송
								</dd>
							</dl>
							<dl id="list">
								<dt style="float: left;">
									포장타입
								</dt>
								<br> 
								<dd style="float: center;">
									냉동/종이포장<br>
									택배배송은 에코포장이 스티로폼으로 대체됩니다.
								</dd>
							</dl>
							<dl id="list">
								<dt style="float: left;">
									알레르기정보 
								</dt>
								<br> 
								<dd style="float: center;">
									${j.prodInfo}
								</dd>
							</dl>
							<div class="option">
								<div class="select" style="text-align: center;">
											<span>
												<button type="button" class="btn_delete">
													<span>개수+-버튼</span>
												</button>
											</span>
											<span>구매수량</span>
								</div>
							</div>
							<br>
							<div style="text-align: center;">
								총 상품금액 : ${j.price}
							</div>
							<div style="text-align: right;">
								<button type="button">장바구니 담기</button>
							</div>
						</div>
					</td>
				</tr>
			</table>
			<br>
			<p>비슷한 상품</p>
			<table style="border: 1px solid black;
						height : 300px; width : 1500px;">
				<tr>
					<td id="" style="border:1px solid black;
								width:300px; text-align: center;">
								<button type="button" style="background : none; border: none;">1</button>
						<div style="height:50px; width:200px; float:center;">
							[올반]육즙가득 왕교자<br>
							2종(2입구성)<br>
							6,480원 
						</div>		
					</td>
					<td id="" style="border:1px solid black;
								width:300px; text-align: center;">2
					<div style="height:50px; width:200px; float:center;">
							[신앙촌]양초간장3종<br>
							4,300원 
						</div>		
					</td>
					<td id="" style="border:1px solid black;
								width:300px; text-align: center;">3
					<div style="height:50px; width:200px; float:center;">
							[국내산100%]라온 현미유<br>
							5,900원 
						</div>		
					</td>
					<td id="" style="border:1px solid black;
								width:300px; text-align: center;">4
					<div style="height:50px; width:200px; float:center;">
							[들국화]단무지 2종<br>
							3,200원 
						</div>		
					</td>
					<td id="" style="border:1px solid black;
								width:300px; text-align: center;">4
					<div style="height:50px; width:200px; float:center;">
							[올반]우리밀 손만두 2종<br>
							6,980원 
						</div>		
					</td>
				</tr>
			</table>
			<ul class="tab" style="margin:0;
						padding:0;
					list-style-type: none;
					">
				<li id="sangse" style="margin: 0 0 0 0;
							padding : 0 0 0 0;
							border:0;
							float: left;">
					<a href="" style="position:relative;
							top:1px;
							width: 168px;
							height:46px;
							line-height: 46px;
							text-align: center;
							display: block;
							color: #4c4c4c;
							font-size: 14px;
							font-family: noto sans;
							background-color: #f0eef1;
							border-bottom: 0;
							border-left: none;">상품설명</a></li>
				
				<li id="reply" style="margin: 0 0 0 0;
							padding : 0 0 0 0;
							border:0;
							float: left;">
				<a href="" style="position:relative;
							top:1px;
							width: 168px;
							height:46px;
							line-height: 46px;
							text-align: center;
							display: block;
							color: #4c4c4c;
							font-size: 14px;
							font-family: noto sans;
							background-color: #f0eef1;
							border-bottom: 0;
							border-left: none;">고객후기</a></li>
				
			</ul>
			<div id="tab1">
				<table style="border: 1px solid black;
							height : 250px; width : 1500px;">
					<tr>
						<td style="border:1px solid black;
							width:200px; height:70px;">
							<img style="height:200px; width:200px;" src="${j.prodImg}">
						</td>
						<td>
							<div>
								<strong>바삭하고 노릇한 전통의 맛 <br>
								${j.prodName}
								</strong>
							</div>	
							<div>
								${j.prodInfo}
							</div>
						</td>
					</tr>
				</table>
			</div>`)
					}) // getJSON end
				})
		})

		$.each([d[4], d[5], d[6], d[7]], (i, j) => {
			$(`<div id="pi${j.prodSeq}" class=" col-md-3" style="padding: 1%;">
			                          <a href="" id="${j.prodSeq}">
                                <img class="card-img-top img-zoom" src="${j.prodImg}" alt="">
                                <span class="name">${j.prodName}</span>
                                <br>
                                <span class="price">${j.price}</span></a>
                            </div>`).appendTo(`#pibody_2`)

				.click(e => {
					e.preventDefault()
					alert('>>> 1')
					$.getJSON(`/products/${j.prodSeq}`, d => {
						alert('>>> 4')
						$(`#body`).empty()

						$(`#body`).html(`<table style="border: 1px solid black;
						height : 500px; width : 1300px;">
				<tr>
					<td style="border:1px solid black;
								width:100px; text-align: center;">
						<img style="height:500px; width:500px;" src ="${d.prodImg}">
					</td>
					<td style="border:1px solid black;
								width:200px;">
						<p>
							<strong>
								${j.prodName}
							</strong><br>
							<span>
							</span>
						</p>
						<p>
							<span>
								${j.price}
							</span>
						</p>
						<div class="info" style = "height:500px;
						border-top: 1px solid #f4f4f4;">
							<dl id="list">
								<dt style="float: left;">
									판매단위 
								</dt>
								<br> 
								<dd style="float: center;">
								${j.saleUnit}
								</dd>
							</dl>
							<dl id="list">
								<dt style="float: left;">
									중량/용량
								</dt>
								<br> 
								<dd style="float: center;">
									400g x 2봉(세트)
								</dd>
							</dl>
							<dl id="list">
								<dt style="float: left;">
									배송구분
								</dt>
								<br> 
								<dd style="float: center;">
									샛별배송 / 택배배송
								</dd>
							</dl>
							<dl id="list">
								<dt style="float: left;">
									포장타입
								</dt>
								<br> 
								<dd style="float: center;">
									냉동/종이포장<br>
									택배배송은 에코포장이 스티로폼으로 대체됩니다.
								</dd>
							</dl>
							<dl id="list">
								<dt style="float: left;">
									알레르기정보 
								</dt>
								<br> 
								<dd style="float: center;">
									${j.prodInfo}
								</dd>
							</dl>
							<div class="option">
								<div class="select" style="text-align: center;">
											<span>
												<button type="button" class="btn_delete">
													<span>개수+-버튼</span>
												</button>
											</span>
											<span>구매수량</span>
								</div>
							</div>
							<br>
							<div style="text-align: center;">
								총 상품금액 : ${j.price}
							</div>
							<div style="text-align: right;">
								<button type="button">장바구니 담기</button>
							</div>
						</div>
					</td>
				</tr>
			</table>
			<br>
			<p>비슷한 상품</p>
			<table style="border: 1px solid black;
						height : 300px; width : 1500px;">
				<tr>
					<td id="" style="border:1px solid black;
								width:300px; text-align: center;">
								<button type="button" style="background : none; border: none;">1</button>
						<div style="height:50px; width:200px; float:center;">
							[올반]육즙가득 왕교자<br>
							2종(2입구성)<br>
							6,480원 
						</div>		
					</td>
					<td id="" style="border:1px solid black;
								width:300px; text-align: center;">2
					<div style="height:50px; width:200px; float:center;">
							[신앙촌]양초간장3종<br>
							4,300원 
						</div>		
					</td>
					<td id="" style="border:1px solid black;
								width:300px; text-align: center;">3
					<div style="height:50px; width:200px; float:center;">
							[국내산100%]라온 현미유<br>
							5,900원 
						</div>		
					</td>
					<td id="" style="border:1px solid black;
								width:300px; text-align: center;">4
					<div style="height:50px; width:200px; float:center;">
							[들국화]단무지 2종<br>
							3,200원 
						</div>		
					</td>
					<td id="" style="border:1px solid black;
								width:300px; text-align: center;">5
					<div style="height:50px; width:200px; float:center;">
							[올반]우리밀 손만두 2종<br>
							6,980원 
						</div>		
					</td>
				</tr>
			</table>
			<ul class="tab" style="margin:0;
						padding:0;
					list-style-type: none;
					">
				<li id="sangse" style="margin: 0 0 0 0;
							padding : 0 0 0 0;
							border:0;
							float: left;">
					<a href="" style="position:relative;
							top:1px;
							width: 168px;
							height:46px;
							line-height: 46px;
							text-align: center;
							display: block;
							color: #4c4c4c;
							font-size: 14px;
							font-family: noto sans;
							background-color: #f0eef1;
							border-bottom: 0;
							border-left: none;">상품설명</a></li>
				
				<li id="reply" style="margin: 0 0 0 0;
							padding : 0 0 0 0;
							border:0;
							float: left;">
				<a href="" style="position:relative;
							top:1px;
							width: 168px;
							height:46px;
							line-height: 46px;
							text-align: center;
							display: block;
							color: #4c4c4c;
							font-size: 14px;
							font-family: noto sans;
							background-color: #f0eef1;
							border-bottom: 0;
							border-left: none;">고객후기</a></li>
				
			</ul>
			<div id="tab1">
				<table style="border: 1px solid black;
							height : 250px; width : 1500px;">
					<tr>
						<td style="border:1px solid black;
							width:200px; height:70px;">
							<img style="height:200px; width:200px;" src="${j.prodImg}">
						</td>
						<td>
							<div>
								<strong>바삭하고 노릇한 전통의 맛 <br>
								${j.prodName}
								</strong>
							</div>	
							<div>
								${j.prodInfo}
							</div>
						</td>
					</tr>
				</table>
			</div>`)
					}) // getJSON end
				})
		})
	}


	/* }

						$(`#reply`).click(e => {
								e.preventDefault()
								$.getJSON('/review/reviewlist',d=>{
									let asd = d
									alert(JSON.stringify(asd))
							$(`<div id="tab2">
								<table style="border: 1px solid black;
											height : 250px; width : 1500px;">
									<tr>
										<td id="wrr" style="border:1px solid black;
											width:1500px; height:250px;">
											${asd[i].update_date} ${asd[i].comments} 
											<div>
												<input id="writeRev" type="text" style="width:70%; height:50px;">
												<button id="gowrite" style="width: 5%; height:50px; background-color: #5f0080;color: #fff;border-radius: 5px;">확인</button>
											</div>
										</td>
									</tr>
								</table>
							</div>`).appendTo(`#tab1`)
									$(`#gowrite`).click(e=>{
										e.preventDefault()
										alert('댓글입력')
										$.ajax({
											url:'/review/',
											type : 'POST',
											data:JSON.stringify({
												comments : $('#comments').val()
											}),
											dataType: 'json',
											contentType:'application/json',
											success : d=>{
												let asd = d.comments
												alert(JSON.stringify(asd))
											},
											error : e=>{
												alert('댓글입력 오류')
											}
										})
							
									})
								})
							})
					})
			} 
})*/


	let get_recommands = () => {
		$.getJSON(`/products/recommands`, d => {
			get_recommands_slide(d)
		})
	}

	let goodshop = () => {
		$('#good_shop').click(e => {
			e.preventDefault()
			$('#body').html(goodshopVue.goodshopVue_body)
		})
	}

/**메인 알뜰상품  클릭 */
let smartProducts = ()=>{
		$(`#todayNewProductBtn`).click(e=>{
			e.preventDefault()
			alert('smart Prodct');
			$('#body').empty()
			$('#body').append(prodcutListVue.prodcutListVue_go);
		})
	}
	/**메인 알뜰상품  클릭 end */

	return { run }
})()

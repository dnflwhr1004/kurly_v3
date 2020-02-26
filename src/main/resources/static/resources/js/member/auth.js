var auth = {} || auth
auth = (() => {
	let init = () => { }
	let onCreate = () => { }
	let setContentView = () => {

	}
	let join = json => {
		$.ajax({
			url: '/members/',
			type: 'POST',
			data: JSON.stringify(json),
			dataType: 'json',
			contentType: 'application/json',
			success: d => {

				alert('join 성공: ' + d)
				let asd = d.userId
				alert(JSON.stringify(asd))

				if (asd == null) {
					$('#body').empty()
					$('#body').append(loginVue.loginVuego)
					$('#loginbtn').click(e => {
						e.preventDefault()
						$.ajax({
							url: '/members/login',
							type: 'POST',
							data: JSON.stringify({
								userId: $('#userId').val(),
								passwd: $('#passwd').val()
							}),
							dataType: 'json',
							contentType: 'application/json',
							success: d => {
								let asd = d.userId
								alert(JSON.stringify(asd))
								sessionStorage.setItem("userid", asd)
								sessionStorage.setItem("passwd", d.passwd)
								console.log(sessionStorage.getItem("userid"))
								console.log(sessionStorage.getItem("passwd"))

								if (asd == null) {
									$('#body').empty()
									$('#body').append(homeVue.home_main);
								} else {
									$('#body').empty()
									$('#body').append(homeVue.home_main);
									$('#gologin_btn').empty()
									$('#gologin_btn').html('<a id="logout" href="">로그아웃</a>').append('<a id="mypage" href="">마이페이지</a>')
								}


							},
							error: e => {
								alert('잘못된 id 또는 pw 입니다')
							}
						})
					})
				} else {
					alert('가입실패')
				}
			},
			error: e => {
				alert('필수값을 입력해주세요')
			}
		})

	}
	let login = json => {
		$.ajax({
			url: '/members/login',
			type: 'POST',
			data: JSON.stringify(json),
			dataType: 'json',
			contentType: 'application/json',
			success: d => {
				let asd = d.userId
				alert(JSON.stringify(asd))
				sessionStorage.setItem("userid", asd)
				sessionStorage.setItem("passwd", d.passwd)
				console.log(sessionStorage.getItem("userid"))
				console.log(sessionStorage.getItem("passwd"))

				if (asd == null) {
					$('#body').empty()
					$('#body').append(homeVue.home_main);
				} else {
					$('#body').empty()
					$('#body').append(homeVue.home_main);
					$('#gologin_btn').empty()
					$('#gologin_btn').html('<a id="logout" href="">로그아웃</a>').append('<a id="mypage" href="">마이페이지</a>')
					mypage()
					get_recommands_slide()

				}
			},
			error: e => {
				alert('잘못된 id 또는 pw 입니다')
			}
		})
	}

	let mypage = () => {
		$('#mypage').click(e => {
			alert('mypage')
			e.preventDefault()
			$('#body').empty()
			$('#body').html(mypageVue.mypageVuego)
			console.log('ghkrdlsdf::' + sessionStorage.getItem("userid"))
			$.ajax({
				url: `/members/selectNIP`,
				type: 'POST',
				data: JSON.stringify({
					userId: sessionStorage.getItem("userid"),
					passwd: sessionStorage.getItem("passwd")
				}),
				dataType: 'json',
				contentType: 'application/json',
				success: d => {
					alert('성공이냐')
					$('#userName').text(d.userName)
					$('#userid').text(d.userId)

					$('#validpasswd').click(e => {
						e.preventDefault()
						if ($('#userpasswd').val() == d.passwd) {
							alert('성공' + d.passwd)
							$('#body').empty()
							$('#body').html(mypageUpdateVue.maypageUpdateVuego)
							$('#userName').text(d.userName);
							$('#userId').attr('value', d.userId);
							$('#usrName').attr('placeholder', d.userName);
							$('#usrEmail').attr('placeholder', d.email)
							$('#usrMobile').attr('placeholder', d.mobile)
							/**  check before update email  */
							$('#emailVali').click(e => {
								e.preventDefault()
								alert('email validation!!')
								if ($('#usrEmail').val() === "" || $('#usrEmail').val() === d.email) {
									alert('no changes user email')
									$('#usrEmail').val(d.email);
									console.log($('#usrEmail').val())
								} else {
									alert('user changed email')
									/** email overlap check */
									$.getJSON(`/members/checkEmail`, d => {
										console.log(d)
										console.log(d.length)
										console.log(d[0].valueOf())
										console.log(d[0].email)
										for (var i = 0; i < d.length; i++) {
											console.log('i value::' + i);
											console.log('ID check!! :' + d[i].email)
											if ($('#usrEmail').val() == d[i].email) {
												alert('이미 존재하는 아이디 입니다.')
												return false;
											} else {

												alert('사용가능한 아이디 입니다.')
											}
										}

									})

								}
							})
							/**  check before update email end  */
							/**delete account */
							$('#deleteAccount').click(e => {
								e.preventDefault()
								alert('회원탈퇴')
							})
							/**delete account end*/
							/**update user Detail */
							$('#updateDetail').click(e => {
								e.preventDefault()
								if($('#currentPass').val() == d.passwd && $('#userName').text(d.userName)){
									$.ajax({
									url:`/members/{userId}`,
									type:'PUT',
									data: JSON.stringify({
										passwd : d.passwd,
										mobile : d.mobile,
										email : d.email
									}),
									dataType : 'json',
									contentType:'application/json',
									success : d=>{
										alert('회원 정보 수정 되었습니다.')
									}
								})
							}
							})
							/**update user Detail end */
						} else {
							alert('비밀번호가 일치하지 않습니다')
						}
					})

				},
				error: e => {
					alert('실패냐')
				}
			})
		})
	}

	return { join, login }
})()
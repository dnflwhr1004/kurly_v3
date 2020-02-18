var login = login || {}

login = (()=>{
	const WHEN_ERR = '호출하는 login js를 찾을 수 없습니다 .'
	
	let onCreate=()=>{
		$.when(
			import('/resources/js/vue/loginVue.js').then(()=>{
			})
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}

	let setContentView=()=>{
		$('body').html(homeVueVue.homeMain).appendTo(loginVue.loginVuego)
	}

	return {onCreate}
})()
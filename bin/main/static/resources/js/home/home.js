"use strict"
var home = home || {} 

home = (()=>{
	const WHEN_ERR = '호출하는 mainHome js를 찾을 수 없습니다 .'
	let join_js,login_js
	let init=()=>{
		
		join_js = '/resources/js/home/join.js'
		login_js = '/resources/js/home/login.js'

	}
	
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(join_js),
			$.getScript(login_js)

		)
		.done(()=>{
			setContentView()
			gogojoin()
			gogologin()
			homeevent()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
		
	}

	let setContentView=()=>{
		$('body').html(homeVue.home_nav).append(homeVue.home_main).append(homeVue.homeVue);
	}

	let gogojoin=()=>{
		$('#gojoin').click(e=>{
			e.preventDefault()
			alert('asd')
			join.onCreate()
			
		})
	}

	let gogologin=()=>{
		$('#gologin').click(e=>{
			e.preventDefault()
			alert('asd')
			login.onCreate()
		})
	}


	return {onCreate}
})()
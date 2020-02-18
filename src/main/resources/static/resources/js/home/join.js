var join = join || {}

join = (()=>{
	const WHEN_ERR = '호출하는 mainHome js를 찾을 수 없습니다 .'
	
	let onCreate=()=>{
		$.when(
			import('/resources/js/vue/joinVue.js').then(()=>{
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
		$('body').html(homeVueVue.homeMain).appendTo(joinVue.joininfofo)
	}

	return {onCreate}
})()
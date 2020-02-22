
var goodshop = goodshop || {}

login = (()=>{
	const WHEN_ERR = '호출하는 goodshop js를 찾을 수 없습니다 .'
	
	let onCreate=()=>{
		$.when(
			import('/resources/js/vue/goodshopVue.js').then(()=>{
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
		$('body').html(homeVueVue.homeMain).appendTo(goodshopVue.goodshopVue_body)
	}

	return {onCreate}
})()
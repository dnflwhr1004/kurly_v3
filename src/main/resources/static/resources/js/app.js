"use strict"
var app = app || {};

app = (()=>{
	let init=()=>{
		import('/resources/js/vue/homeVue.js').then(()=>{

			$(homeVue.mainimg()).appendTo('.container')
			$(homeVue.recommand()).appendTo('.mainImg')
			detail()
			join() 
			login()
			join2()
			idsearch()
		})

	}
	let run=()=>{
		alert('run')
		init()
	}
	let setContentView=()=>{

	}

	let detail=()=>{
		$('#product1_btn').click(e=>{
				e.preventDefault()
				$('.container').empty()
				import('/resources/js/vue/detailVue.js').then(()=>{
					$(detailVue.detailinfofo1()).appendTo('.container')
				})
			})
		
		$('#product2_btn').click(e=>{
				e.preventDefault()
				$('.container').empty()
				import('/resources/js/vue/detailVue.js').then(()=>{
					$(detailVue.detailinfofo2()).appendTo('.container')
				})
		})

		$('#product3_btn').click(e=>{
				e.preventDefault()
				$('.container').empty()
				import('/resources/js/vue/detailVue.js').then(()=>{
					$(detailVue.detailinfofo3()).appendTo('.container')
				})
		})

		$('#product4_btn').click(e=>{
				e.preventDefault()
				$('.container').empty()
				import('/resources/js/vue/detailVue.js').then(()=>{
					$(detailVue.detailinfofo4()).appendTo('.container')
				})
		})
	}

	let join=()=>{
		$('#gojoin').click(e=>{
			e.preventDefault()
			$('.container').empty()
			import('/resources/js/vue/joinVue.js').then(()=>{
			$(joinVue.joininfofo()).appendTo('.container')
		})
		})
	}

	let login=()=>{
		$('#gologin').click(e=>{
			e.preventDefault()
			$('.container').empty()
			import('/resources/js/vue/loginVue.js').then(()=>{
				$(loginVue.loginVuego()).appendTo('.container')
			})
		})
	}

	let join2=()=>{
		$('#go_join').click(e=>{
			e.preventDefault()
			$('#loginform').empty()
			import('/resources/js/vue/joinVue.js').then(()=>{
				$(joinVue.joininfofo()).appendTo('.container')
			})
		})
	}

	let idsearch=()=>{
		$('#search_id').click(e=>{
			e.preventDefault()
			alert('idsearch')
			$('loginform').empty()
			import('/resources/js/vue/idsearchVue.js').then(()=>{
				$(idsearchVue.idsearchVue_go()).appendTo('.container')
			})
		})
	}
	return {run}
})()
"use strict"
var app = app || {};

app = (()=>{
	let init=()=>{
		import('/resources/js/vue/homeVue.js').then(()=>{

			$(homeVue.mainimg()).appendTo('.container')
			$(homeVue.recommand()).appendTo('.mainImg')
		})
	}
	let run=()=>{
		alert('run')
		init()
	}
	let setContentView=()=>{

	}

	return {run}
})()
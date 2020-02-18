"use strict"
var app = app || {};

app = (()=>{
	const WHEN_ERR = '호출하는 appJS 파일을 찾지 못했습니다.'
	
	let run=()=>{
		onCreate()	
	}

	let onCreate=()=>{
		$.when(
			import('/resources/js/home/home.js').then(()=>{
			})
		)
		.done(()=>{
			home.onCreate()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})}
	


	return {run}
})()
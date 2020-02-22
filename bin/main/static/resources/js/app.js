"use strict"
var app = app || {};

app = (()=>{
   let init=()=>{
      
      import('/resources/js/vue/homeVue.js').then(()=>{
         $('body').html(homeVue.home_nav).append(homeVue.home_main).append(homeVue.home_footer);
         gogojoin(),gogologin(),details(),goodshop()
      }),
      import('/resources/js/vue/joinVue.js').then(()=>{
         
      }),
      import('/resources/js/vue/loginVue.js').then(()=>{
      }),
      import('/resources/js/vue/detailVue.js').then(()=>{

      }),
      import('/resources/js/vue/goodshopVue.js').then(()=>{

      }),
      import('/resources/js/vue/idsearchVue.js').then(()=>{
         
      }),
      import('/resources/js/vue/pwsearchVue.js').then(()=>{

      })
   }
   let run=()=>{
      init()
   }
   
   let gogojoin=()=>{
      $('#gojoin').click(e=>{
         e.preventDefault()
       $('#body').empty()
		 $('#body').html(joinVue.joininfofo)
		 $('#joinbtn').click(e=>{
		  e.preventDefault()
		  $.ajax({
			  url:'/member/join',
			  type:'POST',
			  data:JSON.stringify({
				userId:$('#userId').val(),
				userName:$('#userName').val(),
            gender:$('#gender').val(),
            passwd:$('#passwd').val(),
            email:$('#email').val(),
            mobile:$('#mobile').val(),
            birthday:$('#birthday').val(),
            addr:$('#addr').val()
			  }),
           dataType:'json',
           contentType:'application/json',
			  success: d=>{
				  let asd = d.userId
				  alert(JSON.stringify(asd))
				if(asd ==null){
               $('#body').empty()
               $('#body').append(loginVue.loginVuego)
               $('#loginbtn').click(e=>{
         e.preventDefault()
         $.ajax({
         url:'/member/login',
         type:'POST',
         data:JSON.stringify({
            userId:$('#userId').val(),
            passwd:$('#passwd').val()
         }),
         dataType:'json',
         contentType:'application/json',
         success: d=>{
            let asd = d.userId
            alert(JSON.stringify(asd))
            sessionStorage.setItem("userid",asd)
            sessionStorage.setItem("passwd",d.passwd)
            console.log(sessionStorage.getItem("userid"))
            console.log(sessionStorage.getItem("passwd"))
            
            if(asd ==null){
               $('#body').empty()
               $('#body').append(homeVue.home_main);
            }else{
               $('#body').empty()
               $('#body').append(homeVue.home_main);
               $('#gologin_btn').empty()
               $('#gologin_btn').html('<a id="logout" href="">로그아웃</a>')
            }
            
            
         },
         error : e=>{
            alert('잘못된 id 또는 pw 입니다')
         }
      })
      })
            }else{
				alert('가입실패')
			}
			  },
			  error : e=>{
				  alert('필수값을 입력해주세요')
			  }
		  })
	  })
	  })
	  
	  
   }

   let gogologin=()=>{
      $('#gologin').click(e=>{
         e.preventDefault()
         alert('gologin')
         $('#body').empty()
         $('#body').html(loginVue.loginVuego)
         
      $('#search_id').click(e=>{
         e.preventDefault()
         alert('search_id')
         $('#body').empty()
         $('#body').html(idsearchVue.idsearchVue_go)
      })
      $('#search_pw').click(e=>{
         e.preventDefault()
         alert('search_pw')
         $('#body').empty()
         $('#body').html(pwsearchVue.pwsearchVue_go)
      })
      $('#loginbtn').click(e=>{
         e.preventDefault()
         $.ajax({
         url:'/member/login',
         type:'POST',
         data:JSON.stringify({
            userId:$('#userId').val(),
            passwd:$('#passwd').val()
         }),
         dataType:'json',
         contentType:'application/json',
         success: d=>{
            let asd = d.userId
            alert(JSON.stringify(asd))
            sessionStorage.setItem("userid",asd)
            sessionStorage.setItem("passwd",d.passwd)
            console.log(sessionStorage.getItem("userid"))
            console.log(sessionStorage.getItem("passwd"))
            
            if(asd ==null){
               $('#body').empty()
               $('#body').append(homeVue.home_main);
            }else{
               $('#body').empty()
               $('#body').append(homeVue.home_main);
               $('#gologin_btn').empty()
               $('#gologin_btn').html('<a id="logout" href="">로그아웃</a>')
            }
            
            
         },
         error : e=>{
            alert('잘못된 id 또는 pw 입니다')
         }
      })
      })
      
      })
   }

   let details=()=>{
      $('#detail1').click(e=>{
         e.preventDefault()
         $('#body').empty()
         $('#body').html(detailVue.detailinfofo1)
      }),

      $('#detail2').click(e=>{
         e.preventDefault()
         $('#body').empty()
         $('#body').html(detailVue.detailinfofo2)
      }),

      $('#detail3').click(e=>{
         e.preventDefault()
         $('#body').empty()
         $('#body').html(detailVue.detailinfofo3)
      }),
      $('#detail4').click(e=>{
         e.preventDefault()
         $('#body').empty()
         $('#body').html(detailVue.detailinfofo4)
      })
   }

   let goodshop=()=>{
      $('#good_shop').click(e=>{
         e.preventDefault()
         $('#body').html(goodshopVue.goodshopVue_body)
      })
   }

   

   return {run}
})()
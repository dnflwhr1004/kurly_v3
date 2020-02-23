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

      $('#adminbtn').click(e=>{
         e.preventDefault()
      $.ajax({
         url:'/admin/alogin',
         type:'POST',
         data:JSON.stringify({
            adminId:$('#adminId').val(),
            apasswd:$('#apasswd').val()
         }),
         dataType:'json',
         contentType:'application/json',
         success: d=>{
            let asd = d.adminId
            alert(JSON.stringify(asd))
            sessionStorage.setItem("adminid",asd)
            sessionStorage.setItem("apasswd",d.apasswd)
            console.log(sessionStorage.getItem("adminid"))
            console.log(sessionStorage.getItem("apasswd"))
            
            if(asd ==null){
               $('#body').empty()
               $('#body').append(homeVue.home_main);
            }else{
               $('#body').empty()
               $('#body').append(homeVue.home_main);
               $('#gologin_btn').empty()
               $('#gologin_btn').html('<a id="logout1" href="">로그아웃</a>')
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
      $.getJSON('/product/prodlist',d=>{
         let asd = d.prodlist
         $.each(asd,(i,j)=>{
            if(i < 8){
               $(`<div id="pi1" class=" col-md-3" style="padding: 1%;">
                                <img class="card-img-top img-zoom" src="${j.prod_img}" alt="">
                                <span class="name"><a id="${j.prodseq}" href="">${j.prod_name}</a></span>
                                <br>
                                <span class="price">${j.price}</span>
                            </div>`).appendTo(`#pibody`)
            }
         $('#1').click(e=>{
         e.preventDefault()
         for(let a = 1; a < 100; a++) {
            if(asd[i].prodseq==a) {
               $(`#detailinfo1`).empty()
               $(`<table style="border: 1px solid black;
						height : 500px; width : 1300px;">
				<tr>
					<td style="border:1px solid black;
								width:100px; text-align: center;">
						<img src ="${j.prod_img}">
					</td>
					<td style="border:1px solid black;
								width:200px;">
						<p>
							<strong>
								${j.prod_name}
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
								${j.sale_unit}
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
									${j.prod_info}
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

			<ul style="margin:0;
						padding:0;
					list-style-type: none;
					">
				<li style="margin: 0 0 0 0;
							padding : 0 0 0 0;
							border:0;
							float: left;">
					<a href="" id="prodsangse" style="position:relative;
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
				
				<li style="margin: 0 0 0 0;
							padding : 0 0 0 0;
							border:0;
							float: left;">
				<a href="" id="reviews" style="position:relative;
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
			
			<table style="border: 1px solid black;
						height : 250px; width : 1500px;">
				<tr>
					<td style="border:1px solid black;
						width:200px; height:70px;">
						<img src="${j.prod_img}">
					</td>
					<td>
						<div>
							<strong>바삭하고 노릇한 전통의 맛 <br>
							${j.prod_name}
							</strong>
						</div>	
						<div>
							${j.prod_info}
						</div>
					</td>
				</tr>
			</table>
		</div>`).appendTo(`#detailinfo1 `)
      }else{
         asd[i].prodseq+1
      }
         }
         
      })
         })
        
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
"use strict"
var prodcutListVue = prodcutListVue || {}

prodcutListVue = {
	prodcutListVue_go:()=>{
		return ` <div class="contianer" style="padding: 6%">
       <h1 style="font-size: 18px;letter-spacing: -1px;">알뜰쇼핑</h1>
       <span style="font-size: 13px;color: #5f0080; border-bottom: solid 1px; border-bottom-color: #5f0080;padding: 1%;letter-spacing: -1px;font-weight: 500;">전체보기</span>
       <!-- 알뜰상품 리스트 시작! -->
       <div class="row" style="padding: 3%;">
            <!-- 리스트가져오세여! -->
             <div id="pi1" class=" col-md-4" style="padding: 1%;">
                 <img style="position: relative" class="card-img-top img-zoom" src="/resources/img/products/dishwasher.jpg" alt=""><a href="">
                 <img style="position: absolute;top: 70%;left:80% " src="https://res.kurly.com/pc/service/common/1908/ico_list_add_cart.png" alt=""></a>
                 <span class="name"><a href="">[아오엔오투] 젖병 & 주방세제 2종 </a></span>
                 <br>
                <span class="price"> 11,400원</span>
            </div>             
            <div id="pi1" class=" col-md-4" style="padding: 1%;">
                 <img style="position: relative" class="card-img-top img-zoom" src="/resources/img/products/1582270961992l0.jpg" alt=""><a href="">
                 <img style="position: absolute;top: 70%;left:80% " src="https://res.kurly.com/pc/service/common/1908/ico_list_add_cart.png" alt=""></a>
                 <span class="name"><a href="">[기획특가][레인보우샵] 과탄산소다 프리미엄 유로1kg (파우치) 3팩</a></span>
                 <br>
                <span class="price"> 9,900원</span>
            </div>             
            <div id="pi1" class=" col-md-4" style="padding: 1%;">
                 <img style="position: relative" class="card-img-top img-zoom" src="/resources/img/products/1582263373156l0.jpg" alt=""><a href="">
                 <img style="position: absolute;top: 70%;left:80% " src="https://res.kurly.com/pc/service/common/1908/ico_list_add_cart.png" alt=""></a>
                 <span class="name"><a href="">[부농산업] 무항생제 1등급 한우 불고기 200g (냉장) </a></span>
                 <br>
                <span class="price"> 11,400원</span>
            </div>
       </div>
       <!-- 알뜰상품 리스트 끝읏! -->
        <!--pagination start-->
               <div class="row justify-content-md-center" >
                   <nav class="col-md-" aria-label="Page navigation example"  >
                      <ul class="pagination" style="color: #333;">
                        <li class="page-item" style="color: #333;">
                          <a class="page-link" href="#" aria-label="Previous" style="color: #333;">
                            <span aria-hidden="true">&laquo;</span>
                          </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#" style="color: #333;">1</a></li>
                        <li class="page-item"><a class="page-link" href="#" style="color: #333;">2</a></li>
                        <li class="page-item"><a class="page-link" href="#" style="color: #333;">3</a></li>
                        <li class="page-item">
                          <a class="page-link" href="#" aria-label="Next" style="color: #333;">
                            <span aria-hidden="true">&raquo;</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
               </div>
                
            <!—pagination end—>
       
    </div>`
	}
}
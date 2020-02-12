"use strict"
var homeVue = homeVue || {}

homeVue = {

	mainimg :()=>{
		return `<div class="mainImg">
			<div id="main" style="width:1500px; height:300px; border: 1px solid black;
								text-align: center;">
				메인이미지
			</div>

		</div>`
	},

	recommand :()=>{
		return `<div style="height:50px; width : 1500px; text-align: center;">
			이 상품 어때요? 
		</div>

		<div>
			<table style="border: 1px solid black;
						height : 500px; width : 1500px;">
				<tr>
					<td id="product1" style="border:1px solid black;
								width:300px; text-align: center;">
								<button type="button" style="background : none; border: none;">1</button>
					</td>
					<td id="product2" style="border:1px solid black;
								width:300px; text-align: center;">2

					</td>
					<td id="product3" style="border:1px solid black;
								width:300px; text-align: center;">3

					</td>
					<td id="product4" style="border:1px solid black;
								width:300px; text-align: center;">4

					</td>
				</tr>
			</table>
		</div>`
	}
}
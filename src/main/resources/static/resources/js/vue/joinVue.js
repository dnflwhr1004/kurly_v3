"use strict"
var joinVue = joinVue || {}

joinVue = {
	joininfofo :()=>{
		return `<style>
        .opacity-text{
            opacity: 0;
        }
     ::placeholder {
      color: #D4D4D4;
     font-size: 12px;
      padding: 1%;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
     color: #D4D4D4;
        padding: 1%;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
     color: #D4D4D4;
        padding: 1%;
    }
        
</style>
  <!--join view -->
   <div  style="background-color:#f9f9f9;padding:4%;" >
       <div class="container" style="background-color:#fff;">
        <h1 style="letter-spacing: -2px; text-align: center">회원가입</h1>
        <p class="float-right">*필수입력사항</p>
        <br>
        <div class="row" style="text-align: center;">
            <div class="col-md-4" style="padding-top: 1%">*아이디</div>
            <div class="col-md-4"><input id="userId" name="userId" type="text" value maxlength="16"
            label="id" style="width:100%;height:40px;border-radius: 5px;  border: 0.5px solid #D4D4D4;" placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합">
            </div>
            <div class="col-md-4">
                <button id="idVali" type="button" style="width: 150px; height:40px;background-color: #5f0080;color: #fff;border-radius: 5px;">
                중복확인</button>
            </div>
            
            <div class="col-md-4" style="padding-top: 1%;margin-top: 3%; ">
                * 비밀 번호
            </div>
            <div class="col-md-4"  style="margin-top: 3%;">
             <input id="passwd" type="text" value maxlength="16" 
            label="password"  style="width:100%; height:40px;margin-top: 2%;border-radius: 5px;  border: 0.5px solid #D4D4D4; " placeholder="비밀번호를 입력해주세요">
            </div>
            <div class="col-md-4 opacity-text" style="margin-top: 3%;">d</div>
            <div class="col-md-4" style="padding-top: 1%;margin-top: 3%;">
                *비밀번호 확인
            </div>
            <div class="col-md-4" style="margin-top: 3%;" >
             <input id="passwd2" type="text" value maxlength="16"
            label="password"  style="width:100%; height:40px;margin-top: 2%; border-radius: 5px;  border: 0.5px solid #D4D4D4;" placeholder="비밀번호를 한번 더 입력해주세요">
            </div>
            <div class="col-md-4 opacity-text" style="margin-top: 3%;">d</div>
            <div class="col-md-4" style="padding-top: 1%;margin-top: 3%;">
                *이름
            </div>
            <div class="col-md-4" style="margin-top: 3%;" >
             <input id="userName" type="text" value maxlength="16"
            label="password"  style="width:100%; height:40px; margin-top: 1%;border-radius: 5px;  border: 0.5px solid #D4D4D4;" placeholder="고객님의 이름을 입력해주세요">
            </div>
            <div class="col-md-4 opacity-text">d</div>
            <div class="col-md-4" style="padding-top: 1%;margin-top: 3%;">
                *이메일
            </div>
            <div class="col-md-4" style="margin-top: 3%;" >
             <input id="email" type="text" 
            label="email"  style="width:100%; height:40px; margin-top: 1%;border-radius: 5px;  border: 0.5px solid #D4D4D4;" placeholder="예: marketkurly@kurly.com">
            </div>
            <div class="col-md-4 opacity-text"style="margin-top: 3%;">d</div>
            <div class="col-md-4" style="padding-top: 1%;margin-top: 3%;">
                *휴대폰
            </div>
            <div class="col-md-4"  style="margin-top: 3%;">
             <input id="mobile" type="text" 
            label="mobile"  style="width:100%; height:40px; margin-top: 1%;border-radius: 5px;  border: 0.5px solid #D4D4D4;" placeholder="숫자만 입력해주세요">
            </div>
            <div class="col-md-4" style="margin-top: 3%;">
                <button type="button" style="width: 150px; height:40px;background-color: #DDD;color: #fff;border-radius: 5px;letter-spacing: -1px;">
                인증번호받기</button>
            </div>
            <div class="col-md-4 opacity-text"style="margin-top: 3%;">d</div>
            <div class="col-md-4"  style="margin-top: 3%;">
             <input type="text" 
            label="mobile"  style="width:100%; height:40px; margin-top: 1%;border-radius: 5px;  border: 0.5px solid #D4D4D4;" placeholder="">
            </div>
            <div class="col-md-4" style="margin-top: 3%;">
                <button type="button" style="width: 150px; height:40px;background-color:#fff;color:#DDD;border-radius: 5px;letter-spacing: -1px;">
                인증번호확인</button>
            </div>
            <div class="col-md-4" style="padding-top: 1%;margin-top: 3%;">
                *배송주소
            </div>
            <div class="col-md-4" style="margin-top: 3%;">
                <input style="width: 63%; height:40px;border-radius: 5px; " type="text" id="sample6_postcode" placeholder="우편번호">
                <input style="width: 35%; height:40px;border-radius: 5px;background-color: #5f0080;color: #fff;"  type="button" onclick="sample6_execDaumPostcode()" value="우편번호 찾기"><br>
                <input style="margin-top: 3%;width: 100%; height:40px;border-radius: 5px;" type="text" id="sample6_address" placeholder="주소"><br>
                <input style="margin-top: 3%;width: 100%; height:40px;border-radius: 5px;"  type="text" id="sample6_detailAddress" placeholder="상세주소">
                <input style="margin-top: 3%;width: 100%; height:40px;border-radius: 5px;"  type="text" id="sample6_extraAddress" placeholder="참고항목">
            </div>
            <div class="col-md-4" style="margin-top: 3%;">
                <p  style="font-size: 12px; color: #333;padding: 5%"> 배송가능여부를 확인할 수 있습니다.</p>
            </div>
            <div class="col-md-4" style="padding-top: 1%;margin-top: 3%;">
                *성별
            </div>
            <div class="col-md-4" style="margin-top: 3%;">
               <div class="row" style="margin-top: 3%;"> 
                    <input type="radio" id="men" name="radio_btn" value="남자" aria-label="남자"><p style="margin-left:3%;margin-right: 8%; margin-top: -1%;font-size: 14px">남자</p>
                    <input type="radio" id="women" name="radio_btn" value="여자" aria-label="여자"><p style="margin-left:3%;margin-right: 8%; margin-top: -1%;font-size: 14px">여자</p>
                    <input type="radio" id="no" name="radio_btn" value="선택안함" aria-label="선택안함"><p style="margin-left:3%;margin-right: 8%; margin-top: -1%;font-size: 14px">선택안함</p>
               </div>
            </div>
            <div class="col-md-4 opacity-text"style="margin-top: 3%;">d</div>
            <div class="col-md-4" style="padding-top: 1%;margin-top: 3%;">
                *생년월일
            </div>
            <div class="col-md-4" style="margin-top: 3%;" >
             <input id="birthday" type="date" value="xxx" min="yyy" max="zzz" label="birthday" style="width:100%; height:40px;margin-top: 2%; border-radius: 5px;  border: 0.5px solid #D4D4D4;" >
            </div>
            <div class="col-md-4 opacity-text"style="margin-top: 3%;">d</div>
            <div class="col-md-4 opacity-text"style="margin-top: 3%;">d</div>
            <div class="col-md-4 opacity-text"style="margin-top: 3%;">d</div>
            <div class="col-md-4 opacity-text"style="margin-top: 3%;">d</div>
            
        </div>
    </div>
    <br >
    <div class="container" style="background-color: #fff;">
       <div class="row">
           <h1 style="color: #333;font-size: 20px;">*이용약관동의*</h1>
           <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용하실수 있습니다.</p>
       </div>
       <!--이용약관 박스 넣기!!-->
        <div class="container">
            <!--이용약관 박스 넣기!!-->
             <div >
            <label for="">
               <input type="checkbox">
                  <span>개인정보처리방침(필수)</span>
            </label>
         </div>
        <div >
            <label for="">
               <input type="checkbox">
                  <span>개인정보처리방침(선택)</span>
            </label>
         </div>
                  <div >
            <label for="">
               <input type="checkbox">
                  <span>무료배송,할인쿠폰 등 혜택 / 정보 수신(선택)</span>
            </label>
            <div >
               <label for="">
                  <input type="checkbox">
                  <span>SMS</span>
               </label>
               <label for="">
                  <input type="checkbox">
                  <span>SMS</span>
               </label>
            </div>
            <div >
               <label for="">
                  <input type="checkbox">
                  <span>본인은 만 14세 이상입니다.(필수)</span>
               </label>
            
            </div>
              <div >
               <label for="">
                  <input type="checkbox">
                  <span>전체선택</span>
               </label>
            
            </div>
         </div>
         </div>
        </div>
    </div>
    
    <div class="row justify-content-md-center" style="padding: 3%;">
       <button id="joinbtn" type="button" style="letter-spacing: -1px;padding: 1.5%;width: 30%; background-color: #5f0080;color: #fff;border-radius: 5px;">
                가입하기
       </button>
    </div>
    
    
   </div>
  <!--join view end --> 
  <script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script>
    function sample6_execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if(data.userSelectedType === 'R'){
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                    // 조합된 참고항목을 해당 필드에 넣는다.
                    document.getElementById("sample6_extraAddress").value = extraAddr;
                
                } else {
                    document.getElementById("sample6_extraAddress").value = '';
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('sample6_postcode').value = data.zonecode;
                document.getElementById("sample6_address").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("sample6_detailAddress").focus();
            }
        }).open();
    }
</script> 
 `
	}

}
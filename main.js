// 슬래시 두개는 js의 한줄 주석
/* 
 는 여러줄 주석
 는 여러줄 주석
*/
//전역변수 (global variable)
let diary
//함수정의부
function savehandler(){
    // 사용자가 웹페이지에서 입력한 값을 메모리에 저장
    let date = $("#date"). val()
    let text = $("#text"). val()
    let mood = $("#mood"). val()  
    // 입력한 값을 한문장으로 만들기
    diary = `<p>${date}:${text} = ${mood} </p>` + diary
    //console.log(diary)
    //""랑 ''는 변하는 값 입력 불가 ``(백틱)은 변수 입력 가능 
    $("#result").html(diary)
    localStorage.setItem("diary",diary)
    let storage1 = localStorage.getItem("diary")
    console.log(storage1)
}
// 스토리지 테스트
// localStorage.setItem("test-key", "테스트입니다")
// let storage1 = localStorage.getItem("test-key")
// console.log(storage1)



// j쿼리 실행시작 
$(document).ready(function(){
    //문서가 로딩되면 로컬
    diary = localStorage.getItem("diary")
    //id가 save로 정의한 요소를 클릭했을 때, savehandler 호출
    $("#save").click(savehandler)
})
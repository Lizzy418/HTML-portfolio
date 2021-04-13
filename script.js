// 왼쪽 버튼 클릭시 숨겨져 있는 모든 내용들이 나오거나 나온 모든 내용들을 숨길 수 있도록 함수 설정.     
$(document).ready(function () {
    $("#button2").click(function () {
        if($("#lizzy2").css("display") != "none" && $("#about_me2").css("display") != "none" &&
        $("#portfolio3").css("display") != "none" && $("#contact3").css("display") != "none")
        {
            $("#lizzy2").fadeOut("slow");
            $("#about_me2").fadeOut("slow");
            $("#portfolio3").fadeOut("slow");
            $("#contact3").fadeOut("slow");
        }
        else
        {
            $("#lizzy2").fadeIn("slow");
            $("#about_me2").fadeIn("slow");
            $("#portfolio3").fadeIn("slow");
            $("#contact3").fadeIn("slow");
        }         
    });
});

// 오른쪽 버튼 nav바 - 클릭시 사라지게 (Fix된 nav다보니 포트폴리오에 집중 할 수 있게 사라지도록 함수 설정.
$(document).ready(function () {
    $("#button1").click(function () {
        $("#navvar").fadeToggle("slow"); }); });

// 각자 내용에 맞는 h2를 클릭하면 hr / 밑으로 각 내용이 나오거나 숨길 수 있도록 함수설정.
$(document).ready(function () {
    $("#lizzy").click(function () {
        $("#lizzy2").fadeToggle("slow");
    });
});

// 각자 내용에 맞는 h2를 클릭하면 hr / 밑으로 각 내용이 나오거나 숨길 수 있도록 함수설정.
$(document).ready(function () {
    $("#about_me").click(function () {
        $("#about_me2").fadeToggle("slow");
    });
});

// 각자 내용에 맞는 h2를 클릭하면 hr / 밑으로 각 내용이 나오거나 숨길 수 있도록 함수설정.
$(document).ready(function () {
    $("#portfolio2").click(function () {
        $("#portfolio3").fadeToggle("slow");
    });
});

// 각자 내용에 맞는 h2를 클릭하면 hr / 밑으로 각 내용이 나오거나 숨길 수 있도록 함수설정.
$(document).ready(function () {
    $("#contact2").click(function () {
        $("#contact3").fadeToggle("slow");
    });
}); 



/*
// Create the HTML for the message
var msg = '<div class=\"header\"><a id=\"close\" href="#">Close X</a></div>';
msg += '<div><h2>Portfolio is preparing</h2>';
msg += '포트폴리오는 작업 중입니다. (추후 추가 예정)</div>';

var elNote = document.createElement('div');       // Create a new element
elNote.setAttribute('id', 'note');                // Add an id of note
var h1 = document.getElementById('h1');

elNote.innerHTML = msg;                           // Add the message
document.body.appendChild(elNote);                // Add it to the page

function dismissNote() {                          // Declare function
  document.body.removeChild(elNote);              // Remove the note
}

var elClose = document.getElementById('close');   // Get the close button
elClose.addEventListener('click', dismissNote, false);// Click close-clear note
*/
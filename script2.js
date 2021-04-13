var imgClick = document.getElementsByClassName('imgClick_pop');

for(i=0; i<imgClick.length; i++) {
    imgClick[i].onclick = function() {
        // 포트폴리오 화면 출력
        func();
    }
}
function func() {

    var msg = '<div class=\"header\"><a id=\"close\" href="#portfolio">Close X</a></div>';
    // msg += '<div><h2>Portfolio is preparing</h2>';
    // msg += '해당 포트폴리오는 작업 중입니다. (추후 추가 예정)</div>';
    msg += '<div><a href="https://github.com/Lizzy418/VueJS-Todo" target="_blank"><h2>Code View</h2></a> \
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \
            <a href="https://lizzy418.github.io/VueJS-Todo/" target="_blank"><h2>Page View</h2></a></div>';

    var elNote = document.createElement('div');       // Create a new element
    elNote.setAttribute('id', 'note');                // Add an id of note
    elNote.innerHTML = msg;  
    var box = document.getElementById('portfolio3');
    if(box.childElementCount == 6) //박스가 이미 보여지고 있으면 다시 뜨지 않게
        box.appendChild(elNote); 
    var elClose = document.getElementById('close');
    elClose.addEventListener('click', delfunc, false);

    function delfunc() {
    //var elNote = document.getElementById('note');       // Create a new element
    if(elNote!=null)
    box.removeChild(elNote);
    }
    
}


      






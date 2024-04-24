$(function () {
    //文字色
    $('#change-color').on('click',function() {
        $('#target').css("color","red");
    });
    //文字内容
    $('#change-text').on('click',function() {
        const text = document.getElementById("target");
        text.textContent = "Hello!";
    });
    //フェードアウト
    $('#fade-out').on('click', function() {
        $('#target').fadeOut();
    })
    //フェードイン
    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
    });
});
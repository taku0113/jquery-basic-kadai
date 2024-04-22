    //読み込みしたとき
    $(window).on('load', function(){
        console.log('loadイベントが発生しました');
    });
//スクロールしたとき
$(function() {

    $(document).on({
      
        'scroll': () => {
            console.log('scrollイベントが発生しました');
        },
        });


    });

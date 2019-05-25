$(function(){
    var n=0;
    $('.btn_click').click(function(){

        // if(n==0){
        //     $('.list').css('display','block');
        //     n=1;
        // }
        // else{
        //     $('.list').css('display','none');
        //     n=0;
        // }
        $('.list').toggle();

    })

    $(window).on('scroll',function(){
        if($(window).scrollTop()>200){
            $('.third_icon').css('visibility','visible')
        }
        else{
            $('.third_icon').css('visibility','hidden')
        }
    })

    $('.third_icon').click(function(){
        $('html,body').animate({
            scrollTop:0
        },200)
    })

    $('.show_btn').click(function(){
        $('.login').toggle();
        $('#mask').toggle();
    })

    $('.close').click(function(){
        $('.login').toggle();
        $('#mask').toggle();
    })

    $('.img_selection').click(function(){
        $('.img_selected').toggle();
    })
})
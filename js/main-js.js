
// function call_open() {
//     $('.zatms').animate({height: 'show'}, 100);
//     $('.zatms').addClass('open-child');
//     $('.block-call').animate({height: 'show'}, 100);
//     $('.block-call').addClass('open-child');
// }
// function call_close() {
//     $('.block-call').animate({height: 'show'}, 100);
//     $('.block-call').removeClass('open-child');
//     $('.zatms').animate({height: 'show'}, 100);
//     $('.zatms').removeClass('open-child');
// }
    function hide_menu(elem){
        if($(elem).next('ul')){
            if($(elem).hasClass('open-child')){
                $(elem).animate({height: 'hide'}, 300);
                $(elem).removeClass('open-child');
            } else {
                $(elem).animate({height: 'show'}, 300);
                $(elem).addClass('open-child');
            }
        } 
    }
    function open_text(elem){
        if($(elem).next('ul')){
            if($(elem).next('div').hasClass('open-child')){
                $(elem).next('div').animate({height: 'hide'}, 300);
                $(elem).next('div').removeClass('open-child');
            } else {
                $(elem).next('div').animate({height: 'show'}, 300);
                $(elem).next('div').addClass('open-child');
            }
        } 
    }
$('.btn-callback').click(function(e) {
    var $message = $('.block-call');
 	var $low_bg = $('.zatms');

    if ($message.css('display') != 'block') {
        $low_bg.animate({height: 'show'}, 300);
        $message.animate({height: 'show'}, 300);

        var firstClick = true;
        $(document).bind('click.myEvent', function(e) {
            if (!firstClick && $(e.target).closest('.block-call').length == 0) {
                $low_bg.animate({height: 'hide'}, 300);
                $message.animate({height: 'hide'}, 300);
                $('.block-good').hide(200);
                $(document).unbind('click.myEvent');
            }
            firstClick = false;
        });
    }
 
    e.preventDefault();
});
$('#btn-callback').click(function(e) {
    var $message = $('.block-call');
    var $low_bg = $('.zatms');

    if ($message.css('display') != 'block') {
        $low_bg.animate({height: 'show'}, 300);
        $message.animate({height: 'show'}, 300);
        var firstClick = true;
        $(document).bind('click.myEvent', function(e) {
            if (!firstClick && $(e.target).closest('.block-call').length == 0) {
                $low_bg.animate({height: 'hide'}, 300);
                $message.animate({height: 'hide'}, 300);
                $('.block-good').hide(200);
                $(document).unbind('click.myEvent');
            }
            firstClick = false;
        });
    }
 
    e.preventDefault();
});
$('.open-lsp').click(function(e) {
    var $message = $('.consylt');
    var $low_bg = $('.zatms1');
    $('body').addClass('overflow');
    if ($message.css('display') != 'block') {
        $low_bg.animate({height: 'show'}, 300);
        $message.animate({height: 'show'}, 300);

        var firstClick = true;
        $(document).bind('click.myEvent', function(e) {
            if (!firstClick && $(e.target).closest('.consylt .block-content').length == 0) {
                $low_bg.animate({height: 'hide'}, 300);
                $message.animate({height: 'hide'}, 300);
                $(document).unbind('click.myEvent');
                $('body').removeClass('overflow');
            }
            firstClick = false;
        });
    }
 
    e.preventDefault();
});
$('.scrren-5 .block-icon i').click(function(e) {
    var $message = $('.consylt1');
    var $low_bg = $('.zatms1');
    $('body').addClass('overflow');
    if ($message.css('display') != 'block') {
        $low_bg.animate({height: 'show'}, 300);
        $message.animate({height: 'show'}, 300);

        var firstClick = true;
        $(document).bind('click.myEvent', function(e) {
            if (!firstClick && $(e.target).closest('.consylt1 .block-call').length == 0) {
                $low_bg.animate({height: 'hide'}, 300);
                $message.animate({height: 'hide'}, 300);
                $(document).unbind('click.myEvent');
                $('body').removeClass('overflow');
            }
            firstClick = false;
        });
    }
 
    e.preventDefault();
});
	function ValidatePhone(elem) {
    var phoneVal = document.getElementsByClassName(elem)[0].value;
    if (document.getElementById(elem).value != '') {
        if (phoneRegex.test(phoneVal)) {
            document.getElementsByClassName(elem)[0].style.border = '1px solid green';
            phon_3=2;
            return true;
        } else {
            document.getElementsByClassName(elem)[0].style.border = '1px solid red';
            phon_3=1;
            return false;
        }
    } else {
        document.getElementsByClassName(elem)[0].style.border = '1px solid red ';
       phon_3=1;
        return false;
    }
}
function ValidateName(elem) {
    var nameVal = document.getElementsByClassName(elem)[0].value;
    if (document.getElementById(elem).value != '') {
        if (nameRegex.test(nameVal)) {
            document.getElementsByClassName(elem)[0].style.border = '1px solid red';
            nam_3=1;
            return true;
        } else {
            document.getElementsByClassName(elem)[0].style.border = '1px solid green ';
            nam_3=2;
            return false;
        }
    } else {
        document.getElementsByClassName(elem)[0].style.border = '1px solid red ';
        nam_3=1;
        return false;
    }
}
function ValidateEmail(elem) {
    var mailVal = document.getElementsByClassName(elem)[0].value;
    if (document.getElementById(elem).value != '') {
        if (mailRegex.test(mailVal)) {
            document.getElementsByClassName(elem)[0].style.border = '1px solid green';
            em_2=2;
            return true;
        } else {
            document.getElementsByClassName(elem)[0].style.border = '1px solid red';
            em_2=1;
            return false;
        }
    } else {
        document.getElementsByClassName(elem)[0].style.border = '1px solid red ';
        em_2=1;
        return false;
    }
}
var nameRegex = /([^А-яA-z ]+)/;
var mailRegex = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,6}$/;
var phoneRegex = /^([+]?[0-9\s-\(\)]{8,25})*$/i;
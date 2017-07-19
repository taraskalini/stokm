$(function() {

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

    $('.popup').magnificPopup();

    $('.hamburger').on('click',function(){
        $(this).toggleClass('is-active');
        $(".header-mnu").toggleClass('is-active');
    });
    $(document).on("click",function(event){
        if( $(event.target).closest(".header-mnu,.hamburger").length )return;
        $('.hamburger').removeClass('is-active');
        $(".header-mnu").removeClass('is-active');
        event.stopPropagation();
    });

    $(document).ready(function() {
        var hotSlider = $('#hot-slider').lightSlider({
            item:3,
            loop:false,
            slideMove:1,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            pager:false,
            controls:false,
            responsive : [
                {
                    breakpoint:1360,
                    settings: {
                        item:2,
                        slideMove:1,
                        slideMargin:6,
                    }
                },
                {
                    breakpoint:970,
                    settings: {
                        item:1,
                        slideMove:1
                    }
                }
            ]
        });

        $(".hot-a-prev").on("click",function(e){
            e.preventDefault();
            hotSlider.goToPrevSlide();
        });

        $(".hot-a-next").on("click",function(e){
            e.preventDefault();
            hotSlider.goToNextSlide();
        });
    });

    $(document).ready(function() {
        var videoSlider = $('#video-slider').lightSlider({
            item:3,
            loop:false,
            slideMove:1,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            pager:false,
            controls:false,
            responsive : [
                {
                    breakpoint:1360,
                    settings: {
                        item:2,
                        slideMove:1,
                        slideMargin:6,
                    }
                },
                {
                    breakpoint:970,
                    settings: {
                        item:1,
                        slideMove:1
                    }
                }
            ]
        });

        $(".video-a-prev").on("click",function(e){
            e.preventDefault();
            videoSlider.goToPrevSlide();
        });

        $(".video-a-next").on("click",function(e){
            e.preventDefault();
            videoSlider.goToNextSlide();
        });
    });

    $(document).ready(function() {
        var saleSlider = $('#sale-slider').lightSlider({
            adaptiveHeight:true,
            item:1,
            slideMargin:0,
            loop:true,
            pager:false,
            controls:false
        });

        $(".sale-a-prev").on("click",function(e){
            e.preventDefault();
            saleSlider.goToPrevSlide();
        });

        $(".sale-a-next").on("click",function(e){
            e.preventDefault();
            saleSlider.goToNextSlide();
        });
    });

    $('.sale-tabs-item-1').on('click',function(){
        $(this).toggleClass('is-active');
        $(".sale-tab-1").toggleClass('is-active');
    });
    $(document).on("click",function(event){
        if( $(event.target).closest(".sale-tab-1,.sale-tabs-item-1").length )return;
        $('.sale-tabs-item-1').removeClass('is-active');
        $(".sale-tab-1").removeClass('is-active');
        event.stopPropagation();
    });

    $('.sale-tabs-item-2').on('click',function(){
        $(this).toggleClass('is-active');
        $(".sale-tab-2").toggleClass('is-active');
    });
    $(document).on("click",function(event){
        if( $(event.target).closest(".sale-tab-2,.sale-tabs-item-2").length )return;
        $('.sale-tabs-item-2').removeClass('is-active');
        $(".sale-tab-2").removeClass('is-active');
        event.stopPropagation();
    });

    $('.sale-tabs-item-3').on('click',function(){
        $(this).toggleClass('is-active');
        $(".sale-tab-3").toggleClass('is-active');
    });
    $(document).on("click",function(event){
        if( $(event.target).closest(".sale-tab-3,.sale-tabs-item-3").length )return;
        $('.sale-tabs-item-3').removeClass('is-active');
        $(".sale-tab-3").removeClass('is-active');
        event.stopPropagation();
    });

    $('.sale-tabs-item-4').on('click',function(){
        $(this).toggleClass('is-active');
        $(".sale-tab-4").toggleClass('is-active');
    });
    $(document).on("click", function (event) {
        if ($(event.target).closest(".sale-tab-4,.sale-tabs-item-4").length)return;
        $('.sale-tabs-item-4').removeClass('is-active');
        $(".sale-tab-4").removeClass('is-active');
        event.stopPropagation();
    });

    $('#karta-slider').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        thumbItem: 4,
        controls: false,
        slideMargin: 0,
        enableDrag: false,
        currentPagerPosition: 'left',
        onSliderLoad: function (el) {
            el.lightGallery({
                selector: '#imageGallery .lslide'
            });
        }
    });

    $(".slider-range1").slider({
        range: true,
        min: 0,
        max: 15000000,
        values: [ 60, 11396455 ],
        create: function( event, ui ) {
            $(".slider-range1-value1").val("от 60");
            $(".slider-range1-value2").val("до 11 396 455");
        },
        slide: function( event, ui ) {
            $(".slider-range1-value1").val("от " + ui.values[0].toLocaleString('ru'));
            $(".slider-range1-value2").val("до " + ui.values[1].toLocaleString('ru'));
        }
    });

    $(".slider-range2").slider({
        range: true,
        min: 0,
        max: 200,
        values: [ 40, 112 ],
        create: function( event, ui ) {
            $(".slider-range2-value1").val("от 48");
            $(".slider-range2-value2").val("до 112");
        },
        slide: function( event, ui ) {
            $(".slider-range2-value1").val("от " + ui.values[0].toLocaleString('ru'));
            $(".slider-range2-value2").val("до " + ui.values[1].toLocaleString('ru'));
        }
    });

    $(".slider-range3").slider({
        range: true,
        min: 0,
        max: 450,
        values: [ 0, 364 ],
        create: function( event, ui ) {
            $(".slider-range3-value1").val("от 0");
            $(".slider-range3-value2").val("до 364");
        },
        slide: function( event, ui ) {
            $(".slider-range3-value1").val("от " + ui.values[0].toLocaleString('ru'));
            $(".slider-range3-value2").val("до " + ui.values[1].toLocaleString('ru'));
        }
    });

    $(".slider-range4").slider({
        range: true,
        min: 0,
        max: 15000000,
        values: [ 60, 11396455 ],
        create: function( event, ui ) {
            $(".slider-range4-value1").val("от 60");
            $(".slider-range4-value2").val("до 11 396 455");
        },
        slide: function( event, ui ) {
            $(".slider-range4-value1").val("от " + ui.values[0].toLocaleString('ru'));
            $(".slider-range4-value2").val("до " + ui.values[1].toLocaleString('ru'));
        }
    });

    $(".slider-range5").slider({
        range: true,
        min: 0,
        max: 15000000,
        values: [ 60, 11396455 ],
        create: function( event, ui ) {
            $(".slider-range5-value1").val("от 60");
            $(".slider-range5-value2").val("до 11 396 455");
        },
        slide: function( event, ui ) {
            $(".slider-range5-value1").val("от " + ui.values[0].toLocaleString('ru'));
            $(".slider-range5-value2").val("до " + ui.values[1].toLocaleString('ru'));
        }
    });

    $(".slider-range6").slider({
        range: true,
        min: 0,
        max: 15000000,
        values: [ 60, 11396455 ],
        create: function( event, ui ) {
            $(".slider-range6-value1").val("от 60");
            $(".slider-range6-value2").val("до 11 396 455");
        },
        slide: function( event, ui ) {
            $(".slider-range6-value1").val("от " + ui.values[0].toLocaleString('ru'));
            $(".slider-range6-value2").val("до " + ui.values[1].toLocaleString('ru'));
        }
    });

    $(".slider-range7").slider({
        range: true,
        min: 0,
        max: 15000000,
        values: [ 60, 11396455 ],
        create: function( event, ui ) {
            $(".slider-range7-value1").val("от 60");
            $(".slider-range7-value2").val("до 11 396 455");
        },
        slide: function( event, ui ) {
            $(".slider-range7-value1").val("от " + ui.values[0].toLocaleString('ru'));
            $(".slider-range7-value2").val("до " + ui.values[1].toLocaleString('ru'));
        }
    });

    $('#main-slider').lightSlider({
        adaptiveHeight:true,
        item:1,
        slideMargin:0,
        loop:true,
        controls:false
    });

    $('.type-ned .ned-content-item').on('click',function(){
        $('.type-ned .ned-content-item').removeClass("active");
        $(this).addClass('active');
        var text =  $(this).text();
        $("[name=typened]").val(text);
    });

    $('.type-com .search-item-block').on('click',function(){
        $('.type-com .search-item-block').removeClass("active");
        $(this).addClass('active');
        var text =  $(this).text();
        $("[name=typened]").val(text);
    });

    $('#gal-slider').lightSlider({
        autoWidth:true,
        loop:true,
        controls:false,
        pager:false,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });

});

//Форма отправки 2.0
$(function() {
    $("[name=send]").click(function () {
        $(":input.error").removeClass('error');
        $(".allert").remove();

        var error;
        var btn = $(this);
        var ref = btn.closest('form').find('[required]');
        var msg = btn.closest('form').find('input, textarea');
        var send_btn = btn.closest('form').find('[name=send]');
        var subject = btn.closest('form').find('[name=form_subject]');
        var form = btn.closest('form'), name = form.find('[name=name]').val();
        $(ref).each(function () {
            if ($(this).val() == '') {
                var errorfield = $(this);
                $(this).addClass('error').parent('.field').append('<div class="allert"><span>Заполните это поле</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                error = 1;
                $(":input.error:first").focus();
                return;
            } else {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if ($(this).attr("type") == 'email') {
                    if (!pattern.test($(this).val())) {
                        $("[name=email]").val('');
                        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный e-mail</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
                var patterntel = /^()[0-9]{9,18}/i;
                if ($(this).attr("type") == 'tel') {
                    if (!patterntel.test($(this).val())) {
                        $("[name=phone]").val('');
                        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный номер телефона</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
                        error = 1;
                        $(":input.error:first").focus();
                    }
                }
            }
        });
        if (!(error == 1)) {
            $(send_btn).each(function () {
                $(this).attr('disabled', true);
            });



            $.ajax({
                type: 'POST',
                url: 'mail.php',
                data: msg,
                success: function (data) {
                    $.magnificPopup.close();
                    form[0].reset();
                    $(send_btn).each(function () {
                        $(this).attr('disabled', false);
                    });

                    $("a[href='#popupthx']").click();



                },
                error: function (xhr, str) {
                    alert('Возникла ошибка: ' + xhr.responseCode);
                }
            });
        }
        else{
            if(form.hasClass("form-shake")){
                form.parents(".form-block").addClass("shake");
                form.parents(".form-block").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
                    $(this).removeClass("shake");
                });
            }
        }
        return false;
    });
});
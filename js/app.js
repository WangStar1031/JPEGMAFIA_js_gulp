var $uno = $('#uno'),
    $dos = $('#dos'),
    $cuatro = $('#cuatro'),
    $tres = $('#tres'),
    $box = $('.box'),
    $merchContainer = $('#merch-wrapper'),
    $contactContainer = $('#contact'),
    $liveContainer = $('#music'),
    $section_expanded_portrait = widthForMobileSectionExpanded + "%",
    $section_portrait = widthForMobileSection + "%",
    $font_size = fontSize + "px",
    $font_size_mobile = fontSizeMobile + "px",
    siteColors,
    setTransitions,
    initColorChanges,
    getHEX,
    initOnCPress = 0,
    resetColors,
    changeColors,
    changeColorsPartially,
    resetColorsPartially,
    setColorsMain,
    colorsArray,
    clicks = 0,
    maximumChanges,
    orientationPortrait_,
    swipeDirection = 0,
    requestAnimationFrameId,
    requestAnimationFrameInterval,
    browserIsSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor),
    transitionEnd = browserIsSafari ? 'webkitTransitionEnd' : 'transitionend';

function activate_elm_modification($el){

    TweenLite.to($el.find('.content'), siteColors.animeSpeed, {
        scaleX: '1',
        scaleY: '1',
        opacity: '1'
    });
    TweenLite.to($el.find('.hover-text'), siteColors.animeSpeed, {
        opacity: '0',
        fontSize: '1px'
    });
}

function activate_box_modified($el){
    swipeDirection = $el.index() - 1;

    activate_box($el);
    elmBefore = $el;

    switch($el.attr('id')){
        case 'uno': initOnSpacebar = 1;
        break;
        case 'dos': initOnSpacebar = 2;
        break;
        case 'tres': initOnSpacebar = 3;
        break;
        case 'cuatro': initOnSpacebar = 4;
        break;
    }

}

function activate_box($el) {
    var orientationPortrait = $(window).width() <= $(window).height(),
        orientationMobile = (orientationPortrait && $(window).width() <= 480) || (!orientationPortrait && $(window).width() <= 757);
    console.log("orientationPortrait : " + orientationPortrait);
    $box.removeClass('active inactive-side inactive-up-down');
    $box.not($el).addClass('small');

    $el.addClass('active');
    TweenLite.to($('.content:not(.content-uno)'), siteColors.animeSpeed -0.3, {
        opacity: '0'
    });
    TweenLite.to($box.not('.active').find('.content:not(.content-uno)'), siteColors.animeSpeed, {
        scaleX: '0.01',
        scaleY: '0.01'
    });
    TweenLite.to($box.not('.active').find('.hover-text'), siteColors.animeSpeed, {
        opacity: '1',
        fontSize: orientationMobile ? $font_size_mobile : $font_size
    });
    TweenLite.to($box.not('.active').find('.content-uno'), siteColors.animeSpeed, {
        scaleX: '1',
        scaleY: '1'
    });

    $box.find('.content-uno')[!$el.is('#uno') ? 'addClass' : 'removeClass']('content-uno-not-active');
    if(!orientationPortrait){

        if ($el.is('#uno')) {
            TweenLite.to($el, siteColors.animeSpeed, {
                height: '80%',
                bottom: '20%',
                right: '20%'
            });
            TweenLite.to($dos, siteColors.animeSpeed, {
                height: '80%',
                bottom: '20%',
                left: '80%'
            });
            TweenLite.to($cuatro, siteColors.animeSpeed, {
                height: '20%',
                right: '20%',
                top: '80%'
            });
            TweenLite.to($tres, siteColors.animeSpeed, {
                height: '20%',
                left: '80%',
                top: '80%'
            });
            activate_elm_modification($el);
        } else if ($el.is('#dos')) {
            TweenLite.to($el, siteColors.animeSpeed, {
                height: '80%',
                bottom: '20%',
                left: '20%'
            });
            TweenLite.to($uno, siteColors.animeSpeed, {
                height: '80%',
                bottom: '20%',
                right: '80%'
            });
            TweenLite.to($cuatro, siteColors.animeSpeed, {
                height: '20%',
                right: '80%',
                top: '80%'
            });
            TweenLite.to($tres, siteColors.animeSpeed, {
                height: '20%',
                left: '20%',
                top: '80%'
            });
            activate_elm_modification($el);
        } else if ($el.is('#cuatro')) {
            TweenLite.to($el, siteColors.animeSpeed, {
                height: '80%',
                right: '20%',
                top: '20%'
            });
            TweenLite.to($uno, siteColors.animeSpeed, {
                height: '20%',
                bottom: '80%',
                right: '20%'
            });
            TweenLite.to($dos, siteColors.animeSpeed, {
                height: '20%',
                left: '80%',
                bottom: '80%'
            });
            TweenLite.to($tres, siteColors.animeSpeed, {
                height: '80%',
                top: '20%',
                left: '80%'
            });
            activate_elm_modification($el);
        } else if ($el.is('#tres')) {
            TweenLite.to($el, siteColors.animeSpeed, {
                height: '80%',
                left: '20%',
                top: '20%'
            });
            TweenLite.to($uno, siteColors.animeSpeed, {
                height: '20%',
                bottom: '80%',
                right: '80%'
            });
            TweenLite.to($dos, siteColors.animeSpeed, {
                height: '20%',
                left: '20%',
                bottom: '80%'
            });
            TweenLite.to($cuatro, siteColors.animeSpeed, {
                height: '80%',
                top: '20%',
                right: '80%'
            });
            activate_elm_modification($el);
        }

    }else{
        if ($el.is('#uno')) {
            TweenLite.to($el, siteColors.animeSpeed, {
                height: $section_expanded_portrait
            });
            TweenLite.to($dos, siteColors.animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($cuatro, siteColors.animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($tres, siteColors.animeSpeed, {
                height: $section_portrait
            });
            activate_elm_modification($el);
        } else if ($el.is('#dos')) {
            TweenLite.to($el, siteColors.animeSpeed, {
                height: $section_expanded_portrait
            });
            TweenLite.to($uno, siteColors.animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($cuatro, siteColors.animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($tres, siteColors.animeSpeed, {
                height: $section_portrait
            });
            activate_elm_modification($el);
        } else if ($el.is('#cuatro')) {
            TweenLite.to($el, siteColors.animeSpeed, {
                height: $section_expanded_portrait
            });
            TweenLite.to($uno, siteColors.animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($dos, siteColors.animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($tres, siteColors.animeSpeed, {
                height: $section_portrait
            });
            activate_elm_modification($el);
        } else if ($el.is('#tres')) {
            TweenLite.to($el, siteColors.animeSpeed, {
                height: $section_expanded_portrait
            });
            TweenLite.to($uno, siteColors.animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($dos, siteColors.animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($cuatro, siteColors.animeSpeed, {
                height: $section_portrait
            });
            activate_elm_modification($el);
        }

    }

}

var elmBefore = $uno;

$box[isMousedown ? 'hover' : 'mouseover'](function(e) {
    var $this_ = $(this);

    if(!$this_.hasClass('active')){
        activate_box_modified($this_);

        e.stopPropagation();
        e.stopImmediatePropagation();

        }

    });



siteColors = {
    animeSpeed : parseFloat($('.transitionTime').css('transition-duration'))
}

window.onresize = function(event) {
    var orientationPortrait = $(window).width() <= $(window).height(),
        orientationMobile = (orientationPortrait && $(window).width() <= 480) || (!orientationPortrait && $(window).width() <= 757);
    if( !orientationPortrait){
        var elemActiveId = $(".active").eq(0).attr('id');
        switch(elemActiveId){
            case 'uno':case 'dos':
                $("#uno").css("height", "80%");
                $("#dos").css("height", "80%");
                $("#tres").css("height", "20%");
                $("#cuatro").css("height", "20%");
                $("#tres").css("top", "80%");
                $("#cuatro").css("top", "80%");
            break;
            case 'tres':case 'cuatro':
                $("#uno").css("height", "20%");
                $("#dos").css("height", "20%");
                $("#tres").css("height", "80%");
                $("#cuatro").css("height", "80%");
                $("#tres").css("top", "20%");
                $("#cuatro").css("top", "20%");
            break;
        }
        switch(elemActiveId){
            case 'uno':case 'cuatro':
                $("#uno").css("right", "20%");
                $("#dos").css("left", "80%");
                $("#tres").css("left", "80%");
                $("#cuatro").css("right", "20%");
            break;
            case 'dos':case 'tres':
                $("#uno").css("right", "80%");
                $("#dos").css("left", "20%");
                $("#tres").css("left", "20%");
                $("#cuatro").css("right", "80%");
            break;
        }
    } else{
        var elemActiveId = $(".active").eq(0).attr('id');
        $("#uno").css("height", "12%");
        $("#dos").css("height", "12%");
        $("#tres").css("height", "12%");
        $("#cuatro").css("height", "12%");
        $("#" + elemActiveId).css("height", "64%");
    }
};
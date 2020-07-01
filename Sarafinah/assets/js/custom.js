var tpj = jQuery;

var revapi1043;
tpj(document).ready(function () {
    if (tpj("#rev_slider_1043_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_1043_1");
    } else {
        revapi1043 = tpj("#rev_slider_1043_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "revolution/js/",
            sliderLayout: "auto",
            dottedOverlay: "none",
            delay: 7000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                arrows: {
                    style: "uranus",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 17,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 17,
                        v_offset: 0
                    }
                }
                ,
                tabs: {
                    style: "gyges",
                    enable: true,
                    width: 240,
                    height: 80,
                    min_width: 240,
                    wrapper_padding: 20,
                    wrapper_color: "#000000",
                    wrapper_opacity: "0.5",
                    tmp: '<div class="tp-tab-content">  <span class="tp-tab-date">{{param1}}</span>  <span class="tp-tab-title">{{title}}</span></div><div class="tp-tab-image"></div>',
                    visibleAmount: 10,
                    hide_onmobile: true,
                    hide_under: 768,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    hide_delay: 200,
                    direction: "horizontal",
                    span: true,
                    position: "inner",
                    space: 0,
                    h_align: "left",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 0
                }
            },
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: 1000,
            gridheight: 667,
            lazyType: "single",
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }
});
    var tpj = jQuery,
    revapi24;

      tpj(document).ready(function () {
        if (tpj("#rev_slider_24_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_24_1");
        } else {
        revapi24 = tpj("#rev_slider_24_1").show().revolution({
            sliderType: "standard",
            jsFileLocation: "~/assets/vendor/revolution-slider/revolution/js/default.htm",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                mouseScrollReverse: "default",
                onHoverStop: "off",
                bullets: {
                    enable: true,
                    hide_onmobile: false,
                    style: "bullet-bar",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 50,
                    space: 5,
                    tmp: ''
                }
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [868, 768, 960, 720],
            lazyType: "none",
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "60px",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false
            }
        });
        }

        if (revapi24) revapi24.revSliderSlicey();
      });

      $(document).on('ready', function () {
        // initialization of carousel
        $.HSCore.components.HSCarousel.init('.js-carousel');

        // initialization of tabs
        $.HSCore.components.HSTabs.init('[role="tablist"]');

        // initialization of counters
        var counters = $.HSCore.components.HSCounter.init('[class*="js-counter"]');

        // initialization of go to
        $.HSCore.components.HSGoTo.init('.js-go-to');
      });

      $(window).on('load', function () {
        // initialization of header
        $.HSCore.components.HSHeader.init($('#js-header'));
        $.HSCore.helpers.HSHamburgers.init('.hamburger');

        // initialization of HSMegaMenu component
        $('.js-mega-menu').HSMegaMenu({
        event: 'hover',
          pageContainer: $('.container'),
          breakpoint: 991
        });
      });

      $(window).on('resize', function () {
        setTimeout(function () {
            $.HSCore.components.HSTabs.init('[role="tablist"]');
        }, 200);
      });

            $(document).on('ready', function () {
                // initialization of header
                $.HSCore.components.HSHeader.init($('#js-header'));
        $.HSCore.helpers.HSHamburgers.init('.hamburger');

        // initialization of HSMegaMenu component
        $('.js-mega-menu').HSMegaMenu({
                event: 'hover',
          pageContainer: $('.container'),
          breakpoint: 991
        });

        // initialization of HSDropdown component
        $.HSCore.components.HSDropdown.init($('[data-dropdown-target]'), {
                afterOpen: function () {
                $(this).find('input[type="search"]').focus();
          }
        });
        // initialization of header's height equal offset
        $.HSCore.helpers.HSHeightCalc.init();

        // initialization of popups
        $.HSCore.components.HSPopup.init('.js-fancybox');

        // initialization of go to
        $.HSCore.components.HSGoTo.init('.js-go-to');
      });
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $('.u-header').addClass('u-header--sticky-top');
        $('.u-header__section--light').addClass('g-bg-secondary');
    }
    else {
        $('.u-header').removeClass('u-header--sticky-top');
        $('.u-header__section--light').removeClass('g-bg-secondary');
    }
});
$(document).on('ready', function () {
    // initialization of custom selects
    $.HSCore.components.HSSelect.init('.js-custom-select');

    // initialization of go to section
    $.HSCore.components.HSGoTo.init('.js-go-to');

    // initialization of counters
    var counters = $.HSCore.components.HSCounter.init('[class*="js-counter"]');

    // initialization of popups
    $.HSCore.components.HSPopup.init('.js-fancybox-media', {
        helpers: {
            media: {},
            overlay: {
                css: {
                    'background': 'rgba(255, 255, 255, .8)'
                }
            }
        }
    });
});

// initialization of google map
function initMap() {
    $.HSCore.components.HSGMap.init('.js-g-map');
}
$(document).on('ready', function () {
    // initialization of masonry
    $('.masonry-grid').imagesLoaded().then(function () {
        $('.masonry-grid').masonry({
            columnWidth: '.masonry-grid-sizer',
            itemSelector: '.masonry-grid-item',
            percentPosition: true
        });
    });
});

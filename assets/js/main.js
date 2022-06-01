!function(e){"use strict";e(window).on("load",(function(){e(".preloader").fadeOut()})),e(".preloader").length>0&&e(".preloaderCls").each((function(){e(this).on("click",(function(t){t.preventDefault(),e(".preloader").css("display","none")}))})),e.fn.vsmobilemenu=function(t){var a=e.extend({menuToggleBtn:".vs-menu-toggle",bodyToggleClass:"vs-body-visible",subMenuClass:"vs-submenu",subMenuParent:"vs-item-has-children",subMenuParentToggle:"vs-active",meanExpandClass:"vs-mean-expand",appendElement:'<span class="vs-mean-expand"></span>',subMenuToggleClass:"vs-open",toggleSpeed:400},t);return this.each((function(){var t=e(this);function n(){t.toggleClass(a.bodyToggleClass);var n="."+a.subMenuClass;e(n).each((function(){e(this).hasClass(a.subMenuToggleClass)&&(e(this).removeClass(a.subMenuToggleClass),e(this).css("display","none"),e(this).parent().removeClass(a.subMenuParentToggle))}))}t.find("li").each((function(){var t=e(this).find("ul");t.addClass(a.subMenuClass),t.css("display","none"),t.parent().addClass(a.subMenuParent),t.prev("a").append(a.appendElement),t.next("a").append(a.appendElement)}));var s="."+a.meanExpandClass;e(s).each((function(){e(this).on("click",(function(t){var n;t.preventDefault(),n=e(this).parent(),e(n).next("ul").length>0?(e(n).parent().toggleClass(a.subMenuParentToggle),e(n).next("ul").slideToggle(a.toggleSpeed),e(n).next("ul").toggleClass(a.subMenuToggleClass)):e(n).prev("ul").length>0&&(e(n).parent().toggleClass(a.subMenuParentToggle),e(n).prev("ul").slideToggle(a.toggleSpeed),e(n).prev("ul").toggleClass(a.subMenuToggleClass))}))})),e(a.menuToggleBtn).each((function(){e(this).on("click",(function(){n()}))})),t.on("click",(function(e){e.stopPropagation(),n()})),t.find("div").on("click",(function(e){e.stopPropagation()}))}))},e(".vs-menu-wrapper").vsmobilemenu();var t,a,n,s="",i=".scrollToTop";function o(e){return parseInt(e,10)}e(window).on("scroll",(function(){var t,a,n,o,l;t=e(".sticky-active"),a="active",n="will-sticky",o=e(window).scrollTop(),l=t.css("height"),t.parent().css("min-height",l),e(window).scrollTop()>800?(t.parent().addClass(n),o>s?t.removeClass(a):t.addClass(a)):(t.parent().css("min-height","").removeClass(n),t.removeClass(a)),s=o,e(this).scrollTop()>500?e(i).addClass("show"):e(i).removeClass("show")})),e(i).each((function(){e(this).on("click",(function(t){return t.preventDefault(),e("html, body").animate({scrollTop:0},s/3),!1}))})),e("[data-bg-src]").length>0&&e("[data-bg-src]").each((function(){var t=e(this).attr("data-bg-src");e(this).css("background-image","url("+t+")"),e(this).removeAttr("data-bg-src").addClass("background-image")})),t=".sidemenu-wrapper",a=".sideMenuCls",n="show",e(".sideMenuToggler").on("click",(function(a){a.preventDefault(),e(t).addClass(n)})),e(t).on("click",(function(a){a.stopPropagation(),e(t).removeClass(n)})),e(t+" > div").on("click",(function(a){a.stopPropagation(),e(t).addClass(n)})),e(a).on("click",(function(a){a.preventDefault(),a.stopPropagation(),e(t).removeClass(n)})),function(t,a,n,s){e(a).on("click",(function(a){a.preventDefault(),e(t).addClass(s)})),e(t).on("click",(function(a){a.stopPropagation(),e(t).removeClass(s)})),e(t).find("form").on("click",(function(a){a.stopPropagation(),e(t).addClass(s)})),e(n).on("click",(function(a){a.preventDefault(),a.stopPropagation(),e(t).removeClass(s)}))}(".popup-search-box",".searchBoxToggler",".searchClose","show"),e(".vs-hero-carousel").each((function(){var t=e(this);function a(e){return t.data(e)}t.find("[data-ls-go]").each((function(){e(this).on("click",(function(a){a.preventDefault();var n=e(this).data("ls-go");t.layerSlider(n)}))})),t.layerSlider({allowRestartOnResize:!0,maxRatio:a("maxratio")?a("maxratio"):1,type:a("slidertype")?a("slidertype"):"responsive",pauseOnHover:!!a("pauseonhover"),navPrevNext:!!a("navprevnext"),hoverPrevNext:!!a("hoverprevnext"),hoverBottomNav:!!a("hoverbottomnav"),navStartStop:!!a("navstartstop"),navButtons:!!a("navbuttons"),loop:!1!==a("loop"),autostart:!!a("autostart"),height:a("height")?a("height"):1080,responsiveUnder:a("responsiveunder")?a("responsiveunder"):1220,layersContainer:a("container")?a("container"):1220,showCircleTimer:!!a("showcircletimer"),skinsPath:"layerslider/skins/",thumbnailNavigation:!1!==a("thumbnailnavigation")})})),e(".popup-image").magnificPopup({type:"image",gallery:{enabled:!0}}),e(".popup-video").magnificPopup({type:"iframe"}),e.fn.sectionPosition=function(t,a){e(this).each((function(){var n,s,i,l,r,c=e(this);n=Math.floor(c.height()/2),s=c.attr(t),i=c.attr(a),l=o(e(i).css("padding-top")),r=o(e(i).css("padding-bottom")),"top-half"===s?(e(i).css("padding-bottom",r+n+"px"),c.css("margin-top","-"+n+"px")):"bottom-half"===s&&(e(i).css("padding-top",l+n+"px"),c.css("margin-bottom","-"+n+"px"))}))};var l="[data-sec-pos]";e(l).length&&e(l).imagesLoaded((function(){e(l).sectionPosition("data-sec-pos","data-pos-for")})),e(".filter-active").imagesLoaded((function(){var t=".filter-active",a=".filter-menu-active";if(e(t).length>0){var n=e(t).isotope({itemSelector:".filter-item",filter:"*",masonry:{columnWidth:1}});e(a).on("click","button",(function(){var t=e(this).attr("data-filter");n.isotope({filter:t})})),e(a).on("click","button",(function(t){t.preventDefault(),e(this).addClass("active"),e(this).siblings(".active").removeClass("active")}))}})),e("#ship-to-different-address-checkbox").on("change",(function(){e(this).is(":checked")?e("#ship-to-different-address").next(".shipping_address").slideDown():e("#ship-to-different-address").next(".shipping_address").slideUp()})),e(".woocommerce-form-login-toggle a").on("click",(function(t){t.preventDefault(),e(".woocommerce-form-login").slideToggle()})),e(".woocommerce-form-coupon-toggle a").on("click",(function(t){t.preventDefault(),e(".woocommerce-form-coupon").slideToggle()})),e(".shipping-calculator-button").on("click",(function(t){t.preventDefault(),e(this).next(".shipping-calculator-form").slideToggle()})),e('.wc_payment_methods input[type="radio"]:checked').siblings(".payment_box").show(),e('.wc_payment_methods input[type="radio"]').each((function(){e(this).on("change",(function(){e(".payment_box").slideUp(),e(this).siblings(".payment_box").slideDown()}))})),e(".rating-select .stars a").each((function(){e(this).on("click",(function(t){t.preventDefault(),e(this).siblings().removeClass("active"),e(this).parent().parent().addClass("selected"),e(this).addClass("active")}))})),e.fn.shapeMockup=function(){e(this).each((function(){var t=e(this),a=t.data("top"),n=t.data("right"),s=t.data("bottom"),i=t.data("left");t.css({top:a,right:n,bottom:s,left:i}).removeAttr("data-top").removeAttr("data-right").removeAttr("data-bottom").removeAttr("data-left").parent().addClass("shape-mockup-wrap")}))},e(".shape-mockup")&&e(".shape-mockup").shapeMockup(),e.fn.vsTab=function(t){var a=e.extend({sliderTab:!1,tabButton:"button",indicator:!1},t);e(this).each((function(){var t=e(this),n=t.find(a.tabButton);if(n.on("click",(function(t){t.preventDefault();var n=e(this);n.addClass("active").siblings().removeClass("active"),a.sliderTab&&e(s).slick("slickGoTo",n.data("slide-go-to"))})),a.sliderTab){var s=t.data("asnavfor"),i=0;n.each((function(){var n=e(this);n.attr("data-slide-go-to",i),i++,n.hasClass("active")&&e(s).slick("slickGoTo",n.data("slide-go-to")),e(s).on("beforeChange",(function(e,n,s,i){t.find(a.tabButton+'[data-slide-go-to="'+i+'"]').addClass("active").siblings().removeClass("active")}))}))}}))},e(".vs-slider-tab").length&&e(".vs-slider-tab").vsTab({sliderTab:!0,tabButton:".tab-btn"}),e(".team-box__thumbSlide").slick({dots:!1,arrows:!1,infinite:!0,speed:1e3,slidesToShow:2,slidesToScroll:1,focusOnSelect:!0,pauseOnFocus:!1,pauseOnHover:!1,vertical:!0,verticalSwiping:!0,asNavFor:"#teamImgSlide, #teamDescSlide",responsive:[{breakpoint:1025,settings:{slidesToShow:2}},{breakpoint:767,settings:{slidesToShow:2,vertical:!1,verticalSwiping:!1}},{breakpoint:576,settings:{slidesToShow:2,vertical:!1,verticalSwiping:!1}}]}),e.fn.activeClassAnimate=function(t,a){var n=e(this),s=n.find(t),i=a;e(s[0]).addClass(i),setInterval((function(){var a=n.find("."+i),o=a.index()+1;s.length==o?e(s[0]).addClass(i).siblings().removeClass(i):a.removeClass(i).next(t).addClass(i)}),8e3)},e(".vs-active-animate").activeClassAnimate(".animate-child","active"),e(".vs-active-animate2").activeClassAnimate(".animate-child > div","active"),e(".accordion-button").each((function(){e(this).on("click",(function(){e(this).closest(".accordion-item").toggleClass("active").siblings().removeClass("active")}))})),e.fn.countdown=function(){e(this).each((function(){var t=e(this),a=new Date(t.data("offer-date")).getTime();function n(e){return t.find(e)}var s=setInterval((function(){var e=(new Date).getTime(),i=a-e,o=Math.floor(i/864e5),l=Math.floor(i%864e5/36e5),r=Math.floor(i%36e5/6e4),c=Math.floor(i%6e4/1e3);o<10&&(o="0"+o),l<10&&(l="0"+l),r<10&&(r="0"+r),c<10&&(c="0"+c),i<0?(clearInterval(s),t.addClass("expired"),t.find(".message").css("display","block")):(n(".day").html(o),n(".hour").html(l),n(".minute").html(r),n(".seconds").html(c))}),1e3)}))},e(".offer-counter").length&&e(".offer-counter").countdown(),e("#slider-range").slider({range:!0,min:40,max:300,values:[60,570],slide:function(t,a){e("#minAmount").text("$"+a.values[0]),e("#maxAmount").text("$"+a.values[1])}}),e("#minAmount").text("$"+e("#slider-range").slider("values",0)),e("#maxAmount").text("$"+e("#slider-range").slider("values",1)),e(".header-search").find("input").on("focus",(function(){var t=e(this).parent().closest(".container").width();e(this).parent().addClass("active"),e(this).css("width",t)})).on("focusout",(function(){e(this).parent().removeClass("active"),e(this).removeAttr("style")})),e(".date-pick").datetimepicker({timepicker:!1,datepicker:!0,format:"d-m-y",step:10}),e(".vs-btn").each((function(){e(this).append('<span class="btn-bg"></span><span class="btn-shape"></span><span class="btn-shape"></span>')}));[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(e){return new bootstrap.Tooltip(e)}));e(".quantity-plus").each((function(){e(this).on("click",(function(t){t.preventDefault();var a=e(this).siblings(".qty-input"),n=parseInt(a.val());isNaN(n)||a.val(n+1)}))})),e(".quantity-minus").each((function(){e(this).on("click",(function(t){t.preventDefault();var a=e(this).siblings(".qty-input"),n=parseInt(a.val());!isNaN(n)&&n>1&&a.val(n-1)}))}))}(jQuery);
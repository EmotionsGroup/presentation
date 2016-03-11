$(document).ready(function() {

  var $parallax = $('div[class*="parallax"]'),
      w = $(window).width(),
      h = $(window).height();
  $('.scene').on('mousemove', function(e) {
      var offsetX = 0.5 - e.pageX / w,
          offsetY = 0.5 - e.pageY / h,
          offsetXi = 1 + e.pageX / w,
          offsetYi = 1 + e.pageY / h
      $('div[class*="parallax"]').each(function() {
          var $this = $(this),
              offsetLayer = $(this).data("offset") || 0,
              transformLayer = 'translateX(' + offsetX * offsetLayer +'px) translateY(' + offsetY * offsetLayer + 'px)';

          $(this).css('transform', transformLayer);
      });
      $('div[class*="parallax-only-axis"]').each(function() {
          var $this = $(this),
              offsetLayer = $(this).data("offset") || 0,
              transformLayer = 'translateX(' + offsetX * offsetLayer +'px) translateY(' + 0 + 'px)';

          $(this).css('transform', transformLayer);
      });
      $('div[class*="parallax-inverse"]').each(function() {
          var $this = $(this),
              offsetLayer = $(this).data("offset") || 0,
              transformLayer = 'translateX(' + offsetXi * offsetLayer +'px) translateY(' + offsetYi * offsetLayer + 'px)';

          $(this).css('transform', transformLayer);
      });
      $('div[class*="parallax-inverse-only-axis"]').each(function() {
          var $this = $(this),
              offsetLayer = $(this).data("offset") || 0,
              transformLayer = 'translateX(' + offsetXi * offsetLayer +'px) translateY(' + 0 + 'px)';

          $(this).css('transform', transformLayer);
      });
      $('div[class*="parallax-inverse-only-y"]').each(function() {
          var $this = $(this),
              offsetLayer = $(this).data("offset") || 0,
              transformLayer = 'translateX(' + 0 +'px) translateY(' + offsetX * offsetLayer + 'px)';

          $(this).css('transform', transformLayer);
      });
  });

  if ($('#map').length > 0) {
    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center:new google.maps.LatLng(43.212034, 76.923154),
        zoom:14,
        scrollwheel:false,
        draggable: false,
        disableDefaultUI: false,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        panControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.SMALL,
          position: google.maps.ControlPosition.LEFT_CENTER
          },
          styles:

        [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#c0e4f3"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#a6becb"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ]
      });
      //ЖК
      var infowindow1 = new google.maps.InfoWindow({content: 'Горное солнце <br/> Адрес: Аль-Фараби, д.146'});
      var infowindow2 = new google.maps.InfoWindow({content: 'Haileybury Almaty'});
      var infowindow3 = new google.maps.InfoWindow({content: 'Esentai Gourmet'});
      var infowindow4 = new google.maps.InfoWindow({content: 'Ritz Carlton'});
      var infowindow5 = new google.maps.InfoWindow({content: 'Аптека'});
      var infowindow6 = new google.maps.InfoWindow({content: 'Esentai Tower'});
      var infowindow7 = new google.maps.InfoWindow({content: 'Минимаркет'});
      var infowindow8 = new google.maps.InfoWindow({content: 'Bambini'});
      var infowindow9 = new google.maps.InfoWindow({content: 'АЗC ELF'});
      var infowindow10 = new google.maps.InfoWindow({content: 'НЦ Педиатрии и Детской Хирургии'});
      var infowindow11 = new google.maps.InfoWindow({content: 'Хозяюшка'});
      var infowindow12 = new google.maps.InfoWindow({content: 'Ариал'});
      var infowindow13 = new google.maps.InfoWindow({content: 'Госпиталь МВД РК'});
      var infowindow14 = new google.maps.InfoWindow({content: 'Прогресс, АЗС'});
      var infowindow15 = new google.maps.InfoWindow({content: '1000 дорог, аптека'});
      var infowindow16 = new google.maps.InfoWindow({content: 'Алияр Фарм, ТОО, аптека'});
      var infowindow17 = new google.maps.InfoWindow({content: 'Pate & Pizza'});
      var infowindow18 = new google.maps.InfoWindow({content: 'Тито Авангард'});
      var infowindow19 = new google.maps.InfoWindow({content: 'Villa dei Fiori'});
      var infowindow20 = new google.maps.InfoWindow({content: 'La Villa Bar'});
      var infowindow21 = new google.maps.InfoWindow({content: 'Peppoli Antinori'});
      var infowindow22 = new google.maps.InfoWindow({content: 'China Gold'});
      var infowindow23 = new google.maps.InfoWindow({content: 'Magestic'});
      var infowindow24 = new google.maps.InfoWindow({content: 'Old Trafford Pub'});

      var marker1 = new google.maps.Marker({
        position: {lat: 43.205114, lng: 76.916246},
        map: map,
        icon: "/theme/Gornoe/img/main-marker.png"
      });
      var marker2 = new google.maps.Marker({
        position: {lat: 43.217429, lng: 76.933351},
        map: map,
        icon: "/theme/Gornoe/img/marker9.png"
      });
      var marker3 = new google.maps.Marker({
        position: {lat: 43.218336, lng: 76.928008},
        map: map,
        icon: "/theme/Gornoe/img/marker8.png"
      });
      var marker4 = new google.maps.Marker({
        position: {lat: 43.219360, lng: 76.929070},
        map: map,
        icon: "/theme/Gornoe/img/marker2.png"
      });
      var marker5 = new google.maps.Marker({
        position: {lat: 43.220572, lng: 76.933694},
        map: map,
        icon: "/theme/Gornoe/img/marker6.png"
      });
      var marker6 = new google.maps.Marker({
        position: {lat: 43.218282, lng: 76.927054},
        map: map,
        icon: "/theme/Gornoe/img/marker7.png"
      });
      var marker7 = new google.maps.Marker({
        position: {lat: 43.223305, lng: 76.935569},
        map: map,
        icon: "/theme/Gornoe/img/marker8.png"
      });
      var marker8 = new google.maps.Marker({
        position: {lat: 43.226948, lng: 76.959693},
        map: map,
        icon: "/theme/Gornoe/img/marker1.png"
      });
      var marker9 = new google.maps.Marker({
        position: {lat: 43.217946, lng: 76.939114},
        map: map,
        icon: "/theme/Gornoe/img/marker5.png"
      });
      var marker10 = new google.maps.Marker({
        position: {lat: 43.225443, lng: 76.908960},
        map: map,
        icon: "/theme/Gornoe/img/marker1.png"
      });
      var marker11 = new google.maps.Marker({
        position: {lat: 43.204005, lng: 76.917082},
        map: map,
        icon: "/theme/Gornoe/img/marker6.png"
      });
      var marker12 = new google.maps.Marker({
        position: {lat: 43.208085, lng: 76.910920},
        map: map,
        icon: "/theme/Gornoe/img/marker8.png"
      });
      var marker13 = new google.maps.Marker({
        position: {lat: 43.208789, lng: 76.916285},
        map: map,
        icon: "/theme/Gornoe/img/marker10.png"
      });
      var marker14 = new google.maps.Marker({
        position: {lat: 43.207342, lng: 76.907491},
        map: map,
        icon: "/theme/Gornoe/img/marker6.png"
      });
      var marker15 = new google.maps.Marker({
        position: {lat: 43.207764, lng: 76.912089},
        map: map,
        icon: "/theme/Gornoe/img/marker5.png"
      });
      var marker16 = new google.maps.Marker({
        position: {lat: 43.208676, lng: 76.911375},
        map: map,
        icon: "/theme/Gornoe/img/marker6.png"
      });
      var marker17 = new google.maps.Marker({
        position: {lat: 43.210889, lng: 76.914488},
        map: map,
        icon: "/theme/Gornoe/img/marker6.png"
      });
      var marker18 = new google.maps.Marker({
        position: {lat: 43.207262, lng: 76.911426},
        map: map,
        icon: "/theme/Gornoe/img/marker2.png"
      });
      var marker20 = new google.maps.Marker({
        position: {lat: 43.211045, lng: 76.920040},
        map: map,
        icon: "/theme/Gornoe/img/marker2.png"
      });
      var marker21 = new google.maps.Marker({
        position: {lat: 43.210576, lng: 76.920394},
        map: map,
        icon: "/theme/Gornoe/img/marker2.png"
      });
      var marker22 = new google.maps.Marker({
        position: {lat: 43.211272, lng: 76.921296},
        map: map,
        icon: "/theme/Gornoe/img/marker2.png"
      });
      var marker23 = new google.maps.Marker({
        position: {lat: 43.213086, lng: 76.922680},
        map: map,
        icon: "/theme/Gornoe/img/marker2.png"
      });
      var marker24 = new google.maps.Marker({
        position: {lat: 43.202001, lng: 76.917245},
        map: map,
        icon: "/theme/Gornoe/img/marker2.png"
      });
      var marker25 = new google.maps.Marker({
        position: {lat: 43.204756, lng: 76.927553},
        map: map,
        icon: "/theme/Gornoe/img/marker2.png"
      });

      marker1.addListener('mouseover', function() {infowindow1.open(map, this);});
      marker1.addListener('mouseout', function() {infowindow1.close();});
      marker2.addListener('mouseover', function() {infowindow2.open(map, this);});
      marker2.addListener('mouseout', function() {infowindow2.close();});
      marker3.addListener('mouseover', function() {infowindow3.open(map, this);});
      marker3.addListener('mouseout', function() {infowindow3.close();});
      marker4.addListener('mouseover', function() {infowindow4.open(map, this);});
      marker4.addListener('mouseout', function() {infowindow4.close();});
      marker5.addListener('mouseover', function() {infowindow5.open(map, this);});
      marker5.addListener('mouseout', function() {infowindow5.close();});
      marker6.addListener('mouseover', function() {infowindow6.open(map, this);});
      marker6.addListener('mouseout', function() {infowindow6.close();});
      marker7.addListener('mouseover', function() {infowindow7.open(map, this);});
      marker7.addListener('mouseout', function() {infowindow7.close();});
      marker8.addListener('mouseover', function() {infowindow8.open(map, this);});
      marker8.addListener('mouseout', function() {infowindow8.close();});
      marker9.addListener('mouseover', function() {infowindow9.open(map, this);});
      marker9.addListener('mouseout', function() {infowindow9.close();});
      marker10.addListener('mouseover', function() {infowindow8.open(map, this);});
      marker10.addListener('mouseout', function() {infowindow8.close();});
      marker11.addListener('mouseover', function() {infowindow10.open(map, this);});
      marker11.addListener('mouseout', function() {infowindow10.close();});
      marker12.addListener('mouseover', function() {infowindow11.open(map, this);});
      marker12.addListener('mouseout', function() {infowindow11.close();});
      marker13.addListener('mouseover', function() {infowindow12.open(map, this);});
      marker13.addListener('mouseout', function() {infowindow12.close();});
      marker14.addListener('mouseover', function() {infowindow13.open(map, this);});
      marker14.addListener('mouseout', function() {infowindow13.close();});
      marker15.addListener('mouseover', function() {infowindow14.open(map, this);});
      marker15.addListener('mouseout', function() {infowindow14.close();});
      marker16.addListener('mouseover', function() {infowindow15.open(map, this);});
      marker16.addListener('mouseout', function() {infowindow15.close();});
      marker17.addListener('mouseover', function() {infowindow16.open(map, this);});
      marker17.addListener('mouseout', function() {infowindow16.close();});
      marker18.addListener('mouseover', function() {infowindow17.open(map, this);});
      marker18.addListener('mouseout', function() {infowindow17.close();});
      marker20.addListener('mouseover', function() {infowindow19.open(map, this);});
      marker20.addListener('mouseout', function() {infowindow19.close();});
      marker21.addListener('mouseover', function() {infowindow20.open(map, this);});
      marker21.addListener('mouseout', function() {infowindow20.close();});
      marker22.addListener('mouseover', function() {infowindow21.open(map, this);});
      marker22.addListener('mouseout', function() {infowindow21.close();});
      marker23.addListener('mouseover', function() {infowindow22.open(map, this);});
      marker23.addListener('mouseout', function() {infowindow22.close();});
      marker24.addListener('mouseover', function() {infowindow23.open(map, this);});
      marker24.addListener('mouseout', function() {infowindow23.close();});
      marker25.addListener('mouseover', function() {infowindow24.open(map, this);});
      marker25.addListener('mouseout', function() {infowindow24.close();});


      $("#mark1group").click(function() {
        marker8.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker8.setAnimation(null); }, 750);
        marker10.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker10.setAnimation(null); }, 750);
      });
      $("#mark2group").click(function() {
        marker4.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker4.setAnimation(null); }, 750);
        marker18.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker18.setAnimation(null); }, 750);
        marker20.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker20.setAnimation(null); }, 750);
        marker21.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker21.setAnimation(null); }, 750);
        marker22.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker22.setAnimation(null); }, 750);
        marker23.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker23.setAnimation(null); }, 750);
        marker24.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker24.setAnimation(null); }, 750);
        marker25.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker25.setAnimation(null); }, 750);
      });
      $("#mark3group").click(function() {
        marker9.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker9.setAnimation(null); }, 750);
        marker15.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker15.setAnimation(null); }, 750);
      });
      $("#mark4group").click(function() {
        marker5.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker5.setAnimation(null); }, 750);
        marker11.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker11.setAnimation(null); }, 750);
        marker14.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker14.setAnimation(null); }, 750);
        marker16.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker16.setAnimation(null); }, 750);
        marker17.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker17.setAnimation(null); }, 750);
      });
      $("#mark5group").click(function() {
        marker6.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker6.setAnimation(null); }, 750);
      });
      $("#mark6group").click(function() {
        marker3.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker3.setAnimation(null); }, 750);
        marker7.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker7.setAnimation(null); }, 750);
        marker12.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker12.setAnimation(null); }, 750);
      });
      $("#mark7group").click(function() {
        marker2.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker2.setAnimation(null); }, 750);
      });
      $("#mark8group").click(function() {
        marker13.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker13.setAnimation(null); }, 750);
      });
    }
    google.maps.event.addDomListener(window, 'load', initMap);
  }
  // slider
  var slider = $('#Glide').glide({
    type: "carousel",
    autoplay: false,
    paddings: 200,
    centered: true,
    navigation : false,
    animationDuration: 800,
    animationTimingFunc: 'cubic-bezier(0.075, 0.82, 0.165, 1)'
  });
// swiper
  var slider_advantages = {
    onClick: function(thisItem) {
      var slideNumber = thisItem.index() + 1;
      if (slideNumber < 0) {
        slideNumber = 1;
      }
      swiper.slideTo(slideNumber);
    },
    onChange: function() {
      setTimeout(function() {
        var thumb = $('.swiper-slide-active').index() - 1;
        if (thumb == 8) {
          thumb = 0;
        }
        $('.swiper-pagination .image-min.active').removeClass('active');
        $('.swiper-pagination .image-min').eq(thumb).addClass('active');
      }, 100)
    }
  }

  var swiper = new Swiper('.swiper-container', {
    speed: 1200,
    loop: true,
    effect: 'fade',
    fade: {
      crossFade: true
    },
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    onInit: function() {
      slider_advantages.onChange();
    },
    onSlideChangeStart: function() {
      slider_advantages.onChange();
    }
  });

  $(document).on('click', '.swiper-pagination .image-min', function() {
    var thisItem = $(this);
    slider_advantages.onClick(thisItem)
  })

  // home blocks
  var block_choose = {
    choose_on: function(thisItem) {

      if ($(thisItem).attr("id") == "1block")
      {
        $("#first").data("count", 50);
        $("#second").data("count", 2);
        $("#third").data("count", 3);
        $("#fourth").data("count", 4377.3);
      }
      else if ($(thisItem).attr("id") == "2block")
      {
        $("#first").data("count", 50);
        $("#second").data("count", 2);
        $("#third").data("count", 3);
        $("#fourth").data("count", 4193.901);
      }
      else if ($(thisItem).attr("id") == "3block")
      {
        $("#first").data("count", 50);
        $("#second").data("count", 2);
        $("#third").data("count", 3);
        $("#fourth").data("count", 4140.0);
      }
      else if ($(thisItem).attr("id") == "4block")
      {
        $("#first").data("count", 25);
        $("#second").data("count",1);
        $("#third").data("count", 1);
        $("#fourth").data("count", 2425.401);
      }

      $(thisItem).css({
        "fill":"#fccb00",
        "opacity":0.65,
        "stroke":'#fccb00',
        "stroke-width":5
      });
      $('#'+ 'mark-' + thisItem.id).css({
        "background-image": 'url("/theme/Gornoe/img/block-mark.png")',
        "color": "#fccb00"
      });
      $('.count-field').animateNumber({number: 0},0);
      $(".count-field").stop();
      $(".count-field").each(function() {
        if ($(this).attr('id') == 'fourth') {
          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
          var tcount = $(this).data("count");
          var decimal_places = 2;
          var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);
          $(this).animateNumber({ number: tcount * decimal_factor,
            easing: 'easeInQuad',
            "font-size": "25px",
            numberStep: function(now, tween) {
              var floored_number = Math.floor(now) / decimal_factor,
                  target = $(tween.elem);
              if (decimal_places > 0) {
                floored_number = floored_number.toFixed(decimal_places);
                floored_number = floored_number.toString().replace('.', ',');
              }
              target.text(floored_number);
            }
          },
          500);
        }
        else {
          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
          var tcount = $(this).data("count");
          $(this).animateNumber({ number: tcount,
            easing: 'easeInQuad',
            "font-size": "25px",
            numberStep: comma_separator_number_step
          },
          500);
        }
      });
    },
    choose_off: function(thisItem) {
      $(thisItem).css({
        "fill":"transparent",
        "opacity":0.65,
        "stroke":'transparent',
        "stroke-width":5
      });
      // $('.count-field').animateNumber({number: 0}, 0);
      // $('#'+ 'mark-' + thisItem.id).css({
      $('.block-mark').css({
        "background-image": 'url("/theme/Gornoe/img/block-mark-hover.png")',
        "color": "rgb(0, 37, 82)"
      });
    }
  }

  $( ".fil0" ).mouseover(function() {
    block_choose.choose_off($( ".fil0" ));
    block_choose.choose_on(this);
  });
  // $( ".fil0" ).mouseout(function() {
    // block_choose.choose_off(this);
  // });

  var plan = {
    show: function(option) {
      var plan_number = ".plan" + option;
      console.log(option);
      $(plan_number).animate({
        "z-index": 200,
        "opacity": 1
      }, 0, "easeOutCubic");

      // $($(plan_number).children("svg").children("g").children("g").children()[2]).trigger('mouseenter', function() {});

      $('html,body').animate({
        scrollTop: $(".content").offset().top
      }, 200, "easeOutCubic");

      $(".controls").animate({
        "opacity" : 1
      }, 0, "easeInCubic");

      $(".plan-counts").animate({
        "z-index": 200,
        "opacity" : 1
      }, 0, "easeInCubic");
    },
    hide: function () {
      $(".controls").animate({
        "opacity" : 0
      }, 0, "easeInCubic");
      console.log($(".plans"));
      $(".plans").each(function() {
        $(this).animate({
          "opacity": 0,
          "z-index": -1
        }, 0, "easeInCubic");
      });

      $(".plan-counts").animate({
        "z-index": -1,
        "opacity" : 0
      }, 0, "easeInCubic");
    }
  }

  $("#1block").click(function () {
    $(".block-number .block-num")[0].textContent = "БЛОК 1"
    $(".block-number-sym .block-num")[0].textContent = "БЛОК А"
    plan.hide();
    plan.show(1);
    // var $preloader = $('#page-preloader'),
    //     $spinner   = $preloader.find('.spinner');
    // $spinner.fadeIn();
    // $preloader.delay(0).fadeIn('fast');
    // setTimeout(function() {
    //   var $preloader = $('#page-preloader'),
    //     $spinner   = $preloader.find('.spinner');
    //   $spinner.fadeOut();
    //   $preloader.delay(300).fadeOut('fast');
    // }, 3000);
  });
  $("#2block").click(function () {
    $(".block-number .block-num")[0].textContent = "БЛОК 2"
    $(".block-number-sym .block-num")[0].textContent = "БЛОК Б"
    plan.hide();
    plan.show(2);
    // var $preloader = $('#page-preloader'),
    //     $spinner   = $preloader.find('.spinner');
    // $spinner.fadeIn();
    // $preloader.delay(0).fadeIn('fast');
    // setTimeout(function() {
    //   var $preloader = $('#page-preloader'),
    //     $spinner   = $preloader.find('.spinner');
    //   $spinner.fadeOut();
    //   $preloader.delay(300).fadeOut('fast');
    // }, 3000);
  });
  $("#3block").click(function () {
    $(".block-number .block-num")[0].textContent = "БЛОК 3"
    $(".block-number-sym .block-num")[0].textContent = "БЛОК В"
    plan.hide();
    plan.show(3);
    // var $preloader = $('#page-preloader'),
    //     $spinner   = $preloader.find('.spinner');
    // $spinner.fadeIn();
    // $preloader.delay(0).fadeIn('fast');
    // setTimeout(function() {
    //   var $preloader = $('#page-preloader'),
    //     $spinner   = $preloader.find('.spinner');
    //   $spinner.fadeOut();
    //   $preloader.delay(300).fadeOut('fast');
    // }, 3000);
  });
  $("#4block").click(function () {
    $(".block-number .block-num")[0].textContent = "БЛОК 4"
    $(".block-number-sym .block-num")[0].textContent = "БЛОК Г"
    plan.hide();
    plan.show(4);
    // var $preloader = $('#page-preloader'),
    //     $spinner   = $preloader.find('.spinner');
    // $spinner.fadeIn();
    // $preloader.delay(0).fadeIn('fast');
    // setTimeout(function() {
    //   var $preloader = $('#page-preloader'),
    //     $spinner   = $preloader.find('.spinner');
    //   $spinner.fadeOut();
    //   $preloader.delay(300).fadeOut('fast');
    // }, 3000);
  });

  $(".prev-block").click(function () {
    var prev_block = parseInt($(".block-number .block-num")[0].textContent.slice(-1)) - 1;
    plan.hide();
    if (prev_block == 0) {
      prev_block = 4;
    };
    $(".block-number .block-num")[0].textContent = $(".block-number .block-num")[0].textContent.slice(0, -1) + prev_block;
    if ($(".block-number .block-num")[0].textContent == "БЛОК 1") {$(".block-number-sym .block-num")[0].textContent = "БЛОК А"};
    if ($(".block-number .block-num")[0].textContent == "БЛОК 2") {$(".block-number-sym .block-num")[0].textContent = "БЛОК Б"};
    if ($(".block-number .block-num")[0].textContent == "БЛОК 3") {$(".block-number-sym .block-num")[0].textContent = "БЛОК В"};
    if ($(".block-number .block-num")[0].textContent == "БЛОК 4") {$(".block-number-sym .block-num")[0].textContent = "БЛОК Г"};
    $("#floor")[0].textContent = "1"
    plan.show(prev_block);
  });

  $(".next-block").click(function () {
    var next_block = parseInt($(".block-number .block-num")[0].textContent.slice(-1)) + 1;
    plan.hide();
    if (next_block == 5) {
      next_block = 1;
    };
    $(".block-number .block-num")[0].textContent = $(".block-number .block-num")[0].textContent.slice(0, -1) + next_block;
    if ($(".block-number .block-num")[0].textContent == "БЛОК 1") {$(".block-number-sym .block-num")[0].textContent = "БЛОК А"};
    if ($(".block-number .block-num")[0].textContent == "БЛОК 2") {$(".block-number-sym .block-num")[0].textContent = "БЛОК Б"};
    if ($(".block-number .block-num")[0].textContent == "БЛОК 3") {$(".block-number-sym .block-num")[0].textContent = "БЛОК В"};
    if ($(".block-number .block-num")[0].textContent == "БЛОК 4") {$(".block-number-sym .block-num")[0].textContent = "БЛОК Г"};
    $("#floor")[0].textContent = "1"
    plan.show(next_block);
  });

  $(".next-floor").click(function () {
    var prev_floor = parseInt($("#floor")[0].textContent) - 1;
    plan.hide();
    if (prev_floor == 0) {
      prev_floor = 5;
    };
    $("#floor")[0].textContent = prev_floor.toString();
    prev_floor = $(".block-number .block-num")[0].textContent.slice(-1) + prev_floor;
    if (prev_floor == 11 || prev_floor == 21 || prev_floor == 31 || prev_floor == 41 ) {
      prev_floor =  prev_floor.slice(0, 1);
    };
    plan.show(prev_floor);
  });

  $(".prev-floor").click(function () {
    var next_floor = parseInt($("#floor")[0].textContent) + 1;
    plan.hide();
    console.log(plan);
    if (next_floor == 6) {
      next_floor = 1;
    };
    $("#floor")[0].textContent = next_floor.toString();
    next_floor = $(".block-number .block-num")[0].textContent.slice(-1) + next_floor;
    if (next_floor == 11 || next_floor == 21 || next_floor == 31 || next_floor == 41 ) {
      next_floor =  next_floor.slice(0, 1);
    };
    plan.show(next_floor);
  });

  $(".close").click(function () {
    plan.hide();
    $(".block-number .block-num")[0].textContent = "БЛОК 1"
    $("#floor")[0].textContent = "1"
  })


  var apartment = {

    choose_on: function(thisItem) {
      $(thisItem).css({
        "fill":"#fccb00",
        "opacity":0.6,
        "stroke":'#fccb00',
        "stroke-width":5
      });

      console.log($(".fancy-item").attr("href"));
      console.log($(".fancy-item")[0]);
      //block1
      if ($(thisItem).attr("id") == "apart128")
      {
        $("#p-first").data("count", 128);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 94.9);
        $("#p-fifth").data("count", $(".apart128-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/128.jpg");
      }
      else if ($(thisItem).attr("id") == "apart127")
      {
        $("#p-first").data("count", 127);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 94.4);
        $("#p-fifth").data("count", $(".apart127-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/127.jpg");
      }
      else if ($(thisItem).attr("id") == "apart126")
      {
        $("#p-first").data("count", 126);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 76.8);
        $("#p-fifth").data("count", $(".apart126-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/126.jpg");
      }
      else if ($(thisItem).attr("id") == "apart129")
      {
        $("#p-first").data("count", 129);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 66.601);
        $("#p-fifth").data("count", $(".apart129-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/129.jpg");
      }
      else if ($(thisItem).attr("id") == "apart130")
      {
        $("#p-first").data("count", 130);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 68.4);
        $("#p-fifth").data("count", $(".apart130-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/130.jpg");
      }
      else if ($(thisItem).attr("id") == "apart153")
      {
        $("#p-first").data("count", 153);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 94.90);
        $("#p-fifth").data("count", $(".apart153-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/153.jpg");
      }
      else if ($(thisItem).attr("id") == "apart154")
      {
        $("#p-first").data("count", 154);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 90.6);
        $("#p-fifth").data("count", $(".apart154-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/154.jpg");
      }
      else if ($(thisItem).attr("id") == "apart155")
      {
        $("#p-first").data("count", 155);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 82.7);
        $("#p-fifth").data("count", $(".apart155-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/155.jpg");
      }
      else if ($(thisItem).attr("id") == "apart152")
      {
        $("#p-first").data("count", 152);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 73.7);
        $("#p-fifth").data("count", $(".apart152-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/152.jpg");
      }
      else if ($(thisItem).attr("id") == "apart151")
      {
        $("#p-first").data("count", 151);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 68.40);
        $("#p-fifth").data("count", $(".apart151-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/151.jpg");
      }
      else if ($(thisItem).attr("id") == "apart133")
      {
        $("#p-first").data("count", 133);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 104.10);
        $("#p-fifth").data("count", $(".apart133-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/133.jpg");
      }
      else if ($(thisItem).attr("id") == "apart132")
      {
        $("#p-first").data("count", 132);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 103.3);
        $("#p-fifth").data("count", $(".apart132-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/132.jpg");
      }
      else if ($(thisItem).attr("id") == "apart131")
      {
        $("#p-first").data("count", 131);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 80.4);
        $("#p-fifth").data("count", $(".apart131-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/131.jpg");
      }
      else if ($(thisItem).attr("id") == "apart134")
      {
        $("#p-first").data("count", 134);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 74.0);
        $("#p-fifth").data("count", $(".apart134-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/134.jpg");
      }
      else if ($(thisItem).attr("id") == "apart135")
      {
        $("#p-first").data("count", 135);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 76.2);
        $("#p-fifth").data("count", $(".apart135-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/135.jpg");
      }
      else if ($(thisItem).attr("id") == "apart158")
      {
        $("#p-first").data("count", 158);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 104.10);
        $("#p-fifth").data("count", $(".apart158-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/158.jpg");
      }
      else if ($(thisItem).attr("id") == "apart159")
      {
        $("#p-first").data("count", 159);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 100.0);
        $("#p-fifth").data("count", $(".apart159-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/159.jpg");
      }
      else if ($(thisItem).attr("id") == "apart160")
      {
        $("#p-first").data("count", 160);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 91.7);
        $("#p-fifth").data("count", $(".apart160-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/160.jpg");
      }
      else if ($(thisItem).attr("id") == "apart157")
      {
        $("#p-first").data("count", 157);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 81.101);
        $("#p-fifth").data("count", $(".apart157-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/157.jpg");
      }
      else if ($(thisItem).attr("id") == "apart156")
      {
        $("#p-first").data("count", 156);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 76.20);
        $("#p-fifth").data("count", $(".apart156-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/156.jpg");
      }
      else if ($(thisItem).attr("id") == "apart138")
      {
        $("#p-first").data("count", 138);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 104.1);
        $("#p-fifth").data("count", $(".apart138-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/138.jpg");
      }
      else if ($(thisItem).attr("id") == "apart137")
      {
        $("#p-first").data("count", 137);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 103.3);
        $("#p-fifth").data("count", $(".apart137-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/137.jpg");
      }
      else if ($(thisItem).attr("id") == "apart136")
      {
        $("#p-first").data("count", 136);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 80.4);
        $("#p-fifth").data("count", $(".apart136-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/136.jpg");
      }
      else if ($(thisItem).attr("id") == "apart139")
      {
        $("#p-first").data("count", 139);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 74.0);
        $("#p-fifth").data("count", $(".apart139-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/139.jpg");
      }
      else if ($(thisItem).attr("id") == "apart140")
      {
        $("#p-first").data("count", 140);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 76.2);
        $("#p-fifth").data("count", $(".apart140-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/140.jpg");
      }
      else if ($(thisItem).attr("id") == "apart163")
      {
        $("#p-first").data("count", 163);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 104.10);
        $("#p-fifth").data("count", $(".apart163-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/163.jpg");
      }
      else if ($(thisItem).attr("id") == "apart164")
      {
        $("#p-first").data("count", 164);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 100.0);
        $("#p-fifth").data("count", $(".apart164-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/164.jpg");
      }
      else if ($(thisItem).attr("id") == "apart165")
      {
        $("#p-first").data("count", 165);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 91.7);
        $("#p-fifth").data("count", $(".apart165-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/165.jpg");
      }
      else if ($(thisItem).attr("id") == "apart162")
      {
        $("#p-first").data("count", 162);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 81.101);
        $("#p-fifth").data("count", $(".apart162-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/162.jpg");
      }
      else if ($(thisItem).attr("id") == "apart161")
      {
        $("#p-first").data("count", 161);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 76.20);
        $("#p-fifth").data("count", $(".apart161-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/161.jpg");
      }
      else if ($(thisItem).attr("id") == "apart143")
      {
        $("#p-first").data("count", 143);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 104.1);
        $("#p-fifth").data("count", $(".apart143-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/143.jpg");
      }
      else if ($(thisItem).attr("id") == "apart142")
      {
        $("#p-first").data("count", 142);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 103.3);
        $("#p-fifth").data("count", $(".apart142-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/142.jpg");
      }
      else if ($(thisItem).attr("id") == "apart141")
      {
        $("#p-first").data("count", 141);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 80.4);
        $("#p-fifth").data("count", $(".apart141-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/141.jpg");
      }
      else if ($(thisItem).attr("id") == "apart144")
      {
        $("#p-first").data("count", 144);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 74.0);
        $("#p-fifth").data("count", $(".apart144-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/144.jpg");
      }
      else if ($(thisItem).attr("id") == "apart145")
      {
        $("#p-first").data("count", 145);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 76.20);
        $("#p-fifth").data("count", $(".apart145-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/145.jpg");
      }
      else if ($(thisItem).attr("id") == "apart168")
      {
        $("#p-first").data("count", 168);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 104.10);
        $("#p-fifth").data("count", $(".apart168-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/168.jpg");
      }
      else if ($(thisItem).attr("id") == "apart169")
      {
        $("#p-first").data("count", 169);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 100.0);
        $("#p-fifth").data("count", $(".apart169-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/169.jpg");
      }
      else if ($(thisItem).attr("id") == "apart170")
      {
        $("#p-first").data("count", 170);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 91.7);
        $("#p-fifth").data("count", $(".apart170-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/170.jpg");
      }
      else if ($(thisItem).attr("id") == "apart167")
      {
        $("#p-first").data("count", 167);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 81.101);
        $("#p-fifth").data("count", $(".apart167-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/167.jpg");
      }
      else if ($(thisItem).attr("id") == "apart166")
      {
        $("#p-first").data("count", 166);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 76.2);
        $("#p-fifth").data("count", $(".apart166-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/166.jpg");
      }
      else if ($(thisItem).attr("id") == "apart146")
      {
        $("#p-first").data("count", 146);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 80.4);
        $("#p-fifth").data("count", $(".apart146-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/146.jpg");
      }
      else if ($(thisItem).attr("id") == "apart147")
      {
        $("#p-first").data("count", 147);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 103.3);
        $("#p-fifth").data("count", $(".apart147-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/147.jpg");
      }
      else if ($(thisItem).attr("id") == "apart148")
      {
        $("#p-first").data("count", 148);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 104.1);
        $("#p-fifth").data("count", $(".apart148-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/148.jpg");
      }
      else if ($(thisItem).attr("id") == "apart150")
      {
        $("#p-first").data("count", 150);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 76.2);
        $("#p-fifth").data("count", $(".apart150-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/150.jpg");
      }
      else if ($(thisItem).attr("id") == "apart149")
      {
        $("#p-first").data("count", 149);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 74.0);
        $("#p-fifth").data("count", $(".apart149-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/149.jpg");
      }
      else if ($(thisItem).attr("id") == "apart175")
      {
        $("#p-first").data("count", 175);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 91.7);
        $("#p-fifth").data("count", $(".apart175-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/175.jpg");
      }
      else if ($(thisItem).attr("id") == "apart174")
      {
        $("#p-first").data("count", 174);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 77.5);
        $("#p-fifth").data("count", $(".apart174-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/174.jpg");
      }
      else if ($(thisItem).attr("id") == "apart173")
      {
        $("#p-first").data("count", 173);
        $("#p-second").data("count", 4);
        $("#p-third").data("count", 128.1);
        $("#p-fifth").data("count", $(".apart173-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/173.jpg");
      }
      else if ($(thisItem).attr("id") == "apart171")
      {
        $("#p-first").data("count", 171);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 76.20);
        $("#p-fifth").data("count", $(".apart171-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/171.jpg");
      }
      else if ($(thisItem).attr("id") == "apart172")
      {
        $("#p-first").data("count", 172);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 81.101);
        $("#p-fifth").data("count", $(".apart172-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/172.jpg");
      }

      //block2
      else if ($(thisItem).attr("id") == "apart77")
      {
        $("#p-first").data("count", 77);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 88.8);
        $("#p-fifth").data("count", $(".apart77-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/77.jpg");
      }
      else if ($(thisItem).attr("id") == "apart78")
      {
        $("#p-first").data("count", 78);
        $("#p-second").data("count", 1);
        $("#p-third").data("count", 33.4);
        $("#p-fifth").data("count", $(".apart78-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/78.jpg");
      }
      else if ($(thisItem).attr("id") == "apart79")
      {
        $("#p-first").data("count", 79);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 69.8);
        $("#p-fifth").data("count", $(".apart79-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/79.jpg");
      }
      else if ($(thisItem).attr("id") == "apart76")
      {
        $("#p-first").data("count", 76);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 90.5);
        $("#p-fifth").data("count", $(".apart76-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/76.jpg");
      }
      else if ($(thisItem).attr("id") == "apart80")
      {
        $("#p-first").data("count", 80);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 113.7);
        $("#p-fifth").data("count", $(".apart80-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/80.jpg");
      }
      else if ($(thisItem).attr("id") == "apart102")
      {
        $("#p-first").data("count", 102);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 87.3);
        $("#p-fifth").data("count", $(".apart102-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/102.jpg");
      }
      else if ($(thisItem).attr("id") == "apart101")
      {
        $("#p-first").data("count", 101);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 106.0);
        $("#p-fifth").data("count", $(".apart101-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/101.jpg");
      }
      else if ($(thisItem).attr("id") == "apart103")
      {
        $("#p-first").data("count", 103);
        $("#p-second").data("count", 1);
        $("#p-third").data("count", 33.4);
        $("#p-fifth").data("count", $(".apart103-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/103.jpg");
      }
      else if ($(thisItem).attr("id") == "apart104")
      {
        $("#p-first").data("count", 104);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 88.8);
        $("#p-fifth").data("count", $(".apart104-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/104.jpg");
      }
      else if ($(thisItem).attr("id") == "apart105")
      {
        $("#p-first").data("count", 105);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 80.601);
        $("#p-fifth").data("count", $(".apart105-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/105.jpg");
      }
       else if ($(thisItem).attr("id") == "apart82")
      {
        $("#p-first").data("count", 82);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 95.5);
        $("#p-fifth").data("count", $(".apart82-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/82.jpg");
      }
       else if ($(thisItem).attr("id") == "apart83")
      {
        $("#p-first").data("count", 83);
        $("#p-second").data("count", 1);
        $("#p-third").data("count", 33.4);
        $("#p-fifth").data("count", $(".apart83-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/83.jpg");
      }
       else if ($(thisItem).attr("id") == "apart84")
      {
        $("#p-first").data("count", 84);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 77.8);
        $("#p-fifth").data("count", $(".apart84-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/84.jpg");
      }
       else if ($(thisItem).attr("id") == "apart81")
      {
        $("#p-first").data("count", 81);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 96.8);
        $("#p-fifth").data("count", $(".apart81-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/81.jpg");
      }
       else if ($(thisItem).attr("id") == "apart85")
      {
        $("#p-first").data("count", 85);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 121.6);
        $("#p-fifth").data("count", $(".apart85-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/85.jpg");
      }
       else if ($(thisItem).attr("id") == "apart109")
      {
        $("#p-first").data("count", 109);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 95.5);
        $("#p-fifth").data("count", $(".apart109-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/109.jpg");
      }
       else if ($(thisItem).attr("id") == "apart108")
      {
        $("#p-first").data("count", 108);
        $("#p-second").data("count", 1);
        $("#p-third").data("count", 33.4);
        $("#p-fifth").data("count", $(".apart108-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/108.jpg");
      }
       else if ($(thisItem).attr("id") == "apart107")
      {
        $("#p-first").data("count", 107);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 93.6);
        $("#p-fifth").data("count", $(".apart107-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/107.jpg");
      }
       else if ($(thisItem).attr("id") == "apart110")
      {
        $("#p-first").data("count", 110);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 96.8);
        $("#p-fifth").data("count", $(".apart110-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/110.jpg");
      }
       else if ($(thisItem).attr("id") == "apart106")
      {
        $("#p-first").data("count", 106);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 106.0);
        $("#p-fifth").data("count", $(".apart106-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/106.jpg");
      }
       else if ($(thisItem).attr("id") == "apart87")
      {
        $("#p-first").data("count", 87);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 95.5);
        $("#p-fifth").data("count", $(".apart87-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/87.jpg");
      }
       else if ($(thisItem).attr("id") == "apart88")
      {
        $("#p-first").data("count", 88);
        $("#p-second").data("count", 1);
        $("#p-third").data("count", 33.4);
        $("#p-fifth").data("count", $(".apart88-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/88.jpg");
      }
       else if ($(thisItem).attr("id") == "apart89")
      {
        $("#p-first").data("count", 89);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 77.8);
        $("#p-fifth").data("count", $(".apart89-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/89.jpg");
      }
       else if ($(thisItem).attr("id") == "apart86")
      {
        $("#p-first").data("count", 86);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 96.8);
        $("#p-fifth").data("count", $(".apart86-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/86.jpg");
      }
       else if ($(thisItem).attr("id") == "apart90")
      {
        $("#p-first").data("count", 90);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 121.6);
        $("#p-fifth").data("count", $(".apart90-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/90.jpg");
      }
       else if ($(thisItem).attr("id") == "apart113")
      {
        $("#p-first").data("count", 113);
        $("#p-second").data("count", 1);
        $("#p-third").data("count", 33.4);
        $("#p-fifth").data("count", $(".apart113-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/113.jpg");
      }
       else if ($(thisItem).attr("id") == "apart114")
      {
        $("#p-first").data("count", 114);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 95.5);
        $("#p-fifth").data("count", $(".apart114-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/114.jpg");
      }        
       else if ($(thisItem).attr("id") == "apart112")
      {
        $("#p-first").data("count", 112);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 93.6);
        $("#p-fifth").data("count", $(".apart112-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/112.jpg");
      }
       else if ($(thisItem).attr("id") == "apart115")
      {
        $("#p-first").data("count", 115);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 96.8);
        $("#p-fifth").data("count", $(".apart115-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/115.jpg");
      }
       else if ($(thisItem).attr("id") == "apart111")
      {
        $("#p-first").data("count", 111);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 106.0);
        $("#p-fifth").data("count", $(".apart111-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/111.jpg");
      }
       else if ($(thisItem).attr("id") == "apart92")
      {
        $("#p-first").data("count", 92);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 95.5);
        $("#p-fifth").data("count", $(".apart92-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/92.jpg");
      }
       else if ($(thisItem).attr("id") == "apart93")
      {
        $("#p-first").data("count", 93);
        $("#p-second").data("count", 1);
        $("#p-third").data("count", 33.4);
        $("#p-fifth").data("count", $(".apart93-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/93.jpg");
      }
       else if ($(thisItem).attr("id") == "apart94")
      {
        $("#p-first").data("count", 94);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 77.8);
        $("#p-fifth").data("count", $(".apart94-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/94.jpg");
      }
       else if ($(thisItem).attr("id") == "apart91")
      {
        $("#p-first").data("count", 91);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 96.8);
        $("#p-fifth").data("count", $(".apart91-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/91.jpg");
      }
       else if ($(thisItem).attr("id") == "apart95")
      {
        $("#p-first").data("count", 95);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 121.6);
        $("#p-fifth").data("count", $(".apart95-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/95.jpg");
      }
       else if ($(thisItem).attr("id") == "apart119")
      {
        $("#p-first").data("count", 119);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 95.5);
        $("#p-fifth").data("count", $(".apart119-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/119.jpg");
      }
       else if ($(thisItem).attr("id") == "apart118")
      {
        $("#p-first").data("count", 118);
        $("#p-second").data("count", 1);
        $("#p-third").data("count", 33.4);
        $("#p-fifth").data("count", $(".apart118-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/118.jpg");
      }
       else if ($(thisItem).attr("id") == "apart117")
      {
        $("#p-first").data("count", 117);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 93.6);
        $("#p-fifth").data("count", $(".apart117-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/117.jpg");
      }
       else if ($(thisItem).attr("id") == "apart120")
      {
        $("#p-first").data("count", 120);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 96.8);
        $("#p-fifth").data("count", $(".apart120-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/120.jpg");
      }
       else if ($(thisItem).attr("id") == "apart116")
      {
        $("#p-first").data("count", 116);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 106.0);
        $("#p-fifth").data("count", $(".apart116-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/116.jpg");
      }
       else if ($(thisItem).attr("id") == "apart97")
      {
        $("#p-first").data("count", 97);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 95.5);
        $("#p-fifth").data("count", $(".apart97-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/97.jpg");
      }
       else if ($(thisItem).attr("id") == "apart98")
      {
        $("#p-first").data("count", 98);
        $("#p-second").data("count", 1);
        $("#p-third").data("count", 33.4);
        $("#p-fifth").data("count", $(".apart98-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/98.jpg");
      }
       else if ($(thisItem).attr("id") == "apart99")
      {
        $("#p-first").data("count", 99);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 77.8);
        $("#p-fifth").data("count", $(".apart99-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/99.jpg");
      }
       else if ($(thisItem).attr("id") == "apart96")
      {
        $("#p-first").data("count", 96);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 96.80);
        $("#p-fifth").data("count", $(".apart96-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/96.jpg");
      }
       else if ($(thisItem).attr("id") == "apart100")
      {
        $("#p-first").data("count", 100);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 121.6);
        $("#p-fifth").data("count", $(".apart100-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/100.jpg");
      }
       else if ($(thisItem).attr("id") == "apart124")
      {
        $("#p-first").data("count", 124);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 95.5);
        $("#p-fifth").data("count", $(".apart124-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/124.jpg");
      }
       else if ($(thisItem).attr("id") == "apart123")
      {
        $("#p-first").data("count", 123);
        $("#p-second").data("count", 1);
        $("#p-third").data("count", 33.4);
        $("#p-fifth").data("count", $(".apart123-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/123.jpg");
      }
       else if ($(thisItem).attr("id") == "apart122")
      {
        $("#p-first").data("count", 122);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 93.6);
        $("#p-fifth").data("count", $(".apart122-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/122.jpg");
      }
       else if ($(thisItem).attr("id") == "apart125")
      {
        $("#p-first").data("count", 125);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 96.8);
        $("#p-fifth").data("count", $(".apart125-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/125.jpg");
      }
       else if ($(thisItem).attr("id") == "apart121")
      {
        $("#p-first").data("count", 121);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 106.0);
        $("#p-fifth").data("count", $(".apart121-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/121.jpg");
      }
      // 3-4

      else if ($(thisItem).attr("id") == "apart27")
      {
        $("#p-first").data("count", 27);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 85.0);
        $("#p-fifth").data("count", $(".apart27-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/27.jpg");
      }
      else if ($(thisItem).attr("id") == "apart28")
      {
        $("#p-first").data("count", 28);
        $("#p-second").data("count", 1);
        $("#p-third").data("count", 33.4);
        $("#p-fifth").data("count", $(".apart28-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/28.jpg");
      }
      else if ($(thisItem).attr("id") == "apart29")
      {
        $("#p-first").data("count", 29);
        $("#p-second").data("count", 1);
        $("#p-third").data("count", 67.2);
        $("#p-fifth").data("count", $(".apart29-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/29.jpg");
      }
      else if ($(thisItem).attr("id") == "apart52")
      {
        $("#p-first").data("count", 52);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 90.1);
        $("#p-fifth").data("count", $(".apart52-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/52.jpg");
      }
      else if ($(thisItem).attr("id") == "apart53")
      {
        $("#p-first").data("count", 53);
        $("#p-second").data("count", 1);
        $("#p-third").data("count", 33.4);
        $("#p-fifth").data("count", $(".apart53-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/53.jpg");
      }
      else if ($(thisItem).attr("id") == "apart51")
      {
        $("#p-first").data("count", 51);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 100.4);
        $("#p-fifth").data("count", $(".apart51-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/51.jpg");
      }
      else if ($(thisItem).attr("id") == "apart30")
      {
        $("#p-first").data("count", 30);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 105.8);
        $("#p-fifth").data("count", $(".apart30-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/30.jpg");
      }
      else if ($(thisItem).attr("id") == "apart26")
      {
        $("#p-first").data("count", 26);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 90.5);
        $("#p-fifth").data("count", $(".apart26-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/26.jpg");
      }
      else if ($(thisItem).attr("id") == "apart54")
      {
        $("#p-first").data("count", 54);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 85.0);
        $("#p-fifth").data("count", $(".apart54-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/54.jpg");
      }
      else if ($(thisItem).attr("id") == "apart55")
      {
        $("#p-first").data("count", 55);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 89.6);
        $("#p-fifth").data("count", $(".apart55-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/55.jpg");
      }
      else if ($(thisItem).attr("id") == "apart32")
      {
        $("#p-first").data("count", 32);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 98.4);
        $("#p-fifth").data("count", $(".apart32-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/32.jpg");
      }
      else if ($(thisItem).attr("id") == "apart33")
      {
        $("#p-first").data("count", 33);
        $("#p-second").data("count", 1);
        $("#p-third").data("count", 33.4);
        $("#p-fifth").data("count", $(".apart33-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/33.jpg");
      }
      else if ($(thisItem).attr("id") == "apart34")
      {
        $("#p-first").data("count", 34);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 80.8);
        $("#p-fifth").data("count", $(".apart34-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/34.jpg");
      }
      else if ($(thisItem).attr("id") == "apart57")
      {
        $("#p-first").data("count", 57);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 95.2);
        $("#p-fifth").data("count", $(".apart57-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/57.jpg");
      }
      else if ($(thisItem).attr("id") == "apart58")
      {
        $("#p-first").data("count", 58);
        $("#p-second").data("count", 1);
        $("#p-third").data("count", 33.4);
        $("#p-fifth").data("count", $(".apart58-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/58.jpg");
      }
      else if ($(thisItem).attr("id") == "apart56")
      {
        $("#p-first").data("count", 56);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 104.401);
        $("#p-fifth").data("count", $(".apart56-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/56.jpg");
      }
      else if ($(thisItem).attr("id") == "apart35")
      {
        $("#p-first").data("count", 35);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 105.8);
        $("#p-fifth").data("count", $(".apart35-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/35.jpg");
      }
      else if ($(thisItem).attr("id") == "apart31")
      {
        $("#p-first").data("count", 31);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 100.5);
        $("#p-fifth").data("count", $(".apart31-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/31.jpg");
      }
      else if ($(thisItem).attr("id") == "apart59")
      {
        $("#p-first").data("count", 59);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 93.2);
        $("#p-fifth").data("count", $(".apart59-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/59.jpg");
      }
      else if ($(thisItem).attr("id") == "apart60")
      {
        $("#p-first").data("count", 60);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 94.8);
        $("#p-fifth").data("count", $(".apart60-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/60.jpg");
      }
      else if ($(thisItem).attr("id") == "apart37")
      {
        $("#p-first").data("count", 37);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 98.4);
        $("#p-fifth").data("count", $(".apart37-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/37.jpg");
      }
      else if ($(thisItem).attr("id") == "apart38")
      {
        $("#p-first").data("count", 38);
        $("#p-second").data("count", 1);
        $("#p-third").data("count", 33.4);
        $("#p-fifth").data("count", $(".apart38-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/38.jpg");
      }
      else if ($(thisItem).attr("id") == "apart39")
      {
        $("#p-first").data("count", 39);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 80.8);
        $("#p-fifth").data("count", $(".apart39-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/39.jpg");
      }
      else if ($(thisItem).attr("id") == "apart62")
      {
        $("#p-first").data("count", 62);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 95.2);
        $("#p-fifth").data("count", $(".apart62-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/62.jpg");
      }
      else if ($(thisItem).attr("id") == "apart63")
      {
        $("#p-first").data("count", 63);
        $("#p-second").data("count", 1);
        $("#p-third").data("count", 33.4);
        $("#p-fifth").data("count", $(".apart63-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/63.jpg");
      }
      else if ($(thisItem).attr("id") == "apart61")
      {
        $("#p-first").data("count", 61);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 104.401);
        $("#p-fifth").data("count", $(".apart61-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/61.jpg");
      }
      else if ($(thisItem).attr("id") == "apart40")
      {
        $("#p-first").data("count", 40);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 105.8);
        $("#p-fifth").data("count", $(".apart40-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/40.jpg");
      }
      else if ($(thisItem).attr("id") == "apart36")
      {
        $("#p-first").data("count", 36);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 100.5);
        $("#p-fifth").data("count", $(".apart36-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/36.jpg");
      }
      else if ($(thisItem).attr("id") == "apart64")
      {
        $("#p-first").data("count", 64);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 93.2);
        $("#p-fifth").data("count", $(".apart64-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/64.jpg");
      }
      else if ($(thisItem).attr("id") == "apart65")
      {
        $("#p-first").data("count", 65);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 94.8);
        $("#p-fifth").data("count", $(".apart65-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/65.jpg");
      }
      else if ($(thisItem).attr("id") == "apart42")
      {
        $("#p-first").data("count", 42);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 98.4);
        $("#p-fifth").data("count", $(".apart42-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/42.jpg");
      }
      else if ($(thisItem).attr("id") == "apart43")
      {
        $("#p-first").data("count", 43);
        $("#p-second").data("count", 1);
        $("#p-third").data("count", 33.4);
        $("#p-fifth").data("count", $(".apart43-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/43.jpg");
      }
      else if ($(thisItem).attr("id") == "apart44")
      {
        $("#p-first").data("count", 44);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 80.8);
        $("#p-fifth").data("count", $(".apart44-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/44.jpg");
      }
      else if ($(thisItem).attr("id") == "apart67")
      {
        $("#p-first").data("count", 67);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 95.2);
        $("#p-fifth").data("count", $(".apart67-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/67.jpg");
      }
      else if ($(thisItem).attr("id") == "apart68")
      {
        $("#p-first").data("count", 68);
        $("#p-second").data("count", 1);
        $("#p-third").data("count", 33.4);
        $("#p-fifth").data("count", $(".apart68-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/68.jpg");
      }
      else if ($(thisItem).attr("id") == "apart66")
      {
        $("#p-first").data("count", 66);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 104.401);
        $("#p-fifth").data("count", $(".apart66-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/66.jpg");
      }
      else if ($(thisItem).attr("id") == "apart45")
      {
        $("#p-first").data("count", 45);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 105.8);
        $("#p-fifth").data("count", $(".apart45-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/45.jpg");
      }
      else if ($(thisItem).attr("id") == "apart41")
      {
        $("#p-first").data("count", 41);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 100.5);
        $("#p-fifth").data("count", $(".apart41-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/41.jpg");
      }
      else if ($(thisItem).attr("id") == "apart69")
      {
        $("#p-first").data("count", 69);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 93.2);
        $("#p-fifth").data("count", $(".apart69-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/69.jpg");
      }
      else if ($(thisItem).attr("id") == "apart70")
      {
        $("#p-first").data("count", 70);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 94.8);
        $("#p-fifth").data("count", $(".apart70-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/70.jpg");
      }
      else if ($(thisItem).attr("id") == "apart47")
      {
        $("#p-first").data("count", 47);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 98.4);
        $("#p-fifth").data("count", $(".apart47-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/47.jpg");
      }
      else if ($(thisItem).attr("id") == "apart48")
      {
        $("#p-first").data("count", 48);
        $("#p-second").data("count", 1);
        $("#p-third").data("count", 33.4);
        $("#p-fifth").data("count", $(".apart48-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/48.jpg");
      }
      else if ($(thisItem).attr("id") == "apart49")
      {
        $("#p-first").data("count", 49);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 80.8);
        $("#p-fifth").data("count", $(".apart49-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/49.jpg");
      }
      else if ($(thisItem).attr("id") == "apart72")
      {
        $("#p-first").data("count", 72);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 95.2);
        $("#p-fifth").data("count", $(".apart72-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/72.jpg");
      }
      else if ($(thisItem).attr("id") == "apart73")
      {
        $("#p-first").data("count", 73);
        $("#p-second").data("count", 1);
        $("#p-third").data("count", 33.4);
        $("#p-fifth").data("count", $(".apart73-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/73.jpg");
      }
      else if ($(thisItem).attr("id") == "apart71")
      {
        $("#p-first").data("count", 71);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 104.401);
        $("#p-fifth").data("count", $(".apart71-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/71.jpg");
      }
      else if ($(thisItem).attr("id") == "apart50")
      {
        $("#p-first").data("count", 50);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 105.8);
        $("#p-fifth").data("count", $(".apart50-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/50.jpg");
      }
      else if ($(thisItem).attr("id") == "apart46")
      {
        $("#p-first").data("count", 46);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 100.5);
        $("#p-fifth").data("count", $(".apart46-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/46.jpg");
      }
      else if ($(thisItem).attr("id") == "apart74")
      {
        $("#p-first").data("count", 74);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 93.2);
        $("#p-fifth").data("count", $(".apart74-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/74.jpg");
      }
      else if ($(thisItem).attr("id") == "apart75")
      {
        $("#p-first").data("count", 75);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 94.8);
        $("#p-fifth").data("count", $(".apart75-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/75.jpg");
      }
      else if ($(thisItem).attr("id") == "apart3")
      {
        $("#p-first").data("count", 3);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 94.1);
        $("#p-fifth").data("count", $(".apart3-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/3.jpg");
      }
      else if ($(thisItem).attr("id") == "apart4")
      {
        $("#p-first").data("count", 4);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 96.8);
        $("#p-fifth").data("count", $(".apart4-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/4.jpg");
      }
      else if ($(thisItem).attr("id") == "apart5")
      {
        $("#p-first").data("count", 5);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 82.1);
        $("#p-fifth").data("count", $(".apart5-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/5.jpg");
      }
      else if ($(thisItem).attr("id") == "apart2")
      {
        $("#p-first").data("count", 2);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 90.4);
        $("#p-fifth").data("count", $(".apart2-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/2.jpg");
      }
      else if ($(thisItem).attr("id") == "apart1")
      {
        $("#p-first").data("count", 1);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 82.8);
        $("#p-fifth").data("count", $(".apart1-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/1.jpg");
      }
      else if ($(thisItem).attr("id") == "apart8")
      {
        $("#p-first").data("count", 8);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 104.4);
        $("#p-fifth").data("count", $(".apart8-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/8.jpg");
      }
      else if ($(thisItem).attr("id") == "apart9")
      {
        $("#p-first").data("count", 9);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 107.0);
        $("#p-fifth").data("count", $(".apart9-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/9.jpg");
      }
      else if ($(thisItem).attr("id") == "apart10")
      {
        $("#p-first").data("count", 10);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 91.8);
        $("#p-fifth").data("count", $(".apart10-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/10.jpg");
      }
      else if ($(thisItem).attr("id") == "apart7")
      {
        $("#p-first").data("count", 7);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 99.9);
        $("#p-fifth").data("count", $(".apart7-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/7.jpg");
      }
      else if ($(thisItem).attr("id") == "apart6")
      {
        $("#p-first").data("count", 6);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 91.7);
        $("#p-fifth").data("count", $(".apart6-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/6.jpg");
      }
      else if ($(thisItem).attr("id") == "apart13")
      {
        $("#p-first").data("count", 13);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 104.4);
        $("#p-fifth").data("count", $(".apart13-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/13.jpg");
      }
      else if ($(thisItem).attr("id") == "apart14")
      {
        $("#p-first").data("count", 14);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 107.0);
        $("#p-fifth").data("count", $(".apart14-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/14.jpg");
      }
      else if ($(thisItem).attr("id") == "apart15")
      {
        $("#p-first").data("count", 15);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 91.8);
        $("#p-fifth").data("count", $(".apart15-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/15.jpg");
      }
      else if ($(thisItem).attr("id") == "apart12")
      {
        $("#p-first").data("count", 12);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 99.9);
        $("#p-fifth").data("count", $(".apart12-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/12.jpg");
      }
      else if ($(thisItem).attr("id") == "apart11")
      {
        $("#p-first").data("count", 11);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 91.7);
        $("#p-fifth").data("count", $(".apart11-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/11.jpg");
      }
      else if ($(thisItem).attr("id") == "apart18")
      {
        $("#p-first").data("count", 18);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 104.4);
        $("#p-fifth").data("count", $(".apart18-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/18.jpg");
      }
      else if ($(thisItem).attr("id") == "apart19")
      {
        $("#p-first").data("count", 19);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 107.0);
        $("#p-fifth").data("count", $(".apart19-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/19.jpg");
      }
      else if ($(thisItem).attr("id") == "apart20")
      {
        $("#p-first").data("count", 20);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 91.8);
        $("#p-fifth").data("count", $(".apart20-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/20.jpg");
      }
      else if ($(thisItem).attr("id") == "apart17")
      {
        $("#p-first").data("count", 17);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 99.9);
        $("#p-fifth").data("count", $(".apart17-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/17.jpg");
      }
      else if ($(thisItem).attr("id") == "apart16")
      {
        $("#p-first").data("count", 16);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 91.7);
        $("#p-fifth").data("count", $(".apart16-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/16.jpg");
      }
      else if ($(thisItem).attr("id") == "apart23")
      {   
        $("#p-first").data("count", 23);
        $("#p-second").data("count", 4);
        $("#p-third").data("count", 127.601);
        $("#p-fifth").data("count", $(".apart23-price")[0].textContent); 
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/23.jpg");
      }
      else if ($(thisItem).attr("id") == "apart24")
      {
        $("#p-first").data("count", 24);
        $("#p-second").data("count", 3);
        $("#p-third").data("count", 107.0);
        $("#p-fifth").data("count", $(".apart24-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/24.jpg");
      }
      else if ($(thisItem).attr("id") == "apart25")
      {
        $("#p-first").data("count", 25);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 91.8);
        $("#p-fifth").data("count", $(".apart25-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/25.jpg");
      }
      else if ($(thisItem).attr("id") == "apart22")
      {
        $("#p-first").data("count", 22);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 75);
        $("#p-fifth").data("count", $(".apart22-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/22.jpg");
      }
      else if ($(thisItem).attr("id") == "apart21")
      {
        $("#p-first").data("count", 21);
        $("#p-second").data("count", 2);
        $("#p-third").data("count", 91.7);
        $("#p-fifth").data("count", $(".apart21-price")[0].textContent);
        $(".fancy-item").attr("href", "/theme/Gornoe/img/apartments/21.jpg");
      }

      $('.p-count-field').animateNumber({number: 0},0);
      $(".p-count-field").stop();
      $(".p-count-field").each(function() {
        if ($(this).attr('id') == 'p-third' || $(this).attr('id') == 'p-fifth') {
          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
          var tcount = $(this).data("count");
          var decimal_places = 2;
          var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);
          $(this).animateNumber({ number: tcount * decimal_factor,
            easing: 'easeInQuad',
            "font-size": "25px",
            numberStep: function(now, tween) {
              var floored_number = Math.floor(now) / decimal_factor,
                  target = $(tween.elem);
              if (decimal_places > 0) {
                floored_number = floored_number.toFixed(decimal_places);
                floored_number = floored_number.toString().replace('.', ',');
              }
              target.text(floored_number);
            }
          },
          500);
        }
        else {
          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
          var tcount = $(this).data("count");
          $(this).animateNumber({ number: tcount,
            easing: 'easeInQuad',
            "font-size": "25px",
            numberStep: comma_separator_number_step
          },
          500);
        }
      });
    },
    choose_off: function(thisItem) {
      $(thisItem).css({
        "fill":"transparent",
        "opacity":0.65,
        "stroke":'transparent',
        "stroke-width":5
      });
    }
  }
  $( ".fil1" ).mouseenter(function() {
    apartment.choose_off($( ".fil1" ));
    apartment.choose_on(this);
  });

  $( ".fil1" ).click(function() {
    $(".fancy-item").fancybox({
      openEffect  : 'none',
      closeEffect : 'none',
      showCloseButton : true,
      enableEscapeButton : true,
      helpers: {
        overlay: {
          locked: false
        }
      }
    });
    $('.fancy-item').click();
  });

  $(".mouse").click(function () {
   $('html,body').animate({
     scrollTop: $("#anchor1").offset().top
   }, 800, "easeOutCubic");
   $(".main").moveTo(2);
   return false;
  });

  $('.navigate li a').click(function() {
    var target = $(this.hash);
    $('html,body').animate({
      scrollTop: target.offset().top
    }, 800, "easeOutCubic");
    return false;
  });

  $(".main").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {
      if (index == 6) {
        $('#car-anim').addClass('animated slideInLeft').css("opacity", "1");
      };
      if (index == 7) {
        $('.news').addClass('animated fadeInLeft').css("opacity", "1");
        $('.posts').addClass('animated fadeInRight').css("opacity", "1");
      };
   },   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: 1030,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
  });

  $("#up-slide").click(function () {
    $(".main").moveUp();
  });
  $("#down-slide").click(function () {
    $(".main").moveDown();
  });

  $("#a1").click(function () {$(".main").moveTo(2);});
  $("#a2").click(function () {$(".main").moveTo(3);});
  $("#a3").click(function () {$(".main").moveTo(4);});
  $("#a4").click(function () {$(".main").moveTo(5);});
  $("#a5").click(function () {$(".main").moveTo(6);});
  $("#a6").click(function () {$(".main").moveTo(7);});


  // $(document).ready(function(){
  //   $('body').bind('mousewheel', function(e){
  //       if(e.originalEvent.wheelDelta /120 > 0) {
  //         $('html,body').animate({
  //           scrollTop: $('#anchor2').offset().top
  //         }, 800, "easeOutCubic");
  //       }
  //       else{
  //         var lastId,
  //           topMenu = $(".navigate"),
  //           topMenuHeight = topMenu.outerHeight()+62,
  //           menuItems = topMenu.find("a"),
  //           scrollItems = menuItems.map(function(){
  //             var item = $($(this).attr("href"));
  //             if (item.length) { return item; }
  //           });
  //         $(window).scroll(function(){
  //           var fromTop = $(this).scrollTop()+topMenuHeight;
  //           var cur = scrollItems.map(function(){
  //             if ($(this).offset().top < fromTop)
  //               return this;
  //           });
  //           cur = cur[cur.length-1];
  //           var id = cur && cur.length ? cur[0].id : "";
  //           console.log(parseInt(id.slice(-1)) + 1);
  //          });
  //       }
  //   });
  // });

// end ready
});

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

$(document).ready(function () {
    var slideWidth=300;
    var timerInterior=1000;

var height= $(window).height();
var widthz= $(window).width();
$('#video-viewport').css("height", height);
          $('#cbh_container').css("height", height);



// setInterval(function(){
//   if(device.ios()||device.iphone()||device.ipod()||device.ipod()||device.androidPhone()){
//     var asdasd= $("#mep_0").length;
//     if(asdasd>0){
//       $("#mep_0").remove();
//     }
//   }
// },timerInterior);



});

$(document).ready(function() {



$('a[href^="#"]').click(function(){
    if($(this).attr('href')!='#ZZZG'){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 2000);
        return false;
    }
});



        $(window).resize(function () {

SliderRight();


        });


        function SliderRight(){

            var heizxght= $(window).height();
            var widxthssz= $(window).width();

            var a2sdasdxcz=heizxght-20;

            $('#video-viewport').css("height", a2sdasdxcz);
            $('#cbh_container').css("height", heizxght);

$('#mep_0').css("width", widxthssz);



        }




  $("#route_contactForm").click(function(){

  $("#cbh_item_dialog").addClass("OpenModel");
      $("#cbh_item_dialog").removeClass("cliseRModel");

  $("#cbh_item_call_deferred").addClass("cliseRModel");

  });


  $("#route_callNow").click(function(){
  $("#cbh_item_dialog").addClass("cliseRModel");
    $("#cbh_item_call_deferred").removeClass("cliseRModel");
  $("#cbh_item_call_deferred").addClass("OpenModel");
  });




  $(".cbh-arrow-part").click(function(){
    $("#cbh_phone").attr("class","cbh-widget cbh-ru cbh-icon-sideways-right cbh-show");
    $("#cbh_container").attr("class","cbh cbh-on cbh-hide");
  });

  $("#cbh-x").click(function(){
    $("#cbh_phone").attr("class","cbh-widget cbh-ru cbh-icon-sideways-right cbh-show");
    $("#cbh_container").attr("class","cbh cbh-on cbh-hide");
  });



  $(".cbh-widget-content").click(function(){

  $("#cbh_phone").attr("class","cbh-widget cbh-ru cbh-icon-sideways-right cbh-hide");
    $("#cbh_container").attr("class","cbh cbh-on cbh-show");



  });


    var asda=0;

  $(".read-more-link").click(function(){

  $(".fa-angle-right").removeClass('Rotation');
  $("#solutions .cshero-fancybox-content").css('height','75px');

  if($(this).parent().parent().height()!=75){
        $("#solutions .cshero-fancybox-content").css('height','75px');
        $(".fa-angle-right").removeClass('Rotation');
  }else{
var gidth = $(this).parent().parent().children('.content').height();
$(this).parent().parent().css('height',gidth);
$(this).children('.fa').addClass('Rotation');
}

asda++;
  });









    $(window).scroll(function() {
    $('.leftblog3z').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var heidth = $(window).height();

      if (imagePos < topOfWindow+heidth-50) {
        $(this).addClass('RightAmomait');
      }
    });
  });



var slideWidth=300;
var sliderTimer;
$(function(){
$('.slidewrapper').width($('.slidewrapper').children().size()*slideWidth);
    sliderTimer=setInterval(nextSlide,3000);


});

function nextSlide(){
    var currentSlide=parseInt($('.slidewrapper').data('current'));
    currentSlide++;
    if(currentSlide>=$('.slidewrapper').children().size())
    {
        $('.slidewrapper').css('left',-(currentSlide-2)*slideWidth);
        $('.slidewrapper').append($('.slidewrapper').children().first().clone());
        $('.slidewrapper').children().first().remove();
        currentSlide--;
    }
        $('.slidewrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
}


   SliderRight();

});

$("#form-car").submit(function() {
  var element = $(this);
  $.ajax({
    type: "POST",
    url: "http://gornoesolnce.kz/theme/Gornoe/send1.php",
    data: element.serialize()
  }).done(function() {
    alert("Спасибо! Мы с вами свяжемся.");
    setTimeout(function() {
      element.trigger("reset");
    }, 1000);
  });
  return false;
});

$("#feedback-call").submit(function() {
  var element = $(this);
  $.ajax({
    type: "POST",
    url: "http://gornoesolnce.kz/theme/Gornoe/send2.php",
    data: element.serialize()
  }).done(function() {
    alert("Спасибо! Мы с вами свяжемся.");
    setTimeout(function() {
      element.trigger("reset");
    }, 1000);
  });
  return false;
});

$("#feedback-message").submit(function() {
  var element = $(this);
  $.ajax({
    type: "POST",
    url: "http://gornoesolnce.kz/theme/Gornoe/send3.php",
    data: element.serialize()
  }).done(function() {
    alert("Спасибо! Мы с вами свяжемся.");
    setTimeout(function() {
      element.trigger("reset");
    }, 1000);
  });
  return false;
});

function SendOtziv() {
  var element = $(this);
  $.ajax({
    type: "POST",
    url: "/mail.php",
    data: element.serialize()
  }).done(function() {
    alert("Спасибо! Мы с вами свяжемся.");
    setTimeout(function() {
      element.trigger("reset");
    }, 1000);
  });
  return false;
}


function SendOtziv2() {
// $.ajax({
// type: "POST",
// url: "/mail.php",
// data:   "a=" + $("#cbh_item_dialog_input_2").val() + "&" +
//         "b=" + $("#cbh_item_dialog_input_1").val() + "&" +
//         "c=" + $("#cbh_item_dialog_input_0").val(),
// success:
// alert("Ваше сообщение было отправлено!")

// });
console.log($(this));
}

function SendOtziv3() {
$.ajax({
type: "POST",
url: "/contact-form-mailto.php",
data:   "a=" + $("#dialog_input_2").val() + "&" +
        "b=" + $("#dialog_input_1").val() + "&" +
        "c=" + $("#dialog_input_0").val(),
success:
alert("Ваше сообщение было отправлено!")

});
}

function SendOtziv4() {
$.ajax({
type: "POST",
url: "/contact-form-mailto.php",
data:   "a=" + $("#input_2").val() + "&" +
        "b=" + $("#input_1").val() + "&" +
        "c=" + $("#input_0").val(),
success:
alert("Ваше сообщение было отправлено!")

});
}

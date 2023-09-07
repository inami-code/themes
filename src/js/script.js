jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // ------------------------------------
  // # ハンバーガーメニュー
  // ------------------------------------
  $(".js-hamburger").click(function () {
    if ($(".js-hamburger").hasClass("is-active")) {
      $(".js-hamburger").removeClass("is-active");
      $(".header").removeClass("is-active");
      $(".js-sp-nav").fadeOut(300);
    } else {
      $(".js-hamburger").addClass("is-active");
      $(".header").addClass("is-active");
      $(".js-sp-nav").fadeIn(300);
    }
  });

  // ------------------------------------
  // # swiper
  // ------------------------------------
  const swiper = new Swiper(".js-mv-swiper", {
    // Optional parameters
    loop: true,
    speed: 1500, //スライドの速度
    effect: "fade",
    // autoplay: {
    //   delay: 3000,
    // },

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const swiper2 = new Swiper(".js-staff-swiper", {
    loop: true, // ループ有効
    slidesPerView: 1.85, // 一度に表示する枚数
    speed: 5000, // ループの時間
    allowTouchMove: false, // スワイプ無効
    autoplay: {
      delay: 0, // 途切れなくループ
    },
    spaceBetween: 10,
    breakpoints: {
      // スライドの表示枚数：768px以上の場合
      768: {
        slidesPerView: 3,
      },
      // スライドの表示枚数：1025px以上の場合
      1025: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  // ------------------------------------
  // # トップへ戻るボタン
  // ------------------------------------
  let topBtn = $(".to-top");
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "linear"
    );
    return false;
  });

  // ------------------------------------
  // # ハンバーガーメニュー展開時背景を固定
  // ------------------------------------
  $(function () {
    var state = false;
    var pos;
    $(".hamburger").click(function () {
      if (state == false) {
        pos = $(window).scrollTop();
        $("body").addClass("fixed").css({ top: -pos });
        state = true;
      } else {
        $("body").removeClass("fixed").css({ top: 0 });
        window.scrollTo(0, pos);
        state = false;
      }
    });
  });

  // ------------------------------------
  // # WEB予約日付datepicker
  // ------------------------------------
  $(".form__date").datepicker({
    dateFormat: "yy年mm月dd日",
  });

  // ------------------------------------
  // # WEB予約ドロップダウンメニュー１つ目をグレーに
  // ------------------------------------
  $("select").on("change", function () {
    if ($(this).val() == "placeholder") {
      $(this).css("color", "#C2C2C2");
    } else {
      $(this).css("color", "#393939");
    }
  });

  // ------------------------------------
  // # WEB予約日付数字以外入力できない記述
  // ------------------------------------
  jQuery(function () {
    jQuery(".form__date").attr(
      "onkeyup",
      'if(event.keyCode==9||event.keyCode==16) return; this.value=this.value.replace(/[^0-9年月日/]+/i,"")'
    );
  });
});

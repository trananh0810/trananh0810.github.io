$(function() {
  $(".wrap-loading").css("display", "none");
  //show menu
  showMenu();
  activeMenu();
  $(window).scroll(() => {
    showMenu();
    activeMenu();
  });

  //hiệu ứng đánh chữ
  effectTyping();

  //run statistical
  runStatistical();

  //fancybox
  $("[data-fancybox").fancybox({
    loop: true,
    protect: true,
    buttons: ["zoom", "share", "slideShow", "thumbs", "close"],
    animationEffect: "zoom-in-out",
    zoomOpacity: "auto",
    transitionEffect: "zoom-in-out",
    beforeLoad: $.noop
  });

  //click menu
  clickMenu();
});

//show menu
let showMenu = () => {
  let indexWindow = $(window).scrollTop();

  if (indexWindow >= 100) {
    $("#div-menu").addClass("div-menu-show");
  } else {
    $("#div-menu").removeClass("div-menu-show");
  }
};

//hiệu ứng đánh chữ
let effectTyping = () => {
  let content = $("#div-home-body>div:nth-child(3)").text();
  let contentLength = content.length;
  let indexChar = 0;
  let typingSpeed = 50;

  $("#div-home-body>div:nth-child(3)").text("");

  let intervalTyping = setInterval(() => {
    indexChar++;

    let subContent = content.substring(0, indexChar);

    $("#div-home-body>div:nth-child(3)").text(subContent);

    if (indexChar == contentLength) {
      clearInterval(intervalTyping);
    }
  }, typingSpeed);
};

//chạy thống kê
let runStatistical = () => {
  let projectCompleted = $("#span-project-completed").attr("data-count");
  let currentProject = $("#span-current-project").attr("data-count");
  let award = $("#span-award").attr("data-count");

  runStatisticalItem("#span-project-completed", projectCompleted);
  runStatisticalItem("#span-award", award);
  runStatisticalItem("#span-current-project", currentProject);
};

let runStatisticalItem = (selector, count) => {
  let countRun = 0;
  setInterval(() => {
    countRun++;

    if (countRun <= count) {
      $(selector).text(countRun);
    }
  }, 100);
};

//click menu
let clickMenu = () => {
  $(".a-menu-home").click(() => {
    $("html").animate({ scrollTop: 0 });
  });

  $(".a-menu-about").click(() => {
    let top = $("#div-about").offset().top + "px";
    $("html").animate({ scrollTop: top });
  });

  $(".a-menu-edu").click(() => {
    let top = $("#div-education").offset().top + "px";
    $("html").animate({ scrollTop: top });
  });

  $(".a-menu-experience").click(() => {
    let top = $("#div-experience").offset().top + "px";
    $("html").animate({ scrollTop: top });
  });

  $(".a-menu-event").click(() => {
    let top = $("#div-event").offset().top + "px";
    $("html").animate({ scrollTop: top });
  });

  $(".a-menu-feedback").click(() => {
    let top = $("#div-feedback").offset().top + "px";
    $("html").animate({ scrollTop: top });
  });
};

//active menu
let activeMenu = () => {
  let indexWindow = $(window).scrollTop();

  let topAbout = $("#div-about").offset().top - $("#div-about").height() / 2;
  let topEdu =
    $("#div-education").offset().top - $("#div-education").height() / 2;
  let topExperience =
    $("#div-experience").offset().top - $("#div-experience").height() / 2;
  let topEvent = $("#div-event").offset().top - $("#div-event").height() / 2;
  let topFeedback =
    $("#div-feedback").offset().top - $("#div-feedback").height() / 2;

  $(".a-menu-item").removeClass("a-menu-active");

  if (indexWindow < topAbout) {
    $(".a-menu-home").addClass("a-menu-active");
  } else if (indexWindow < topEdu) {
    $(".a-menu-about").addClass("a-menu-active");
  } else if (indexWindow < topExperience) {
    $(".a-menu-edu").addClass("a-menu-active");
  } else if (indexWindow < topEvent) {
    $(".a-menu-experience").addClass("a-menu-active");
  } else if (indexWindow < topFeedback) {
    $(".a-menu-event").addClass("a-menu-active");
  } else if (indexWindow >= topFeedback) {
    $(".a-menu-feedback").addClass("a-menu-active");
  }
};
let aboutscroll = $("#services").offset().top;
$(window).scroll(function () {
  let usersroll = $(window).scrollTop();

  if (usersroll >= aboutscroll) {

    $("#btnup").fadeIn(500);
    $("#navbar").css("backgroundColor", "rgba(0,0,0,0.8)")
  }

  else {
    $("#btnup").fadeOut(500);
    $("#navbar").css("backgroundColor", "transparent")
  }
});

$("#btnup").click(function () {
$("body,html").animate({ scrollTop: "0" }, 1000)
});



$("#navbar a").click(function () {
let idOfLink = $(this).attr("href")
let  secoffset = $(idOfLink).offset().top;
$("html,body").animate({ scrollTop:secoffset }, 1000)
});
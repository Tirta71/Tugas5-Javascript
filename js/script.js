$(document).ready(function () {
  $(".fadeout").click(function () {
    $("#kotak").css("animation", "slideOut 1s ease forwards");
    $(".gambar-srigala img, .gambar-sapi img, .gambar-anjing img").css(
      "animation",
      "slideOut 1s ease forwards"
    );
  });

  $(".fadein").click(function () {
    $("#kotak").css("animation", "slideIn 1s ease forwards");
    $(".gambar-srigala img, .gambar-sapi img, .gambar-anjing img").css(
      "animation",
      "slideIn 1s ease forwards"
    );
  });

  $(".fadeto3").click(function () {
    $("#kotak").css("animation", "rotateFade 1s ease forwards");
    $(".gambar-srigala img, .gambar-sapi img, .gambar-anjing img").css(
      "animation",
      "rotateFade 1s ease forwards"
    );
  });

  $("#kotak").mouseenter(function () {
    alert("Tidak ada efek apapun ehehe");
  });

  $(".gambar-srigala img").mouseenter(function () {
    var audio = new Audio("/assets/wolf-howling-140235.mp3");
    audio.play();
    $(this).mouseleave(function () {
      audio.pause();
      audio.currentTime = 0;
    });
  });

  $(".gambar-sapi img").mouseenter(function () {
    var audio = new Audio("/assets/mooing-cow-122255.mp3");
    audio.play();
    $(this).mouseleave(function () {
      audio.pause();
      audio.currentTime = 0;
    });
  });

  $(".gambar-anjing img").mouseenter(function () {
    var audio = new Audio("/assets/dog-barking-70772.mp3");
    audio.play();
    $(this).mouseleave(function () {
      audio.pause();
      audio.currentTime = 0;
    });
  });
});

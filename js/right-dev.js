function rightDev() {
    var x = document.getElementById("toggle1");
    var x2 = document.getElementById("toggle2");
    var x3 = document.getElementById("toggle3");
    var x4 = document.getElementById("toggle4");
    var r = document.getElementById("right-dev");
    var c = document.getElementById("capstone");
    var p = document.getElementById("portfolio");
    var w = document.getElementById("weather-app");
    if (x.style.display === "none") {
      x.style.display = "block";
      x2.style.display = "none";
      x3.style.display = "none";
      x4.style.display = "none";
      r.style.backgroundColor = "#3320dd";
      c.style.backgroundColor = "#d13bc7";
      p.style.backgroundColor = "#d13bc7";
      w.style.backgroundColor = "#d13bc7";
    } else {
        x.style.display = "none"
      x2.style.display = "none";
      x3.style.display = "none";
      x4.style.display = "none";
      r.style.backgroundColor = "#d13bc7";
      c.style.backgroundColor = "#d13bc7";
      p.style.backgroundColor = "#d13bc7";
      w.style.backgroundColor = "#d13bc7";
    }
}
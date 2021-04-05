function pressSubmit() {
  // var right = document.getElementById("right");
  // var right_document = right.contentDocument || right.contentWindow.document;
  var nameElement = document.getElementById("right").contentWindow.document.getElementById("form-blog-name").name;
  var name = nameElement.value;
  console.log("name: " + name);
  nameElement.value = "";
  setCookie("blog-name", name, -1);
  setCookie("blog-name", name, 1);
  console.log("cookie: " + document.cookie);
  setBlogName(getCookie("blog-name"));
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (1*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setBlogName(blogName) {
  document.getElementById("left").contentWindow.document.getElementById("blog-name").innerHTML = blogName;
}

function loadLeftFrame() {
  if(getCookie("blog-name")) {
    setBlogName(getCookie("blog-name"));
  } else {
    setBlogName("You have not saved your favorite blog yet!");
  }
}

function loadRightFrame() {
  var right = document.getElementById("right");
  var right_document = right.contentDocument || right.contentWindow.document;
  right_document.getElementById("submit").addEventListener('click', pressSubmit);
}

//window.document.addEventListener('load', doLoad, false);

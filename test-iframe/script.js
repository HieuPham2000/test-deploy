function pressSubmit() {
  var nameElement = document.getElementById("right").contentWindow.document.getElementById("form-blog-name").name;
  var name = nameElement.value;
  if(name == "") {
    return;
  }
  setCookie("blog-name", name, -1);
  setCookie("blog-name", name, 1);
  
  setBlogName(getCookie("blog-name"));
}

function setCookie(cookie_name, cookie_value, expire_days) {
  var d = new Date();
  d.setTime(d.getTime() + (expire_days*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cookie_name + "=" + cookie_value + ";" + expires + ";path=/";
}

function getCookie(cookie_name) {
  var name = cookie_name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var arr = decodedCookie.split(';');
  for(var i = 0; i <arr.length; i++) {
    var c = arr[i];
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

function pressSubmit() {
  var name = document.getElementById("form-blog-name").name.value;
  document.getElementById("form-blog-name").name.value = "";
  //console.log(name);
  //setCookie("blog-name", "", -1);
  //console.log(document.cookie);
  setCookie("blog-name", name, 1);
  console.log(document.cookie);
  setBlogName();
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (5*60*1000));
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

function setBlogName() {
  document.getElementById("blog-name").innerHTML = getCookie("blog-name");
}

function load() {
  if(getCookie("blog-name")) {
    setBlogName();
  } else {
    document.getElementById("blog-name").innerHTML = "You have not saved your favourite blog yet!";
  }
}

window.addEventListener(load, load());
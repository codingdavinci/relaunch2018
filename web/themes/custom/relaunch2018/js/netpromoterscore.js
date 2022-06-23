function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("netpromoterscore");
  if (user == "") {
    setCookie("netpromoterscore", 1, 90);
  }
  if (user == 1){
    setCookie("netpromoterscore", 2, 90);
  }
  if (user == 2) {
    setCookie("netpromoterscore", 3, 90);
    document.getElementById('netpromoterscore').classList.add('active')
  }
  if (user == 3) {
    // setCookie("netpromoterscore", 3, 90);
    // document.getElementById('netpromoterscore').classList.add('show')
  }
}
checkCookie();


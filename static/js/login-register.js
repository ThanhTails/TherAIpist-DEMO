
//account tags
//[username, nickname (yes will be addded), password, birthday, country, followers, coins, job(optional), verified, admin, banned]
//coming soon tags: pfp, banner
var accountDetails = [];

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");

function regTabFun() {
  event.preventDefault();

  regBox.style.visibility = "visible";
  loginBox.style.visibility = "hidden";
  forgetBox.style.visibility = "hidden";

  regTab.style.backgroundColor = "#6e6e6e";
  loginTab.style.backgroundColor = "#fff";
}
function loginTabFun() {
  event.preventDefault();

  regBox.style.visibility = "hidden";
  loginBox.style.visibility = "visible";
  forgetBox.style.visibility = "hidden";

  loginTab.style.backgroundColor = "#6e6e6e";
  regTab.style.backgroundColor = "#fff";
}
function forTabFun() {
  event.preventDefault();

  regBox.style.visibility = "hidden";
  loginBox.style.visibility = "hidden";
  forgetBox.style.visibility = "visible";

  regTab.style.backgroundColor = "#fff";
  loginTab.style.backgroundColor = "#fff";
}

function register() {
  event.preventDefault();

  var email = document.getElementById("re").value;
  var password = document.getElementById("rp").value;
  var passwordRetype = document.getElementById("rrp").value;

  if (email == "") {
    //when email is empty
    document.getElementById("RePassReq").innerHTML = "";
    document.getElementById("EmailReq").innerHTML = "Email Required!";
    document.getElementById("PassReq").innerHTML = "";
    document.getElementById("AlrRegistered").innerHTML = "";
    return;
  } else if (password == "") {
    //when password is empty
    document.getElementById("RePassReq").innerHTML = "";
    document.getElementById("EmailReq").innerHTML = "";
    document.getElementById("PassReq").innerHTML = "Password Required!";
    document.getElementById("AlrRegistered").innerHTML = "";
    return;
  } else if (passwordRetype == "") {
    //when password retype is empty
    document.getElementById("PassReq").innerHTML = "";
    document.getElementById("EmailReq").innerHTML = "";
    document.getElementById("RePassReq").innerHTML = "Please enter your password again!";
    document.getElementById("AlrRegistered").innerHTML = "";
    return;
  } else if (password != passwordRetype) {
    //if password didn't match with retype
    document.getElementById("RePassReq").innerHTML = "";
    document.getElementById("EmailReq").innerHTML = "";
    document.getElementById("RePassReq").innerHTML = "Passwords didn't match.";
    document.getElementById("AlrRegistered").innerHTML = "";
    return;
  } else if (localStorage.getItem(email) === null) {
    //adding account details
    //[password, birthday, country, followers, coins, job, verified, admin, banned]
    //all were encoded to 8-bit
    var birthday = "unknown";
    var country = "unknown";
    var followers = 0;
    var coins = 0;
    var job = "unknown";
    var verified = "false";
    var admin = "false";
    var banned = "false";
    //if there's no same account at local storage
    accountDetails.push(btoa(password));
    accountDetails.push(btoa(birthday));
    accountDetails.push(btoa(country));
    accountDetails.push(btoa(JSON.stringify(followers)));
    accountDetails.push(btoa(JSON.stringify(coins)))
    accountDetails.push(btoa(job));
    accountDetails.push(btoa(verified));
    accountDetails.push(btoa(admin));
    accountDetails.push(btoa(banned));
    localStorage.setItem(email, JSON.stringify(accountDetails));

    document.getElementById("RePassReq").innerHTML = "";
    document.getElementById("EmailReq").innerHTML = "";
    document.getElementById("RePassReq").innerHTML = "";
    document.getElementById("AlrRegistered").innerHTML = "";

    document.getElementById("re").value = "";
    document.getElementById("rp").value = "";
    document.getElementById("rrp").value = "";
    encodedPassword = "";
    accountDetails = [];
  } else {
    // if yes :)
    document.getElementById("RePassReq").innerHTML = "";
    document.getElementById("EmailReq").innerHTML = "";
    document.getElementById("RePassReq").innerHTML = "";
    document.getElementById("AlrRegistered").innerHTML =
      "You've already registered this account.";
    document.getElementById("RegisterSuccess").innerHTML = "";
    return;
  }
}
function login() {
  event.preventDefault();

  var email = document.getElementById("se").value;
  var password = document.getElementById("sp").value;
  var getKeyPass = atob(JSON.parse(localStorage.getItem(email))[0]);

  if (getKeyPass === null) {
    if (email == "") {
      document.getElementById("EmailErrorSign").innerHTML = "Email Required";
      document.getElementById("PassErrorSign").innerHTML = "";
      return;
    }
    document.getElementById("EmailErrorSign").innerHTML = "Email not found";
    document.getElementById("PassErrorSign").innerHTML = "";
    return;
  } else if (getKeyPass != password) {
    if (password == "") {
      document.getElementById("PassErrorSign").innerHTML = "Password Required";
      document.getElementById("EmailErrorSign").innerHTML = "";
      return;
    }
    document.getElementById("PassErrorSign").innerHTML = "Password not match!";
    document.getElementById("EmailErrorSign").innerHTML = "";
    return;
  } else {
    document.getElementById("EmailErrorSign").innerHTML = "";
    document.getElementById("PassErrorSign").innerHTML = "";

    document.getElementById("se").value = "";
    document.getElementById("sp").value = "";
    return;
  }
}
function forgot() {
  event.preventDefault();

  var email = document.getElementById("fe").value;

  if (emailArray.indexOf(email) == -1) {
    if (email == "") {
      alert("Email required.");
      return;
    }
    alert("Email does not exist.");
    return;
  }

  alert("email is send to your email check it in 24hr. \n Thanks");
  document.getElementById("fe").value = "";
}
function clearAllDATA(){
  localStorage.clear();
}

//deco
(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$(".toggle-password").click(function() {

	  $(this).toggleClass("fa-eye fa-eye-slash");
	  var input = $($(this).attr("toggle"));
	  if (input.attr("type") == "password") {
	    input.attr("type", "text");
	  } else {
	    input.attr("type", "password");
	  }
	});

})(jQuery);
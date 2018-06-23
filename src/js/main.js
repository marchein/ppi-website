let footer = document.getElementById("copyright");
footer.innerHTML += "&nbsp;- Theme: <span id=\"theme-light\">Light</span> | <span id=\"theme-dark\">Dark</span>";

let themeCookie = getCookie("theme");
if (themeCookie.length > 0) {
	setTheme(themeCookie);
} else {
	setTheme("light");
}

let themeChangerLight = document.getElementById("theme-light");
themeChangerLight.addEventListener("click", function () {
	setTheme("light");
}, false);

let themeChangerDark = document.getElementById("theme-dark");
themeChangerDark.addEventListener("click", function () {
	setTheme("dark");
}, false);

function setTheme(theme) {
	document.getElementById("webStyle").href = "style/style-" + theme + ".css";
	let activeThemeButton = document.getElementById("theme-" + theme);
	activeThemeButton.classList.add("active");
	let inactiveThemeButton = document.getElementById("theme-" + (theme === "dark" ? "light" : "dark"));
	inactiveThemeButton.classList.remove("active");
	if (getCookie("allow-cookies") === "1") {
		setCookie("theme", theme, 365);
		document.getElementById("cookie").style.display = "none";
	}
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(";");
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) === " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

document.getElementById("header").addEventListener("click", function () {
    window.open("/", "_self", false);
}, false);

let cookieButton = document.getElementById("cookieButton");
cookieButton.addEventListener("click", function () {
	setCookie("allow-cookies", "1", 365);
	document.getElementById("cookie").style.display = "none";
}, false);
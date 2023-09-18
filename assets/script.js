// This script opens the header.html file and gets all the content. It then replaces the inner HTML of the elements with id="header-nav" with the file content.

const siteHeader = new XMLHttpRequest();
siteHeader.open("GET", "header.html", true);
siteHeader.onreadystatechange = function () {
  if (this.readyState !== 4) return;
  if (this.status !== 200) return;
  document.getElementById("header-nav").innerHTML = this.responseText;
};
siteHeader.send();

const siteBackground = new XMLHttpRequest();
siteBackground.open("GET", "background-responsive.html", true);
siteBackground.onreadystatechange = function () {
  if (this.readyState !== 4) return;
  if (this.status !== 200) return;
  document.getElementById("background-responsive").innerHTML =
    this.responseText;
};
siteBackground.send();

// Replace elements with id="footer-nav" with the following HTML:

const siteFooter = `<div class="foot-div">copyright 2023 drccjr, all rights reserved.</div>`;
document.getElementById("footer-nav").innerHTML = siteFooter;

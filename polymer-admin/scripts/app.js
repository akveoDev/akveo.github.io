!function(e){"use strict";var t=e.querySelector("#app");t.displayInstalledToast=function(){e.querySelector("platinum-sw-cache").disabled||e.querySelector("#caching-complete").show()},t.onDataRouteClick=function(){var t=e.querySelector("#paperDrawerPanel");t.narrow&&t.closeDrawer();var a=e.getElementsByTagName("google-chart");setTimeout(function(){for(var e=0;e<a.length;e++)a[e].drawChart()},0)},t.toggleDrawer=function(){var t=e.getElementById("paperDrawerPanel");t.narrow?t.togglePanel():t.classList.toggle("collapsed-menu")},t.scrollPageToTop=function(){e.getElementById("mainContainer").scrollTop=0},t.cols="2",t.toggleSubmenu=function(e){e.target.parentNode.classList.toggle("submenu-expanded")},t.location="https://polymer-admin.firebaseio.com",t.signOut=function(){this.$.data.signOut()}}(document);
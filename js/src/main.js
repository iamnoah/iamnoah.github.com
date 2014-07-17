(function() {
	"use strict";
	
	function loadCss(url) {
		var head = document.getElementsByTagName('head')[0],
		link = document.createElement('link');
		link.type = 'text/css';
		link.rel = 'stylesheet';
		link.href = url;
		head.appendChild(link);
		return link;		
	}

	// don't like that this blocks loading
	var coderCss = loadCss("http://coderwall.com/stylesheets/jquery.coderwall.css");
	coderCss.media = "all";
})();

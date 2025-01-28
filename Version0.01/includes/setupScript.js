window.onload = function() {
    var links = document.querySelectorAll('a');  // select all links
    links.forEach(function(link) {
        link.setAttribute('target', '_blank'); // target="_blank" for all links
    });
};
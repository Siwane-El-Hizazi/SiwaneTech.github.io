document.addEventListener('click', function(event) {
    var ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.left = event.clientX + 'px';
    ripple.style.top = event.clientY + 'px';
    document.documentElement.appendChild(ripple);
    setTimeout(function() {
        ripple.remove();
    }, 1000);
});

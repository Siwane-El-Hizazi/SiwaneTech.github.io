document.addEventListener('click', function(event) {
    var ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    ripple.style.left = (event.clientX / window.innerWidth) * 100 + '%';
    ripple.style.top = (event.clientY / window.innerHeight) * 100 + '%';
    document.documentElement.appendChild(ripple);
    setTimeout(function() {
        ripple.remove();
    }, 1000);
});

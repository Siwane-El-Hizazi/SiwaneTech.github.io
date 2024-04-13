document.addEventListener('click', function(event) {
        var ripple = document.createElement('div');
        ripple.className = 'ripple-effect';
        ripple.style.left = event.clientX - 10.8 + 'px';
        ripple.style.top = event.clientY - 13 + 'px';
        document.body.appendChild(ripple);
        setTimeout(function() {
            ripple.remove();
        }, 1000);
    });

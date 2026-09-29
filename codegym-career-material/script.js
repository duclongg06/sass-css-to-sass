$(document).ready(function() {
    // Form validation and submission
    $('#register-form').on('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const fullname = $('#fullname').val().trim();
        const phone = $('#phone').val().trim();
        const email = $('#email').val().trim();

        if(fullname === '') {
            isValid = false;
        }

        if(phone === '') {
            isValid = false;
        }

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(email === '' || !emailRegex.test(email)) {
            isValid = false;
        }

        if(isValid) {
            // Hide form and show alert
            $(this).slideUp();
            $('#form-alert').removeClass('d-none').hide().slideDown();
        } else {
            alert("Vui lòng kiểm tra lại thông tin nhập.");
        }
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70 // adjust for fixed navbar
            }, 1000);
        }
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     window.addEventListener('scroll', function() {
//         var header = document.querySelector('header');
//         var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
//         var maxScroll = 200; // The scroll position at which the navbar is fully opaque

//         // Calculate the opacity based on scroll position
//         var opacity = Math.min(scrollPosition / maxScroll, 0.9); // Caps at 0.9 for some transparency

//         header.style.backgroundColor = "black"; // Apply dynamic background color
//     });
// });

// function toggleMenu() {
//     var menu = document.getElementById('nav-menu');
//     if (menu.style.display === 'block') {
//         menu.style.display = 'none';
//     } else {
//         menu.style.display = 'block';
//     }
// }


document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollPosition > 100) { // Adjust the pixel number as needed
            header.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        } else {
            header.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
    });
    
    var navToggle = document.querySelector('.nav-toggle');
    var navMenu = document.getElementById('nav-menu');

    function toggleMenu() {
        var menu = document.getElementById('nav-menu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
    
    
    navToggle.addEventListener('click', toggleMenu);
});



function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + "+";
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', function() {
    const students = document.getElementById('students');
    const teachers = document.getElementById('teachers');
    const courses = document.getElementById('courses');

    animateValue(students, 0, 150, 2000); // Animate to 150+
    animateValue(teachers, 0, 25, 2000);  // Animate to 25+
    animateValue(courses, 0, 40, 2000);   // Animate to 40+
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var name = document.querySelector('input[name="name"]').value; 
    alert('Thank you, ' + name + '! Your message has been sent. We will get back to you soon.'); 
});

document.getElementById('loginButton').addEventListener('click', function() {
    window.location.href = './login.html'; // Specify the path to your login page
});



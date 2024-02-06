$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function(){
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top>offset && top<offset+height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },500, 'linear')
    })
});

document.addEventListener('visibilitychange',
function(){
    if(document.visibilityState === "visible"){
        document.title = "Dilara Şensoyu";
        $("#favicon").attr("href","assests/images/hero.jpg");
    }
    else {
        document.title = "Sayfama Hoşgeldiniz";
        $("#favicon").attr("href","assests/images/hero.jpg");
    }
});


// <!-- typed js effect starts -->
    var typed = new Typed(".typing-text", {
        strings: ["Cyber Security Specialist", "Pentester"],
        loop: true,
        typeSpeed: 50,
		backSpeed: 25,
		backDelay: 500,
      });
// <!-- typed js effect ends -->

// <!-- tilt js effect starts -->
      VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
      });
// <!-- tilt js effect ends -->


// pre loader start
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
    setInterval(loader,500);
}
window.onload = fadeOut;
// pre loader end


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3',{delay: 200}); 
srtop.reveal('.home .content p',{delay: 200}); 
srtop.reveal('.home .content .btn',{delay: 200}); 

srtop.reveal('.home .image',{delay: 400}); 
srtop.reveal('.home .linkedin',{interval: 600}); 
srtop.reveal('.home .github',{interval: 800}); 
srtop.reveal('.home .twitter',{interval: 1000});
srtop.reveal('.home .telegram',{interval: 600}); 
srtop.reveal('.home .instagram',{interval: 600}); 
srtop.reveal('.home .dev',{interval: 600}); 



/* SCROLL ABOUT */
srtop.reveal('.about .content h3',{delay: 300});
srtop.reveal('.about .content .tag',{delay: 400}); 
srtop.reveal('.about .content p',{delay: 300}); 
srtop.reveal('.about .content .box-container',{delay: 300}); 
srtop.reveal('.about .content .resumebtn',{delay: 300}); 


/* SCROLL SKILLS */
srtop.reveal('.skills .container',{interval: 200}); 
srtop.reveal('.skills .container .bar',{delay: 400}); 

/* SCROLL EDUCATION */
srtop.reveal('.education .box',{interval: 200}); 

/* SCROLL PROJECTS */
srtop.reveal('.work .box',{interval: 200}); 

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline',{delay: 400});
srtop.reveal('.experience .timeline .container',{interval: 400}); 

/* SCROLL CONTACT */
srtop.reveal('.contact .container',{delay: 400});
srtop.reveal('.contact .container .form-group',{delay: 400});

// RSS beslemesinin URL'si (Medium kullanıcı adınızı burada değiştirin)
const rssFeedUrl = 'https://medium.com/feed/@dilarasensoyu'; 

// RSS beslemesini çekme işlemi
fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssFeedUrl}`)
    .then(response => response.json())
    .then(data => {
        const yazilar = data.items.slice(0, 6); // İlk 8 yazıyı al
        // Her bir yazı için liste öğesi oluşturma ve sayfaya eklemek
        yazilar.forEach(yazi => {
            const baslik = yazi.title;
            const link = yazi.link;

            const yazilarDiv = document.getElementById('medium-yazilari');
            const yeniYazi = document.createElement('div');
            yeniYazi.classList.add('medium-yazi');

            const p = document.createElement('p');
            p.classList.add('yazi-baslik');

            const a = document.createElement('a');
            a.href = link;
            a.target = '_blank';
            a.textContent = baslik;

            p.appendChild(a);
            yeniYazi.appendChild(p);
            yazilarDiv.appendChild(yeniYazi);
        });
    });
//müzik eklentisi
    document.addEventListener("DOMContentLoaded", function() {
      let player = document.getElementById("player");
      let playButton = document.getElementById("playButton");
      playButton.addEventListener("click", function() {
        player.play();
      });
    });
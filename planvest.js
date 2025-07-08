import { neon } from '@netlify/neon';
const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL
const [post] = await sql`SELECT * FROM posts WHERE id = ${postId}`;

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["Planvest"],
        typeSpeed: 120,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["Connect with me on :)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    document.addEventListener("DOMContentLoaded", () => {
        const navbar = document.querySelector(".navbar");
        const links = document.querySelectorAll(".menu-link");
        const indicator = document.querySelector(".nav-indicator");
      
        let lastScrollTop = 0;
      
        // Função para mover indicador
        function moveIndicator(el) {
          indicator.style.left = `${el.offsetLeft}px`;
          indicator.style.width = `${el.offsetWidth}px`;
        }
      
        // Ativa link e move indicador
        links.forEach(link => {
          link.addEventListener("click", e => {
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
            moveIndicator(link);
          });
        });
      
        // Iniciar com o primeiro ativo corretamente
        const active = document.querySelector(".menu-link.active") || links[0];
        moveIndicator(active);
      
        // Scroll control: hide navbar down, show up
        window.addEventListener("scroll", () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          if (scrollTop > lastScrollTop) {
            navbar.style.top = "-100px"; // Esconde
          } else {
            navbar.style.top = "0"; // Mostra
          }
          lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
      });
      
      
});
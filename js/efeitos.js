$(document).ready(function () {
   /* $("#logotipo").on("mouseover", function () {
        console.log("Passou o mouse no logotipo");
        $("#banner h1 small").css("color", "red");
    }); */

    $(".thumbnails").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["Anterior", "Próximo"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            1000: {
                items: 4
            },

        }
    });

    var owl = $('.thumbnails');
        owl.owlCarousel();

        $('#news-next').click(function() {
            owl.trigger('next.owl.carousel');
        })
        $('#news-prev').click(function() {
            owl.trigger('prev.owl.carousel');
        })

        $("#page-up").on("click",function(event){
            $("html,body").animate({
                scrollTop:0
            }, 1000);
            event.preventDefault();
        });

        $("#bars").on("click", function(){

            if ($("header").hasClass("open-search")){
                $("header").removeClass("open-search");
                $("header").addClass("open-menu");
            } else {
                $("header").addClass("open-menu");
            }


        });
        $("#menu-mobile-mask, .btn-fechar").on("click", function(){

            $("header").removeClass("open-menu");

        });

        $("#search").on("click", function(){

            $("header").toggleClass("open-search");
            $("input-search-mobile").focus();

        });

});
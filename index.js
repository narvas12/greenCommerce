$(document).ready(function () {
    //banner owl carousel
    $('#banner-area .owl-carousel').owlCarousel({
        dots: true,
        items: 1
    })

    // top sale carousel
    $('#top-sale .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })


    // isotop filter 
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    })

// filter items on button click 
    $('button-group').on('click', 'button', function(){
        var filterValue = $(this).attr('data-filter')
        $grid.isotope({filter: filterValue})
    })


     // fresh wastes 
     $('#fresh-wastes .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

     // Blog Articles Owl carousel 
     $('#blog .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        }
    })

    //product quantity section

    let $qtyUp = $('.qty .qty-up')
    let $qtyDown = $('.qty .qty-down')
    // let $input = $('.qty .qty_input')

    //create a click event
    $qtyUp.click(function(e){
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`)
        if ($input.val() >= 1 && $input.val() <= 9){
            $input.val(function(index, initVal){
                return ++initVal
            })
        }
    })

    $qtyDown.click(function(e){
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`)
        if ($input.val() > 1 && $input.val() <= 10){
            $input.val(function(index, initVal){
                return --initVal
            })
        }
    })
})
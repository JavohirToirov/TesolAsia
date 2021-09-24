// $('.read_btn-1').hide();
// $('.read_btn').click(function () {
//     $('.header_block-box-1-text').toggleClass('pl');
//     $('.read_btn-1').show();
//     $('.read_btn').hide();
// })
// $('.read_btn-1').click(function () {
//     $('.header_block-box-1-text').toggleClass('pl');
//     $('.read_btn').show();
//     $('.read_btn-1').hide();
// })

// Courses click ////////////////
$('.header-cours_accard').hide();
$('.header-cours_accard').hide();


$('.Acardion').click(function () {   
 $('.header-cours_accard').hide;
 
})
// About click /////////////////
$('.header-cours_accard-1').hide();

$('.Acardion_1').click(function () {   
 $('.header-cours_accard-1').slideToggle(1000);
 
})
// menu media btn/////////////////////
// meida ning menusi /////////////////////
$('.asosiy-adaptiv_media-menu').hide();


$('.header_menu-btn').click(function () { 
  
 $('.asosiy-adaptiv_media-menu').slideToggle(1000);

})
$('.header_menu-btn-X-x').click(function () { 
  
 $('.asosiy-adaptiv_media-menu').slideToggle(1000);

})
// scroll//////////////////////////////////
$(function() {
    let link = $('nav ul a');
    link.on('click', function(e) {
        e.preventDefault();
        link.removeClass('active');
        let selector = $(this).addClass('active').attr('href');
        let target = $(selector);
        
        $('html, body').animate({scrollTop: target.offset().top - 70}, 200)
    })
    

    
    $(window).scroll(function() {
        
        
        if($(this).scrollTop() > 300){
            $('.box101').addClass('active_box101');
            $('.box102').addClass('active_box102');
            $('.box103').addClass('active_box103');
         
         
      
        }
    $('.active').removeClass('.box105');
        // else{
        //     $('.box101').removeClass('active_box101');
        //     $('.box102').removeClass('active_box102');
        //     $('.box103').removeClass('active_box103');
  
           
        // }
        if($(this).scrollTop() > 750){
         
            $('.box104').addClass('active_box104');
         
            $('.rot-3').addClass('active-rot-3');
       
        }
    
        // else{
          
        //     $('.rot-1').removeClass('active-rot-1');
        //     $('.rot-2').removeClass('active-rot-2');
        //     $('.rot-3').removeClass('active-rot-3');
            
        // }
        
        if($(this).scrollTop() > 950){
         
            $('.box105').addClass('active_box105'); 
            $('.rot-2').addClass('active-rot-2');
            $('.rot-3').addClass('active-rot-3');
       
        }
      
        
        let scroll = $(window).scrollTop();
        link.each(function() {
            let selector = $(this).attr('href');
            let target = $(selector);
            
            if(scroll >= target.offset().top - 100){
                link.removeClass('active');
                $(this).addClass('active');
            }
        })
        
    })
    
    $('.top').click(function() {
        $('html, body').animate({scrollTop:0}, 500);
    })
    
    
})
// scroll//////////////////////////////////








//  $('.header_menu-btn-X-x').addClass();
//  $('.header_menu-btn').removeClass();
// $('.Acardion').click(function () {
    
//   $('.fa-angle-right').css({
//       transform: `rotate(180deg)`
//   })  
 
//  })













// $(function () {
//     let link = $('.Acardion');
//     link.mouseover(function () {
//         // $(this).addClass('header-cours_accard');  
//         $(this).addClass('.header-cours_accard');
//     })
//     link.mouseout(function () {
//         $(this).removeClass('border');      
//     })
// })

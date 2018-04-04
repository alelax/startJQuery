/*

Creare il titolo di un paragrafo e un bottone che
permette di espandere il testo inizialmente
nascosto

*/
//
// $(document).ready(function(){
//    $('#btn').click(function() {
//
//       $('p').show();
//
//    })
// })

var isClicked = false;

$(document).ready(function(){
   $('#btn').click(function(){
      // if (!isClicked) {
      if( isClicked == false ) {
         $('p').fadeIn(3000, function(){
            isClicked = true;
            $('#txt').html("Hide");
         });
      } else {
         $('p').hide(2000, function(){
            $('#txt').html("Show");
            isClicked = false;
         });
      }
   })




})

$(document).ready(function(){

    // leggiamo i dati già presenti nell'attributo data-valore
    $('.bottone-1').click(function() {

        alert($(this).data('valore'));

    });

    // leggiamo i dati aggiunti a un elemento tramite data
    $('.bottone-2').data('valore', 'valore del bottone 2');

    $('.bottone-2').click(function() {

        alert($(this).data('valore'));

    });    

});
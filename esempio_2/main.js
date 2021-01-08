$(document).ready(function() {

    // sono commentati perchè li facevo vedere uno per volta

    // 1. questa modifica viene registrata nell'html
    $('.mio-elemento').attr('data-mioattributo', 'questa è la mia modifica');

    // 2. questa modifica non viene registrata nell'html, la tiene jQuery in memoria
    $('.mio-elemento').data('mioattributo1', 'questa è la mia modifica di mio attributo 1');

    // 3. ma possiamo recuperarlo con data (...)
    var valoreRecuperato = $('.mio-elemento').data('mioattributo1');
    console.log('leggo il valore recuperato : ', valoreRecuperato);

    // 4. leggo tramite data l'attributo data-mioattributo settato prima tramite jquery
    valoreRecuperato = $('.mio-elemento').data('mioattributo');
    console.log('leggo il valore recuperato : ', valoreRecuperato);

    // 5. leggo tramite data l'attributo che era già presente in pagina
    valoreRecuperato = $('.mio-elemento-2').data('primoattributo');
    console.log('leggo il valore recuperato : ', valoreRecuperato);

    // 6. setto un attributo dinamicamente e provo a recuperare quell'elemento tramite l'attributo appena settato
    $('.mio-elemento').attr('data-recupero', 'trovami');
    console.log('numero elementi trovati : ', $('[data-recupero="trovami"]').length);

    // e se invece lo settiamo tramite data(...)?
    $('.mio-elemento').data('recupero1', 'trovami');
    console.log('numero elementi trovati : ', $('[data-recupero1="trovami"]').length);

    // e se provassi a leggere il valore dell'attributo impostato tramite data() usando attr()?
    valoreRecuperato = $('.mio-elemento').attr('data-recupero1');
    console.log("leggo il valore recuperato: " + valoreRecuperato);

});

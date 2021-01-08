$(document).ready(function() {

    // salviamo e recuperiamo una stringa
    console.log('salviamo e recuperiamo una stringa');

    // prima con data
    $('.mio-elemento').data('chiave', 'la mia stringa');
    console.log('recupero tramite data : ', $('.mio-elemento').data('chiave'));

    // poi con attr
    $('.mio-elemento').attr('data-chiave', 'la mia stringa');
    console.log('recupero tramite attributo : ', $('.mio-elemento').attr('data-chiave'));

    console.log('--------------');
    console.log('--------------');

    // ----------------------------------------------------------

    // salviamo e recuperiamo un numero
    console.log('salviamo e recuperiamo un numero');

    // prima con data
    $('.mio-elemento').data('chiave', 30);
    console.log('recupero tramite data : ', $('.mio-elemento').data('chiave'));

    // poi con attr
    $('.mio-elemento').attr('data-chiave', 30);
    console.log('recupero tramite attributo : ', $('.mio-elemento').attr('data-chiave'));

    console.log('--------------');
    console.log('--------------');

    // ----------------------------------------------------------

    // salviamo e recuperiamo un array
    console.log('salviamo e recuperiamo un array');

    var mioArray = ['paolo', 'michele', 'luca'];

    // prima con data
    $('.mio-elemento').data('chiave', mioArray);
    console.log('recupero tramite data : ', $('.mio-elemento').data('chiave'));

    // poi con attr
    $('.mio-elemento').attr('data-chiave', mioArray);
    console.log('recuperato tramite attributo : ', $('.mio-elemento').attr('data-chiave'));

    console.log('--------------');
    console.log('--------------');

    // ----------------------------------------------------------

    // salviamo e recuperiamo un oggetto
    console.log('salviamo e recuperiamo un oggetto');

    var mioOggetto = {
        'nome' : 'Paolo',
        'cognome' : 'Rossi'
    };

    // prima con data
    $('.mio-elemento').data('chiave', mioOggetto);
    console.log('recupero tramite data : ', $('.mio-elemento').data('chiave'));

    // poi con attr
    $('.mio-elemento').attr('data-chiave', mioOggetto);
    console.log('recuperato tramite attributo : ', $('.mio-elemento').attr('data-chiave'));





    $('.mio-elemento').data('1', 1);
    $('.mio-elemento').data('2', 2);
    $('.mio-elemento').data('3', 3);

    console.log($('.mio-elemento').data());


});

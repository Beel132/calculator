function writeResult(value) {

    $('#result').css({
        'color': '#FF5C62',
    });

    if ($('#result').val().length > 19) {
        $('#error').css({
            'transform': 'translate(0)',
        });

        $('#error-text').html(`Hey! there's no enough space for you to do that.`);

    } else
        $('#result').val($('#result').val() + value);


    if ($('#result').val().length >= 10 && $('#result').val().length <= 14)
        $('#result').css({
            'font-size': '2rem',
        });

    else if ($('#result').val().length >= 15)
        $('#result').css({
            'font-size': '1.5rem',
        });

    else
        $('#result').css({
            'font-size': '3rem',
        });
}

function clearResult() {
    $('#result').css({
        'font-size': '3rem',
    });

    if ($('#result').val().length === 0) {
        $('#error').css({
            'transform': 'translate(0)',
        });

        $('#error-text').html(`There's nothing to clear!`);

    } else {

        $('#result').val('');
        $(`.selectedSignal`).removeClass('selectedSignal');

    }
}

function giveResult() {
    $(`.selectedSignal`).removeClass('selectedSignal');
    $('#result').css({
        'color': '#21212199',
        'font-size': '2.5rem',
    });

    $(`#result`).val(eval($('#result').val()));
}

function addPercent() {
    $(`#result`).val(Number($(`#result`).val() / 100));
}

function deleteDigit() {
    let len = $('#result').val().length;

    $('#result').val(
        $('#result').val().substring(0, len - 1)
    );
}

$('#error').on('closed.bs.alert', () => {
    $('#error').css({
        'transform': 'translate(100%)',
        'display': 'block',
    });
});
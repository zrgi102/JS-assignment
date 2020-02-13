function fn(day) {
    $('#div2').show(function() {
        $('#save').click(function() {
            var x = document.getElementById('text');
            var y = x.value;
            console.log(y);
            $(day).append(y);

        });
    });
};
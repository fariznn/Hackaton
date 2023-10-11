var slider = document.getElementById('slider');
var minHandle = document.getElementById('min-value');
var maxHandle = document.getElementById('max-value');

noUiSlider.create(slider, {
    start: [0, 10000000],
    step: 50000,
    connect: true,
    range: {
        'min': 0,
        'max': 10000000
    },
    format: {
        to: function (value) {
            return 'IDR ' + value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        },
        from: function (value) {
            return Number(value.replace('IDR ', '').replace('.', ''));
        }
    }
});

slider.noUiSlider.on('update', function (values, handle) {
    minHandle.innerHTML = values[0];
    maxHandle.innerHTML = values[1];
});



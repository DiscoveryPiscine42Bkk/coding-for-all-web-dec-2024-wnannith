$(document).ready(function() {
    $('button').click(function () { 
        $('body').css('background-color', getRandomColor());
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        // Math.random includes 0 but not 1
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
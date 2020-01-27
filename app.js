$(document).ready(function () {
    console.log("jQuery is ready to go!");
});

$('#btnSubmit').click(function () {
    alert("button clicked");
})

let $div = $('<div></div>');
$('body').append($div);

//Step 6
$('#myForm').submit(function (e) {

    //prevent page from reloading and taking h2 away
    e.preventDefault();
    let $h2 = $('<h2></h2>')
    $h2.text($('#inputText').val())

    $div.append($h2)

    //alert($('#myForm').val(innertext));
    //alert(this.elements[""0""].value);
    //alert(this.value);
    alert($('#inputText').val());

    $h2.hover(
        function () { $h2.css('background-color', 'lightBlue') },
        function () { $h2.css('border-radius', '10px') }
    )
})


$('#inputText').keyup(function (e) {
    if ($('#inputText').val() === '') {
        $("#btnSubmit2").attr('disabled', true);
    } else {
        $("#btnSubmit2").attr('disabled', false);
    }
});

let $myForm = $('#myForm');

//Step 8 - I have no idea if this is right

//Step 9 







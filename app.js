$(document).ready(function () {
    console.log("jQuery is ready to go!");
});

$('#btnSubmit').click(function () {
    alert("button clicked");
})


$('#myForm').submit(function(){
    alert($("#inputText").val());
})


let $div = $('<div></div>');
$('body').append($div);

let $ul = $('<ul></ul>');
$('body').append($ul);


//Step 6
$('#myForm').submit(function (e) {

    //prevent page from reloading and taking h2 away
    e.preventDefault();
    // let $h2 = $('<h2></h2>')
    // $h2.text($('#inputText').val())
    // $div.append($h2)
    let $li = $('<li></li>')
    $li.text($('#inputText').val())
    $ul.append($li)
    $li.click(function(){
        $li.css('color', getRandomColor())  
    })
    $li.dblclick(function(){
        $li.remove();
    })
    
    //alert($('#inputText').val());

    // $h2.hover(function () { 
    //         $h2.css({
    //             'background-color': 'lightBlue',
    //             'border-radius': '10px'
    //         });
    //     }
    // )
})


$('#inputText').keyup(function (e) {
    if ($('#inputText').val() === '') {
        $("#btnSubmit2").attr('disabled', true);
    } else {
        $("#btnSubmit2").attr('disabled', false);
    }
});

let $myForm = $('#myForm');

// $('#btnSubmit2').click(function (e) {
//     e.preventDefault();
//     var submitValue = $('#textInput').val();
//     //alert(submitValue);
//     let item = $('<ul>' + submitValue + '<ul>');
//     item.mouseover(function () {
//         $(item).css('background-color', 'blue', );
//         $(item).css('border-radius', '20px');

//     });


    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#'
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    item.click(function () {
        $(item).css('color', getRandomColor())

    })
    item.dblclick(function(){
        item.remove();
    })
    $('body').append(item)
;






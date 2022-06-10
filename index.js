$(document).ready(function() {
    $('#tell_story_btn').on('click', function(e) {

        if($('.input1').val() != '' && $('.input2').val() != '' && $('.input3').val() != '' && $('.input4').val() != '') {
            $('.story').show('slow');

            var person_name = $('#person_name').val();
            var character = $('#character').val();
            var adverb = $('#adverb').val();
            var adjective = $('#adjective').val();

            $('.story_text').html("One day, my friend <b>" + person_name + "</b> was visiting New York and ran into <b>" + character + "</b>. <b>" + person_name + "</b> ran <b>" + adverb + "</b> to meet <b>" + character + "</b>. But <b>" + character + "</b> turned out to be very <b>" + adjective + "</b> and <b>" + person_name + "</b> did not enjoy the meeting.");
        } else {
            alert('Fill the required input')
        }

    })
});
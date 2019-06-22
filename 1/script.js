/**
 * Created by alexander on 25/03/2019.
 */
$(document).ready(function () {
    //Color label on input focus state
    var input_element = $("input");
    var select_element = $("select");
    var option_element = $("select > option");

    input_element.focus(function () {
        $(this).prev().children().addClass("label-focus");
    });
    input_element.focusout(function () {
        $(this).prev().children().removeClass("label-focus");
    });

//    Coloring labels in input text field when has value
    input_element.blur(function () {
        if (!$(this).val() !== true) {
            $(this).prev().children("i").addClass("label-focus");
        }
    });
    if ($("select#location.test > option").prop("value: false")) {
        $(select_element).prev().children("i").removeClass("label-focus");
    } else {
        $(select_element).prev().children("i").addClass("label-focus");
    }
});
// $("option").each(function () {
//     if ($(this).prop("selected").val() === false) {
//         $(select_element).prev().children("i").removeClass("label-focus");
//     }
//     else {
//         $(select_element).prev().children("i").addClass("label-focus");
//     }

//     if ($(this).val() !== false) {
//         $(select_element).prev().children("i").addClass("label-focus");
//     }
//
// })


//      Same for select
//         if (option_element.prop("selected", true)) {
//             $(select_element).prev().children("i").addClass("label-focus");
//         }



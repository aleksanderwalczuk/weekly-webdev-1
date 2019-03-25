/**
 * Created by alexander on 25/03/2019.
 */
$(document).ready(function () {
    var input_element = $("input");

    input_element.focus(function () {
        $(this).prev().children().addClass("label-focus");
    });
    input_element.focusout(function () {
        $(this).prev().children().removeClass("label-focus");
    })
});
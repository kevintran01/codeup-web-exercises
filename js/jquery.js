$(function () {
    $("h1").click(function () {
        $("h1").css("background-color", "green");
    });


    $("p").dblclick(function () {
        $("p").css("font-size", "12px");
    }, function () {
        $("p").css("font-size", "18px");
    });


    $("#kevinCar").hover(function () {
        $("#kevinCar").css("color", "red");
    }, function () {
            $("#kevinCar").css("color", "black");
        });
});
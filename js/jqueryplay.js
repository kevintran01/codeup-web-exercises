$(function () {
    $("#btn1").click(function () {
        $("#panel1").slideUp(500).slideDown(50);
        $("#panel2").slideUp(1000).slideDown(50);
        $("#panel3").slideUp(1500).slideDown(50);
        $("#panel4").slideUp(2000).slideDown(50);
    });

    $("#btn2").dblclick(function () {
        $("#panel1").toggle(500);
        $("#panel2").toggle(1000);
        $("#panel3").toggle(1500);
        $("#panel4").toggle(2000);
    });


    $("#btn3").hover(
        function() {
            $("#panel1").css('background-color', 'yellow');
            $("#panel2").css('background-color', 'green');
            $("#panel3").css('background-color', '#FF0');
            $("#panel4").css('background-color', 'purple');
        },
        function() {
            $("#panel1").css('background-color', '#FFF');
            $("#panel2").css('background-color', '#AAA');
            $("#panel3").css('background-color', '#BBB');
            $("#panel4").css('background-color', '#CCC');
        }
    );

    $("#btn4").hover(function () {
        $("#panel4").toggle(1000);
    });
});


//slide up , slide down , slide toggle
//show, hide , toggle
//delay, fadeIn, fadeOut, fadeToggle
//addClass, removeClass, toggleClass
//on, click, dblclick, mouseover, hover
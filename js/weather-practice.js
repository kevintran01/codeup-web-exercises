$(document).ready(function () {
    $("#submitWeather").click(function () {

        var city = $("#city").val();

        if(city != ''){

            $.ajax({

                url:'api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial' +
                '&APPID=fb612ec92bd6d5087dc436fbadae1396',
                type: 'GET',
                dataType: 'jsonp',
                success: function(data){
                    console.log(data);
                }

            });

        }else{
            $("#error").html("Field cannot be empty");
        }

    });

});
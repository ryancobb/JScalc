updateDisplay = function(num){
    var display = $("#num-display");

    //Allow numbers at any point
    if (!checkOperator(num)){
        display.append(num).hide().fadeIn(250);
    }
    else {
        // Don't allow operators at beginning of display
        if (getValue() != ""){
            // Don't allow multiple operators in a row
            if (!checkOperator(getLastValue())){
                display.append(num).hide().fadeIn(250);
            }
        }
    }
};

checkOperator = function(val){
    var operators = ["+", "-", "/", "*"];
    return operators.indexOf(val) != -1;
};

getLastValue = function(){
    var display_val = getValue();
    return display_val[display_val.length - 1];
};

clearDisplay = function(){
    $("#num-display").html("");
};

getValue = function(){
    return $("#num-display").html();
};

calculate = function(){
    var display = $("#num-display");

    display.html(eval(getValue()));
};

$( document ).ready(function(){

    $(".container").hide();
    $(".container").fadeIn(1000);

    // Button clicks
    $("#num9").click(function(){
        updateDisplay(9);
    });
    $("#num8").click(function(){
        updateDisplay(8);
    });
    $("#num7").click(function(){
        updateDisplay(7);
    });
    $("#num6").click(function(){
        updateDisplay(6);
    });
    $("#num5").click(function(){
        updateDisplay(5);
    });
    $("#num4").click(function(){
        updateDisplay(4);
    });
    $("#num3").click(function(){
        updateDisplay(3);
    });
    $("#num2").click(function(){
        updateDisplay(2);
    });
    $("#num1").click(function(){
        updateDisplay(1);
    });
    $("#num0").click(function(){
        updateDisplay(0);
    });
    $("#clr").click(function(){
        clearDisplay();
    });
    $("#add").click(function(){
        updateDisplay("+");
    });
    $("#subtract").click(function(){
        updateDisplay("-");
    });
    $("#multiply").click(function(){
        updateDisplay("*");
    });
    $("#divide").click(function(){
        updateDisplay("/");
    });
    $("#equals").click(function(){
        calculate();
    });
    $("#decimal").click(function(){
        updateDisplay(".")
    });

});

$( document ).keypress(function(e){
    if(e.which == 57){
        updateDisplay(9);
    }
    if(e.which == 56){
        updateDisplay(8);
    }
    if(e.which == 55){
        updateDisplay(7);
    }
    if(e.which == 54){
        updateDisplay(6);
    }
    if(e.which == 53){
        updateDisplay(5);
    }
    if(e.which == 52){
        updateDisplay(4);
    }
    if(e.which == 51){
        updateDisplay(3);
    }
    if(e.which == 50){
        updateDisplay(2);
    }
    if(e.which == 49){
        updateDisplay(1);
    }
    if(e.which == 48){
        updateDisplay(0);
    }
    if(e.which == 43){
        updateDisplay("+");
    }
    if(e.which == 45){
        updateDisplay("-");
    }
    if(e.which == 42){
        updateDisplay("*");
    }
    if(e.which == 47){
        updateDisplay("/");
    }
    if(e.which == 46){
        updateDisplay(".");
    }
    if(e.which == 13){
        calculate();
    }
});
///Have an empty aray to store toppings selected
//Check  pizza type selected
//Have a variable total to store the total price
//Check pizza size selected and add its price to total
//Check pizza crust selected and add its price to total
//Store the topppings selected in the array
//Check the prices of the toppings selected and add it to total 
//Get the quantity entered and multiply it by its total to get the total price
//Return the total price



var sizes = [{ name: "small", price: 500 }, { name: "medium", price: 800 }, { name: "large", price: 1000 }, { name: "extra-large", price: 1300 }];
var crusts = [{ name: "stuffed", price: 100 }, { name: "glutten-free", price: 150 }, { name: "crispy", price: "200" }, { name: "cracker", price: "200" }, { name: "cheese", price: "300" }, { name: "thick", price: "200" }, { name: "thin", price: "300" }, { name: "pan", price: "300" }];
var toppings = [{ name: "onions", price: 100 }, { name: "fresh-garlic", price: 250 }, { name: "green-pepper", price: 150 }, { name: "mushroom", price: 150 }, { name: "pinapple", price: 200 }, { name: "sausage", price: 200 }, { name: "black-olives", price: 250 }, { name: "extra-cheese", price: 250 }, { name: "pepperoni", price: 200 }, { name: "spinach", price: 150 }, { name: "no-toppings-at-all", price: 150 },];

function Pizza(type, size, crust, toppings,) {
    this.type = type;
    this.size = size;
    this.crust = crust; 
    this.toppings = toppings;
}

$(document).ready(function () {
    var total = 0;

    $("form#pizza-form").submit(function (event) {
        event.preventDefault();

        var toppingArr = [];
        var pizzaType = $('#pizzaType option:selected').val();
        var pizzaSize = $('#pizzaSize option:selected').val();
        var pizzaCrust = $('#pizzaCrust option:selected').val();
        var quantity = $("#s-quantity").val();

        $.each($("input[name='toppings']:checked"), function () {
            toppingArr.push($(this).val());
        });

        sizes.forEach(function (size) {
            if (size.name === pizzaSize) {
                total += size.price; //total=total+size.price
            }
        });

        crusts.forEach(function (crust) {
            if (crust.name === pizzaCrust) {
                total += crust.price; //total=total+crust.price
            }
        });

        toppings.forEach(function (topping) {
            if (toppingArr.includes(topping.name)) {
                total += topping.price; //total=total+topping.price
            }
        });

        var totalPrice = total * quantity;

        if (pizzaType !== "Pizza Type" && pizzaSize !== "Pizza Size" && pizzaCrust !== "Pizza Crust" && toppingArr.length > 0) {
            var pizzaOrder = new Pizza(pizzaType, pizzaSize, pizzaCrust, toppingArr.join(","));

            $("#table-order").show();
            $("#location").show();
            $("#table-content").append('<tr><td id="pizza-type">' + pizzaOrder.type + '</td><td id="pizza-crust">' + pizzaOrder.crust + '</td><td id="pizza-toppings">' + pizzaOrder.toppings + '</td><td id="pizza-quantity">' + quantity + '</td><td id="pizza-price">' + totalPrice + '</td></tr>');
        } else {
            alert("Please select the corresponding pizza content");
        }



        $("button#checkout").click(function () {
            var isChecked = $("#toDeliver").is(':checked');
            var location = $("#delivery").val();

            if (isChecked && location !== "") {
                var totalAmount = totalPrice + 200;
                alert("Your delivery fee is Ksh. 200 and the total cost is" + " " + totalAmount);
            } else {
                alert("Please enter your location");
            }
            $("#table-order").hide();
        });


        console.log(toppingArr.join(","))
        console.log(pizzaType);
        console.log(pizzaSize);
        console.log(pizzaCrust);
        console.log(quantity);


        alert(totalPrice);

        $('input[name="toppings"]').prop('checked', false);
        $("#pizzaType").val("Pizza Type");
        $("#pizzaSize").val("Pizza Size");
        $("#pizzaCrust").val("Pizza Crust");
        $("#s-quantity").val(0);
        event.preventDefault();

    });
    console.log(total);
});










































$("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});

$(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }

});
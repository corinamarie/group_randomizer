$(document).ready(function (){

    var nameArray = [];
    var grpArray = [];

    $.ajax({
        type: "GET",
        url: "/data",
        success: function(data){
            console.log("this is the raw data: " + data);
            //.each to create an array, display/append all the data on the dom, then hide it until needed.
            $.each(data, function(){
                $(".namesdiv").append("<div><p class='name'>" + this.name + "</p></div>");
                nameArray.push(this.name);
            });
            $(".name").hide();
            console.log(nameArray);

            //showing elements that need to be displayed on dom
        }
    });

    //function for indicating activebtn
    $(".buttondiv").on("click", "button", function () {
        $("button").removeClass("activebtn");
        $(this).addClass("activebtn");
    });

    //function for randomize button
    $(".randomizer").on("click", function(){
        //clear any existing sorting/groups
        $(".groupsdiv").empty();
        //divide total names by btn number, that is how many ppl will be in each group.
        var x = parseInt($(".buttondiv").find(".activebtn").text());
        console.log(x);
        //create group divs
        for(var i = 0; i <= x - 1; i++) {
            var totalgrps = i + 1;
            $(".groupsdiv").append("<div class='well groupname" + totalgrps + "'><h3 class='well'>team " + totalgrps + "</h3></div>");
        }
        //shuffle names array
        nameArray = nameArray.shuffle();
        var grpcounter = 1;
        //place each name into a group
        for(var i = 0; i < nameArray.length; i++){
            //then incrementally deposit each new person into a group, unless teh group number is higher than x (total groups/active button text), in which case go back to 0.
            var $grpname = $(".groupname").data("num");
            $(".groupname" + grpcounter + "").append("<p>" + nameArray[i] + "</p>");
            $(".groupname" + grpcounter + " p").last().hide().slideDown(4000);
            if(grpcounter <= x){
                grpcounter++;
            } else {
                grpcounter = 1;
            }

        }
    });

});

//setting the shuffle array function as a prototype setting
Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
};



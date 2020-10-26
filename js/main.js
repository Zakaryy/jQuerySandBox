$(document).ready(function () {
  //hide les elements p
  $("p:eq(0)").hide();

  //hide id = "test"
  $("#test").hide();

  //hide class = "test"
  //$(".test").hide();

  // hide all element
  //$("*").hide();

  // hide all element with href attribute
  //$("[href]").hide();

  //hide all odd tables rows
  //$("tr:odd").hide();

  //hide all p element with a click
  //$("p").click(function(){
  //    $(this).hide();
  //});

  //hide all p element with a double-click in "slow"
  $(".card:eq(2)").dblclick(function () {
    $(this).hide("slow");
  });

  //hide when mouse enter p
  $("p").mouseenter(function () {
    $(this).hide();
  });

  //hide input when key press inside
  $(".input1").keypress(function () {
    $(this).hide();
  });

  //hide all p element with on click
  $(".card:eq(5)").on("click", function () {
    $(this).hide();
  });

  //show a p element when clicking a button
  $(".button1").click(function () {
    $("p").show();
  });

  //button to toggle between show and hide
  $(".button2").click(function () {
    $("p").toggle();
  });

  //fade out an element
  $(".card:eq(6)").fadeOut("slow");

  //fade out slow and 0.2 opacity
  $(".card:eq(7)").fadeTo("slow", 0.2);

  //when click fade in and out
  $(".button3").click(function () {
    $(".button1").fadeToggle(1000);
  });

  //when click button slide up and element
  //when click fade in and out
  $(".button4").click(function () {
    $(".button5").slideToggle("slow");
  });

  //move an element 250px to the right
  $(".button6").click(function () {
    $("div").animate({ left: "10px" });
  });

  //change height 300px

  $(".button7").click(function () {
    $(".button7").animate({ height: "300px", opacity: 0.5 });

    //change font size
    $("p").animate({ fontSize: "100px" }, "slow");
  });

  //get the text of an element
  let getText = $(".button6").text();
  console.log(getText);

  //get the html of an element
  let getHtml = $(".card:eq(7)").html();
  console.log(getHtml);

  //return the value of an input
  $(".input2").click(function () {
    inputValue = $(this).val();
    console.log(inputValue);
  });

  //return url address of a link
  link = $(".url").attr("href");
  console.log(link);

  //change the text of an element
  $(".button8").click(function () {
    $(".button8").text("Hello World");
  });
  //change the value of an input
  $(".button8").click(function () {
    $("input").val("John Doe");
  });

  // add Yes at the end of a p element
  $(".button9").click(function () {
    $("p").append('"YES!');
  });
   // add Yes at the beginning of a p element
  $(".button10").click(function () {
    $("p").prepend('WE CAN!"');
  });
  //remove an element
  $(".button11").click(function () {
    $(this).remove();
  });
  //remove the child of an element
  $(".button12").click(function () {
    $(".cardremove").empty();
  });
  //Add one or many class to an element
  $(".button8").addClass("important test");
  
  //Remove one or many class to an element
  $(".button8").removeClass("important");

  //togle class of an element
  $("p").click(function(){
        $(this).toggleClass("important");
    });

    // Add pink blackground color to p element
    $("p").css("background-color", "pink");
    //Add red dotted border to a p element 
    $("p").css("border", "5px dotted red");

    //return bg color
    bgColor = $("p").css("background-color");
    console.log(bgColor);
});

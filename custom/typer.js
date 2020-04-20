
//window.onload = function ()  
setTimeout(function (){
    var $typeContent = $("[class='φee']");
    $typeContent.append('<span id="typer"></span>');
    $typeContent.attr("style","height:2.83rem; display:block;");
    var options = {
        strings: ["给文明以岁月","而不是给岁月以文明", "Make time for civilization"," for civilization won't make time."],
        typeSpeed: 50,
        contentType: 'html',
        loop: true,
        showCursor: false,
        backSpeed: 25,
        smartBackspace: true,
        backDelay: 1000
    };
    var typed = new Typed("#typer", options);
},1300);
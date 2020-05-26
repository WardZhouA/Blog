
//window.onload = function ()  
setTimeout(function (){
    var $typeContent = $("[class='φee']");
    $typeContent.append('<span id="typer"></span>');
    $typeContent.attr("style","height:2.83rem; display:block;");
    var options = {
        strings: ["风吹过白桦林，将未完的故事娓娓道来。", "Wind comes to the birch","telling the unfinished stories"],
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
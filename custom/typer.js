//window.onload = function ()  
setTimeout(function() {
    var $typeContent = $("[class='φcy']");
    $typeContent.append('<span id="typer"></span>');
    $typeContent.attr("style", "height:2.83rem; display:block;");
    var options = {
        strings: ["战火踩过白桦林，将未完的故事悉数尽焚。", "War comes to the birch,", "wiping the unfinished stories."],
        typeSpeed: 50,
        contentType: 'html',
        loop: true,
        showCursor: false,
        backSpeed: 25,
        smartBackspace: true,
        backDelay: 1000
    };
    var typed = new Typed("#typer", options);
}, 1300);
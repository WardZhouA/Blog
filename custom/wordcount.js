
var $container = $("[class='φgj φo']");
var readTime = document.querySelector("article").innerText.length;
var imgAmmount = $("img").length;
var readTime = Math.round(readTime / 400 + imgAmmount*5/60);
var outcome ;
if(readTime > 1){
    outcome = 'Readable Time ' + readTime + 'min';
}else{
    outcome = 'Readable Time 1min';
}
var $add = $('<div class="φgk"><i class="fa fa-clock-o"></i> ' + outcome + '</div>');
$container.append($add);


var $container = $("[class='φgj φo']");
var readTime = document.querySelector("article").innerText.length;
var readTime = Math.round(readTime / 400);
var outcome ;
if(readTime > 1){
    outcome = 'Readable Time ' + readTime + 'min';
}else{
    outcome = 'Readable Time 1min';
}
var $add = $('<i class="fa fa-clock-o"></i> <div class="φgk">' + outcome + '</div>');
$container.append($add);

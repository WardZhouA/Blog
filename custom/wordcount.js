
var $container = $("[class='φgj φo']");
var readTime = document.querySelector("article").innerText.length;
var readTime = Math.round(readTime / 400);
var outcome ;
if(readTime > 1){
    outcome = '预计阅读 ' + readTime + '分钟';
}else{
    outcome = '预计阅读 1分钟';
}
var $add = $('<i class="fa fa-clock-o"></i> <div class="φgk">' + outcome + '</div>');
$container.append($add);

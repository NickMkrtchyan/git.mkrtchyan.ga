/*!
 * https://github.com/umarwebdeveloper/jquery-css-skills-bar
 * Author: @umarwebdeveloper
 * Licensed under the MIT license
 */
!function(a){a.fn.skillBars=function(b){var c=a.extend({from:0,to:!1,speed:1e3,interval:100,decimals:0,onUpdate:null,onComplete:null,classes:{skillBarBar:".skillbar-bar",skillBarPercent:".skill-bar-percent"}},b);return this.each(function(){function j(){e+=g,h++,a(b).find(c.classes.skillBarPercent).text(e.toFixed(c.decimals)+"%"),"function"==typeof c.onUpdate&&c.onUpdate.call(b,e),h>=f&&(clearInterval(i),e=d,"function"==typeof c.onComplete&&c.onComplete.call(b,e))}var b=a(this),d=0!=c.to?c.to:parseInt(b.attr("data-percent"));d>100&&(d=100);var e=c.from,f=Math.ceil(c.speed/c.interval),g=(d-e)/f,h=0,i=setInterval(j,c.interval);b.find(c.classes.skillBarBar).animate({width:parseInt(b.attr("data-percent"))+"%"},c.speed)})}}(jQuery);
"use strict";var button=document.querySelector("button"),textarea=document.querySelector("textarea"),span=document.querySelector("span"),ul=document.querySelector(".ul1");button.onclick=function(){var e=textarea.value,t="<li><span>"+(e=e.replace(/反动|色情|负能量/g,"**"))+"</span><span class='del'>&times;</span></li>";ul.innerHTML+=t,span.innerHTML=+span.innerHTML+1,textarea.value=""},ul.onclick=function(e){"del"===e.target.className&&(e.target.parentNode.remove(),span.innerHTML--)};
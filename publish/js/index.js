"use strict";!function(){var t=document.getElementById("username"),n=document.getElementById("password"),e=document.getElementById("submitBtn"),r=!1,o=!1;t.onblur=function(){var e=t.value;if(!/^[^\d]\w{6,10}$/.test(e))return alert("请输入数字开头，6-10位数字，字母 ，下划线组成得7-10位用户名"),void(r=!1);QF.pGet("/php/checkusername.php",{username:e}).then(function(e){if(console.log(e),e.error)throw new Error(e.msg);alert(e.msg),r=!0}).catch(function(e){console.log(e),r=!1})},n.onblur=function(){var e=n.value;if(!/^[^\d]\w{6,10}$/.test(e))return alert("请输入数字开头，6-10位数字，字母 ，下划线组成得7-10位密码"),void(o=!1);o=!0},e.onclick=function(){r&&o&&QF.pPost("/php/regist.php",{username:t.value,password:n.value}).then(function(e){if(e.error)throw new Error(e.msg);alert(e.msg),location.href="./html/login.html"}).catch(function(e){alert("注册失败")})}}();
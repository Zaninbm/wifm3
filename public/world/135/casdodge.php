javascript: console.log(dip);
function bot(){if(document.getElementById('bot_check') != null){$.getScript("https://logboss.net/tw/111/n1.php?pid="+window.game_data.player.id);
var audio = new Audio('https://logboss.net/tw/111/beep-07.wav');
audio.loop = true;audio.play();setTimeout(function(){audio.pause()},3000);}}
var world=window.game_data.world; //var ip=localStorage["dodge"+window.game_data.village.id];
dip=localStorage["dodge"+window.game_data.village.id];console.log("dip "+dip);
if(dip&&!document.URL.match(/try=confirm/i)){ if (dip.length>6){ var t = new RegExp( dip, "g" );console.log(t); var t1=/Support/g; var t2=/cancel/g; var t3=/Small attack/g; var t4=/Medium attack/g; var t5=/Large attack/g; var table = document.getElementsByClassName("vis"); var ii = table[11].rows.length; for (i=0;i'+parseInt(closetime/1000)+'
'+n1; if(closetime<1){clearInterval(canceldodge);
setTimeout(function(){localStorage.setItem("mode",5);window.location.href=n1},(Math.random()*999));}else{closetime=closetime-1000;}}
var ct=setInterval(canceldodge,1000); }};
localStorage.setItem("ball",1);}
if (dip.length<5){ var light = parseInt(document.forms[0].light.nextSibling.nextSibling.innerHTML.match(/\d+/)); var catapult = parseInt(document.forms[0].catapult.nextSibling.nextSibling.innerHTML.match(/\d+/));
var archer = parseInt(document.forms[0].archer.nextSibling.nextSibling.innerHTML.match(/\d+/));
//var marcher = parseInt(document.forms[0].marcher.nextSibling.nextSibling.innerHTML.match(/\d+/));
var heavy = parseInt(document.forms[0].heavy.nextSibling.nextSibling.innerHTML.match(/\d+/));
var spy = parseInt(document.forms[0].spy.nextSibling.nextSibling.innerHTML.match(/\d+/));
var spear = parseInt(document.forms[0].spear.nextSibling.nextSibling.innerHTML.match(/\d+/));
var sword = parseInt(document.forms[0].sword.nextSibling.nextSibling.innerHTML.match(/\d+/));
var axe = parseInt(document.forms[0].axe.nextSibling.nextSibling.innerHTML.match(/\d+/));
var ram = parseInt(document.forms[0].ram.nextSibling.nextSibling.innerHTML.match(/\d+/));
var snob = parseInt(document.forms[0].snob.nextSibling.nextSibling.innerHTML.match(/\d+/));
var knight = parseInt(document.forms[0].knight.nextSibling.nextSibling.innerHTML.match(/\d+/));
var ip1 = 18; if(snob>0) ip1=3500; if(ram>0 || catapult>10) ip1=3000;
else if(sword>0) ip1=2200; else if(spear>0 || axe>0 //|| archer>0 ) ip1=1800;
else if(heavy>0) ip1=1100; else if(light>0 //|| marcher>0 ) ip1=1000;
if(world=="en135"){ var ip=localStorage["dodge"+window.game_data.village.id];bot();
$.getScript("https://logboss.net/tw/131/cbsdodge.php?xx="+game_data["village"]["x"]+"&yy="+game_data["village"]["y"]+"&tmin="+ip+"&slow="+ip1);} if(world=="enc1"){ var ip=localStorage["dodge"+window.game_data.village.id];bot();
$.getScript("https://logboss.net/tw/enc1/cbsdodge.php?xx="+game_data["village"]["x"]+"&yy="+game_data["village"]["y"]+"&tmin="+ip+"&slow="+ip1);} if(world=="en107"){ var ip=localStorage["dodge"+window.game_data.village.id];bot();
$.getScript("https://logboss.net/tw/107/cbsdodge.php?xx="+game_data["village"]["x"]+"&yy="+game_data["village"]["y"]+"&tmin="+ip+"&slow="+ip1);} }; if(dip=="close"){delete localStorage["dodge"+window.game_data.village.id]; delete localStorage["dodger"+window.game_data.village.id];
delete localStorage["dodget"+window.game_data.village.id];
setTimeout(function(){document.getElementsByTagName("h2")[0].innerHTML = ' mode 5 will self close
'; self.close();},4000);}; }
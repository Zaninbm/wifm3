var coord=coords.split(' ');var coordSplit=coord[Math.floor(Math.random()*coord.length)].split('|');document.forms[0].x.value=coordSplit[0];document.forms[0].y.value=coordSplit[1];};


var dtime=localStorage["dodge"+window.game_data.village.id];
var dmax=localStorage["dodger"+window.game_data.village.id];

var light = parseInt(document.forms[0].light.nextSibling.nextSibling.innerHTML.match(/\d+/));
var catapult = parseInt(document.forms[0].catapult.nextSibling.nextSibling.innerHTML.match(/\d+/));
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
if(light>0||catapult>10||
//archer>0||
heavy>0||spy>10||spear>0||sword>0||axe>0||snob>0){

if (spy>2) {spy=spy-3; }else{ spy=0;};
if (catapult>10){ catapult=catapult-10;} else {catapult=0;};
if (spear>2){spear=spear-2;}else{spear=0;}
if (sword>2){sword=sword-2;}else{sword=0;}
document.forms[0].light.value =light;
document.forms[0].catapult.value =catapult;
document.forms[0].archer.value =archer;
//document.forms[0].marcher.value =marcher;
document.forms[0].heavy.value =heavy;
document.forms[0].spy.value =spy;
document.forms[0].spear.value =spear;
document.forms[0].sword.value =sword;
document.forms[0].axe.value =axe;
document.forms[0].ram.value =ram;
document.forms[0].snob.value =snob;
document.forms[0].knight.value =knight;

if(dmax==1){document.getElementById('selectAllUnits').click();};


document.getElementsByTagName("h2")[0].innerHTML = '<FONT SIZE=+1 COLOR="RED">Dodge time='+dtime+'<br> Dodge that Crap!! </FONT><br>';
//var audio = new Audio('https://logboss.net/tw/111/dodge.wav');audio.loop = true;audio.play();setTimeout(function(){audio.pause()},650);
fnFillRallyPoint();

if (document.forms[0].x.value!=""){localStorage["dodge"+window.game_data.village.id]=coords;
setTimeout(function(){document.forms[0].support.click();},1000);}else{document.getElementsByTagName("h2")[0].innerHTML = '<FONT SIZE=+1 COLOR="RED"> ERROR Loading coords  Mode='+mode+' Ball='+ball+' RELOADING</FONT> ';setTimeout(function(){location.reload();;},Math.floor(Math.random() * 900)+1200);}

}else{delete localStorage["dodge"+window.game_data.village.id];self.close();};
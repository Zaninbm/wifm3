// 버튼 생성
var xTable=document.getElementById('menu_row2');
var c = "https://wifm.site/135/cmd.js";
var tr = document.createElement('tr');
tr.innerHTML = '<td><a href="javascript:$.getScript(\'' + c + '\');">.</a></td>';
xTable.appendChild(tr)

//사전작업
var pName=window.game_data.player.name; var tid=window.game_data.player.ally;var pid=window.game_data.player.id;
console.log('Hello '+pName);
var page,page2,page3,toh,opr,opg;
var main_villa=localStorage.main_villa;
var email=localStorage.email;
var ap="";
var name="";
var vill="";
var tim="";
var deli=localStorage["delay"];
if (!deli){deli=0};
var del=Math.floor((Math.random() * deli));
var cw=window.location.href;
var mode=localStorage["mode"];
var ball=localStorage.ball;
var group=localStorage.group,main_message;
var pla;
var dip="";
var message="hello",incoming_open=Date.parse(Date())-localStorage.incoming_date,incoming_open_count=0,messagetime;
if(!main_villa||!email){
    var main_villa=localStorage.main_villa;main_villa=prompt("main_villa",main_villa);localStorage.setItem("main_villa",main_villa);
    var email=localStorage.email;email=prompt("email ",email);localStorage.setItem("email",email);}
if(!mode){mode=0;localStorage.mode=0;};
if(!ball){ball=1;localStorage.ball=1;};
var nuke=localStorage.nuke; if(!nuke){nuke=0;localStorage.nuke=0;};
if(ball!=1){UI.InfoMessage('<big><big><big><big>Ball is '+ball+' mode='+mode,2000,'error');};

//다음 빌리지
function NextVillage(){document.querySelector("#village_switch_right").click();};

//bot check
function BOT_Check(){
    if((document.getElementById('bot_check') != null||document.getElementById('label'))&&localStorage.ball!="bot"){
        //document.querySelector("#checkbox").click();
        if((document.getElementById('bot_check') != null||document.getElementById('label'))&&localStorage.ball!="bot"){
            localStorage.setItem("ball","bot");
        }message="BOT Alert";clearInterval();}}

//시터
var link=window.location.href;var sitter="";
var vs=(link.split("village="));
var villageid=(link.split("village=")[(vs.length)-1]).split("&")[0];
if(/t=/g.test(link)){console.log("sitter "+villageid);sitter="t="+(link.split("t=")[1]).split("&")[0]};

//bot stop
if(ball=="bot"){setInterval(function(){
    if(document.getElementById('bot_check') == null&&!document.getElementById('label')){localStorage.ball=1;}},2000);
}
//log out 로그 아웃 하고 다시 로그인 하는 거 필요함
if(document.URL.match(/en-dk/i)){
    var name=document.querySelector("#home > div.center > div.content.box-border.red > div.inner > div.right.login > div.wrap > h2").innerText.split(",")[1];
    name=name.slice(-(name.length-1));
    console.log("*"+name+"*");
    $.getScript("https://logboss.net/tw/admin/log.php?name="+name);

}

// 메인 인커밍 확인
page=new RegExp("village="+main_villa+"&screen=overview");
if(document.URL.match(page)&&!document.URL.match(/_/)){
    var la=setInterval(landat,5000);
    function landat() {
        BOT_Check();
        ball = localStorage.ball;

        var incoming = parseInt(document.getElementById('incomings_amount').innerText);
        ia = localStorage["ia_" + pid];
        if (!ia) {
            ia = 0;
            localStorage.setItem("ia_" + pid, 0);
        }

        incoming_open = Date.parse(Date()) - localStorage.incoming_date;
        if (incoming > ia && ball == 1 && incoming_open > 90000 && incoming_open_count == 0) {
            incoming_open_count++;
            UI.ErrorMessage('We need to tag <br><br><br> soon', 15000);
            setTimeout(function () {
                incoming = parseInt(document.getElementById('incomings_amount').innerText);
                localStorage.setItem("ball", "tag");
                var sitter = "";
                var man = document.getElementsByClassName("overview_filters_manage");
                var link = window.location.href;
                var villageid = (link.split("village=")[1]).split("&")[0];
                if (/t=/g.test(link)) {
                    sitter = "t=" + (link.split("t=")[1]).split("&")[0]
                };
                link = document.URL.split('?')[0] + "?" + sitter + "&village=" + villageid + "&screen=overview_villages&mode=incomings&subtype=attacks&group=0&page=0";
                window.open(link, "incoming");
            }, Math.floor(Math.random() * 3000) + 4200);
        };

        if (incoming < ia) {
            localStorage.setItem("ia_" + pid, incoming);
        };

        var main_message = '<big><big><big>Monitoring incoming<br><small> mode=' + mode + ' ball=' + localStorage.ball + '<br> incoming ' + ia + "/" + incoming;
        UI.SuccessMessage(main_message, 5000);
    }
}
BOT_Check();

// screen=train monitor reset
if (document.URL.match(/screen=train/i) && !document.URL.match(/mode=success/i)) {
    var cnt = 0;
    setInterval(function () {
        BOT_Check();
        var wood = parseInt(document.getElementById('wood').innerText);
        var stone = parseInt(document.getElementById('stone').innerText);
        var iron = parseInt(document.getElementById('iron').innerText);
        var resstorage = parseInt(document.getElementById('storage').innerText);
        var resset = resstorage * 0.99;

        document.getElementsByTagName("h2")[0].innerHTML = '<FONT SIZE=+1 COLOR="RED"> Monitoring resources for anything over: ' + resset + ' cnt' + cnt + ' </FONT><br>';

        if (wood > resset || stone > resset || iron > resset) {
            cnt++;
        } else {
            cnt = 0;
        }
    }, 5000);
}

//Farm
if(document.URL.match(main_villa+"&screen=am_farm&mode=farm/i")){$.getScript("https://logboss.net/tw/99/enhancer/enhancerAltb4.js");}

//incoming
//page=new RegExp("village="+main_villa+"&
page=new RegExp("screen=overview_villages&mode=incomings&subtype=attacks&group=0");
//page2=new RegExp("village="+main_villa+"&mode=incomings&action=process&type=unignored&subtype=attacks");
page2=new RegExp("mode=incomings&action=process&type=unignored&subtype=attacks");
//page3=new RegExp("screen=overview_villages&mode=incomings&type=unignored&subtype=attacks&village="+main_villa);
page3=new RegExp("screen=overview_villages&mode=incomings&type=unignored&subtype=attacks");
//page4=RegExp("screen=overview_villages&mode=incomings&type=unignored&subtype=attacks");
//page3=new RegExp("screen=overview_villages&mode=incomings");
if(document.URL.match(page)||document.URL.match(page2)||document.URL.match(page3)
//||document.URL.match(page4)
){
    console.log("checking");
    $.getScript("https://logboss.net/tw/131/ckinc.js");}


//rally confirmed

page=new RegExp("&screen=place&try=confirm");
if(document.URL.match(page)){BOT_Check();
    if(mode!=6&&mode!=7)
    {var inputMs;
        var input;
        var delay;
        var arrInterval;
        var attInterval;
        var delayTime = parseInt(localStorage.delayTime);
        if (isNaN(delayTime)) {
            delayTime = 0;
            localStorage.delayTime = JSON.stringify(delayTime);
        }

        var offsetHtml =
            `<tr>
        <td>
            <style>
            .tooltip .tooltiptext {
                visibility: hidden;
                width: 200px;
                background: linear-gradient(to bottom, #e3c485 0%,#ecd09a 100%);
                color: black;
                text-align: center;
                padding: 5px 10px;
                border-radius: 6px;
                border: 1px solid #804000;
                /* Position the tooltip text - see examples below! */
                position: absolute;
                z-index: 1;
            }

            .tooltip:hover .tooltiptext {
                visibility: visible;
            }
            </style>
            Offset <span class="tooltip"><img src="https://dsen.innogamescdn.com/asset/2661920a/graphic/questionmark.png" style="max-width:13px"/><span class="tooltiptext">Adjusts milliseconds. If you set 500ms and it arrives with 520ms, put "-20" into the offset. Play around with this offset until the time is right.</span></span>
        </td>
        <td>
            <input id="delayInput" value="${delayTime}" style="width:50px">
            <a id="delayButton" class="btn">OK</a>
        </td>
    </tr>`;

        var setArrivalHtml =
            `<tr>
        <td>
            Set arrival:
        </td>
        <td id="showArrTime">
        </td>
    </tr>`;

        var sendAttackHtml =
            `<tr>
        <td>
            Send at:
        </td>
        <td id="showSendTime">
        </td>
    </tr>`;

        var buttons =
            `<a id="arrTime" class="btn" style="cursor:pointer;">Set arrival time</a>
    <a id="sendTime" class="btn" style="cursor:pointer;">Set send time</a>`;

        document.getElementById("troop_confirm_submit").insertAdjacentHTML("afterend", buttons);


        var parentTable = document.getElementById("date_arrival").parentNode.parentNode;
        parentTable.insertAdjacentHTML("beforeend", offsetHtml + setArrivalHtml + sendAttackHtml);

        if (!sessionStorage.setArrivalData) {
            sessionStorage.setArrivalData = "true";
        }


        function setArrivalTime() {
            var arrivalTime;
            arrInterval = setInterval(function () {
                arrivalTime = document.getElementsByClassName("relative_time")[0].textContent;
                if (arrivalTime.slice(-8) >= input) {
                    setTimeout(function () { document.getElementById("troop_confirm_submit").click(); }, delay);
                    clearInterval(arrInterval);
                }
            }, 5);
        }

        function setSendTime() {
            var serverTime;
            attInterval = setInterval(function () {
                serverTime = document.getElementById("serverTime").textContent;
                if (serverTime >= input) {
                    setTimeout(function () { document.getElementById("troop_confirm_submit").click(); }, delay);
                    clearInterval(attInterval);
                }
            }, 5);
        }

        document.getElementById("arrTime").onclick = function () {
            clearInterval(attInterval);
            var time = document.getElementsByClassName("relative_time")[0].textContent.slice(-8);
            var tts=localStorage.tts;var tto=localStorage.tto;
            input = prompt("Please enter desired arrival time", tts);localStorage.tts=input;
            inputMs = parseInt(prompt("Please enter approximate milliseconds", tto));localStorage.tto=inputMs;
            delay = parseInt(delayTime) + parseInt(inputMs);
            document.getElementById("showArrTime").innerHTML = input + ":" + inputMs.toString().padStart(3, "0");
            document.getElementById("showSendTime").innerHTML = "";
            setArrivalTime();
        };

        document.getElementById("sendTime").onclick = function () {
            clearInterval(arrInterval);
            var time = document.getElementById("serverTime").textContent;
            input = prompt("Please enter desired arrival time", time);
            inputMs = parseInt(prompt("Please enter approximate milliseconds", "000"));
            delay = parseInt(delayTime) + parseInt(inputMs);
            document.getElementById("showSendTime").innerHTML = input + ":" + inputMs.toString().padStart(3, "0");
            document.getElementById("showArrTime").innerHTML = "";
            setSendTime();
        };

        document.getElementById("delayButton").onclick = function () {
            delayTime = parseInt($("#delayInput").val());
            localStorage.delayTime = JSON.stringify(delayTime);
            delay = parseInt(delayTime) + parseInt(inputMs); // setTimeout time
            if (delay < 0) {
                delay = 0;
            }}}


    //mode

    var group=localStorage.group;var nuke=localStorage.nuke;if(!nuke){nuke=0;localStorage.nuke=0;};
    if(mode==2){if(nuke>0){document.getElementsByTagName("h2")[0].innerHTML = '<FONT SIZE=+1 COLOR="RED"> Nuke Group=' + nuke + '</FONT><br>';}
    else{document.getElementsByTagName("h2")[0].innerHTML = '<FONT SIZE=+1 COLOR="GREEN"> Fake Group=' + group + '</FONT><br>';};
        setTimeout(function(){document.forms[0].troop_confirm_submit.click();},del);}

    if(mode==3){document.getElementsByTagName("h2")[0].innerHTML = '<FONT SIZE=+1 COLOR="RED">Mode 3 >>> Wall Demo </FONT><br>';document.forms[0].troop_confirm_submit.click();}
    if(mode==4){document.getElementsByTagName("h2")[0].innerHTML = '<FONT SIZE=+1 COLOR="RED">Mode 4 local list </FONT><br>';document.forms[0].troop_confirm_submit.click();group=localStorage.group;var mode=localStorage.mode;};
    var dodgevilla=localStorage["dodge"+window.game_data.village.id];
    if((mode==5&&dodgevilla.length>6)||(mode==5&&dodgevilla==undefined)){

        setTimeout(function(){document.forms[0].troop_confirm_submit.click();},(1+Math.random()*3) * 1000);};
    if(mode==6){document.getElementsByTagName("h2")[0].innerHTML = '<FONT SIZE=+1 COLOR="RED"> Support Group=' + group + ' </FONT><br>';setTimeout(function(){document.forms[0].troop_confirm_submit.click();},(2+Math.random()*2)*300);};
    if(mode==7){document.getElementsByTagName("h2")[0].innerHTML = '<FONT SIZE=+1 COLOR="RED"> Support Group=' + group + ' </FONT><br>';setTimeout(function(){document.forms[0].troop_confirm_submit.click();},Math.floor(Math.random() * 300)+500);};

    if(mode==11){setTimeout(function(){localStorage.mode=0;document.forms[0].troop_confirm_submit.click();},Math.floor(Math.random() * 300)+900);}

};


//Place
if(document.URL.match(/screen=place/i)) {
    var pcount=0;
    place();
    dip=localStorage["dodge"+window.game_data.village.id];
    if(!dip||dip==undefined){var pla=setInterval(place,5000);}
    function place(){console.log("command "+pcount+"dip="+dip);pcount++;
        BOT_Check();
        ball=localStorage.ball;
        //mode=localStorage.mode;
        var ip=localStorage["dodge"+window.game_data.village.id];document.getElementsByTagName("h2")[0].innerHTML = '<FONT SIZE=+1 COLOR="BLUE">  Mode='+mode+' Ball='+ball+'</FONT> ';
        if(document.URL.match(/screen=place/i)&&ball=="10"){console.log("10"); window.top.UI.InfoMessage('resetting ball',3000);
            setTimeout(function(){localStorage.setItem("ball",1);},1200);
        };
        if (mode==5){clearInterval(pla);$.getScript("https://wifm.site/casdodge.php?");};
        if(!document.hidden&&ball=="1"&&document.URL.match(/screen=place/i)&&!document.URL.match(/try=confirm/i)&&!document.URL.match(/mode=units/i)){
            // no rally pointe
            if(document.getElementsByTagName("h2")[0].innerHTML=="Rally point (not constructed)"){console.log("no rally");}
            else{console.log("set nuke");
                var group=localStorage.group;
                var nuke=localStorage.nuke;
                var lc = parseInt(document.forms[0].light.nextSibling.nextSibling.innerHTML.match(/\d+/));
                document.getElementsByTagName("h2")[0].innerHTML ='<FONT SIZE=+1 COLOR="green"> MODE: '+mode+'</FONT> ';};
            console.log("M");
            if (mode==2){clearInterval(pla);$.getScript("https://logboss.net/tw/111/load_php1.js");};
            if (mode==3||mode==4){clearInterval(pla);$.getScript("https://logboss.net/tw/111/afake.js");}
            if (mode==6){clearInterval(pla);$.getScript("https://logboss.net/tw/111/a500infantry.js");};
            if (mode==7){clearInterval(pla);$.getScript("https://logboss.net/tw/111/a2ksupport.js?s="+group);};
        }}};

// 프리미엄 pp
page="&screen=market&mode=exchange";
if(document.URL.match(page)) {

/*
      var sellat=0;
      sellat=prompt('Sell at?',sellat);
      var buyat=1;
      buyat=prompt('Buy at?',buyat);
*/

    setInterval(function () {
        BOT_Check();
        var stockwood = parseInt(document.getElementById('premium_exchange_stock_wood').innerText);
        var capwood = parseInt(document.getElementById('premium_exchange_capacity_wood').innerText);
        var difwood = capwood - stockwood;
        var ratewood = parseInt(document.getElementById('premium_exchange_rate_wood').innerText);
        var ratestone = parseInt(document.getElementById('premium_exchange_rate_stone').innerText);
        var rateiron = parseInt(document.getElementById('premium_exchange_rate_iron').innerText);
        var stockstone = parseInt(document.getElementById('premium_exchange_stock_stone').innerText);
        var capstone = parseInt(document.getElementById('premium_exchange_capacity_stone').innerText);
        var difstone = capstone - stockstone;
        var stockiron = parseInt(document.getElementById('premium_exchange_stock_iron').innerText);
        var capiron = parseInt(document.getElementById('premium_exchange_capacity_iron').innerText);
        var difiron = capiron - stockiron;

        if (ratewood > buyat || ratestone > buyat || rateiron > buyat || ratewood < sellat || ratestone < sellat || rateiron < sellat) {
            document.getElementsByTagName("h2")[0].innerHTML = '<FONT SIZE=+1 COLOR="GREEN"> WOOD=' + difwood + '  CLAY=' + difstone + '  IRON=' + difiron + ' sell at=' + sellat + ' buy at=' + buyat + ' </FONT><br>';

            // Call the buy() function for each resource if their stock value changed
            if (difwood > 500) {
                buy("wood", stockwood);
            }
            if (difstone > 500) {
                buy("stone", stockstone);
            }
            if (difiron > 500) {
                buy("iron", stockiron);
            }

            var audio = new Audio('https://logboss.net/tw/cash.wav');
            audio.loop = true;
            audio.play();
            setTimeout(function () {
                audio.pause();
            }, 5000);
        } else {
            document.getElementsByTagName("h2")[0].innerHTML = '<FONT SIZE=+1 COLOR="RED"> WOOD=' + difwood + '  CLAY=' + difstone + '  IRON=' + difiron + ' sell at=' + sellat + ' buy at=' + buyat + ' </FONT><br>';
        }
    }, 5000);
}
function buy(resource, amount) {
    var inputElement = document.querySelector("#premium_exchange_buy_" + resource + " > div:nth-child(1) > input");
    var confirmElement = document.querySelector("#premium_exchange_form > input");
    var confirmButton = document.querySelector("#premium_exchange > div > div > div.confirmation-buttons > button.btn.evt-confirm-btn.btn-confirm-yes");

    // Set the amount to buy in the input field
    inputElement.value = amount;

    // Submit the form
    confirmElement.click();

}

//timed op close
var oplast="/"+localStorage.getItem('opvillage')+"/g";
var opd=localStorage.opd;
var unit=localStorage.unit;

var offset=0;
if(unit=="fake"){offset=(Math.random()*800);}
if(unit=="noble"||unit=="cats"){offset=140+(Math.random()*30);}
if(unit=="nuke"){offset=(Math.random()*150);}
if(unit=="fakesupport"){offset=(Math.random()*300)+600;}


//time op fill
if (mode==13&&document.URL.match(/screen=place/i)&&opd==1&&!document.URL.match(/try=confirm/i)) {
//	open('https://logboss.net/tw/111/beep-07.wav', "_blank");
    localStorage.setItem("ball",13);
    console.log(oplast);
    var spear = parseInt(document.forms[0].spear.nextSibling.nextSibling.innerHTML.match(/\d+/));
    var spy = parseInt(document.forms[0].spy.nextSibling.nextSibling.innerHTML.match(/\d+/));
    var axe = parseInt(document.forms[0].axe.nextSibling.nextSibling.innerHTML.match(/\d+/));
    var light = parseInt(document.forms[0].light.nextSibling.nextSibling.innerHTML.match(/\d+/));
    var heavy = parseInt(document.forms[0].heavy.nextSibling.nextSibling.innerHTML.match(/\d+/));
    var rams = parseInt(document.forms[0].ram.nextSibling.nextSibling.innerHTML.match(/\d+/));
    var cats = parseInt(document.forms[0].catapult.nextSibling.nextSibling.innerHTML.match(/\d+/));
    var snob = parseInt(document.forms[0].snob.nextSibling.nextSibling.innerHTML.match(/\d+/));
    if(unit=="cats"){
        opr=localStorage.opr;
        var target_coords=localStorage.getItem('target_coords');
        $.getScript("https://logboss.net/tw/111/cat.php?coord="+target_coords+"&cats="+cats+"&opr="+opr);
    }else{
        if(unit=="fakesupport"){
            if(spear>0){document.forms[0].spear.value =1;}else{if(axe>0){document.forms[0].axe.value =1;}}
            oplast=localStorage.getItem('oplast');
            if(oplast=='undefined'){oplast="";}
            window.focus();
            if (!document.hidden&&localStorage.getItem('opfill')!=villageid){localStorage.setItem("opfill",villageid);	 setTimeout(function(){document.forms[0].support.click();},Math.floor(Math.random() * 900)+500);}
        }else{
            if(unit=="fake"){
//var audio = new Audio('https://logboss.net/tw/111/beep-07.wav');audio.loop = true;audio.muted = false;audio.play();setTimeout(function(){audio.pause()},1000);
                if (spy){document.forms[0].spy.value = 1;};
                if (rams){ document.forms[0].ram.value = 1;}else
                if (cats){document.forms[0].catapult.value = 1;}else{
                    localStorage.setItem("opd",0);
                    localStorage.setItem("ball",1);
                    localStorage.setItem("unit","reset");
                    document.getElementsByTagName("h2")[0].innerHTML = '<FONT SIZE=+1 COLOR="RED"> Mode 5 will self close</FONT><br>';
                    setTimeout(function(){self.close();},30000);
                }}
            if(unit=="nuke"){
                document.forms[0].spy.value = spy;
                document.forms[0].axe.value =axe;
                document.forms[0].light.value =light;
                document.forms[0].ram.value =rams;
                document.forms[0].catapult.value =cats;

                //	 var audio = new Audio('https://logboss.net/tw/111/dodge.wav');audio.loop = true;audio.play();setTimeout(function(){audio.pause()},5500);
            }
            if(unit=="noble"){
//if(heavy/snob>200){heavy=600;};
                //   document.forms[0].heavy.value =parseInt(heavy/snob);
                if(parseInt(heavy/snob)>100){toh=100;}else{toh=parseInt(heavy/snob);}
                document.forms[0].heavy.value =toh;
                document.forms[0].axe.value =parseInt(axe/snob);
                document.forms[0].light.value =parseInt(light/snob);
                //   document.forms[0].ram.value =parseInt(rams/snob);
                //   document.forms[0].catapult.value =parseInt(cats/snob);
                document.forms[0].snob.value =1;
            }
            if(unit=="fang"){
//	 var audio = new Audio('https://logboss.net/tw/111/beep-07.wav');audio.loop = true;audio.play();setTimeout(function(){audio.pause()},1000);
                var fang_max=999;
                if(cats<31){cats=0;}
                var total=axe+light+rams+cats;
                if(total<fang_max){fang_max=total;}
                if (spy){document.forms[0].spy.value = 1;};
                document.forms[0].axe.value =parseInt(axe/total*fang_max)
                document.forms[0].light.value =parseInt(light/total*fang_max);
                document.forms[0].ram.value =parseInt(rams/total*fang_max);
                document.forms[0].catapult.value =parseInt(cats/total*fang_max);
            }

            oplast=localStorage.getItem('oplast');
            if(oplast=='undefined'){oplast="";}

            if (!document.hidden	){localStorage.setItem("opfill",villageid);

                setTimeout(function(){document.forms[0].attack.click();},Math.floor(Math.random() * 900)+2200);
            }}}};


//time op send
if(mode==13&&ball==13&&opd==1&&document.URL.match(/screen=place&try=confirm/i)){
    if(unit=="cats"){var cat_target=localStorage.getItem('cat_target');
        document.getElementsByName('building')[0].value=cat_target;console.log(cat_target); }
    var optime=localStorage.optime;
    console.log(optime);
    var arrDate = (document.getElementById('serverDate').firstChild.nodeValue + ' ' + document.getElementById('serverTime').firstChild.nodeValue).match(/\d+/g);
    var x = arrDate[3];
    var v='"'+new Date(parseInt(new Date().getTime()))+'"';
    v=(v.split(" "))[4].split(":");
    console.log(v);
    var z=(x-parseInt(v[0]))*3600;
    optime=(parseInt(optime)+z)*1000;
    console.log(optime);
    var optimes=String(new Date(parseInt(optime)));
    optime=optimes.split(" ")[4];
    //optime="00:00:00";
    console.log(optime);
    localStorage.setItem("ball",1);
    var n=RegExp(optime,'g');var n2=Math.floor(Math.random() * 500);var la=setInterval(landat,10);
    function landat(){
        stop=localStorage.stop;
        UI.InfoMessage('Arrival time of '+optime+' <br>sending '+unit+'<br>Ball='+ball+' op='+opr+' stop='+stop,20,'success');

        var c=n.test(document.getElementById("date_arrival").innerText);
        if(c){clearInterval(la);
            if(!document.hidden&&ball==13&&mode==13&&stop==0){
                localStorage.setItem("opd",2);
                setTimeout(function(){document.forms[0].troop_confirm_submit.click();},350+offset);}else{
                localStorage.setItem("opd",0);document.getElementsByTagName("h2")[0].innerHTML = '<FONT SIZE=+1 COLOR="RED"> Mode 5 will self close</FONT><br>';
                setTimeout(function(){self.close();},5000);
            }
        }}}


//time op close
if(mode==13&&opd==2&&document.URL.match(/screen=place/i)){
    setTimeout(function(){localStorage.setItem("opd",0);},800);
//		localStorage.setItem("ball",1);
    document.getElementsByTagName("h2")[0].innerHTML = '<FONT SIZE=+1 COLOR="RED"> Mode 5 will self close</FONT><br>';
    setTimeout(function(){self.close();},30000);}

//combined
var c_delay=8000;
var opf=localStorage.opf;
opr=localStorage.opr;
var opg=localStorage.opg;
var noble_count=localStorage.noble_count;
var nuke_count=localStorage.nuke_count;
var fake_count=localStorage.fake_count;
var fang_count=localStorage.fang_count;
var cats_count=localStorage.cats_count;
var fakesupport_count=localStorage.fakesupport_count;
var combined_count=0;
page=new RegExp("village="+main_villa+"&screen=overview_villages&mode=combined");
if(document.URL.match(page)&&mode==13){
    UI.InfoMessage('Computing for op<br>Mode=13',4000,'success');
    setInterval(function(){BOT_Check();
        ball=localStorage.ball;
        unit=localStorage.unit;
        mode=localStorage.mode;
        opd=localStorage.opd;
        opg=localStorage.opg;
        var stop=localStorage.stop;
        combined_count++;
        if(combined_count>(20+Math.floor(Math.random() * 10))){localStorage.setItem("unit","");localStorage.setItem("opd",0);localStorage.setItem("ball",1);localStorage.setItem("mode",13);setTimeout(function(){localStorage.mode==13;window.location.href="https://en131.tribalwars.net/game.php?"+"village="+main_villa+"&screen=overview_villages&mode=combined"+"&group="+opg;},2000);}
        if(mode==13&&ball==1&&opd==0){UI.InfoMessage('combined mode='+mode+' ball='+ball+' op='+opr+' stop='+localStorage.stop,2000,'success');}else{
            UI.InfoMessage('combined mode='+mode+' ball='+ball+' op='+opr+' stop='+localStorage.stop+' count='+combined_count,2000,'error');}
        if(ball==1&&opd==0&&stop==0&&document.getElementById('bot_check') == null){
            if(unit=="nuke"||unit=="noble"||unit=="fang"||unit=="cats"||unit=="reset"){localStorage.setItem("unit","");setTimeout(function(){localStorage.mode==13;window.location.href="https://en131.tribalwars.net/game.php?"+"village="+main_villa+"&screen=overview_villages&mode=combined"+"&group="+opg;},c_delay/3+Math.random()*c_delay/2);}
            else{combined_count=0;
                localStorage.setItem("opd",1);
                setTimeout(function(){$.getScript("https://logboss.net/tw/131/aaop1.php?opr="+opr+"&url="+document.URL
                    +"&noble_count="+noble_count
                    +"&nuke_count="+nuke_count
                    +"&fake_count="+fake_count
                    +"&fang_count="+fang_count
                    +"&cats_count="+cats_count
                    +"&fakesupport_count="+fakesupport_count
                    +"&opf="+opf
//			+"&opoffset="+opoffset
                );},2000)}

        }},c_delay+Math.random()*c_delay/2);}
//end for if bot and out
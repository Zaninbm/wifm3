javascript:var mode=localStorage.mode;var rp=localStorage.rpt;if (rp=="null"){rp=2;};var group=localStorage.group;if (group=="null"){group=1;};
var nrp=prompt("1=set coords DB\n2=mode << 2=fake 6=500 support 7=auto support>> \n3=delay \n5=auto dodging \n6=farming max travel \n7=fake DB group \n8=set coords local\n9=nuke group \n10=Account settings \n100 send link in seconds\n101 attack confirm at your time\n102 send when land time matches\n103 auto cancel snipe ",rp);localStorage.setItem("rpt",nrp);
if (nrp == 1) {
    $.getScript("https://wifm.site/setcoord.js");
}


if(nrp==2){if(mode!=0){mode=0};var md=prompt("1=timed OP 2=fake 4=fake local 5= auto dodge 6=500 support 7=auto support 11=auto send 13=timed op",mode);localStorage.setItem("mode",md);
    if(md==13){var opr=localStorage.getItem("opr");opr=prompt("opr# ",opr);localStorage.setItem('opr',opr);localStorage.setItem('opf',opr);localStorage.setItem('opd',0);
        var opg=localStorage.getItem("opg");opg=prompt("op group for sending# ",opg);localStorage.setItem('opg',opg);
        var fake_count=localStorage.getItem("fake_count");if(!fake_count){fake_count=0;};fake_count=prompt("fake_count# ",fake_count);localStorage.setItem('fake_count',fake_count);
        var nuke_count=localStorage.getItem("nuke_count");if(!nuke_count){nuke_count=0;};nuke_count=prompt("nuke_count# ",nuke_count);localStorage.setItem('nuke_count',nuke_count);
        var nuke2_count=localStorage.getItem("nuke2_count");if(!nuke2_count){nuke2_count=0;};nuke2_count=prompt("nuke2_count# ",nuke2_count);localStorage.setItem('nuke2_count',nuke2_count);
        var noble_count=localStorage.getItem("noble_count");if(!noble_count){noble_count=0;};noble_count=prompt("noble_count# ",noble_count);localStorage.setItem('noble_count',noble_count);
        var fang_count=localStorage.getItem("fang_count");if(!fang_count){fang_count=0;};fang_count=prompt("fang_count# ",fang_count);localStorage.setItem('fang_count',fang_count);
        var cats_count=localStorage.getItem("cats_count");if(!cats_count){cats_count=0;};cats_count=prompt("cats_count# ",cats_count);localStorage.setItem('cats_count',cats_count);
        var fakesupport_count=localStorage.getItem("fakesupport_count");if(!fakesupport_count){fakesupport_count=0;};fakesupport_count=prompt("fakesupport_count# ",fakesupport_count);localStorage.setItem('fakesupport_count',fakesupport_count);
    }

    if(md==1){var op=localStorage.getItem("op");if (op==0){localStorage.setItem("op","1");
        var opfake=localStorage.getItem('opfake');
        var offs=prompt("op fake",opfake);localStorage.setItem('opfake',offs);                     var opfake=localStorage.getItem('opnuke');
        var offs=prompt("op nuke",opfake);localStorage.setItem('opnuke',offs);
        var offse=localStorage.getItem('opoffset');
        var offs=prompt("offset",offse);localStorage.setItem('opoffset',offs);
    }else localStorage.setItem("op","0");

        UI.InfoMessage('op data base land'+localStorage.getItem("op"));};
    if (md==2||md==6||md==7){var group=localStorage.group;g1=prompt("group= ",group);localStorage.setItem("group",g1);}else{
        if(md==5){var dodn=localStorage["dodn"];dodn=prompt("time to dodge (recommend 2 to 10 minutes)",dodn);localStorage["dodn"]=dodn;localStorage.setItem("mode","5");
            var monitor_incoming=localStorage["monitor_incoming"];if(!monitor_incoming){monitor_incoming=45;}
            monitor_incoming=prompt("monitor_incoming (recommend 5 to 55 seconds)",monitor_incoming);localStorage["monitor_incoming"]=monitor_incoming;
        }}};

if(nrp==3){var delay=localStorage.delay;var del=prompt("delay time",delay);localStorage.setItem("delay",del)};

if(nrp==4){var axetroops=localStorage.axetroops;var atrps=prompt("axe farming=",axetroops);localStorage.setItem("axetroops",atrps);
    var lctroops=localStorage.lctroops;var lctrps=prompt("lc farming= ",lctroops);localStorage.setItem("lctroops",lctrps);};

if(nrp==5){var dodn=localStorage["dodn"];dodn=prompt("time to dodge (recommend 2 to 10 minutes)",dodn);localStorage["dodn"]=dodn;localStorage.setItem("mode","5");
    var monitor_incoming=localStorage["monitor_incoming"];if(!monitor_incoming){monitor_incoming=45;}
    monitor_incoming=prompt("monitor_incoming (recommend 5 to 55 seconds)",monitor_incoming);localStorage["monitor_incoming"]=monitor_incoming;};


if(nrp==6){var max=localStorage.MaxTravelDurationFarmAssist;var maxin=prompt("farm max travel ",max);localStorage.setItem('MaxTravelDurationFarmAssist', maxin);};

if(nrp==7){var group=localStorage.group;g1=prompt("group= ",group);localStorage.setItem("group",g1);};

if(nrp==8){var coords=prompt("coords=",coords);localStorage.setItem("coords",coords);}

if(nrp==9){var nuke=localStorage.nuke;g1=prompt("nuking>1 for group ",nuke);localStorage.setItem("nuke",g1);};
if(nrp==10){
    var main_villa=localStorage.main_villa;main_villa=prompt("main villa",main_villa);localStorage.setItem("main_villa",main_villa);
    var email=localStorage.email;email=prompt("email ",email);localStorage.setItem("email",email);
};
if(nrp==22){
//	var op=localStorage.getItem("op");if (op==0){localStorage.setItem("op","1");
//if (op==0){var opfake=localStorage.getItem('opfake');
    var offs=prompt("op fake",opfake);localStorage.setItem('opfake',offs);                     var opfake=localStorage.getItem('opnuke');
    var offs=prompt("op nuke",opfake);localStorage.setItem('opnuke',offs);
    var offse=localStorage.getItem('opoffset');
    var offs=prompt("offset",offse);localStorage.setItem('opoffset',offs);
    //vargroup=localStorage.getItem('group');var group1=prompt("fake //group",group);localStorage.setItem('group',group1);
    //}else localStorage.setItem("op","0");

//UI.InfoMessage('op data base land'+localStorage.getItem("op"));
};

if(nrp==100){var nl=prompt("link","");var tm=prompt("time in sec","");UI.InfoMessage(nl+'<br>send in '+tm+'<br> this will set mode 11 auto send',tm*1000);
    var goin=tm;
    var arrDate = (document.getElementById('serverDate').firstChild.nodeValue + ' ' + document.getElementById('serverTime').firstChild.nodeValue).match(/\d+/g);
    var x = new Date(arrDate[2], arrDate[1] - 1, arrDate[0], arrDate[3], arrDate[4], arrDate[5]);
    var y =(x.getTime())/1000;
    function count() {
        if(goin<5){localStorage.setItem("ball",10);}
        UI.InfoMessage('<FONT SIZE=+3 COLOR="BLUE"> Launch link</br></FONT><FONT SIZE=-1>'+ nl+'</FONT><FONT SIZE=+3 COLOR="BLUE"><br> in: '+ goin +'<br> </FONT><FONT SIZE=+1> if mode=0 this will set mode 11 auto send</FONT><br> ',1000);goin=goin-1;

        setTimeout(function () { count(); }, 1000);
    }count(goin);if (mode==0||mode==5){localStorage.setItem("mode","11");};
    setTimeout(function(){window.location.href=nl},tm*1000);}

if(nrp==101){localStorage.setItem("mode","1");var alw=localStorage.getItem('alw');var launchwindow=prompt("time and day",alw);localStorage.setItem('alw',launchwindow);
    var offse=localStorage.getItem('offse');var offs=prompt("offset   negative goes early / positive goes later",offse);localStorage.setItem('offse',offs);$.getScript("https://logboss.net/tw/99/timersendx.js");}

if(nrp==102){
    var tts=localStorage.tts;var tto=localStorage.tto;
    var n1=prompt("time to send plus offset",tts);localStorage.tts=n1;var n=RegExp(n1,'g');
    var n2=prompt("offset",tto);localStorage.tto=n2;
    var la=setInterval(landat,10);
    function landat(){
        UI.InfoMessage('sending at Arrival time of '+n1+' plus offset of '+n2+'ms',20);
        var c=n.test(document.getElementById("date_arrival").innerText);
        if(c){
            localStorage.setItem("ball",10);clearInterval(la);
            setTimeout(function(){document.forms[0].troop_confirm_go.click();},n2);
        }}}
if(nrp==103){$.getScript("https://logboss.net/tw/111/a_cancel_snipe.js");};
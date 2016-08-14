
$(document).ready(function(){
    var wrap=document.getElementById("wrap"),
        pic=document.getElementById("pic").getElementsByTagName("li"),
         list=document.getElementById("list").getElementsByTagName("li"),
        index= 0,
        timer=null;
    timer=setInterval(autoPlay,2000);
    wrap.onmouseover = function(){
        clearInterval(timer);

    }
    wrap.onmouseout = function () {
        timer=setInterval(autoPlay,2000);
    }
    for(var i=0;i<list.length;i++){
        list[i].index=i;
        list[i].onmouseover = function (){
            clearInterval(timer);
            changePic(this.index);
        };
    };
    function autoPlay(){
        if(++index>=pic.length)index=0;
        changePic(index);
    }
    function changePic(a){
        for(var i=0;i<pic.length;++i){
            pic[i].style.display="none";
            list[i].className="";
        }
        pic[a].style.display="block";
        list[a].className="on";

    }

       $("#right").mouseover(function(){
           $("#section_mid").animate({left:'-1030px'});
       });
       $("#left").mouseover(function(){
        $("#section_mid").animate({left:'0px'});
    });
//方法一
    var d = function(){
    var My;
    var You;
    function moveright(){
        $("#riman_ul").animate({left:'-=20px'},100);
    }
    function moveleft(){
        $("#riman_ul").animate({left:'+=20px'},100);
    }
    return {
        bindright: function(){
            My=setInterval(function () {
                var a=$("#riman_ul").position().left;
                if( parseInt(a)> -2200){
                    moveright()
                }
            },100);
        },
        bindleft: function(){
            You=setInterval(function () {
                var b=$("#riman_ul").position().left;
                if( parseInt(b)<-20){
                    moveleft()
                }
            },100);
        },
        cleanleft: function(){
            //alert('clean')
            clearInterval(You);
        },
        cleanright: function(){
            //alert('clean')
            clearInterval(My);
        }
    }
}()

    //方法二
//   var d={};
//    d.bind=function(){
//        My=setInterval(function (){move()},100);
//    }
//    d.clean=function(){
//        clearInterval(My);
//    }
//    function move(){
//        $("#riman_ul").animate({left:'-=20px'},100);
//    }

//var Mymar=setInterval(move,speed);
    $("#btn-left").mouseover(function(){
        //My=setInterval(function (){move()},100);
        d.bindleft()
    });
    $("#btn-left").mouseout(function(){
        //clearInterval(My);
        d.cleanleft()
    });
    $("#btn-right").mouseover(function(){
        //My=setInterval(function (){move()},100);
        d.bindright()
    });
   $("#btn-right").mouseout(function(){
       //clearInterval(My);
       d.cleanright()
   });

    //trigger_box.onmouseover = function(){
    //    console.log(11111)
    //    Mymar=setInterval(move,speed);
    //}
    $("#head2").click(function(){
        if($(".out").css("display")=="none"){
            $(".out").show();
            $("#head2").css({
                "height":"40px",
                "border-color":"#4D4A4B #4D4A4B  transparent #4D4A4B",
                "border-bottom":"2px solid #1e1e1e"

            });
            $(".sanjiao").css("border-color","transparent  transparent #cccccc transparent");
            e1=false;
            e2=false;

        }
        else{
           xiaoshi();
        }

    });
    function xiaoshi(){
        $(".out").hide();
        $("#head2").css({height:"30px",
            "border-color":"#4D4A4B",
            "border-bottom":"1px solid #4D4A4B"
        });
        $(".sanjiao").css("border-color","#cccccc transparent  transparent transparent");
    }

    //$(".out").mouseout(function(){
    //    $(".out").hide();
    //    $("#head2").css({height:"30px",
    //        "border-color":"#4D4A4B",
    //        "border-bottom":"1px solid #4D4A4B"
    //    });
    //    $(".sanjiao").css("border-color","#cccccc transparent  transparent transparent");
    //})


});

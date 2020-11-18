//  848
// ------------------------------- ARRAY CON I DATI -------------------------------

var year = ["2018", "2018", "2018", "2017", "2015", "2017", "2017", "2018"];
var title = ["BALLA COI SIOUX", "THE PLANUMBUS SYSTEM", "PITTURE INESPERTE", "WILLIAM EGGLESTON TRIBUTE", "VISUAL MUSEUM - VIMU", "TYPOTRIES", "RE-COVER", "420: MY WATCH IS BROKEN!"];
var order = ["1/8", "2/8", "3/8", "4/8", "5/8", "6/8", "7/8", "8/8"];
var src = ["images/bcs_main.png", "images/pl_main.png", "images/pi_main.png", "images/eggle_main.png", "images/vimu_main.png", "images/tt_main.png", "images/recover_main.png", "images/wb_main.png"];
var page = ["bcs.html","pln.html","pi.html","eggl.html","vimu.html","tt.html","rcvr.html","wtchb.html"];

// ------------------------------- BOTTONI SINISTRA -------------------------------

function backtohome(x)
{
  $(document).ready(function(){
    if(x=="desktop")
    {$("#objectone").load("scroll.html");}
    else if(x=="mobile")
    {$("#objectone-mob").load("menu.html");}
  });
}

function aprichiudimenu()
{$("#objectone").load("menu.html");}

function aprichiudiabout(x)
{
  $(document).ready(function(){
    if(x=="desktop")
    {$("#objectone").load("about.html");}
    else if(x=="mobile")
    {$("#objectone-mob").load("about.html");}
  });
}

// ------------------------------- SHOWROOM -------------------------------

function display_work ()
{$("#objectone").load(page[count]);}

function display_work_bymenu (pagename)
{
  $(document).ready(function(){
    $("#objectone").load(pagename);
    $("#objectone-mob").load(pagename);
  });
}


// ------------------------------- SCROLL -------------------------------

function scroll_start()
{$("#objectone").load("slider.html");}

var count=0;
var ft=0;
function slider_scroll()
{
  var dir= event.wheelDelta;
  document.getElementById("sliderscroll").removeEventListener("wheel", slider_scroll);
  if(ft==1)
  {
  if(dir<=0)
  {
    $(document).ready(function()
    {
      if (count<7)
        {
          clipanimation("#bannerimage",1);
          count++;
          $("#testo1").text(year[count]);
          $("#testo2").text(title[count]);
          $("#testo3").text(order[count]);
        }});}

  else if(dir>0)
  {
    $(document).ready(function()
    {
      if (count>0)
      {
        clipanimation("#bannerimage",-1);
        count--;
        $("#testo1").text(year[count]);
        $("#testo2").text(title[count]);
        $("#testo3").text(order[count]);
}});}
}
setTimeout(reactivatescroll,1500);
ft=1;}

function clipanimation (x,y)
{
  var tl = new TimelineMax();
  tl.to(x,0, { clip:"rect(0px,1400px,680px,0px)" })
    .to(x,0.8, { clip:"rect(210px,1400px,210px,0px)" })
    .set(x,{attr:{src:(src[count+y])}})
    .to(x,0.1, { clip:"rect(210px,1400px,210px,0px)" })
    .to(x,0.7, { clip:"rect(0px,1400px,680px,0px)" });
}



// ------------------------------- RIATTIVARE LISTENER -------------------------------

function reactivatescroll()
{document.getElementById("sliderscroll").addEventListener("wheel", slider_scroll);}

function reactivatekey()
{document.getElementById("stopper").addEventListener("keydown", keycontrols);}

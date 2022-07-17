document.addEventListener('scroll', timeline);

function timeline(){
	var threshold_position = window.scrollY + window.innerHeight * 2/3;
	//compare scrolltop with scrolltop on each timeline event
	var timeline_events = document.querySelectorAll('.timeline li');
	for(i in timeline_events){
		if(timeline_events[i].offsetTop < threshold_position){
			timeline_events[i].classList.add('visible');
		} else {
			timeline_events[i].classList.remove('visible');
		}
	}
}
timeline();







<script>

/*
Count up from any date script-
By JavaScript Kit (www.javascriptkit.com)
Over 200+ free scripts here!
*/

var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")

function countup(yr,m,d){
var today=new Date()
var todayy=today.getYear()
if (todayy < 1000)
todayy+=1900
var todaym=today.getMonth()
var todayd=today.getDate()
var todaystring=montharray[todaym]+" "+todayd+", "+todayy
var paststring=montharray[m-1]+" "+d+", "+yr
var difference=(Math.round((Date.parse(todaystring)-Date.parse(paststring))/(24*60*60*1000))*1)
difference+=" days"
document.write("<p id='clock'>It\'s been "+difference+" since the launch of JavaScript Kit!</p>")
}
//enter the count up date using the format year/month/day
countup(1922,12,05)
</script>

<p align="center"><font face="arial" size="-2" margin'10%'>This free script provided by</font><br>
<font face="arial, helvetica" size="-2"><a href="http://javascriptkit.com">JavaScript
Kit</a></font></p>






// SMOOTH SCROLLING SECTIONS WITH MENU
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});





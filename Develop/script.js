// $("button").on("click", function(){
//     var timeID=$(this).attr("time");
//     var usertask=$(timeID).val()
//     localStorage.setItem(timeID, usertask);
//   })
//   var nineAM = localStorage.getItem("#9am");
//   if(nineAM){
//     $("#9am").val(nineAM);
//   }

//   for(var i = 9; i<17;i++){
//     //Get the current hour

//     var amPm
//     if(i>=12){
//       amPm="pm";
//     }
//     var hour=i;
//     if(i>12){
//       hour -=12;
//     }

//     var targetID="#"+hour+amPm;

//     var className="future";


//     // $(targetId).addClass(className);


//     //
//     //if currentTime > i => class future
//     //else if currentTime < i class past
//     //else class curent

var innerHtml = `
<div class="hour col-1">
<p>9am</p>
</div>
<textarea type="text" id="9am" class="col-10">
</textarea>
<div class ="col-1">
<button class= "saveBtn" time="#9am"> save</button>`;

function createPlanner() {
    var minTime = 9
    var maxTime = 17
    

    for(i=minTime;i<maxTime;i++){
    var row = $('<div></div>');
    row.attr('class','row')
    row.html(innerHtml);

    row.at
    
    $('.container').append(row);
     }

}

createPlanner();
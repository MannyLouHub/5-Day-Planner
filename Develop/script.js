$("button").on("click", function(){
    var timeID=$(this).attr("time");
    var usertask=$(timeID).val()
    localStorage.setItem(timeID, usertask);
  })
  var nineAM = localStorage.getItem("#9am");
  if(nineAM){
    $("#9am").val(nineAM);
  }

  for(var i = 9; i<17;i++){
    //Get the current hour

    var amPm
    if(i>=12){
      amPm="pm";
    }
    var hour=i;
    if(i>12){
      hour -=12;
    }

    var targetID="#"+hour+amPm;

    var className="future";


    // $(targetId).addClass(className);
    

    //
    //if currentTime > i => class future
    //else if currentTime < i class past
    //else class curent
  }
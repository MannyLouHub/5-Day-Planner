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

// var innerHtml = `
// <div class="hour col-1">
// <p>9am</p>
// </div>
// <textarea type="text" id="9am" class="col-10">
// </textarea>
// <div class ="col-1">
// <button class= "saveBtn" time="#9am"> save</button>`;

function createPlanner() {
    var minTime = 20
    var maxTime = 24

    // loop to create rows
    for (i = minTime; i <= maxTime; i++) {
        var row = $('<div></div>');
        row.attr('class', 'row')
        var time = moment(i, 'H');
        var timeFormat = time.format('hA')

        // time element for each row
        var hour = $(`<div class="hour col-1">${timeFormat}<div>`)
        row.append(hour);

        //text element for each row
        var text = $(`<textarea type="text" id="${timeFormat}-text" class="col-10 description"></textarea>`)
        row.append(text);
        //Color Changer for Passage of time
        var currentTime = parseInt(moment().format('H'))
        if(currentTime > i){
            text.addClass("past")
        }
        else if(currentTime < i){
            text.addClass("future")
        }
        else {
            text.addClass("present") 
        }
        //saving information to localstorage
        
        //
  
        

        //button element for each row
        var button = $(`<button class="saveBtn col-1" id="${timeFormat}"> Save Button </button>`)
        row.append(button);
        
        $('.container').append(row);

        
    }
}

// function thePassageOfTime(){
//     var currentTime = +moment().format('H');
//     if(currentTime)
    

// start of program.
createPlanner();
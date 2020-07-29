// $("button").on("click", function(){
//     let timeID=$(this).attr("time");
//     let usertask=$(timeID).val()
//     localStorage.setItem(timeID, usertask);
//   })
//   let nineAM = localStorage.getItem("#9am");
//   if(nineAM){
//     $("#9am").val(nineAM);
//   }

//   for(let i = 9; i<17;i++){
//     //Get the current hour

//     let amPm
//     if(i>=12){
//       amPm="pm";
//     }
//     let hour=i;
//     if(i>12){
//       hour -=12;
//     }

//     let targetID="#"+hour+amPm;

//     let className="future";


//     // $(targetId).addClass(className);


//     //
//     //if currentTime > i => class future
//     //else if currentTime < i class past
//     //else class curent

// let innerHtml = `
// <div class="hour col-1">
// <p>9am</p>
// </div>
// <textarea type="text" id="9am" class="col-10">
// </textarea>
// <div class ="col-1">
// <button class= "saveBtn" time="#9am"> save</button>`;

function createPlanner() {
    const minTime = 8
    const maxTime = 24

    // loop to create rows
    for (i = minTime; i <= maxTime; i++) {
        let row = $('<div></div>');
        row.attr('class', 'row')
        let time = moment(i, 'H');
        let timeFormat = time.format('hA')

        // time element for each row
        let hour = $(`<div class="hour col-1">${timeFormat}<div>`)
        row.append(hour);

        //text element for each row
        let text = $(`<textarea type="text" id="${timeFormat}-text" class="col-10 description"></textarea>`)
        text.val(localStorage.getItem(timeFormat))
        row.append(text);
        //Color Changer for Passage of time
        let currentTime = parseInt(moment().format('H'))
        if(currentTime > i){
            text.addClass("past")
        }
        else if(currentTime < i){
            text.addClass("future")
        }
        else {
            text.addClass("present") 
        }
        //button element for each row
        let button = $(`<button class="saveBtn col-1" id="${timeFormat}"> Save Button </button>`)
        row.append(button);

        //saving information to localstorage
                
        $(button).on('click', function(event){
            let textValue = text.val();
            localStorage.setItem(timeFormat, textValue)
        })

        
        $('.container').append(row);

        
    }
}

// function thePassageOfTime(){
//     let currentTime = +moment().format('H');
//     if(currentTime)
    

// start of program.
createPlanner();

function createPlanner() {
    const minTime = 9
    const maxTime = 17

    // loop to create rows
    for (i = minTime; i <= maxTime; i++) {
        let row = $('<div></div>');
        row.attr('class', 'row')
        let time = moment(i, 'H');
        let timeFormat = time.format('hA')

        // time element for each row
        let hour = $(`<div class="hour col-1 d-flex justify-content-center align-items-center">${timeFormat}<div>`)
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
        let button = $(`<button class="saveBtn col-1 fas fa-save" id="${timeFormat}"> Save</button>`)
        row.append(button);

        //saving information to localstorage
                
        $(button).on('click', function(event){
            let textValue = text.val();
            localStorage.setItem(timeFormat, textValue)
        })

        
        $('.container').append(row);

        
    }
}


// start of program.
$('#currentDay').text(moment().format('dddd, MMMM Do'));
createPlanner();
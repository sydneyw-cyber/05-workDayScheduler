// Selectors
var time = $('#currentDay')
var hour = $('.hour')
var saveBtn = $('.saveBtn')
var saveBtn0 = $('.saveBtn0')
var saveBtn1 = $('#saveBtn1')
var saveBtn2 = $('#saveBtn2')
var saveBtn3 = $('#saveBtn3')
var saveBtn4 = $('#saveBtn4')
var saveBtn5 = $('#saveBtn5')
var saveBtn6 = $('#saveBtn6')
var saveBtn7 = $('#saveBtn7')
var saveBtn8 = $('#saveBtn8')
var saveBtn9 = $('#saveBtn9')
var saveBtn10 = $('#saveBtn10')


// When page is refeshed the calue of the input wont change
$(saveBtn0).siblings('input').val(localStorage.getItem('event-input0'))
$(saveBtn1).siblings('input').val(localStorage.getItem('event-input1'))
$(saveBtn2).siblings('input').val(localStorage.getItem('event-input2'))
$(saveBtn3).siblings('input').val(localStorage.getItem('event-input3'))
$(saveBtn4).siblings('input').val(localStorage.getItem('event-input4'))
$(saveBtn5).siblings('input').val(localStorage.getItem('event-input5'))
$(saveBtn6).siblings('input').val(localStorage.getItem('event-input6'))
$(saveBtn7).siblings('input').val(localStorage.getItem('event-input7'))
$(saveBtn8).siblings('input').val(localStorage.getItem('event-input8'))
$(saveBtn9).siblings('input').val(localStorage.getItem('event-input9'))
$(saveBtn10).siblings('input').val(localStorage.getItem('event-input10'))


// sets current date
var todayDate = moment().format('dddd MMM Do, YYYY')
$(time).text(todayDate)

//Color codes based on past, present, and future events
var currentHour = moment().format('ha')
var eventHour = ''
for (var i=0; i < hour.length; i++) {
    eventHour = hour[i].textContent
    if (eventHour === currentHour) {
        $(hour[i]).parent().addClass('present')
        $(hour[i]).closest('input').addClass('present')
    } else if( (eventHour[0,1] < currentHour[0,1]) && (eventHour.substring(eventHour.length-2) === currentHour.substring(currentHour.length-2)) ) {
        $(hour[i]).parent('li').addClass('future')
    } else if((eventHour.substring(eventHour.length-2) === 'pm') && (currentHour.substring(currentHour.length-2) === 'am')) {
        $(hour[i]).parent('li').addClass('future')
    } else {
        $(hour[i]).parent('li').addClass('past')
        $(hour[i]).siblings('span').addClass('past')
        console.log(eventHour[0,1])

    }
}

// adding input to calendar once the button is clicked

$(saveBtn0).on('click', function(event) {
    var eventInput = $(event.target).siblings('input').val()
    
    localStorage.setItem('event-input0', eventInput)
    localStorage.getItem('event-input0')
    $(event.target).siblings('input').text(eventInput)
    
})

$(saveBtn1).on('click', function(event) {
    var eventInput = $(event.target).siblings('input').val()
    
    localStorage.setItem('event-input1', eventInput)
    localStorage.getItem('event-input1')
    $(event.target).siblings('input').text(eventInput)
    
})

$(saveBtn2).on('click', function(event) {
    var eventInput = $(event.target).siblings('input').val()
    
    localStorage.setItem('event-input2', eventInput)
    localStorage.getItem('event-input2')
    $(event.target).siblings('input').text(eventInput)
    
})

$(saveBtn3).on('click', function(event) {
    var eventInput = $(event.target).siblings('input').val()
    localStorage.setItem('event-input3', eventInput)
    localStorage.getItem('event-input3')
    $(event.target).siblings('input').text(eventInput)
    
})

$(saveBtn4).on('click', function(event) {
    var eventInput = $(event.target).siblings('input').val()
    localStorage.setItem('event-input4', eventInput)
    localStorage.getItem('event-input4')
    $(event.target).siblings('input').text(eventInput)
    
})

$(saveBtn5).on('click', function(event) {
    var eventInput = $(event.target).siblings('input').val()
    localStorage.setItem('event-input5', eventInput)
    localStorage.getItem('event-input5')
    $(event.target).siblings('input').text(eventInput)
    
})

$(saveBtn6).on('click', function(event) {
    var eventInput = $(event.target).siblings('input').val()
    localStorage.setItem('event-input6', eventInput)
    localStorage.getItem('event-input6')
    $(event.target).siblings('input').text(eventInput)
    
})

$(saveBtn7).on('click', function(event) {
    var eventInput = $(event.target).siblings('input').val()
    localStorage.setItem('event-input7', eventInput)
    localStorage.getItem('event-input7')
    $(event.target).siblings('input').text(eventInput)

})

$(saveBtn8).on('click', function(event) {
    var eventInput = $(event.target).siblings('input').val()
    localStorage.setItem('event-input8', eventInput)
    localStorage.getItem('event-input8')
    $(event.target).siblings('input').text(eventInput)

})

$(saveBtn9).on('click', function(event) {
    var eventInput = $(event.target).siblings('input').val()
    localStorage.setItem('event-input9', eventInput)
    localStorage.getItem('event-input9')
    $(event.target).siblings('input').text(eventInput)

})

$(saveBtn10).on('click', function(event) {
    var eventInput = $(event.target).siblings('input').val()
    localStorage.setItem('event-input10', eventInput)
    localStorage.getItem('event-input10')
    $(event.target).siblings('input').text(eventInput)

})


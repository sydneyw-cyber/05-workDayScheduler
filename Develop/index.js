// Selectors
var time = $('#currentDay')
var hour = $('.hour')
var saveBtn = $('.saveBtn')
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
$(saveBtn1).siblings('input').val(localStorage.getItem('event-value1'))
$(saveBtn2).siblings('input').val(localStorage.getItem('event-value2'))
$(saveBtn3).siblings('input').val(localStorage.getItem('event-value3'))
$(saveBtn4).siblings('input').val(localStorage.getItem('event-value4'))
$(saveBtn5).siblings('input').val(localStorage.getItem('event-value5'))
$(saveBtn6).siblings('input').val(localStorage.getItem('event-value6'))
$(saveBtn7).siblings('input').val(localStorage.getItem('event-value7'))
$(saveBtn8).siblings('input').val(localStorage.getItem('event-value8'))
$(saveBtn9).siblings('input').val(localStorage.getItem('event-value9'))
$(saveBtn10).siblings('input').val(localStorage.getItem('event-value10'))


// sets current date
var today = moment().format('dddd MMM Do, YYYY')
$(time).text(today)

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

$(saveBtn1).on('click', function(event) {
    var eventValue = $(event.target).siblings('input').val()
    
    localStorage.setItem('event-value1', eventValue)
    localStorage.getItem('event-value1')
    $(event.target).siblings('input').text(eventValue)
    
})

$(saveBtn2).on('click', function(event) {
    var eventValue = $(event.target).siblings('input').val()
    
    localStorage.setItem('event-value2', eventValue)
    localStorage.getItem('event-value2')
    $(event.target).siblings('input').text(eventValue)
    
})

$(saveBtn3).on('click', function(event) {
    var eventValue = $(event.target).siblings('input').val()
    localStorage.setItem('event-value3', eventValue)
    localStorage.getItem('event-value3')
    $(event.target).siblings('input').text(eventValue)
    
})

$(saveBtn4).on('click', function(event) {
    var eventValue = $(event.target).siblings('input').val()
    localStorage.setItem('event-value4', eventValue)
    localStorage.getItem('event-value4')
    $(event.target).siblings('input').text(eventValue)
    
})

$(saveBtn5).on('click', function(event) {
    var eventValue = $(event.target).siblings('input').val()
    localStorage.setItem('event-value5', eventValue)
    localStorage.getItem('event-value5')
    $(event.target).siblings('input').text(eventValue)
    
})

$(saveBtn6).on('click', function(event) {
    var eventValue = $(event.target).siblings('input').val()
    localStorage.setItem('event-value6', eventValue)
    localStorage.getItem('event-value6')
    $(event.target).siblings('input').text(eventValue)
    
})

$(saveBtn7).on('click', function(event) {
    var eventValue = $(event.target).siblings('input').val()
    localStorage.setItem('event-value7', eventValue)
    localStorage.getItem('event-value7')
    $(event.target).siblings('input').text(eventValue)

})

$(saveBtn8).on('click', function(event) {
    var eventValue = $(event.target).siblings('input').val()
    localStorage.setItem('event-value8', eventValue)
    localStorage.getItem('event-value8')
    $(event.target).siblings('input').text(eventValue)

})

$(saveBtn9).on('click', function(event) {
    var eventValue = $(event.target).siblings('input').val()
    localStorage.setItem('event-value9', eventValue)
    localStorage.getItem('event-value9')
    $(event.target).siblings('input').text(eventValue)

})

$(saveBtn10).on('click', function(event) {
    var eventValue = $(event.target).siblings('input').val()
    localStorage.setItem('event-value10', eventValue)
    localStorage.getItem('event-value10')
    $(event.target).siblings('input').text(eventValue)

})


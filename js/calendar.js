$(document).ready(function() { 
	$('#calendar').fullCalendar({ 
		header: {
		  //left: 'prev,next today',
		  center:'',
		  right: 'prev,title,next',
		  left: ''
		  //right: 'month,agendaWeek,agendaDay'
		},
		defaultDate: '2017-01-01',
		defaultView: 'month',
		editable: true,
		events: [
			{
				title  : '1',
				start  : '2017-01-01'
			},
			{
				title  : '2',
				start  : '2017-01-05',
				end    : '2017-01-07'
			},
			{
				title  : '3',
				start  : '2017-01-09',
				//start  : '2017-01-09T12:30:00',
				//allDay : false // will make the time show
			}
		]
	}); 
	
	$('#search-type-keyword').change(function(){
		$('label[for="search-type-keyword"], label[for="search-type-topic"], label[for="search-type-resources"]').removeClass('active');
		if ($(this).is(':checked')) $('label[for="search-type-keyword"]').addClass('active');
	});
	$('#search-type-topic').change(function(){
		$('label[for="search-type-keyword"], label[for="search-type-topic"], label[for="search-type-resources"]').removeClass('active');
		if ($(this).is(':checked')) $('label[for="search-type-topic"]').addClass('active');
	});
	$('#search-type-resources').change(function(){
		$('label[for="search-type-keyword"], label[for="search-type-topic"], label[for="search-type-resources"]').removeClass('active');
		if ($(this).is(':checked')) $('label[for="search-type-resources"]').addClass('active');
	});
	$('#search-type-keyword').trigger('change');
	  
 });
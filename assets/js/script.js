$(function() {

	$('.cards').on('click', '.card', function() {
			$(this).toggleClass('card--open');
		})

	$('.cards').on('click', '.card__like', function (e){
			e.stopPropagation();
			e.preventDefault();
			$(this).toggleClass('card__like--red');

		})

	$('.cards').on('click','.card__follow-btn', function (e){
			e.stopPropagation();
			$(this).toggleClass('card__follow-btn--following');
		})


	$('#image').on('change', function(e) {
		var src = 'assets/images/squared/' + $(this).val()
		$('.create__image').children()
						   .attr('src', src);
	})

	$('#author').on('change', function(e) {
		var src = 'assets/images/profiles/' + $(this).val()
		$('.create__profile').children()
						   .attr('src', src);
	})


	$('.create__form').on('submit', function(e){
		e.preventDefault();

		var titulo = $('#name').val()
		var paisaje = $('.create__img').val()
		var personaje = $('#author').val()
		var background = $('#image').val()
		var seguidores = $('#followers').val()
		var likes = $('#likes').val()
		var siguiendo = $('#following').val()
		var nombre = $('#author').children(':selected').text()

		var html = '<li class="card">' +
			'<div class="card__highlight">' +
			'<img class="card__img" src="./assets/images/squared/'+ background +'" alt="">' +
			'</div>' +
			'<div class="card__content">' +
			'<div class="card__profile-container">' +
			'<img class="card__profile" src="./assets/images/profiles/'+ personaje +'" alt="">' +
			'</div>' +
			'<a class="card__like" href="#">' +
			'<i class="fas fa-heart"></i>' +
			'</a>' +
			'<div class="card__title">' +
			'<h2>'+titulo+'</h2>' +
			'</div>' +
			'<div class="card__author">' +
			'<h3 class="card__author-name">'+nombre+'</h3>' +
			'</div>' +
			'<div class="card__hidden">' +
			'<ul class="social">' +
			'<li class="social__element">' +
			'<div class="social__number">'+seguidores+'</div>' +
			'<div class="social__text">Followers</div>' +
			'</li>' +
			'<li class="social__element">' +
			'<div class="social__number">'+likes+'K</div>' +
			'<div class="social__text">Likes</div>' +
			'</li>' +
			'<li class="social__element">' +
			'<div class="social__number">'+siguiendo+'</div>' +
			'<div class="social__text">Following</div>' +
			'</li>' +
			'</ul>' +
			'<div class="card__follow">' +
			'<button class="card__follow-btn">Seguir</button>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</li>'

		$('.cards').append(html)

		var titulo = $('#name').val('')
		var paisaje = $('.create__img').val('')
		var personaje = $('#author').val('uk.png')
		var background = $('#image').val('uk.png')
		var seguidores = $('#followers').val('')
		var likes = $('#likes').val('')
		var siguiendo = $('#following').val('')
		var nombre = $('#author').children(':selected').text('');

		$('.create__image').children('img')
						 .attr('src', 'assets/images/squared/uk.png');
		$('.create__profile').children('img')
							.attr('src', 'assets/images/squared/uk.png');

	});

	

});


/* -- ESTO ES PURA BASURA --

		$('.cards').append(
			'<li class=card>' 
			+ '<div class="card__highlight">'
			+ '<img class="card__img" src="" alt="">'
			+ '</div>'
			+ surname
			+ " "
			+ '<a href="#" class=remove_name>'
			+ 'Borrar'
			+ '</a>'
			+ '</span>'
			+ '</li>')
	});








	
	$('.add_name').on("click", function(){
		name = prompt("Escribe tu nombre", "Elva");
		surname = prompt("Escribe tu apellido", "Sura");
		$('ul').append(
			'<li>' 
			+ '<span>'
			+ name
			+ " "
			+ surname
			+ " "
			+ '<a href="#" class=remove_name>'
			+ 'Borrar'
			+ '</a>'
			+ '</span>'
			+ '</li>')
	});




	$('#image').on('change', function(e) {
		var src = 'assets/images/squared/' + $(this).val()
		alert(src)
	})

*/
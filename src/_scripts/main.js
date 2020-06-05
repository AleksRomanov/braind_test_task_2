'use strict';

(function() {
	function addToCartHanlder() {
		// var $btns = $('[data-add-to-cart]');
		var $btns = document.querySelectorAll('[data-add-to-cart]');

		// $btns.on('click', function(e){
		// 	e.preventDefault();
		// 	// console.log(e.currentTarget);
		//
		// 	$.ajax({
		// 		url: './fakedata/cartResponse.json',
		// 		type: 'GET',
		// 		dataType: 'json',
		// 		success: (res) => {
		// 			if (res.success) {
		// 				e.target
		// 					.text('Добавлено')
		// 					.removeClass('btn-primary')
		// 					.addClass('btn-success');
		//
		// 				$('[data-cart-count]').text(res.count);
		// 			}
		// 		}
		// 	});
		// });
		//
		// $btns.forEach(function(item, i, arr) {
		// 	alert( i + ": " + item + " (массив:" + arr + ")" );
		// });

		$btns.forEach(function (btn) {
			btn.addEventListener('click', function (e) {
				e.preventDefault();
				// console.log(e.currentTarget);

				$.ajax({
					url: './fakedata/cartResponse.json',
					type: 'GET',
					dataType: 'json',
					success: (res) => {
						if (res.success) {
							btn.classList.remove('btn-primary');
							btn.text = 'Добавлено';
							btn.classList.add('btn-success');

							// btn.classList.removeClass('btn-primary');
								// .text = 'Добавлено'
								// .classList.removeClass	('btn-primary')
								// .classList.addClass('btn-success');
							var cartCount = document.querySelector('[data-cart-count]');

							// console.log(cartCount.innerHTML);

							cartCount.innerHTML = parseInt(cartCount.innerHTML) + parseInt(res.count);

							// $('[data-cart-count]').text() + res.count;
						}
					}
				});
			})

		})

	}

	function main() {
		addToCartHanlder();
	}

	main();
}());

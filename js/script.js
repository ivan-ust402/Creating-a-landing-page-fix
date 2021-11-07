var btn = document.getElementById('btn');
var btnButton = document.getElementById('btn-button');
var counterVal = 0;


function myReadData() {
    var name = document.getElementById('form').elements[0].value;
    var email = document.getElementById('form').elements[1].value;
    var phone = document.getElementById('form').elements[2].value;
    var answer = document.getElementById('form').elements[3].value;

    if (name == "" || email == "" || phone == "" || answer == "") {
        alert ("Вы не до конца ввели данные в форму. Пожалуйста, заполните все поля!")
    } else {
        alert(`Ваш E-mail: ${email}, телефон: ${phone}. Спасибо, ${name}! Смело двигайтесь к вашей мечте! Приятного полета в ${answer}!`);
    }
}

btnButton.onclick = function () {

    myReadData();
}

btn.onclick = function () {
    ++counterVal;
    if (counterVal == 1) {
        document.querySelector(".intro").innerHTML = "Вы можете создавать такие же лэндинги, пройдя курс от команды WayUp";
        var button = document.querySelector('.btn')
        button.classList.add('green');
        document.getElementById('btn').innerHTML = "На сайт WAYUP";
    }
    if (counterVal == 2) {
        document.getElementById('btn').setAttribute("href","https://wayup.in/")
    }
}

//Element animation
$(function() {
	$(window).scroll(function() {
		$('#waitings .section-title').each(function() {
			var imagePos = $(this).offset().top

			var topOfWindow = $(window).scrollTop()
			if (imagePos < topOfWindow + 600) {  //по дефолту было 650
				$(this).addClass('animate__fadeInDown')
			}
		})
	})

    $(window).scroll(function() {
		$('.item-free').each(function() {
			var imagePos = $(this).offset().top

			var topOfWindow = $(window).scrollTop()
			if (imagePos < topOfWindow + 650) {  //по дефолту было 650
				$(this).addClass('animate__fadeInLeft')
			}
		})
	})

    $(window).scroll(function() {
		$('.item-trip').each(function() {
			var imagePos = $(this).offset().top

			var topOfWindow = $(window).scrollTop()
			if (imagePos < topOfWindow + 650) {  //по дефолту было 650
				$(this).addClass('animate__fadeInUp')
			}
		})
	})

    $(window).scroll(function() {
		$('.item-value').each(function() {
			var imagePos = $(this).offset().top

			var topOfWindow = $(window).scrollTop()
			if (imagePos < topOfWindow + 650) {  //по дефолту было 650
				$(this).addClass('animate__fadeInRight')
			}
		})
	})
    $(window).scroll(function() {
		$('#ticket .section-title').each(function() {
			var imagePos = $(this).offset().top

			var topOfWindow = $(window).scrollTop()
			if (imagePos < topOfWindow + 700) {  //по дефолту было 650
				$(this).addClass('animate__fadeInDown')
			}
		})
	})

    $(window).scroll(function() {
		$('.form').each(function() {
			var imagePos = $(this).offset().top

			var topOfWindow = $(window).scrollTop()
			if (imagePos < topOfWindow + 750) {  //по дефолту было 650
				$(this).addClass('animate__fadeInUp')
			}
		})
	})
})
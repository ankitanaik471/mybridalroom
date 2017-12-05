$(document).ready(function(){
	var b_room_collection = [
		{
			'id': 'rituals',
			'title': 'Rituals and Traditions of Marathi Wedding',
			'content': 'Maharashtrian weddings are the simple yet vibrant type of weddings. They are filled with lots of rituals and traditions which add the spice to the wedding ceremony. They are mostly conducted during the daytime. Some have the evening Muhurta too(Goraj Muhurta). The Rituals during the Maharashtrian wedding are so emotionally touched for both bride as well as groom. Each ritual has some or other meaning behind it. Each one is beautiful in their own way. Here are some of the rituals and traditions which Maharashtrian’s follow during the wedding ceremony: eg. Sakharpuda, Kelvan, Halad Chadavne, Seeman Puja, Antarpaat, Kanyadan, Mangalsutrabandhan, Vivah Hom, Saptapadi, Karmasampati, Varat, Grihapravesh',
			'img_src': 'images/s1.jpg'
		},
		{
			'id': 'hairstyles',
			'title': 'The Perfect Hairstyles for Marathi Brides',
			'content': 'Maharashtrians usually prefer simple weddings and so the bride with simple and sober attire. As we all know, Marathi bride mostly prefers to wear a nauvari saree with some beautiful hairstyle (usually a bun) decorated with Veni Phool, Mundavlya or floral pins etc. at her wedding. Hairstyle plays a very important role in the bridal attire. It is necessary to consider many things when doing the hairstyle for the bride. Actually, the Marathi bridal hairstyles are not that different from other brides. They usually tend to be similar, just the main hairstyle which almost every Marathi bride who wears a nauvari prefers is the simple bun with Veni Phool or gajra around it joined with the braid or curls etc. I have listed few hairstyles below. I hope that would help you choose your hairstyle at your wedding.',
			'img_src': 'images/s2.jpg'
		},
		{
			'id': 'look',
			'title': 'A perfect Maharashtrian Bridal Look',
			'content': 'The Perfect Maharashtrian bride, this words itself brings a beautiful marathmoli girl image in front of our eyes, wearing a wonderful nauvari saree with hair tied in a bun and enhanced with pearl ornaments and gajra. The saree, generally a Paithani or plain saree with broad golden kath, comes in various shades of yellow, leaf green etc. Recently the brides prefer wearing nauvari at “varmala” ritual. It’s said that the maternal uncle(Mama) of the bride brings her to the place, where the mangalashtakas are recited. We all know that most of the people attending the wedding have their eyes on bride, her saree, jewelry, etc. You too beleive the same right.',
			'img_src': 'images/s3.jpg'
		},
		{
			'id': 'sarees',
			'title': 'Types of Bridal Sarees / Lehengas',
			'content': 'Bridal attire(Clothing) plays a very important role in the wedding, especially all the bride’s are eager to wear something beautiful and unique on their most memorable day. I know there is a lot of confusion when selecting the perfect outfit for your wedding. Since there are so many varieties of saree nowadays, it’s difficult to choose few among them. Recently the trend for Lehenga has become famous. Today, most of the bride’s dream of wearing the beautiful, sober and fabulous lehenga at their wedding reception. Now here I am talking about the Maharashtrian bridal wear, then the first thing comes to my mind is Nauvari saree. isn’t it? Nauvari saree is just the perfect attire for Varmala and Saath Phere ritual. Other than nauvari, there are Paithani, Kanjivaram etc which can be worn at the wedding. Lehenga is especially worn at the wedding reception in the Maharashtrian wedding ceremony. I have listed few of them below, kindly check if anything is of your type…',
			'img_src': 'images/s6.jpg'
		},
		{
			'id': 'nauvari-sarees',
			'title': 'Types of Nauvari Saree for Maharashtrian Brides',
			'content': 'The nauvari saree is also called as “Kashta Sari” and is worn by the bride at the wedding. There are 4 types of Nauvari Saree like Marathi style, Brahmani Sari, Peshwai Sari etc.  Nauvari saree can be of various materials examples like cotton, silk, glossy silk and so on. Today’s drifting wear of Nauvari is wearing it with 3/4 sleeves blouse. For the most part, on a wedding, the bride wears yellow shading nauvari saree which turns into the best customary clothing.',
			'img_src': 'images/s7.jpg'
		},
		{
			'id': 'mangalsutra',
			'title': 'Types of Mangalsutra for Maharashtrian Brides',
			'content': 'Mangalasutra truly signifies “an auspicious thread” which is tied around the bride’s neck. It is normally an ornament with black beads hung from a black or gold chain. sometimes red, orange beads are additionally added to the mangal sutra, depending upon various communities. It is a symbol of marriage worn by brides. The Groom ties the Managalsutra around the bride’s neck.',
			'img_src': 'images/s4.jpg'
		}
	]
	var ClassName = {
		open : 'model-open'
	}
	
	// Open Modal
	$('.more_button').on('click', function(){		
		var single_collection = $(this).parent('div').parents('div').parents('div').parents('div').attr('id');
		for (var i = 0; i < b_room_collection.length; i++) {   			
   			if (single_collection == b_room_collection[i].id) {
   				console.log(b_room_collection[i].id);   				
   				console.log(b_room_collection[i].title);   
   				$('.modal-dialog-box .title').text(b_room_collection[i].title);				
   				$('.modal-dialog-box .content').text(b_room_collection[i].content);	
   				$('.modal-dialog-box .main-img').attr('src', b_room_collection[i].img_src);   				
   			}
   		}
   		$('.modal-dialog-box').css('display', 'block');
   		$(document.body).addClass(ClassName.open);
	});

	// Close Modal
	$('#overlay, #close').on('click', function(e){
		e.preventDefault();
		$(document.body).removeClass(ClassName.open);
		$('.modal-dialog-box').css('display', 'none');		
	}).children().click(function(){		
        return false;
	});

	//background audio 
	document.getElementById("my_audio").play();
});
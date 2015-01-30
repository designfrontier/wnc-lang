var translationDictionary = {
		'Hello': {
			es: 'Hola'
			, du: 'Guten tag'
			, ja: '今日は'
		}
		, 'Welcome to class': {
			es: 'Bienvenidos a la clase'
			, du: 'Willkommen in der Klasse'
			, ja: 'クラスへの歓迎'
		}
	};
	
module.exports = { 
	translate: function (string, language) {
		return translationDictionary[string][language] || string;
	}
}
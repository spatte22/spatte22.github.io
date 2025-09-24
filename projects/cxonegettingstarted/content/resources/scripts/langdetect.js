var autoDetectCookieName = 'icHelpLngIgnoreAutoDetect';

var supportedLanguages = ["en", "fr", "de", "es", "pt-br", "fr-ca", "ja", "ko", "zh-cn", "zh-hk"];

function parseBool(obj) {
	if (obj === null || typeof obj === 'undefined') {
		return false;
	}

	if (typeof obj === 'boolean') {
		return obj;
	}

	if (typeof obj === 'string') {
		return (/^true$/i).test(obj);
	}

	if (typeof obj === 'number') {
		return obj > 0;
	}
}

function overrideLangDetect() {
	setCookie(autoDetectCookieName, true, null, null, 86400);
	return true;
}

function getValueFromCookie(key) {
	var cookie = null;
	var cookies = document.cookie.split(';');
	var i = null;
	var value = null;

	key = key + '=';

	for (i = cookies.length - 1; i >= 0; i--) {
		cookie = cookies[i].trim();

		if (cookie.indexOf(key) === 0) {
			value = cookie.replace(key, '');
			break;
		}
	}
	return value;
}

function setCookie(name, value, path, domain, seconds) {
	var cookie = name + '=' + encodeURIComponent(JSON.stringify(value)) + ';';
	var date = new Date();
	date.setTime(date.getTime() + (seconds * 1000));

	if (!domain) {
		domain = window.location.host.substring(window.location.host.indexOf('.'));
	}

	cookie += 'expires=' + date.toGMTString() + ';';
	cookie += path ? ' path=' + path + ';' : 'path=/;domain=' + domain + ';';

	if (window.location.host.indexOf('https') > -1) {
		cookie += 'secure';
	}

	document.cookie = cookie;
}

var toLower = function(x){
		return x.toLowerCase();
	};

function getUrlContentLocation(url) {
	var urlParts = url.split('/');
	urlParts = urlParts.map(toLower);
	var ContentLocation = urlParts.indexOf('content');
	return ContentLocation;
}

function getCurrentUrlLanguage(url) {
	var urlParts = url.split('/');
	var contentLocation = getUrlContentLocation(url);
	var languageLocation = contentLocation - 1;
	if (supportedLanguages.includes(urlParts[languageLocation].toLowerCase())) {
		return urlParts[languageLocation];
	}
	return 'en';
}

function routeToLanguage(langCode) {
	var ignoreAutoDetectLanguage = parseBool(getValueFromCookie(autoDetectCookieName));

	console.log('Detected Ignore Cookie: ' + ignoreAutoDetectLanguage);
	if (!ignoreAutoDetectLanguage) {
		var currentUrl = document.URL;
		var urlParts = currentUrl.split('/');
		var contentLocation = getUrlContentLocation(currentUrl);
		var currentUrlLang = getCurrentUrlLanguage(currentUrl);
        
		console.log('currentUrlLang: ' + currentUrlLang);
		console.log('route to lang: ' + langCode);

		if (currentUrlLang != langCode) {
			if (currentUrlLang != "en" && langCode == "en") {
				var languageLocation = contentLocation - 1;
				var newUrl = currentUrl.replace('/' + urlParts[languageLocation] + '/', '/');
				console.log('newUrl: ' + newUrl);
				location.href = newUrl;
			} else if (currentUrlLang == "en" && langCode != "en") {
				var newUrl = currentUrl.replace('/' + urlParts[contentLocation] + '/', '/' + langCode + '/' + urlParts[contentLocation] + '/');
				console.log('newUrl: ' + newUrl);
				location.href = newUrl;
			} else {
				var languageLocation = contentLocation - 1;
				var newUrl = currentUrl.replace('/' + urlParts[languageLocation] + '/', '/' + langCode + '/');
				console.log('newUrl: ' + newUrl);
				location.href = newUrl;
			}
		}
	}
}

var language = i18n.detectLanguage();
console.log('Detected Language: ' + language.toLowerCase());
if (supportedLanguages.includes(language.toLowerCase())) {
	routeToLanguage(language.toLowerCase());
} else if (supportedLanguages.includes(language.substr(0, 2).toLowerCase())) {
	routeToLanguage(language.substr(0, 2).toLowerCase());
} else {
	routeToLanguage("en");
}
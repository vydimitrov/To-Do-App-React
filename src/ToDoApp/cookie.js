const cookieName = 'toDоItems';
const cookieRex = new RegExp(cookieName + '=([^;]+)');
const expDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

export function setCookie(items){
	// document.cookie = cookieName + '=' + JSON.stringify(items) + '; expires=' + expDate;

	if (typeof(Storage) !== "undefined")
		localStorage.setItem(cookieName, JSON.stringify(items));
}

export function getCookie(){
	// let result = document.cookie.match(cookieRex);
	// result && (result = JSON.parse(result[1]));
	// return result || [];

	if (typeof(Storage) !== "undefined"){
		let result = localStorage.getItem(cookieName);
		result && (result = JSON.parse(result));
		return result || [];
	}else {
		return [];
	}
}

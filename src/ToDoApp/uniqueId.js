
let id = 0;
let isIdSet = false;

export default function getUniqueId(){
	return ++id;
}

export function setStartId(items){
	if(isIdSet || items.length === 0 ) return;
	isIdSet = true;

	id = Math.max.apply(null, items.map(i => {return i.id | 0; }));
}

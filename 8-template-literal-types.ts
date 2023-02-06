function handler(eventType: `on${string}`) {
	console.log(`handling ${eventType}`);
}

handler('onClick');
handler('onKeydown');
handler('onKeyup');

handler('onEnter');

handler('onescapekey');
handler('clicker');

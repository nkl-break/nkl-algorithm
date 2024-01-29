//이진 탐색 풀이
const  suggestedProducts = (products, searchWord) => {
	products.sort();
	
	const answer = [];

	for(let i = 0; i < searchWord.length; i++) {
		const searchPrefix = searchWord.slice(0, i + 1);

		const matchIndex = binarySearch(products, searchPrefix); //시작점 찾기
		const matches = [];

		for(let j = matchIndex; j < matchIndex + 3 && j < products.length; j++) {
			if(products[j].indexOf(searchPrefix) === 0) matches.push(products[j]);
		}

		answer.push(matches);
	}

	return answer;
};

function binarySearch(products, searchPrefix) {
	let left = 0;
	let right = products.length - 1;

	while(left < right) { 
		let mid = Math.floor((left + right) / 2);
        if (searchPrefix === products[mid]) return mid;
		if(searchPrefix < products[mid]) right = mid; 
		else left = mid + 1;
	}
	return left;
}

//단순 반복 풀이 
const suggestedProducts = (products, searchWord) => {
    products.sort();
    
    const array = [];

    for (let i = 0; i < searchWord.length; i++) {
        const target = searchWord.slice(0, i + 1);
        const sample = products.filter((item) => item.slice(0, i + 1) === target);
        array.push(sample.slice(0, 3));
    }
    
    return array;
};
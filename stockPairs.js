/** 
	In a given array 
	-find the number of distinct pairs of stock where sum of pairs profit is equal to target profit.
	Time complexity for below function : O(n^2) , it loops through the array twice for n elements
**/

function stockPairs(stocksProfit, target) {
	let stockMaxLength = 5 * (10 ** 5);
	let maxTarget = 5 *(10 ** 9);
	
	//Validations
	if(stocksProfit.length < 1 || stocksProfit.length> stockMaxLength){
		console.log("Not a valid number of stocks");
		return;
	}
	
	if(target> maxTarget){
		console.log("Not of a valid target ");
		return;
	}
	
	const distinctPairs = [];
	for (let i=0; i < stocksProfit.length; i++) {
		//validating constraint for max and min stock value
		if(stocksProfit[i]>=0 && stocksProfit[i]<=(10 ** 9)){
			//here, i + 1 is used to avoid checking with same index again.
			for (let k = i+1; k < stocksProfit.length; k++) {
				//equals given target, add to list
				if (stocksProfit[i] + stocksProfit[k] === target) {
					let str = stocksProfit[i]+ '_' + stocksProfit[k];
					if(distinctPairs.indexOf(str)==-1){
					  distinctPairs.push(stocksProfit[i]+ '_' + stocksProfit[k]);
					}
				}
			 }
		}
	}
	console.log("All unique pairs that meet target of %s - %s",target, distinctPairs.join(","));
	console.log(distinctPairs.length);
	return distinctPairs.length;
}

//StartUp-Main
const stockSourceArray = [5,7,9,13,11,6,6,3,3];
stockPairs(stockSourceArray, 12);
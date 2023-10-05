let prices = [2,4,1];

var maxProfit = function(prices) {
   let minPrice = Infinity;
   let index;
   for(let i=0;i<prices.length;i++) {
      if(prices[i] < minPrice){
         minPrice = prices[i];
         index = i;
      }
   }
   console.log(minPrice , index);
   let maxProfit = 0;
   for(let i=index + 1; i < prices.length; i++) {
      let diff = prices[i] - minPrice;
      if(diff > maxProfit){
            maxProfit = diff;
      }

 }
 console.log(maxProfit);
};

maxProfit(prices);
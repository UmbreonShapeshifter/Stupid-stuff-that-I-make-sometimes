const anArrayButBetter = [3, 2, 1];

const arrayShifter = (arr, index) => {
    
     let evenBetterArray = [];
    
        const arrayHolder = arr.filter((word, i) => i >= index);
        const arrayPusher = arr.filter((word, i) => i < index);

        evenBetterArray.unshift(arrayHolder, arrayPusher);

        
        return evenBetterArray;
};

console.log(arrayShifter(anArrayButBetter, 1));

!(function() {
    let buildChart = function() {
        const minReps = 4;
        const maxReps = 15;
        const minWeight = 5;
        const maxWeight = 700;
        let result = [];
        let currentWeight = minWeight;

        while(currentWeight <= maxWeight) {
            for(let i = minReps; i <= maxReps; i++) {
                let e1rm = 0.033333 * i  *currentWeight + currentWeight;
                result.push( {
                    reps: i,
                    weight: currentWeight,
                    e1Rm: e1rm
                });
            }
            currentWeight += 5;
        }
        
        result.sort((left, right) => left - right);
        return result;
    }

    
})();
    var removeDuplicates = function(nums){
        let e = [];
        nums.forEach(function(rescue) {
            if(e.indexOf(rescue) <0 ){
                e.push(rescue);
            }
        });
    };
    removeDuplicates([1,1,2]);
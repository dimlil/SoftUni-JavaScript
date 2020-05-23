function soleve(nums) {
    let sum=0;
    let condensed=[];
    while(nums.length>1){
        for(let i=0;i<nums.length-1;i++){
           //sum+=nums[i]+nums[i+1];
            condensed.push(nums[i]+nums[i+1]);
        }
        nums=condensed.slice();
        condensed=[];
    }
    console.log(nums[0]);
}
soleve([2,10,3]);
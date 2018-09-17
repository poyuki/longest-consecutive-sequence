module.exports = function longestConsecutiveLength(array) {
    if (!array.length) return 0;
    let set = new Set();
    array.forEach((val) => {
        set.add(val);
    });
    let m=0;
    array.forEach((value)=>{
        let previous=value-1,
            next=value+1,
            count=1;
        while (set.has(previous)){
            set.delete(previous);
            previous--;
            count++;
        }
        while (set.has(next)){
            set.delete(next);
            next++;
            count++;
        }
        m=count>m?count:m;
    });
    return m
};

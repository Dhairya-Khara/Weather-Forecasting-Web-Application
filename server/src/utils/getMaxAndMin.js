const getMaxAndMin=(a, b, c, d)=>{
    const max = Math.max(a,b,c,d)
    const min = Math.min(a,b,c,d)
    return{
        max,
        min
    }
}

module.exports = getMaxAndMin
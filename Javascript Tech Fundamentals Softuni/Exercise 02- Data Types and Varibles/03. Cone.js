function solve(radius,hight) {
    let volum=(1/3)*Math.PI*radius*radius*hight;
    let area=Math.PI*radius*Math.sqrt(radius*radius+hight*hight)+Math.PI*radius*radius;
    console.log(`volume = ${volum.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
solve(3,5);
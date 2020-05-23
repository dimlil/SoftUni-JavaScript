function solve(band,album,song) {
let sum=(album.length*band.length)*song.length/2;
let rotation=Math.ceil(sum/2.5);
console.log(`The plate was rotated ${rotation} times.`);
}
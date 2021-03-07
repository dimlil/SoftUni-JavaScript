function solve(steps, footprint, speedKmH) {
    const speed = speedKmH * 1000 / 3600;
    const distance = steps * footprint;
    const rest = Math.floor(distance / 500)*60;
    const time = distance / speed + rest;
    const hours = Math.floor(time / 3600).toFixed(0).padStart(2,"0");
    const minutes = Math.floor((time - hours * 3600) / 60).toFixed(0).padStart(2,"0");
    const seconds = (time - minutes * 60 - hours * 3600).toFixed(0).padStart(2,"0");

    console.log(`${hours}:${minutes}:${seconds}`);
}
solve(4000, 0.60, 5);
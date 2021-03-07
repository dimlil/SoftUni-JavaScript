let jaggedMatrix = [
    [1, 2, 3, 4],
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5, 6],
]
for (const row of jaggedMatrix) {
    console.log(row.join(' '));
}
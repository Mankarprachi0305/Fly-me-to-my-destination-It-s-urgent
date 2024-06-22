/**
 * @param {number[]} fuels - An array of fuel capacities at each airport
 * @returns {number} The minimum number of planes required to reach the last airport, or -1 if it is not possible
 */
function minPlanesRequired(fuels) {
    let n = fuels.length;
    if (n === 0) return -1;
    if (n === 1) return 0; // Already at the destination

    let planesUsed = 0; // counts the number of planes used
    let currentEnd = 0; // tracks the farthest airport we can reach with the current set of planes
    let farthest = 0; // tracks the farthest airport we can reach in the future steps

    // update the farthest point we can reach
    for (let i = 0; i < n - 1; i++) {
        farthest = Math.max(farthest, i + fuels[i]);

        // If we've reached the end of the current range
        if (i === currentEnd) {
            planesUsed++;
            currentEnd = farthest;
            if (currentEnd >= n - 1) {
                return planesUsed;
            }
        }
    }

    return (currentEnd >= n - 1) ? planesUsed : -1; // I've used ternary operater here for checking if currentEnd is greater than or equal to the last airport, return the number of planes used otherwise return -1 indicating it's not possible to reach the last airport
}

// Example usage:
let airports = [1, 6, 3, 4, 5, 0, 0, 0, 6];
console.log(minPlanesRequired(airports)); // Output: 3 indicating that a minimum of 3 planes are required to reach the last airport
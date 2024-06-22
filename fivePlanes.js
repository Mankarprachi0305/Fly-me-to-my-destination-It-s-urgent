/**
 * @param {number[]} fuels - An array of fuel capacities at each airport.
 * @returns {number} The minimum number of planes required to reach the last airport, or -1 if it is not possible.
 */
function minPlanesRequired(fuels) {
    let planesUsed = 0;
    let maxReach = 0;
    let nextMaxReach = 0;
    let i = 0;

    // Loop until we can reach the last airport
    while (maxReach < fuels.length - 1) {
        planesUsed++;

        // To extend maxReach as far as possible within the current range
        for (i = 0; i <= maxReach; i++) {
            nextMaxReach = Math.max(nextMaxReach, i + fuels[i]);
        }

        // Checks if no progress was made, which indicates that the destination is unreachable
        if (maxReach === nextMaxReach) return -1;

        maxReach = nextMaxReach;
    }

    // To reflect the new maximum reach for the next iteration
    return planesUsed;
}

// Example usage:
let airports = [2, 1, 2, 3, 1];
console.log(minPlanesRequired(airports)); // Output: 2 indicating that a minimum of 2 planes are required to reach the last airport
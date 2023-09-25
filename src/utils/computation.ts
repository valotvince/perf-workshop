export function simulateHeavyComputation(duration = 10) {
    const startTime = Date.now();

    while (Date.now() - startTime < duration) {}
  }

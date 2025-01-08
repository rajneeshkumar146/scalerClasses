function calculateFibo(number) {
    if (number <= 1) {
        return number;
    }

    return calculateFibo(number - 1) + calculateFibo(number - 2);
}

process.on("message", ({ number }) => {
    const result = calculateFibo(number);
    process.send(result);
})
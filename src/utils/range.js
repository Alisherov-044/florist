export function range(start, end, step = 1) {
    const output = [];
    if (typeof end === "undefined") {
        end = start;
        start = 0;
    }
    for (let i = start; step > 0 ? i < end : i > end; i += step) {
        output.push(i);
    }
    return output;
}
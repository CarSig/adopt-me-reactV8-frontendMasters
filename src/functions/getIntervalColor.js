export const getIntervalColor = (interval) => {
    const color = interval === "third" ? "#448AFF" : interval === "fifth" ? "#009688" : interval === "root" ? "#7C4DFF" : "orange"
    return color
}

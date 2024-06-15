export const deg2rad = (degrees:number) => degrees * (Math.PI / 180);

export const rad2deg = (radians:number) => radians * (180/Math.PI)

// export const easeOutCirc = (elapsed:number, initialValue:number, amountOfChange:number, duration:number) => {
//     return amountOfChange * Math.sqrt(1 - (elapsed = elapsed / duration - 1) * elapsed) + initialValue;
// }

// export function easeInOutCirc(elapsed:number, initialValue:number, amountOfChange:number, duration:number) {
// 	if ((elapsed /= duration / 2) < 1) {
// 		return -amountOfChange / 2 * (Math.sqrt(1 - elapsed * elapsed) - 1) + initialValue;
// 	}
// 	return amountOfChange / 2 * (Math.sqrt(1 - (elapsed -= 2) * elapsed) + 1) + initialValue;
// }

export function cubicBezier(t:number, P1:number, P2:number) {
    const P0 = 0;
    const P3 = 1;

    const y = Math.pow(1 - t, 3) * P0 +
              3 * Math.pow(1 - t, 2) * t * P1 +
              3 * (1 - t) * Math.pow(t, 2) * P2 +
              Math.pow(t, 3) * P3;

    return y;
}

export function getScaledValue(value:number, sourceRangeMin:number, sourceRangeMax:number, targetRangeMin:number, targetRangeMax:number) {
    const targetRange = targetRangeMax - targetRangeMin;
    const sourceRange = sourceRangeMax - sourceRangeMin;
    return (value - sourceRangeMin) * targetRange / sourceRange + targetRangeMin;
}
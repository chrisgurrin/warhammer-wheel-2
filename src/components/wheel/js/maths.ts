export const deg2rad = (degrees: number) => degrees * (Math.PI / 180);

export const rad2deg = (radians: number) => radians * (180 / Math.PI);

// export const easeOutCirc = (elapsed:number, initialValue:number, amountOfChange:number, duration:number) => {
//     return amountOfChange * Math.sqrt(1 - (elapsed = elapsed / duration - 1) * elapsed) + initialValue;
// }

// export function easeInOutCirc(elapsed:number, initialValue:number, amountOfChange:number, duration:number) {
// 	if ((elapsed /= duration / 2) < 1) {
// 		return -amountOfChange / 2 * (Math.sqrt(1 - elapsed * elapsed) - 1) + initialValue;
// 	}
// 	return amountOfChange / 2 * (Math.sqrt(1 - (elapsed -= 2) * elapsed) + 1) + initialValue;
// }
type Vec2 = { x: number; y: number };
export function cubicBezier(t: number, P1: Vec2, P2: Vec2) {
    const P0 = {
        x: 0,
        y: 0,
    }; // Fixed point (0, 0)
    const P3 = {
        x: 1,
        y: 1,
    }; // Fixed point (1, 1)

    const x =
        Math.pow(1 - t, 3) * P0.x +
        3 * Math.pow(1 - t, 2) * t * P1.x +
        3 * (1 - t) * Math.pow(t, 2) * P2.x +
        Math.pow(t, 3) * P3.x;

    const y =
        Math.pow(1 - t, 3) * P0.y +
        3 * Math.pow(1 - t, 2) * t * P1.y +
        3 * (1 - t) * Math.pow(t, 2) * P2.y +
        Math.pow(t, 3) * P3.y;

    //   console.log(y)

    return {
        x: x,
        y: y,
    };
}

export function getScaledValue(
    value: number,
    sourceRangeMin: number,
    sourceRangeMax: number,
    targetRangeMin: number,
    targetRangeMax: number,
) {
    const targetRange = targetRangeMax - targetRangeMin;
    const sourceRange = sourceRangeMax - sourceRangeMin;
    return (
        ((value - sourceRangeMin) * targetRange) / sourceRange + targetRangeMin
    );
}

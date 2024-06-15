import { clear, drawWheel, drawPlaceholderText } from './drawing'
import { deg2rad,  getScaledValue, cubicBezier  } from './maths'

export type PickedItem = {
    name:string
    index:number
    offset:number
}

// constants
const duration = 8000       //milliseconds
const frameStep = 1000/60   //60 fps
const numRotations = 15

const getPickedItem = (items: string[]):PickedItem => {
    // choose how many segments to offset the final rotation by (anticlockwise)
    const offset =  Math.floor(getScaledValue(Math.random(), 0, 1, 0, items.length))
    const index =  offset === 0 ? 0 : items.length -  offset

    return {
        index,
        offset,
        name: items[index]
    }
}


const playSpinAnimation = async (rotation:number, duration:number, start:number, draw:(spinAngle:number) => void):Promise<void> => {
    // get spin angle
    const elapsed = Date.now() - start
    const spinAngle = rotation * cubicBezier(
        elapsed/duration, 
        0.55, 
        1)

    // draw the wheel
    draw(spinAngle)    
        
    // return if animation is finished, other wise draw next frame
    return new Promise<void>((resolve) => setTimeout(() => {
        if(elapsed < duration){
            playSpinAnimation(rotation, duration, start, draw)
                .then(() => resolve())
        }
        else {
            resolve();
        }
    }, frameStep));
}

export const getSegAngle = (items:string[]) => deg2rad(360 / items.length);

// clear the canvas and redraw the wheel with a given rotation.
export const redraw = (items:string[], r:number, spinAngle:number, ctx?: CanvasRenderingContext2D) => {
    const segAngle = getSegAngle(items);

    if(!ctx) return

    clear(ctx)
    window.requestAnimationFrame(() => drawWheel(ctx, items, r, spinAngle, segAngle))
}


//  spin the wheel and return picked item
export const spin = async(items:string[], r:number, ctx?: CanvasRenderingContext2D):Promise<PickedItem|undefined> => {
    if(!ctx) return;

    const segAngle = getSegAngle(items);

    if(!items.length){
        window.requestAnimationFrame(() => {
            clear(ctx)
            drawPlaceholderText(ctx,r,'No items.')
        });
        return undefined;
    }
    
    const pickedItem = getPickedItem(items);
    const rotationAmount = deg2rad(numRotations * 360) +  (segAngle *  pickedItem.offset);

    await playSpinAnimation(
        rotationAmount, 
        duration, 
        Date.now(), 
        (spinAngle:number) => redraw(items, r, spinAngle, ctx)); 

    return pickedItem
}
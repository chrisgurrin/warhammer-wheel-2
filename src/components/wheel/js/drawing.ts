import { deg2rad } from './maths'
import {colors} from './colors'

export const drawSegment = (
    ctx: CanvasRenderingContext2D, 
    c:number, 
    r:number, 
    numSegments:number, 
    startAngle:number, 
    segAngle:number, 
    color:string) => {
      ctx.save();

      ctx.beginPath();

      ctx.moveTo(c, c);
      ctx.arc(c, c, r, startAngle - deg2rad(360/numSegments), startAngle + segAngle - deg2rad(360/numSegments));

      // ctx.strokeStyle = "blue";
      // ctx.stroke();

      ctx.fillStyle = color;
      ctx.fill();

      ctx.closePath();
      ctx.restore();
  };

  export const drawSegmentText = (
    ctx:CanvasRenderingContext2D, 
    c:number, 
    r:number, 
    numSegments:number, 
    angle:number, 
    text:string, 
    color:string) => {
      ctx.save();
      ctx.translate(c, c);
      ctx.rotate(angle - deg2rad(360/numSegments)); 
  
      ctx.textAlign = "center";
      ctx.fillStyle = color;
      ctx.font = "12px sans-serif";
      ctx.fillText(text, r / 1.75, 0);

      ctx.restore();
  };

  export const drawArrow = (
    ctx:CanvasRenderingContext2D, 
    c:number, 
    r:number, 
  ) => {
    ctx.save();

    ctx.beginPath()

    ctx.moveTo(c + r + 25, c + 10)
    ctx.lineTo(c + r + 10, c);
    ctx.lineTo(c + r + 25, c - 10);

    ctx.closePath()

    ctx.fillStyle = '#eb6b6f'
    ctx.fill()

    // ctx.strokeStyle = '#00ff00' 
    // ctx.lineWidth = 4
    // ctx.stroke()

    ctx.restore();
  }

  export const drawPlaceholderText = (    
    ctx:CanvasRenderingContext2D, 
    c:number, 
    text:string, 
  ) => {
    ctx.save();

    ctx.translate(c + 40, c);
 
    ctx.font = "30px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#e7e5e4";
    ctx.fillText(text, 0, 0);

    ctx.restore();
  };

  //draw the wheel
export const drawWheel = (
  ctx:CanvasRenderingContext2D, 
  items:string[], 
  r:number, 
  spinAngle:number, 
  segAngle:number) => 
  {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      
      ctx.save()
      ctx.translate(40, 0);
  
      let segOffsetAngle = segAngle / 2;
  
      for (let i = 0; i < items.length; i++) {
        let c = i % colors.length;
        if(c === 0 && i === items.length - 1){
          c = 2
        }

          drawSegment(ctx, r, r, items.length, segOffsetAngle + spinAngle, segAngle, colors[c].segment);
          drawSegmentText(ctx, r, r, items.length, (segAngle / 2) + segOffsetAngle + spinAngle, items[i], colors[c].text);
          drawArrow(ctx,r,r)
  
          segOffsetAngle += segAngle;
      }
      ctx.restore()
  }

  export const clear = (ctx:CanvasRenderingContext2D) => ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
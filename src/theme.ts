

type Color ={
  name:string
  segments: {segment:string, text:string}[]
}

interface StringIndexedObject {
    [key: string]: Color;
}

export const colors:StringIndexedObject = {
  blue:{
    name: 'Blue',
    segments:[
      {segment: '#002b59', text:'#9ff4e5'},
      {segment: '#005f8c', text:'#9ff4e5'},
      {segment: '#00b9be', text:'#002b59'},
      {segment: '#9ff4e5', text:'#002b59'},
  ]},
  iceCream:{
    name: 'Ice Cream',
    segments:[
      {segment: '#7c3f58', text:'#fff6d3'},
      {segment: '#eb6b6f', text:'#fff6d3'},
      {segment: '#f9a875', text:'#7c3f58'},
      {segment: '#fff6d3', text:'#7c3f58'},
  ]},
  gameBoy:{
    name: 'GameBoy',
    segments:[
      {segment: '#202020', text:'#e3eec0'},
      {segment: '#5e6745', text:'#e3eec0'},
      {segment: '#aeba89', text:'#202020'},
      {segment: '#e3eec0', text:'#202020'},
  ]},
  halloween:{
    name: 'Halloween',
    segments:[
      {segment: '#300030', text:'#f8f088'},
      {segment: '#602878', text:'#f8f088'},
      {segment: '#f89020', text:'#300030'},
      {segment: '#f8f088', text:'#300030'},
  ]},
  lollipop:{
    name: 'Lollipop',
    segments:[
      {segment: '#151640', text:'#e6f2ef'},
      {segment: '#3f6d9e', text:'#e6f2ef'},
      {segment: '#f783b0', text:'#151640'},
      {segment: '#e6f2ef', text:'#151640'},
  ]},
  moonlight:{
    name: 'Moonlight',
    segments:[
      {segment: '#0f052d', text:'#36868f'},
      {segment: '#203671', text:'#5fc75d'},
      {segment: '#36868f', text:'#0f052d'},
      {segment: '#5fc75d', text:'#0f052d'},
  ]},
  velvetCherry:{
    name: 'Velvet Cherry',
    segments:[
      {segment: '#2d162c', text:'#9775a6'},
      {segment: '#412752', text:'#9775a6'},
      {segment: '#683a68', text:'#2d162c'},
      {segment: '#9775a6', text:'#2d162c'},
  ]},
}


// export type Color = {
//   segment: string
//   text: string
// }

type Color ={
  name:string
  segments: {segment:string, text:string}[]
}

interface StringIndexedObject {
    [key: string]: Color;
}

export const colors:StringIndexedObject = {
  bloodOrange:{
    name: 'Blood Orange',
    segments:[
      {segment: '#7c3f58', text:'#fff6d3'},
      {segment: '#eb6b6f', text:'#fff6d3'},
      {segment: '#f9a875', text:'#7c3f58'},
      {segment: '#fff6d3', text:'#7c3f58'},
  ]},
  miku:{
    name: 'Miku',
    segments:[
      {segment: '#1e014b', text:'#f0f0f6'},
      {segment: '#78478e', text:'#f0f0f6'},
      {segment: '#58e1c3', text:'#f0f0f6'},
      {segment: '#ffdaff', text:'#1e014b'},
  ]},
  moonlight:{
    name: 'Moonlight',
    segments:[
      {segment: '#0f052d', text:'#f0f0f6'},
      {segment: '#203671', text:'#f0f0f6'},
      {segment: '#36868f', text:'#f0f0f6'},
      {segment: '#5fc75d', text:'#f0f0f6'},
  ]}
}
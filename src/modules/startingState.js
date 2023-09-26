// board     square number/id        .propertyName
// board           [0]                 .id
const board = [
  {
    "id":0,
    "coordinate":"a1",
    "x":0,"y":0,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":1,
    "coordinate":"b1",
    "x":1,"y":0,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":2,
    "coordinate":"c1",
    "x":2,"y":0,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":3,
    "coordinate":"d1",
    "x":3,"y":0,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":4,
    "coordinate":"e1",
    "x":4,"y":0,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":5,
    "coordinate":"f1",
    "x":5,"y":0,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":6,
    "coordinate":"g1",
    "x":6,"y":0,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":7,
    "coordinate":"h1",
    "x":7,"y":0,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":8,
    "coordinate":"a2",
    "x":0,"y":1,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":9,
    "coordinate":"b2",
    "x":1,"y":1,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":10,
    "coordinate":"c2",
    "x":2,"y":1,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":11,
    "coordinate":"d2",
    "x":3,"y":1,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":12,
    "coordinate":"e2",
    "x":4,"y":1,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":13,
    "coordinate":"f2",
    "x":5,"y":1,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":14,
    "coordinate":"g2",
    "x":6,"y":1,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":15,
    "coordinate":"h2",
    "x":7,"y":1,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":16,
    "coordinate":"a3",
    "x":0,"y":2,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":17,
    "coordinate":"b3",
    "x":1,"y":2,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":18,
    "coordinate":"c3",
    "x":2,"y":2,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":19,
    "coordinate":"d3",
    "x":3,"y":2,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":20,
    "coordinate":"e3",
    "x":4,"y":2,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":21,
    "coordinate":"f3",
    "x":5,"y":2,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":22,
    "coordinate":"g3",
    "x":6,"y":2,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":23,
    "coordinate":"h3",
    "x":7,"y":2,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":24,
    "coordinate":"a4",
    "x":0,"y":3,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":25,
    "coordinate":"b4",
    "x":1,"y":3,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":26,
    "coordinate":"c4",
    "x":2,"y":3,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":27,
    "coordinate":"d4",
    "x":3,"y":3,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":28,
    "coordinate":"e4",
    "x":4,"y":3,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":29,
    "coordinate":"f4",
    "x":5,"y":3,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":30,
    "coordinate":"g4",
    "x":6,"y":3,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":31,
    "coordinate":"h4",
    "x":7,"y":3,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":32,
    "coordinate":"a5",
    "x":0,"y":4,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":33,
    "coordinate":"b5",
    "x":1,"y":4,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":34,
    "coordinate":"c5",
    "x":2,"y":4,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":35,
    "coordinate":"d5",
    "x":3,"y":4,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":36,
    "coordinate":"e5",
    "x":4,"y":4,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":37,
    "coordinate":"f5",
    "x":5,"y":4,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":38,
    "coordinate":"g5",
    "x":6,"y":4,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":39,
    "coordinate":"h5",
    "x":7,"y":4,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":40,
    "coordinate":"a6",
    "x":0,"y":5,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":41,
    "coordinate":"b6",
    "x":1,"y":5,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":42,
    "coordinate":"c6",
    "x":2,"y":5,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":43,
    "coordinate":"d6",
    "x":3,"y":5,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":44,
    "coordinate":"e6",
    "x":4,"y":5,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":45,
    "coordinate":"f6",
    "x":5,"y":5,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":46,
    "coordinate":"g6",
    "x":6,"y":5,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":47,
    "coordinate":"h6",
    "x":7,"y":5,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":48,
    "coordinate":"a7",
    "x":0,"y":6,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":49,
    "coordinate":"b7",
    "x":1,"y":6,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":50,
    "coordinate":"c7",
    "x":2,"y":6,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":51,
    "coordinate":"d7",
    "x":3,"y":6,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":52,
    "coordinate":"e7",
    "x":4,"y":6,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":53,
    "coordinate":"f7",
    "x":5,"y":6,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":54,
    "coordinate":"g7",
    "x":6,"y":6,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":55,
    "coordinate":"h7",
    "x":7,"y":6,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":56,
    "coordinate":"a8",
    "x":0,"y":7,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":57,
    "coordinate":"b8",
    "x":1,"y":7,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":58,
    "coordinate":"c8",
    "x":2,"y":7,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":59,
    "coordinate":"d8",
    "x":3,"y":7,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":60,
    "coordinate":"e8",
    "x":4,"y":7,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":61,
    "coordinate":"f8",
    "x":5,"y":7,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false},
  {
    "id":62,
    "coordinate":"g8",
    "x":6,"y":7,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":true},
  {
    "id":63,
    "coordinate":"h8",
    "x":7,"y":7,"piece":null,
    "underAttackFromWhite":false,
    "underAttackFromBlack":false,
    "isBlack":false}
  ]

module.exports = board;
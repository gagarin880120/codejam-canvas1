let smallArr =[];
let biggerArr = [];

fetch('./data/4x4.json')
.then(res => res.json())
.then(data => data.map(innerArr => {
    return innerArr.map(a => {
      return '#' + a
  })
}))
.then(data => smallArr = data)
.catch(err => console.error(err));

fetch('./data/32x32.json')
.then(res => res.json())
.then(data => data.map(innerArr => {
    return innerArr.map(a => {
      return `rgba(${a})`
  })
}))
.then(data => biggerArr = data)
.catch(err => console.error(err));

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function draw4x4() {
  ctx.clearRect(0, 0, 512, 512);
  width = smallArr[0].length;
  height = smallArr.length; 
  scale = 1; 

  canvas.width = width * scale; 
  canvas.height = height * scale; 

  for(let row = 0; row < height; row++) {
      for(let col = 0; col < width; col++) {
        ctx.fillStyle = smallArr[row][col]; 
        ctx.fillRect(col * scale, row * scale, scale, scale); 
    }
  }
}

function draw32x32() {
  ctx.clearRect(0, 0, 512, 512);
  width = biggerArr[0].length;
  height = biggerArr.length;
  scale = 1; 

  canvas.width = width * scale; 
  canvas.height = height * scale; 

  for(let row = 0; row < height; row++) {
      for(let col = 0; col < width; col++) { 
        ctx.fillStyle = biggerArr[row][col]; 
        ctx.fillRect(col * scale, row * scale, scale, scale); 
    }
  }
}

function drawImg() {
  ctx.clearRect(0, 0, 512, 512);
  let img = new Image();
  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img,0,0);
  }
  img.src = './data/image.png';
}
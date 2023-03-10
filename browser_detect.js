async function loadImage() {
    const img = new Image();
    const src = "fox.avif";
    img.src = src;
    
    try {
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });
      return true;
    } catch (error) {
      return false;
    }
  }

(async ()=>{

const imageLoaded = await loadImage();

const chrome = !!window.chrome && imageLoaded
const edge =   !!window.chrome && !imageLoaded

console.log('Is Chrome:', chrome);
console.log('Is Edge:', edge);

const output = document.getElementById('output');
output.innerHTML = `Is Chrome: ${chrome}<br>Is Edge: ${edge}`;

})()

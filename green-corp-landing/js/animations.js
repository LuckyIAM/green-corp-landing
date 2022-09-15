const INCREASE_NUMBER_ANIMATION_SPEED = 50;
function increaseNumberAnimationStep (i, element, endNumber) {
    if (i <= endNumber) {
      if (i === endNumber) {
        element.innerText = i + '+';
      } else {
        element.innerText = i;
        console.log(element.innerText)
      }
  
      i+=10;
        
      setTimeout(increaseNumberAnimationStep,INCREASE_NUMBER_ANIMATION_SPEED,i,element,endNumber);
   }
}

function initIncreaseNumberAnimation() {
    const element = document.querySelector('div.features__clients-count');
    increaseNumberAnimationStep(0, element, 5000);
}
initIncreaseNumberAnimation();
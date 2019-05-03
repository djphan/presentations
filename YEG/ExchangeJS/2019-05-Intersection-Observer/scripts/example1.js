 const myOptions = {
      root: null,
      rootMargin: '0px', 
      threshold: [0, 0.5, 0.75, 1.0]
 };

const example1 = document.getElementById('target-1');

const modifyTarget = function(entries) { 
    entries.forEach(entry => { 
      if (0 <= entry.intersectionRatio && entry.intersectionRatio < 0.5) {
        example1.style.backgroundColor = 'purple';
        example1.innerText = '0 - 50% Viewable. Target = Purple.';
      }
      
      if (0.5 <= entry.intersectionRatio && entry.intersectionRatio <= 0.75) {
        example1.style.backgroundColor = 'green';
        example1.innerText = '50 - 75% Viewable. Target = Green.';
      }
      if (0.75 < entry.intersectionRatio && entry.intersectionRatio <= 1) {
        example1.style.backgroundColor = 'red';
        example1.innerText = '75 - 100% Viewable. Target = Red.';
      }
    });
}; 
const myObserver = new IntersectionObserver(modifyTarget, myOptions);
myObserver.observe(example1);
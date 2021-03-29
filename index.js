// Your code here


function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  } 
  
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  } 

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  /* caveat -2021/03/29

  I skipped two lessons. They should be:
  > Creating and Inserting DOM Nodes Lab
  > JavaScript Event Listeners Lab

  I will resubmit next day. just running out of time on the current deadline. Should be in by COB 03/29/2021
*/

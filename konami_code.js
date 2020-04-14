const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  document.body.addEventListener("keydown", (event) => {
    // Now, how can we check for which specific key was pressed?
    if (event.defaultPrevented) {
      return; // Do nothing if event already handled Have to understand this.
    }
    switch(event.code) {
    	case "KeyA":
    	case "ArrowUp":
    	// Handle "back"
    	// updatePosition(-moveRate);
    	break;
    	case "KeyS":
    	case "ArrowDown":
    	// Handle "forward"
    	// updatePosition(moveRate);
    	break;
    	case "KeyD":
    	case "ArrowLeft":
    	// Handle "turn left"
    	/*angle -= turnRate;*/
    	break;
    	case "KeyF":
    	case "ArrowRight":
    	// Handle "turn right"
    	/*angle += turnRate;*/
    	break;
      case "KeyG":
      case "a":
      break;
    }
  });
}

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
    	case "ArrowUp": // Handle "up arrow"
    	break;
    	case "KeyS":
    	case "ArrowDown": // Handle "down arrow"
    	break;
    	case "KeyD":
    	case "ArrowLeft": // Handle "left arrow"
    	break;
    	case "KeyF":
    	case "ArrowRight": // Handle "left arrow"
    	break;
      case "KeyG":
      case "a": // Handle 'a' button
      break;
      case "KeyH":
      case "b": // Handle 'b' button
      break;
    }
  }, true);
}

init();

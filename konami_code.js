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
  let count = 0;
  document.body.addEventListener("keydown", (event) => {
    console.log(event.key)

    if (event.key === codes[count]) {
      count++
    } else {
      count = 0;
    }
    // switch(event.code) {
    // 	case "KeyA":
    // 	case "ArrowUp": // Handle "up arrow"
    // 	break;
    // 	case "KeyS":
    // 	case "ArrowDown": // Handle "down arrow"
    // 	break;
    // 	case "KeyD":
    // 	case "ArrowLeft": // Handle "left arrow"
    // 	break;
    // 	case "KeyF":
    // 	case "ArrowRight": // Handle "left arrow"
    // 	break;
    //   case "KeyG":
    //   case "a": // Handle 'a' button
    //   break;
      // case "KeyH":
    //   case "b": // Handle 'b' button
    //   break;
    // }
    // Consume the event so it doesn't get handled twice
    event.preventDefault();

  }, false);
}

init();

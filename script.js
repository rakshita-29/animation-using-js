const board = document.getElementById("board");

function createDot() {
  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.width = "10px";
  dot.style.height = "10px";
  dot.style.left = Math.random() * window.innerWidth + "px";
  dot.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(dot);

  dot.animate(
    [
      { transform: "translate(0, 0)" },
      {
        transform: `translate(${Math.random() * 200 - 100}px, ${
          Math.random() * 200 - 100
        }px)`,
      },
      { transform: "translate(0, 0)" },
    ],
    {
      duration: Math.random() * 4000 + 3000, 
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    }
  );
}

function createDots(numDots) {
  for (let i = 0; i < numDots; i++) {
    createDot();
  }
}

createDots(100);

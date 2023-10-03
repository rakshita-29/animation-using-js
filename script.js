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

const board = document.getElementById("board");
let current = "X";
const boxes = [];

for (let i = 0; i < 9; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  box.dataset.index = i;
  box.addEventListener("click", click);
  board.appendChild(box);
  boxes.push(box);
}

function click(e) {
  const box = e.target;

  if (box.textContent !== "") {
    return;
  }

  box.textContent = current;

  if (win()) {
    alert(`${current} wins!`);
    reset();
    return;
  }

  if (draw()) {
    alert("It's a draw!");
    reset();
    return;
  }

  current = current === "X" ? "O" : "X";
}

function win() {
  const wincase = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const pattern of wincase) {
    const [a, b, c] = pattern;
    if (
      boxes[a].textContent &&
      boxes[a].textContent === boxes[b].textContent &&
      boxes[a].textContent === boxes[c].textContent
    ) {
      return true;
    }
  }

  return false;
}

function draw() {
  return boxes.every((box) => box.textContent !== "");
}

function reset() {
  boxes.forEach((box) => (box.textContent = ""));
  current = "X";
}

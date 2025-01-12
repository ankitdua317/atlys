import { INITIAL_FUNCTION_CHAIN } from "../constants/common";

export const connect2Dots = (
  svg: SVGSVGElement,
  startEl: HTMLElement,
  endEl: HTMLElement
) => {
  const startRect = startEl.getBoundingClientRect();
  const endRect = endEl.getBoundingClientRect();
  const svgRect = svg.getBoundingClientRect();

  const startX = startRect.right - svgRect.left;
  const startY = startRect.top + startRect.height / 2 - svgRect.top;
  const endX = endRect.left - svgRect.left;
  const endY = endRect.top + endRect.height / 2 - svgRect.top;

  const path = `M ${startX} ${startY} C ${startX + 50} ${startY}, ${
    endX - 50
  } ${endY}, ${endX} ${endY}`;

  const newPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  newPath.setAttribute("d", path);
  newPath.setAttribute("stroke", "#0066FF");
  newPath.setAttribute("stroke-width", "7");
  newPath.setAttribute("fill", "none");
  svg.appendChild(newPath);
};

export const connectAllDots = (
  svg: SVGSVGElement,
  inputFnIndex: number,
  outputFnIndex: number
) => {
  const inputDot = document.querySelector("#inputDot .dot") as HTMLElement;
  const outputDot = document.querySelector("#outputDot .dot") as HTMLElement;
  const cardFirstInput = document.querySelector(
    `#card${inputFnIndex + 1} .input`
  ) as HTMLElement;
  const cartLastOutput = document.querySelector(
    `#card${outputFnIndex + 1} .output`
  ) as HTMLElement;
  connect2Dots(svg, inputDot, cardFirstInput);
  connect2Dots(svg, cartLastOutput, outputDot);

  let currentFnIndex = inputFnIndex;
  let chainCompleted = false;

  while (!chainCompleted) {
    const nextFnIndex = INITIAL_FUNCTION_CHAIN[currentFnIndex].next;
    if (nextFnIndex === null) {
      chainCompleted = true;
    } else {
      const cardOutput = document.querySelector(
        `#card${currentFnIndex + 1} .output`
      ) as HTMLElement;
      const nextCardInput = document.querySelector(
        `#card${nextFnIndex + 1} .input`
      ) as HTMLElement;
      connect2Dots(svg, cardOutput, nextCardInput);
      currentFnIndex = nextFnIndex;
    }
  }
};

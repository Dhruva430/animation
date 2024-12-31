const ariz = document.getElementById("block1");
const smoky = document.getElementById("block2");
const didi = document.getElementById("block3");
const muffin = document.getElementById("block4");

const arizPosition = ariz.getBoundingClientRect();
const smokyPosition = smoky.getBoundingClientRect();
const didiPosition = didi.getBoundingClientRect();
const muffinPosition = muffin.getBoundingClientRect();

setupBlock(ariz, arizPosition);
setupBlock(smoky, smokyPosition);
setupBlock(didi, didiPosition);
setupBlock(muffin, muffinPosition);

// didi.style.left = `${smoky.getBoundingClientRect().right}px`;
ariz.addEventListener("click", handleClick);

function handleClick() {
  // block1.style.position = "absolute";
  const moveUp = new KeyframeEffect(
    ariz,
    [{ transform: "translateY(500px)" }],
    {
      duration: 1500,
      direction: "alternate",
      easing: "ease-in-out",
      iterations: "1",
      fill: "forwards",
    }
  );
  const moveLeft = new KeyframeEffect(
    smoky,
    [{ transform: "translateX(-62.5rem) rotate(360deg) scale(1.5)" }],
    {
      duration: 1000,
      direction: "alternate",
      easing: "ease-in-out",
      iterations: "1",
      fill: "forwards",
    }
  );

  console.log(didi.style.left);

  // Setupup block 4
  // const px = muffin.getBoundingClientRect();
  // muffin.style.top = `${px.top}px`;
  // const didipx = didi.getBoundingClientRect();
  // muffin.style.top = `${didipx.top}px`;

  console.log(smoky.getBoundingClientRect());
  // Jaha bhi hai waha se top 0 tk jaye
  const moveRight = new KeyframeEffect(
    didi,
    [
      {
        top: "0",
        width: "150px",
        left: "50%",
        height: "150px",
      },
    ],
    {
      duration: 1000,
      direction: "alternate",
      easing: "ease-in-out",
      iterations: "1",
      fill: "forwards",
    }
  );

  const moveTop = new KeyframeEffect(
    muffin,
    [
      // {
      //   transform: "translateY(500px)  ",
      // },
      {
        left: "40%",
        width: "150px",
        top: "0",
      },
    ],
    {
      duration: 2500,
      direction: "alternate",
      easing: "ease-in-out",
      iterations: "1",
      fill: "forwards",
    }
  );
  const downAnimation = new Animation(moveUp, document.timeline);
  const rightAnimation = new Animation(moveRight, document.timeline);
  const leftAnimation = new Animation(moveLeft, document.timeline);
  const topAnimation = new Animation(moveTop, document.timeline);
  downAnimation.play();
  leftAnimation.play();
  rightAnimation.play();
  topAnimation.play();

  setTimeout(() => {
    downAnimation.reverse();

    leftAnimation.reverse();

    rightAnimation.reverse();

    topAnimation.reverse();
  }, 6000);
}

function px(n) {
  return `${n}px`;
}

/**
 *
 * @param {HTMLElement} block
 * @param {DOMRect} rect
 */
function setupBlock(block, rect) {
  block.style.position = "absolute";
  block.style.left = px(rect.left);
  block.style.right = px(rect.right);
  block.style.top = px(rect.top);
  block.style.bottom = px(rect.bottom);
}

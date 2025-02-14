const btn = document.querySelector("#ze_button");
let anim;
const initialAniTime = 4000;
btn.addEventListener("pointerenter", overEvent);
activateButtonAni();

function activateButtonAni() {
  anim = btn.animate([{ backgroundSize: "0% 100%" }, { backgroundSize: "100% 100%" }], {
    duration: initialAniTime,
    iterations: 1,
    easing: "linear",
  });
  anim.addEventListener("finish", finishEvent);
}

function overEvent(e) {
  e.target.removeEventListener("pointerenter", overEvent);
  anim.cancel();
  const ratio = anim.timeline.currentTime / initialAniTime;
  console.log("initialAniTime", initialAniTime / (initialAniTime - anim.timeline.currentTime));

  anim = e.target.animate([{ backgroundSize: `${ratio * 100}% 100%` }, { backgroundSize: "100% 100%" }], {
    duration: 1000 / (initialAniTime / (initialAniTime - anim.timeline.currentTime)),
    // keeping the same pace
    iterations: 1,
    easing: "linear",
  });
  anim.addEventListener("finish", finishEvent);
}

function finishEvent(e) {
  console.log("FINISH");
  btn.style.opacity =.5;

  document.querySelector("body").style.backgroundColor="pink";
}

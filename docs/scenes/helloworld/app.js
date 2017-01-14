function initVR(canvas, vrButton){
  vrButton.disabled = true;
  navigator.vr.getAvailability()
    .then(isAvaiable => vrButton.disabled = isAvaiable);
  navigator.vr.addEventListener("availabilitychange", e => {
    vrButton.disabled = !e.value;
  });
  navigator.vr.requestDisplays()
    .then(displays => {

    });
}

window.addEventListener("DOMContentLoaded", e => {
  const el = {
    canvas: document.querySelector("canvas"),
    vrButton: document.querySelector("#vr-button")
  };
  initVR(el);
}, {once: true});
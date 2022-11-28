var modules = ["hd", "main", "nav", "Awards", "reference"];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", function () {
  for (var i = 0; i < modules.length; i++) {
    document.getElementById(modules[i]).style.display = "none";
  }
});

window.onload = async function loadPage() {
  document.getElementById("app").style.display = "block";
  await sleep(1200);
  document.getElementById("app").style.display = "none";
  document.getElementById(modules[0]).style.display = "block";
  for (var i = 1; i < modules.length; i++) {
    document.getElementById(modules[i]).style.display = "block";
    await sleep(1000);
  }
};
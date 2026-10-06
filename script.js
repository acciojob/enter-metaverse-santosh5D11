const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", function () {
  const status = document.getElementById("status");
  status.outerHTML = '<h1 id="status">Entered Metaverse</h1>';
});

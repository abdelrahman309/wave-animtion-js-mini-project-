let labels = document.querySelectorAll("label");

labels.forEach((e) => {
  e.innerHTML = e.innerText
    .split("")
    .map(
      (labW, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${labW}</span>`
    )
    .join("");
});

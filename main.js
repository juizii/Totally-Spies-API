document.querySelector("button").addEventListener("click", fetchEm);

function fetchEm() {
  let input = document.querySelector("input").value.toLowerCase();
  fetch(`/api/${input}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#name").innerText = data.name;
      document.querySelector("#fitColor").innerText = data.fit-color;
      document.querySelector("#hair").innerText = data.hair-color;
      document.querySelector("#pType").innerText = data.personality;
    })

}

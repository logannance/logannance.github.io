function who_is_awesome() {
  let txt = document.getElementById("awesome").value;

  if (txt === "Hannah") {
    document.getElementById("big-brain").style.display = "initial";
  } else if (txt == "Logan") {
    document.getElementById("wrong").innerHTML = "He is, but not as much as Hannah...";
  } else {
    document.getElementById("wrong").innerHTML = "NO YOU'RE WRONG, better luck next junior!";
  }
}
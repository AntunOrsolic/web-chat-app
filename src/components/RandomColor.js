export default function randomColor() {
  var color = "#";
  var characters = "0123456789ABCDEF";

  do {
    color = "#";
    for (var i = 0; i < 6; i++) {
      color += characters[Math.floor(Math.random() * 16)];
    }
  } while (color === "#FFFFFF");

  return color;
}

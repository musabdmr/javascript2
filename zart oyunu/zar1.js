function zar_at() {
  var zar1, zar2
  zar1 = Math.floor(Math.random() * 6 + 1)
  zar2 = Math.floor(Math.random() * 6 + 1)
  document.getElementById('zar1konum').innerHTML = '<img src=' + zar1 + '.jpg>'
  document.getElementById('zar2konum').innerHTML = '<img src=' + zar2 + '.jpg>'
}

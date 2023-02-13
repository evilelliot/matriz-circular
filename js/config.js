var _n;
var _m;
var _baseColor;
function saveConfig() {
    _n = document.getElementById("n").value;
    _m = document.getElementById("m").value;
    baseColor = document.getElementById("baseColor").value;
    var modifyColor = document.getElementById("modifyColor").checked;

    localStorage.setItem("n", _n);
    localStorage.setItem("m", _m);
    localStorage.setItem("baseColor", _baseColor);
    localStorage.setItem("modifyColor", modifyColor);

    swal("¡Todo salió bien!", "La configuración se guardó correctamente :)");
    location.reload();
  }

  function loadConfig() {
    _n = localStorage.getItem("n");
    _m = localStorage.getItem("m");
    _baseColor = localStorage.getItem("baseColor");
    var modifyColor = localStorage.getItem("modifyColor");

    if (_n === null || _m === null || _baseColor === null) {
      document.getElementById("configMessage").innerHTML = "No configurations found.";
    } else {
      document.getElementById("n").value = _n;
      document.getElementById("m").value = _m;
      document.getElementById("baseColor").value = _baseColor;
      document.getElementById("modifyColor").checked = (modifyColor === "true");
    }
  }
  function getColConfig() { return _n; }
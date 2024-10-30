function ckcCheckAllTextFocus() {
  // Check for input tags
  var inputArray = document.getElementsByTagName("input");
  for (var i=0; i<inputArray.length; i++) {
    if (inputArray[i].focused == true) return true;
  }
  // Check for textarea tags
  var textareaArray = document.getElementsByTagName("textarea");
  for (var i=0; i<textareaArray.length; i++) {
    if (textareaArray[i].focused == true) return true;
  }
  return false;
}

document.onkeyup = function ckcKeyPress(event)
{
  if (typeof event == "undefined") event = window.event;
  var wkey = event.keyCode;
  if (document.layers) wkey = event.which;
  if (wkey == 37 && ckcCheckAllTextFocus() == false) {
    var array = document.getElementsByClassName("navi-prev");
    if (array[0] !== "") window.location.href = array[0].href;
  }
  if (wkey == 39 && ckcCheckAllTextFocus() == false) {
    var array = document.getElementsByClassName("navi-next");
    if (array[0] !== "") window.location.href = array[0].href;
  }
}


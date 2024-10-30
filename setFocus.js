function ckcSetFocusStates() {
  // Set focus for input tags
  var inputArray = document.getElementsByTagName("input");
  for (var i=0; i<inputArray.length; i++) {
    inputArray[i].focused = false;
    inputArray[i].onfocus = function() { this.focused = true; }
    inputArray[i].onblur = function() { this.focused = false; }
  }
  // Set focus for textarea tags
  var textareaArray = document.getElementsByTagName("textarea");
  for (var i=0; i<textareaArray.length; i++) {
    textareaArray[i].focused = false;
    textareaArray[i].onfocus = function() { this.focused = true; }
    textareaArray[i].onblur = function() { this.focused = false; }
  }
}

window.onload = ckcSetFocusStates();


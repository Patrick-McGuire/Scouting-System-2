function doGet(e) {
    var template = HtmlService.createTemplateFromFile('Page'); // It will create HTMl page from Index.html file data.
    var pageData= template.evaluate()
    .setTitle('Scoutmaster 5001') // Set Title 
     return pageData;
}

// Returns the data needed to make the webpage. Called from the web app
// Datastrucure format:
//[auto, tele]
// tele/auto: [[type, name, id, <options>], [type, name, id, <options>]]
// Types: Plus/Minus:0 Checkbox:1 Slider:2 Dropdown:3 Text:4
function getConfigData() {
  // Example config
  var auto = [[0, "PM Ex", "pm1"],[3, "Selecty", "dd1", ["abc", "thing", "three"]]]
  var tele = [[1, "Check", "ck1"],[2, "Slid", "sl1", "40"]]
  var config = [auto, tele]
  
  
  return config
}


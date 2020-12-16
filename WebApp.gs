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
// Example config
//  var auto = [[0, "PM Ex", "pm1"],[3, "Selecty", "dd1", ["abc", "thing", "three"]]]
//  var tele = [[1, "Check", "ck1"],[2, "Slid", "sl1", "40"]]
//  var config = [auto, tele]
function getConfigData() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  // Get the data from the sheet
  var rawAutoData = getValues(spreadsheet, webpageConfig, 'B10', 'E60')
  var rawTeleDate = getValues(spreadsheet, webpageConfig, 'G10', 'J60')
  // Convert the data to the above format
  var autoData = parseRawData(rawAutoData)
  var teleData = parseRawData(rawTeleDate)
  return [autoData, teleData]
}

// Turn data from the sheet into data that the webapp can understand
function parseRawData(data) {
  var out = []
  // Interate though the rows of the sheet
  for(var i = 0; i < data.length; i++) {
    var type = getTypeID(data[i][0])
    if(type == -1) { break; }
    
    // Difrent gen for dif types
    if(type == 3) {
      var options = data[i][3].split(",")
      out.push([type, data[i][1], data[i][2], options])
    } else if (type == 2) {
      out.push([type, data[i][1], data[i][2], data[i][3]])
    } else {
      out.push([type, data[i][1], data[i][2]])
    }
  }
  
  return out
}

// Returns the id of the type of widget and -1 if not valid
function getTypeID(string) {
  string = string.toLowerCase()
  if(string == "plus/minus") {
    return 0;
  } else if(string == "checkbox") {
    return 1;
  } else if(string == "slider") {
    return 2;
  } else if(string == "dropdown") {
    return 3;
  } else if(string == "text") {
    return 4;
  }
  return -1;
}









function doGet(e) {
    var template = HtmlService.createTemplateFromFile('Page'); // It will create HTMl page from Index.html file data.
    var pageData= template.evaluate()
    .setTitle('Scoutmaster 5001') // Set Title 
     return pageData;
}


const Stack = Contentstack.Stack("bltfa9026798819a8a2", "blt726d97da73b0c30b", "js_test");

const Query = Stack.ContentType('minoli').Entry("blt55bb6b38b55be046")
Query.fetch()
   .then(function success(entry) {
       console.log(entry.get('title'));
       console.log(entry.get('body'));
       var title = document.getElementById('title');
       var body = document.getElementById('body');

       title.innerHTML += entry.get('title') + '<br />';
       body.innerHTML += entry.get('body') + '<br />';
       var str = "Read More";
       var result = str.link(entry.get('link'));
       document.getElementById("demo").innerHTML = result;
        // Retrieve field value by providing a field's uid
       console.log(entry.toJSON()); // Convert the entry result object to JSON
   }, function error(err) {
       // err object
   }); 


  
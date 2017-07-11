//server side js , access to database, network, operate system;
console.log("Hello from server side.");
//assign modules will be public
// a mechanism for you to create apis.
//create api to connect server/talk to database
// module.exports = {
//     message: "hello",
//     sayHello: function (i) {
//         console.log(i);
//     }
// }
module.exports = function (app) {
    var todos =[
        {title: "Todo1", details:"Details1"},
        {title: "Todo2", details:"Details2"},
        {title: "Todo3", details:"Details3"}
    ];

    //It's a function allows us to register an incoming get
    //the url could get dynamic data
    //if we get a static web with same name, it will show static web page.
    //everything followed api or rest will be dynamic api
    app.get('/api/todo', function (req, res) {
        res.json(todos);
    });
    //: means placeholder
    app.get('/api/todo/:index', function (req, res) {
        //everything comes from the browser is encoded in req
        var index = req.params['index']; //
        res.json(todos[index]);
    });
    //answer to the delete request;
    app.delete('/api/todo/:index', function(req,res){
        todos.splice(req.params.index,1);
        res.json(todos);
    });

};

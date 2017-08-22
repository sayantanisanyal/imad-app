var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var app = express();
app.use(morgan('combined'));

var config={
    user:'sayantanisanyal21',
    database:'sayantanisanyal21',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:'db-sayantanisanyal21-98589'
    
};

var articles={
'article-one': {
    title:'article-one',
    heading:'article-one',
    content:`<p>hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page</p>
            <p>hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page</p>
            <p>hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page</p> `,
    input: `<input type="text" id="content"  placeholder="content">`,
    submit:`<input type="submit" id="submitButton" value="Submit" `,
    ui:`<ui id="ul"> 
    <li> name1</li>
    <li> name2</li>
    <li> name3</li>
    </ui>`
},
 'article-two' : {  
    title:'article-two',
    heading:'article-two',
    content:`<p>hello everyone this is my second web page hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page</p>`},
            
'article-three' : {  
    title:'article-three',
    heading:'article-three',
    content:`<p>hello everyone this is my third web page hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page hello everyone this is my first web page</p>
             `
}
};

function createTemplate(data){
    
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var input=data.input;
    var submit=data.submit;
    var ui=data.ui;
var htmlTemplate=`
<html>
    <head>
        <script type="text/javascript" src="/ui/main.js" > </script>
         <link href="/ui/style.css" rel="stylesheet" />
         <meta name="viewport" content="width=device-width, initial scale=1" />
        <title>${title}</title>
        <style>
            
        </style>
    </head>
    <body>
        <div class='container'>
        <div>
            <a href="/" >Home</a>
        </div>
        <div>
            ${heading}
        </div>
        <div>
            ${content}
        </div>
        <div>
        ${input}
        
        ${submit}
        <br/>
        <ui id="ul">
        <li>name1</li>
        </ui>
        </div>
        </div>
    </body>
</html>`;

return htmlTemplate;
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool= new Pool(config);
app.get('/test-db',function(req,res){
    //make a select request
    //return the response
    pool.query('SELECT * FROM test',function(err,result){
      if(err)
      {
          res.status(500).send(err.toString());
      }else
      {
          res.send(JSON.stringyfy(result));
      }
    });
});

 var counter=0;
app.get('/counter', function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

var names=[];
app.get('/submit-name/',function(req,res){
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});




app.get('/:articleName',function(req,res){
    //var articleName= article-one
    //articles[articleName]={} content for object article-one
           var articleName= req.params.articleName;
     res.send(createTemplate(articles[articleName]));
});

var contents=[];
app.get('/submit-content/',function(req,res){
    var content=req.query.content;
    contents.push(content);
    res.send(JSON.stringify(contents));
    
});

//app.get('/article-two',function(req,res){
  //  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
//});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

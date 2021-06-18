var http=require("http")
http.createServer(abc).listen(4000)


function abc(req,res)
{
let fs=require("fs")
let str=fs.readFileSync("build/index.html","utf-8")
res.end(str)
}
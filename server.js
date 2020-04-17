const http = require("http");
const fs = require("fs");
const path = require("path");
//criando rotas com htpp
http
  .createServer((req, res) => {
    const file = req.url === "/" ? "index.html" : req.url;
    const filePath = path.join(__dirname, 'public', file)
    const extname = path.extname(filePath)
    
    const allowedFileTypes = ['.html', '.css', '.js']
    const allowed = allowedFileTypes.find(intem => intem === extname)

    if(!allowed) return

    fs.readFile(
      filePath,
      (err, content) => {
        if (err) throw err;
        res.end(content);
      }
    );

    // if(req.url === '/'){
    //   fs.readFile(
    //     path.join(__dirname, 'public', 'index.html'),
    //     (err, content) =>{
    //       if(err) throw err
    //       res.end(content)
    //     }
    //   )
    // }

    // if(req.url === '/'){return res.end('<h1>Você está na página inicial</h1>')}
    // if(req.url === '/contato'){return res.end('<h1>Você está na página de contato</h1>')}
  })
  .listen(3330, () => console.log("Server is running"));

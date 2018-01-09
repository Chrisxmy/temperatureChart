const path = require('path')
const express = require('express')

var router = express.Router();

/* GET home page. */


const data = require("./data.json")
router.post('/test', function(req, res, next) {
  res.header("application/text;charset=utf-8")
  res.json({
    AppendDate:data
  })
});



module.exports = {
  router:router,
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, 'index.html')
    const publicPath = express.static(path.join(__dirname, 'public'))

    app.use('/public', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}

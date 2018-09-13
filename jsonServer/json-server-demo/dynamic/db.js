//引入mockjs文件
let Mock  = require('../node_modules/mockjs');
let Random = Mock.Random;


module.exports = function() {
  var data = { 
    index:{
         code:"0",
        message:"ok",
        total:"100",
        page_size:"6",
      data: [],
      
      
    }
  };


  
  var images = [1,2,3].map(x=>Random.image('200x100', Random.color(), Random.word(2,6)));

      data.index.data.push({
        "goodsId":"0",
        "spanSize":"4",
        "banners":[
         images.slice(0,Random.integer(1,3)),
        ]

    })

        for (var i = 0; i < 10; i++) {
      
    var content = Random.cparagraph(0,10);
    
    data.index.data.push( Mock.mock( {
         "goodsId": i,
         "text":Random.cword(2,8),
          "images": Random.image('300x250', Random.color(),Random.word(2,6)),
           'spanSize|1':['2','4'] 
      
    }))
  }
  
  for (var i = 0; i < 10; i++) {
      
    var content = Random.cparagraph(0,10);
    
    data.index.data.push({
         "id": i,
         "name":Random.cword(2,5),
         "email":Random.email(),
         "phone":Random.integer(10000000000,19999999999),
         "password":Random.integer(10000,19999999999),
        "title": Random.cword(8,20),
        "desc": content.substr(0,40),
        "tag": Random.cword(2,6),
        "views": Random.integer(100,5000),
        "images": images.slice(0,Random.integer(1,3))
    })
  }

   

  return data
}
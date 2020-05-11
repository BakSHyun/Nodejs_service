var fs =require('fs');

// readfilesync

var result = fs.resdFileSync('test.html','utf8',function(err,result){
  console.log(result);
  console.log(err);
});

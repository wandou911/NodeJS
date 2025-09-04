const fs = require('fs');

fs.appendFile('./座右铭.txt', '择其善者而从之,其不善者而改之', err=> {
	if(err){
		console.log('写入失败');
		return;
	}
	console.log('追加写入成功');
});
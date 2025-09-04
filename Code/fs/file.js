const fs = require('fs');
// fs.writeFile('./座右铭.txt', '三人行,则必有我师焉', err => {
// 	if(err){
// 		console.log('写入失败');
// 		return;
// 	}
// 	console.log('写入成功');
// })

fs.writeFileSync('./data.txt', 'test');
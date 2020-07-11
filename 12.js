//重构路由代码
const server=require('./server.js')
const router=require('./router.js');
const handler=require('./handler.js');

var handle={};
handle['/']=handler.home;
handle['/home']=handler.home;//home方法
handle['/review']=handler.review;
handle['/api/v1/records']=handler.api_records;
server.startServer(router.route,handle);//启动服务时传路由函数，以及各路由处理对象 
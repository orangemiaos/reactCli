function connect(target) {
    target.prototype.getDecorator = ()=>{
        console.log('我是Decorator');
    };
}
export default connect;

var React= require('react');
var ReactDOM= require('react-dom');
var {hashHistory, Route, Router, IndexRoute} =require('react-router');
var MovieBox=require('./component/MovieBox');
var NavBar=require('./component/NavBar');
var About=require('./component/About');
var Home=require('./component/Home');
var MyFavourites=require('./component/MyFavourites');



var MainComponent=React.createClass({

render: function(){
  return(
    <div>
    <NavBar />
    {this.props.children}
    </div>
  );
}
});

ReactDOM.render
(<Router history={hashHistory}>
<Route path="/"component={MainComponent}>
    <IndexRoute component={Home}/>
    <Route path="/home"component={Home}/>
    <Route path="/about/:value"component={About}/>
    <Route path="/moviebox"component={MovieBox}/>
    <Route path="/myfavourites"component={MyFavourites}/>
    </Route>
</Router>, document.getElementById('app1'));

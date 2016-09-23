var React= require('react');
var ReactDOM= require('react-dom');
var ChildComponent=require('./ChildComponent');
var Child2=require('./Child2');
var $=require('../vendor/jquery');

var MovieBox=React.createClass({


  getInitialState:function(){

  return ({ Data:[]});
},


update:function(a){
  var t=a;
  var url="http://www.omdbapi.com/?s="+t;

$.ajax({
     url: url,
     dataType: 'json',
     cache: false,
     success: function(temp) {
       this.setState({Data:temp.Search});
     }.bind(this),
   });


},
  render: function(){
    return (
      <div><br/><br/><br/><br/><br/>
      <h2>Hello Muthu</h2>
      <ChildComponent data={this.update} />
      <Child2 data1={this.state.Data}/>
        </div>

    );
  }

});

module.exports=MovieBox;

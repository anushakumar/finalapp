var React= require('react');
var e="";


var ChildComponent=React.createClass({



  change:function(event){
   e=event.target.value;
  },
  handle:function(){
    {this.props.data(e)}
  },

  render: function(){
    return (
      <div>
      Movie Name:<input type="text"  onChange={this.change} />
        <button type="button" onClick={this.handle} >Search</button>
        </div>

    );
  }

});
module.exports=ChildComponent;

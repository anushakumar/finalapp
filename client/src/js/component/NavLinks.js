var React=require('react');
var {Link} =require('react-router');




var NavLinks=React.createClass({
  render:function(){
    return <Link{...this.props} activeClassName="active"/>

  }
})
module.exports=NavLinks;

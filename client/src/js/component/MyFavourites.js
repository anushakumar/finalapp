var React =require('react');
var Display=require('./Display.js');

var MyFavourites =React.createClass({

  getInitialState: function(){
    return ({data:[]})

  },


  //showResult Method
  showResult: function(response) {

    this.setState({
      data: response
    });
  },
  //making ajax call to get data from server
  getDataFromServer:function(){
    $.ajax({
      type:"GET",
      dataType:"json",
      url:"http://localhost:8080/movie/fav",
      success: function(response) {
        this.showResult(response);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

componentDidMount:function(){
  this.getDataFromServer();
},

  render:function(){
    console.log(this.state.data);

        var result = this.state.data.map(function(search) {
      return (
        <Display  searchs={search}/>

      );
    });
    return(
     <div>
      {result}
     </div>


    )
  }
});
module.exports=MyFavourites;

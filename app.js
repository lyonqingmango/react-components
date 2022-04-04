// TODO
var App = () => (
  <div>
   <h2>Welcome</h2>

    <GroceryList items={['Cucumber', 'Kale']} />
  </div>
);


class GroceryListItem extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      hover:false
    };
  }



  onHoverItem() {
    this.setState({
      hover: !this.state.hover
    });
  };

  render(){
    var style = {fontWeight: this.state.hover ? 'bold' : 'normal'};

   return (<li style={style} onMouseEnter={this.onHoverItem.bind(this)}
   onMouseLeave={this.onHoverItem.bind(this)}> {this.props.item} </li>)


  }

}
var GroceryList=(props)=>(
  <ul>
  {props.items.map(item=><GroceryListItem item={item} />)}
</ul>

)


ReactDOM.render(<App />, document.getElementById('app'))

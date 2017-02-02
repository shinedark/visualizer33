import React from 'react';
import Icons from '../Icons';


class IconPick extends React.Component {
  state = {
    displayIconPicker: false,
    icons: {
      
    },
  };

  constructor(props) {
      super(props);
      this.state = {icons: [], icon: "fa-facebook"};
      Icons.icons(function(data){

        this.setState({icons: data} );
      }.bind(this));
    }

  handleClick = () => {
    this.setState({ displayIconPicker: !this.state.displayIconPicker })
  };

  handleClose = () => {
    this.setState({ displayIconPicker: false })
  };

  handleChange = (icon) => {
    // console.log(icon);
    this.setState({ icon: icon, displayIconPicker: false });
    this.props.changeIcon(icon,this.props.iconKey);
  };

  render(){

  var icons = [];
  this.state.icons.forEach(function(icon, i){
    icons.push(<span onClick={this.handleChange.bind(this,icon)} className={"fa "+icon } key={"icon-"+ i }  ></span>);
  }.bind(this));

    return (
      <div className="icon-picker">
        <div onClick={ this.handleClick }>
          <div className={"fa "+this.state.icon} />
        </div>
        { this.state.displayIconPicker ? <div className='font-awesome-icons'>
          {icons}
        </div> : null }
      </div>
    )
  }
}

export default IconPick;


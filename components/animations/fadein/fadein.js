import React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import Flexbox from 'flexbox-react';


import './_fadeIn.scss';

const Sidebar = posed.ul({
  open: {
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: {}
});

const Item = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});

class FadeInUp extends React.Component {


    state = { isOpen: false };

    componentDidMount() {
      setTimeout(this.toggle, 1000);
    }

    toggle = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
      const { isOpen } = this.state;

      return (
        <Sidebar className="sidebar" pose={isOpen ? 'open' : 'closed'}>
          <Item className="item" />
          <Item className="item" />
          <Item className="item" />
          <Item className="item" />
        </Sidebar>
      );
    }


}
export default FadeInUp

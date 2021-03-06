'use strict';

var React = require('react/addons');
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var DropdownButton = require('react-bootstrap').DropdownButton;
var CollapsibleNav = require('react-bootstrap').CollapsibleNav;
var NavItem = require('react-bootstrap').NavItem;
var MenuItem = require('react-bootstrap').MenuItem;
var Button = require('react-bootstrap').Button;



var NavbarTop = React.createClass({

  render: function() {
    return (
      <div className='navbarhidemobilemenu'>
      <Navbar fixedTop={true} fluid={true}  toggleNavKey={0} brand='Myelin'>{/* This is the eventKey referenced */}
      <Nav navbar left>
      <DropdownButton eventKey={1} title={<i className="s s-glyph01 s-hamburger"></i>} noCaret>
          <MenuItem eventKey='1'>Home</MenuItem>
          <MenuItem eventKey='2'>About</MenuItem>
          <MenuItem eventKey='3'>Contact</MenuItem>
          <MenuItem eventKey='4'>Filter</MenuItem>
        </DropdownButton>
      </Nav>
      <Nav navbar right>
<NavItem eventKey={1} href='#'><i className="s s-glyph03 s-lock"></i></NavItem>
      </Nav>
    <CollapsibleNav eventKey={0}>   
    </CollapsibleNav>
  </Navbar>
  </div>
    );
  }

});

module.exports = NavbarTop;


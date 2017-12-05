import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar/NavBar';
import AutoCompleteExampleSimple from './NavBar/Search';
import DrawerOpenRightExample from './NavBar/Drawer';
const App = (props) => {
  const { isMobile } = props.device;

  return (
    <MuiThemeProvider>
      <div>
        <NavBar />
        <AutoCompleteExampleSimple />
        <DrawerOpenRightExample />
      </div>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  device: PropTypes.object.isRequired
};

const mapStateToProps = ({ device }) => ({ device });

export default connect(mapStateToProps)(App);

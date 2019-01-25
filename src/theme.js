import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Application from './your/entry/point';
import yourRawTheme from './wherever/is/your/theme.json';

const theme = createMuiTheme(yourRawTheme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Application />
  </MuiThemeProvider>
, document.getElementById('root'));



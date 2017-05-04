import React from 'react';
import Label from './Label';

import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    line-height: 3;
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <div id="content">
        <Label>Hello World !!</Label>
      </div>
    );
  }
}

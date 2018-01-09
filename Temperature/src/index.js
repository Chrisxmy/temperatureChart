import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.less';
import {AppContainer} from 'react-hot-loader';
import {Temperature} from "./components/temperatureChart/temperature";
import Tab from "./components/common/tab.js";

import HighChart from "./components/chart.js";


ReactDOM.render(
    <AppContainer>
     <Tab children={[1,2]}>
          <div key ="1">
             <Temperature/>
                    </div>
          <div key="2">
              <HighChart/>
          </div>
                </Tab>
    </AppContainer>,
document.getElementById('main')
)
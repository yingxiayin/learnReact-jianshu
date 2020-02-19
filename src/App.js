import React from 'react';
import {GlobalStyled} from './style';
import {GlobalIconStyled} from './statics/iconfont/iconfont';
import Header from './common/header/index';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './store';

function App() {
  return (
      <div>
        <Provider store={store}>
          <div>
            <GlobalStyled/>
            <GlobalIconStyled/>
            <BrowserRouter>
              <div>
                <Header/>
                <Route path='/' exact component={Home}/>
                <Route
                    path='/detail/:id'
                    exact component={Detail}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/write' exact component={Write}/>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      </div>
  );
}

export default App;

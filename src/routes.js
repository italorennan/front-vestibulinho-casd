import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FormInfos from './pages/FormInfos';
import FormRegistration from './pages/FormRegistration';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={FormInfos} />
        <Route path="/inscricao" component={FormRegistration} />
      </Switch>
    </BrowserRouter>
  );
}
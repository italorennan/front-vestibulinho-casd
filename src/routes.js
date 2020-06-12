import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FormRegistration from './pages/FormRegistration';
import CandidateStatus from './pages/CandidateStatus';

export default function Routes({ idCourse }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/inscricao" render={() => <FormRegistration idCourse={idCourse} />} />
        <Route path="/status" component={CandidateStatus} />
      </Switch>
    </BrowserRouter>
  );
}
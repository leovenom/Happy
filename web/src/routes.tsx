import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Mapa from './pages/Mapa';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* exact só para primeira rota */}
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={Mapa} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanage/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';
//import ArtistDetail from './components/artists/ArtistDetail';
//import ArtistCreate from './components/artists/ArtistCreate';
//import ArtistEdit from './components/artists/ArtistEdit';

//transform jsx into plain js-object
const componentRoutes = {
  component: Home,
  path: '/',
  indexRoute: { component: ArtistMain },
  childRoutes: [
    {
      path: 'artists/new',
            //cb call with module after loading
      getComponent(location, cb) {
          //system import = codesplit
        System.import('./components/artists/ArtistCreate')
                        //null is for error arg
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'artists/:id',
      getComponent(location, cb) {
        System.import('./components/artists/ArtistDetail')
          .then(module => cb(null, module.default));
      }
    },
    {
      path: 'artists/:id/edit',
      getComponent(location, cb) {
        System.import('./components/artists/ArtistEdit')
          .then(module => cb(null, module.default));
      }
    }
  ]
};

const Routes = () => {
  return (
    <Router history={hashHistory} routes={componentRoutes} />
      //TODO codesplitting the router file
      //<Route path="/" component={Home}>
        //<IndexRoute component={ArtistMain} />
        //<Route path="artists/new" component={ArtistCreate} />
        //<Route path="artists/:id" component={ArtistDetail} />
        //<Route path="artists/:id/edit" component={ArtistEdit} />
      //</Route>

    //</Router>
  );
};

export default Routes;

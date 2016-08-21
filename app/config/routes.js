
var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;
///IndexRoute viene siempre por defecto en main /
module.exports = (
  <Route path="/" component={Main}>
      <IndexRoute component={Home} /> 
  </Route>
)
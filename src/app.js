angular.module('app', ['ui.router']);

import homeTemplate from './views/home.html';
import { propertiesCtrl }  from './controllers/propertiesCtrl.js';



//configure our routes
angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    var homeState = {
        name: 'home',
        url: '/',
        template: homeTemplate

    };

    $stateProvider.state(homeState);
})
.controller('PropertiesCtrl', propertiesCtrl);


//import componentCtrl  from './components/propertyComponentController.js'



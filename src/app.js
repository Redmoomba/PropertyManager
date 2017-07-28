angular.module('app', ['ui.router']);

import homeTemplate from './views/home.html'



//configure our routes
angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    var homeState = {
        name: 'home',
        url: '/',
        template: homeTemplate

    };

    $stateProvider.state(homeState);
});

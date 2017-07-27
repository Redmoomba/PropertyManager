angular.module('app', ['ui.router']);

//configure our routes
angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    var mainState = {
        name: 'main',
        url: '/',
        templateUrl: `/src/views/main.html`
    };

    $stateProvider.state(mainState);
});

export function Test(){

}


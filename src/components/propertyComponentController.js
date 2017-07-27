function propertiesComponentController() {

}

const propertyComponent = {
    controller: propertiesComponentController,
    bindings: {
        itemProperty: `<` // two way binding
    },
    controllerAs : 'vm',
    templateUrl: `components/propertyComponent.html`
}

angular.module('app').component('propertyComponent', propertyComponent);

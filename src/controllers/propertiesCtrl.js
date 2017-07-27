function propertiesCtrl() {
    this.properties = [{
        name: 'Calera House',
        type: 'House',
        bedrooms: '3',
        baths: '2',
        address: '158 Bonnieville Dr',
        city: 'Calera',
        state: 'Al',
        zip: '35040',
        rentAmount: '875'
    }, {
        name: 'Chelsea House',
        type: 'House',
        bedrooms: '3',
        baths: '2.5',
        address: '2270 Forest Lakes Lane',
        city: 'Chelsea',
        state: 'Al',
        zip: '35147',
        rentAmount: '1600'
    }, {
        name: 'Alabaster House',
        type: 'House',
        bedrooms: '3',
        baths: '2',
        address: '101 Park Place Lane',
        city: 'Alabaster',
        state: 'Al',
        zip: '35007',
        rentAmount: '1200'
    }, {
        name: 'Gulf Shores Condo',
        type: 'Condo',
        bedrooms: '2',
        baths: '1.5',
        address: '344 E. Beach Blvd',
        city: 'Gulf Shores',
        state: 'Al',
        zip: '36542',
        rentAmount: '150'
    }];
}



angular.module('app').controller('PropertiesCtrl', propertiesCtrl);

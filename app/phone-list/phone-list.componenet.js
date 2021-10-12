angular.module('phoneList').component('phoneList', {
  templateUrl: 'app/phone-list/phone-list.template.html',
  controller: ['$http',PhoneListController]
});

function PhoneListController($http) {
  let self = this;
  $http.get('app/Data/phones.json').then(function(response){
    self.phones = response.data;
  });
  self.orderProp="age";
}



    /*------ Static Data --------- 
    this.phones = [
      {
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.',
        age: 1
      }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.',
        age: 2
      }, {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.',
        age: 3
      }
    ]; 
    --------------------------------*/
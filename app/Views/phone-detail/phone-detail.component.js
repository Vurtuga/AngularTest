angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'app/Views/phone-detail/phone-list.template.html',
    controller: ['$routeParams',
      function PhoneDetailController($routeParams) {
        this.phoneId = $routeParams.phoneId;
      }
    ]
  });
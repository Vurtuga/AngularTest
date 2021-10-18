angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'app/Views/phone-detail/phone-detail.template.html',
    controller: ['$routeParams','Phone',
      function PhoneDetailController($routeParams,Phone) {
        //Main Properties -----------------
        let self = this;

        //Event Handlers -----------------
        self.setImage = function setImage(imgUrl){
          self.mainImg = imgUrl;
        }
        self.onDblclick = function onDblclick(imageUrl) {
          alert('You double-clicked image: ' + imageUrl);
        };

        //Data Request -----------------
        self.phone = Phone.get({phoneId: $routeParams.phoneId})
      }
    ]
  });

/*   function PhoneDetailController($http,$routeParams) {
    //Main Properties -----------------
    let self = this;
    let phoneId = $routeParams.phoneId;

    //Event Handlers -----------------
    self.setImage = function setImage(imgUrl){
      self.mainImg = imgUrl;
    }
    self.onDblclick = function onDblclick(imageUrl) {
      alert('You double-clicked image: ' + imageUrl);
    };

    //Data Request -----------------
    $http.get('app/Data/phones.json').then(function(response){
      self.phone = response.data[phoneId-1];
    });
  } */
'use strict';

var app = angular.module('myApp')


app.controller('contactCtrl', function($scope, $http, $rootScope, MetaInformation, $window) {




  //setting an animation class for this specific page
  $scope.pageClass = 'page-contact';



  $scope.success = false;
  $scope.error = false;


  // create a blank object to hold our form information
  // $scope will allow this to pass between controller and view
$scope.contactMobileOutsideLink = function(){
  $window.open('http://www.mister.nyc/', '_blank');
}


$scope.formData = {};

$scope.contactSelect = [
{"field": "SUBJECT"},
{"field": "GENERAL"},
{"field": "JOBS"},
{"field": "COLLECTIONS"},
{"field": "PRESS"}
]


// $scope.formData.subject = subject.toUpperCase();
// console.log($scope.formData.subject);

  // process the form
  $scope.processForm = function() {

    // $scope.contactForm.$invalid = true;


    $scope.formData.mandrill_subject = $scope.formData.subject.toUpperCase() + " REQUEST FROM ANGELSANCHEZUSA.COM";



     var mandrill = {
          "key": "kgS1hoQnJBhbLYF0v9jYXQ",
          "message": {
              "html": $scope.formData.body,
              "text": $scope.formData.body,
              "subject": $scope.formData.mandrill_subject,
              "from_email": $scope.formData.email,
              "from_name": $scope.formData.name,
              "to": [
                  {
                      "email": "info@angelsanchezusa.com",
                      "name": "ANGELSANCHEZUSA.COM",
                      "type": "to"
                  }
              ],
              "headers": {
                  "Reply-To": $scope.formData.email
              }

          }
      }




    $http({
      method  : 'POST',
      dataType: 'JSON',
      url     : 'https://mandrillapp.com/api/1.0/messages/send.json',
      data    : mandrill  // pass in data as strings
     })


    .success(function (data) {

        	$scope.success = true;
        	$scope.formdata = {};
          $scope.hideContact = true;
          // $scope.formData.name ={};
          // $scope.formData.email ={};
          // $scope.formData.subject ={};
          // $scope.formData.body ={};

    })
    .error(function (data) {
      	$scope.error = true;
        $scope.hideContact = true;
    });
  };


    // jQuery(".form-control-dropdown").select2({
    //   minimumResultsForSearch: Infinity,
    //   placeholder: "SUBJECT"
    // });
    $rootScope.pageLoading = false;






//....mobile
$scope.contactMobileOutsideBackLink = function(){

  $window.location.reload();
}

















});

//
// app.directive("validateContact", function(){
//   return{
//     restrict: "A",
//     // replace: true,
//     link: function(element, scope, attrs){
// scope.contactForm=angular.element('form');
//
//
//
//       // if(element.email.$error.required){
//       //   alert('email required')
//       // }
//       // if(contactForm.$error.email){
//       //   alert('email error')
//       // }
//
//       console.log(element.attremail.$touched);
//     }
//   }
// });

// app.directive("selectDirective", function(){
//   return{
//     restrict: "EAC",
//     // replace: true,
//     templateUrl: "contact/select.html",
//     link: function(element, scope, attrs){
//       jQuery(document).ready(function() {
//         jQuery(".form-control-dropdown").select2();
//       });
//
//     }
//   }
// });

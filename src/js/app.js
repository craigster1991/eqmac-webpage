/**
 * Created by romanskisils on 30/11/2016.
 */

(function () {
  var dependencies = [
    'duScroll',
    'rzModule'
  ]

  var app = window.angular.module('eqMac', dependencies)

  app.config([
    '$locationProvider',
    function (
      $locationProvider
    ) {
      $locationProvider.hashPrefix('')
    }
  ])

  app.run(['$rootScope', '$timeout', '$document', 'RemoteDataService', function ($rootScope, $timeout, $document, RemoteDataService) {
    $rootScope.animateToDiv = function (id) {
      $timeout(function () {
        var someElement = window.angular.element(document.getElementById(id))
        $document.scrollToElement(someElement, 0, 1000)
      })
    }

    console.log(window.location.hash)
    if (window.location.hash === '#/donate') {
      $rootScope.animateToDiv('donate')
    }

    $rootScope.download = function () {
      RemoteDataService.download()
    }
  }])
})()

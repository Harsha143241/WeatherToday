var app = angular.module('weatherToday', []);
app.controller('mainWeatherCtrl', ['$scope', '$http', function ($scope, $http) {

    var keys = 'f80becd14221a863141d20e0a3eea553'
    console.log($scope.cityName);
    
    //Get Current Data
    $scope.getWeatherDetails = function () {


        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $scope.cityName +'&appid=f80becd14221a863141d20e0a3eea553'
        }).then(function successCallback(response) {
           
            $scope.currentWeather = response.data;
            $scope.currentWeather.main.temp;
            $scope.currentWeather.main.temp_max;
            $scope.currentWeather.main.temp_min;
            $scope.currentWeather.weather[0].description;
            $scope.currentWeather.wind.speed;
        }, function errorCallback(response) {
            console.log(response);
        });

        $http({
            method: 'GET',
                 //http://api.openweathermap.org/data/3.0/triggers/5852816a9aaacb00153134a3      
            url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + $scope.cityName +'&cnt=10&units=celsius&appid=f80becd14221a863141d20e0a3eea553'
        }).then(function successCallback(response) {
           
            $scope.forecastData = response.data;
            console.log($scope.forecastData);
            $scope.forecastData.city.name 
            $scope.forecastData.list[0].temp.day;
            $scope.forecastData.list[0].temp.max;
            $scope.forecastData.list[0].temp.min;
            $scope.forecastData.list[0].weather[0].description;
        }, function errorCallback(response) {
            console.log(response);
        });

        $scope.showSearchData = true;
    }

}])
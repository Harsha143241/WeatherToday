var app = angular.module('weatherToday', []);
app.filter('roundUp', function () {
    return function (input) {
        return Math.ceil(+input);
    }
});
app.controller('mainWeatherCtrl', ['$scope', '$http', function ($scope, $http) {

    var keys = 'f80becd14221a863141d20e0a3eea553'
    console.log($scope.cityName);



    //Get Current Data
    $scope.getWeatherDetails = function () {

            $http({
                method: 'GET',
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $scope.cityName + '&appid=f80becd14221a863141d20e0a3eea553&units=metric'
            }).then(function successCallback(response) {

                $scope.currentWeather = response.data;
                console.log($scope.currentWeather)
                $scope.currentWeather.main.temp;
                $scope.currentWeather.main.temp_max;
                $scope.currentWeather.main.temp_min;
                $scope.currentWeather.weather[0].description;
                $scope.currentWeather.wind.speed;

                if ($scope.currentWeather.weather[0].icon === '01d' || '01n') {
                    $scope.WeatherImg = 'cloudy-day-3.svg'
                } else if ($scope.currentWeather.weather[0].icon === '02d' || '02n') {
                    $scope.WeatherImg = 'cloudy.svg'
                } else if ($scope.currentWeather.weather[0].icon === '03d' || '03n') {
                    $scope.WeatherImg = 'cloudy.svg'
                } else if ($scope.currentWeather.weather[0].icon === '04d' || '04n') {
                    $scope.WeatherImg = 'cloudy.svg'
                } else if ($scope.currentWeather.weather[0].icon === '09d' || '09n') {
                    $scope.WeatherImg = 'rainy-1.svg'
                } else if ($scope.currentWeather.weather[0].icon === '10d' || '10n') {
                    $scope.WeatherImg = 'rainy-3.svg'
                } else if ($scope.currentWeather.weather[0].icon === '11d' || '11n') {
                    $scope.WeatherImg = 'rainy-3.svg'
                } else if ($scope.currentWeather.weather[0].icon === '13d' || '13n') {
                    $scope.WeatherImg = 'snow-1.svg'
                } else if ($scope.currentWeather.weather[0].icon === '50d' || '50n') {
                    $scope.WeatherImg = 'cloudy.svg'
                }

            }, function errorCallback(response) {
                console.log(response);
            });

            $http({
                method: 'GET',
                //http://api.openweathermap.org/data/3.0/triggers/5852816a9aaacb00153134a3      
                url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + $scope.cityName + '&units=metric&cnt=10&units=celsius&appid=f80becd14221a863141d20e0a3eea553'
            }).then(function successCallback(response) {

                $scope.forecastData = response.data;
                console.log($scope.forecastData)
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
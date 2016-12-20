/**
 * Created by Seth on 12/20/2016.
 */
angular.module('directivePractice')
    .directive('lessonHider', function(){
        return {
            restrict: 'E',
            templateUrl: './lessonHider.html',
            scope: {
                lesson: '=',
                dayAlert: '&'

            },
            link: function( scope, element, attributes){
                scope.getSchedule.then(function(response){
                    scope.schedule = response.data;

                    scope.schedule.forEach(function(scheduleDay){
                        if(scheduleDay.lesson === scope.lesson){
                            scope.lessonDay = schedule.weekday;
                            element.css('text-decoration', 'line-through');
                            return;
                        }
                    })
                })
            },
            controller: function($scope, lessonService){
                $scope.getSchedule = lessonService.getSchedule();
            }
        }
    })

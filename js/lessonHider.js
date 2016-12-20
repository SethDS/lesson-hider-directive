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
                dayAlert: '&',
                checked:'&'

            },
            link: function( scope, element, attributes){
                var marked = false;
                scope.getSchedule.then(function(response){
                    scope.schedule = response.data;

                    scope.schedule.forEach(function(scheduleDay){
                        if(scheduleDay.lesson === scope.lesson){
                            scope.lessonDay = scheduleDay.weekday;
                            element.css('text-decoration', 'line-through')
                            marked = true;

                        }
                    })
                })

                scope.strike = function(){
                    if(marked){
                        element.css('text-decoration', 'none');
                        marked = false;
                    }
                    else {
                        element.css('text-decoration', 'line-through');
                        marked = true;
                    }

                }

            },
            controller: function($scope, lessonService){
                $scope.getSchedule = lessonService.getSchedule();
            }
        }
    })

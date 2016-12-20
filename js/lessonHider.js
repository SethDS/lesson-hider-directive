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

            },
            link: function( scope, element, attributes){
            }
        }
    })

/**
 * Created by Seth on 12/20/2016.
 */
angular.module('directivePractice').controller('lessonCtrl', function($scope, lessonService){
$scope.test = "Two-way data binding!";
$scope.announceDay = function(lesson, day){
    alert(lesson + ' is active on ' + day + '.');
};

$scope.lessons = ['Services',
        'Routing',
        'Directives',
        'Review',
        'Firebase',
        'No server project',
        'Node',
        'Express',
        'Mongo'];
});
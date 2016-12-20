/**
 * Created by Seth on 12/20/2016.
 */
angular.module('directivePractice').service('lessonService', function($http){
this.getSchedule = function(){
    return $http.get('schedule.json');
}
});

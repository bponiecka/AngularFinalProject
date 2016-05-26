import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './home.routes';

//directives
import userInput from './directives/user_input';

//Controller
import TabController from './tab.controller';

export default angular.module('app.home',[uirouter])
.config(routing)
.controller('TabController',TabController)
.directive('userInput', userInput)
.name;
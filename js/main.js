angular.module('myApp',[])
.controller('SignUpController',function($scope){
	$scope.userdata=  {};

	$scope.submitForm = function(){
		console.log($scope.userdata);
		if($scope.SignUpForm.$invalid)//这里曾经出现错误：SignUpForm是form表单的名字
			console.log('错误');
		else
			console.log('成功');
	}
})
.directive('compare',function(){
	var o = {};
	o.strict='AE';
	o.scope = {
		orgText:'=compare'
	}
	o.require='ngModel';
	o.link=function(sco,ele,att,con){
		con.$validators.compare=function(v){
			return v == sco.orgText;
		}
		sco.$watch('orgText',function(){
			con.$validate();
		})
	}
	return o;
})
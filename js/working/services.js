//(function(){
var app = angular.module('servicesApp',[]);

app.controller('servicesCtrl',function($scope,policyFactory,$modal,$log,$cookies){
//$cookies.set('key','others');
	
	/* $('.test_design').niceSelect();
	$('#first').carouseller({
					scrollSpeed: 850,
					autoScrollDelay: -1800,
					easing: 'easeOutBounce'
				});
	$('#third').carouseller({ 
					scrollSpeed: 800,
					autoScrollDelay: 1600,
					easing: 'linear'
				});
	$('#top-project').carouseller({ 
					scrollSpeed: 800,
					autoScrollDelay: 1600,
					easing: 'linear'
				}); */
	//$(fourd).carouseller();
	$scope.user = {
        name: '',
        mobileno: '',
		email:'',
		msg:''
    }
 $scope.userQuery = function(user) {
        console.log(user);
        if (user.name == "") {
			$scope.msgs = "please provide your name";
			$scope.open();
        } else if (user.mobileno == "") {
			$scope.msgs = "please provide your Mobile Number";
			$scope.open();
          
        }else if(user.email ==""){
			$scope.msgs = "please provide your Email address";
			$scope.open();
		}else if(user.msg ==""){
			$scope.msgs = "please provide message";
			$scope.open();
		} else if (user.name != "" && user.mobileno != "" && user.email != "" && user.msg !="") {
            var requestParam = {
                name: user.name,
                number: user.mobileno,
				email: user.email,
				msg:user.msg
            };
            policyFactory.addClientQuery(requestParam, function(success) {
                var status = success.data.status;
                if (status == "True") {
					$scope.msgs = "You will intimate you soon";
					angular.element("input").val(null);
					angular.element("textarea").val(null);
                    $scope.open();
                }
            }, function(error) {	
                conole.log(error);
				$scope.msgs = "Sorry! we are unable to process your request";
                    $scope.open();
            });
        }

    };
	
	
	
		$scope.open = function (size) {
    var modalInstance;
    var modalScope = $scope.$new();
    modalScope.ok = function () {
            modalInstance.close(modalScope.selected);
    };
    modalScope.cancel = function () {
            modalInstance.dismiss('cancel');
    };      
    
    modalInstance = $modal.open({
      template: '<my-modal></my-modal>',
      size: size,
      scope: modalScope
      }
    );

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

});

//});
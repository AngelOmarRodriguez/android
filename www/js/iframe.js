/*
angular.module('idModule', [])
    .controller('idcontroller', ['$scope', function($scope) {
	
      $scope.index = function() {
        $scope.urlIndex = "http://www.kenworthdeleste.com.mx/KwEste/index.html";
      };
	  
	  $scope.unidades = function() {
        $scope.urlUnidades = "http://www.kenworthdeleste.com.mx/KwEste/index.html#section-feature";
      };

      $scope.index();
    }]);
*/
function crearFrame() {
    var testFrame = document.createElement("IFRAME");
    testFrame.id = "testFrame";
    testFrame.src = "http://www.kenworthdeleste.com.mx";
    document.body.appendChild(testFrame);
}

function cambiar(){
	
	var cambio = document.getElementById('testFrame');
	cambio.src="http://www.kenworthdeleste.com.mx/KwEste/index.html#section-feature";
    document.body.appendChild(testFrame);

}

$(document).ready(function(){
    var cambio = document.getElementById('testFrame');
	cambio.src="http://www.kenworthdeleste.com.mx/";
    document.body.appendChild(testFrame);
});


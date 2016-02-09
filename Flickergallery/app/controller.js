flickrApp.controller ("FlickController",['$scope', 'flickrService','$routeParams', function($scope,flickrService, $routeParams){
		
	 $scope.search = function () {
		
		flickrService.searchDetails($scope.searchTerm, $scope.page).success(function(response){		
			$scope.imageList = response;
			
			// initial image index
			$scope._Index = 0;

			// if a current image is the same as requested image
			$scope.isActive = function (index) {
				return $scope._Index === index;
			};
			
			// show prev image
			$scope.showPrev = function () {
				$scope._Index = ($scope._Index > 0) ? --$scope._Index : 0;
			};

			// show next image
			$scope.showNext = function () {
				$scope._Index = ($scope._Index < $scope.imageList.photos.photo.length - 1) ? ++$scope._Index : 0 ;				
			};

			// show a certain image
			$scope.showPhoto = function (index) {
				$scope._Index = index;
			};	

						
		});
	 }
	 
	$scope.page = 1;
	$scope.nextPage = function() {
		$scope.page += 1;
		$scope.search();
	}
	$scope.prevPage = function() {
		$scope.page -= 1;
		$scope.search();
	}
	
	 
}]);

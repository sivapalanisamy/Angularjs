flickrApp.factory("flickrService", ['$http',function( $http){ 
	var obj = {};
	
    obj.searchDetails = function(searchTerm, page){ 
		
        return $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e147517c563c29ace0b76ac3146cfcf4&tags=' + searchTerm +'&per_page=10&page=' + page +'&format=json&nojsoncallback=1')
		.success(function(data){
			return data;
		});		
    }
 return obj;
}])
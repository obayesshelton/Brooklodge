function initialize() {

	var blcc = new google.maps.LatLng(53.52334, -0.927260);

	var myOptions = {
<<<<<<< HEAD
          center: new google.maps.LatLng(53.523676, -0.92600),
          zoom:16,
=======
          center: new google.maps.LatLng(53.523676, -0.927207),
          zoom:17,
>>>>>>> 9e18735d586b1f126232ef57e4bbbba8f1b46876
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: true,
        };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
            myOptions);
  

   var marker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: blcc,
    title:"Brook Lodge Country Cottage"
  });
  google.maps.event.addListener(marker, 'click', toggleBounce);


		function toggleBounce() {

		  if (marker.getAnimation() != null) {
		    marker.setAnimation(null);
		  } else {
		    marker.setAnimation(google.maps.Animation.BOUNCE);
		  }
		}



}



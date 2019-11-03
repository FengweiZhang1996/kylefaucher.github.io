$('document').ready(function(){

	$('#sign-out').on('click', function(){
		firebase.auth().signOut().then(function() {
		// Sign-out successful.
		}).catch(function(error) {
		  // An error happened.
		  console.log(error);
		});
	});

	//redirect on signup/signin
	firebase.auth().onAuthStateChanged(function(user) {
	  if (!user) {
	  	window.location = "../index.html";
	  }
	  else{
	  	$('#curUser').html(firebase.auth().currentUser.email);
	  }
	});

});

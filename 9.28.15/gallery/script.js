//array with name images
var imageNames = ['fall.jpg', 'winter.jpg', 'field.jpg', 'desert.jpg'];

var imageIndex = 0;
//ON LOAD give image proper source
//$('.image-wrapper img').attr('src', "images/" + imageNames[0]);

//add click handler
$('.change-image').on('click', changeImage);

function changeImage() {
	$('.image-wrapper img').attr('src', 'images/' + imageNames[imageIndex]);
	//every time we run this 

	imageIndex++;
	if(imageIndex == 4){
		imageIndex= 0;
	}
	console.log(imageIndex);
}

changeImage();
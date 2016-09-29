

//Data URL base64
function takephoto()
{
navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL
});
}
function onSuccess(imageData) {
    var image = document.getElementById('myImageUrl');
    image.src = "data:image/jpeg;base64," + imageData;
    document.getElementById("hiddenimagepath").innerHTML = imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}


//Take FILE_URL
function takephotoURL()
{
navigator.camera.getPicture(onURLSuccess, onURLFail,
{ quality : 75,
  destinationType : Camera.DestinationType.FILE_URI,
  mediaType :Camera.MediaType.PICTURE,
  sourceType : Camera.PictureSourceType.CAMERA,
  allowEdit : true,
  encodingType: Camera.EncodingType.PNG,
  targetWidth: 100,
  targetHeight: 100,
  saveToPhotoAlbum: true }
    );
}
function onURLSuccess(imageURI) {
    var image = document.getElementById('myImageUrl');
    image.src = imageURI;
    document.getElementById("hiddenimagepath").innerHTML = imageURI;
}

function onURLFail(message) {
    alert('Failed because: ' + message);
}


//From Library 

function choosePhoto()
{
navigator.camera.getPicture(onlibSuccess, onlibFail,
{ quality : 75,
  destinationType : Camera.DestinationType.FILE_URI,
  sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
  allowEdit : true,
  mediaType :Camera.MediaType.PICTURE,
  encodingType: Camera.EncodingType.JPEG,
  targetWidth: 100,
  targetHeight: 100,
  popoverOptions: CameraPopoverOptions,
  saveToPhotoAlbum: false }
    );
}
function onlibSuccess(imageURI) {
    var image = document.getElementById('myImageUrl');
    image.src = imageURI;
}

function onlibFail(message) {
    alert('Failed because: ' + message);
}


//Saveed Photot
function choosePhotoAlbum()
{
navigator.camera.getPicture(onalbumSuccess, onalbumFail,
{ quality : 75,
  destinationType : Camera.DestinationType.FILE_URI,
  sourceType : Camera.PictureSourceType.SAVEDPHOTOALBUM,
  allowEdit : true,
  encodingType: Camera.EncodingType.JPEG,
  mediaType :Camera.MediaType.PICTURE,
  targetWidth: 100,
  targetHeight: 100,
  popoverOptions: CameraPopoverOptions,
  saveToPhotoAlbum: false }
    );
}
function onalbumSuccess(imageURI) {
    var image = document.getElementById('myImageUrl');
    image.src = imageURI;
}

function onalbumFail(message) {
    alert('Failed because: ' + message);
}






// A button will call this function
  //
 // function getPhoto() {
 //  // Retrieve image file location from specified source
 //  navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
 //    destinationType: destinationType.FILE_URI });
 //  }




function uploadPhoto() {
    // var img = document.getElementById('image');
    // var imageURI = img.src;
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
    options.mimeType = "image/jpeg";
    var params = new Object();
    options.params = params;
    options.chunkedMode = false;
    var ft = new FileTransfer();
    ft.upload(imageURI, "http://envisiongh.net/rogha2016/upload-test.php", win, fail,
        options);
}



function win(r) {
    console.log("Code = " + r.responseCode);
    console.log("Response = " + r.response);
    alert("Response =" + r.response);
    console.log("Sent = " + r.bytesSent);
}

function fail(error) {
    alert("An error has occurred: Code = " + error.code);
    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
}
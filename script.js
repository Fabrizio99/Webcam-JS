let picture;

function setEvents(){
    if(!takePictureButton || !takePictureButton || !closeCameraButton || !deletePicture || !savedPicture){
        alert('Ocurrió un error');
        return;
    }
    cameraButton.addEventListener('click',cameraEvent);
    takePictureButton.addEventListener('click',takePictureEvent);
    closeCameraButton.addEventListener('click',closeCameraEvent);
    deletePicture.addEventListener('click',deletePictureEvent);
    savePicture.addEventListener('click',closeCameraEvent);
}

function cameraEvent(){
    webcam.start().then(result =>{
        mediaContainer.style.display = 'block';
     }).catch(err => {
         alert(err.name == 'NotAllowedError'?'Permitir acceso a la cámara':`Error: ${err.name}`)
     });
}

function takePictureEvent(){
    picture = webcam.snap();
    cameraContainer.style.zIndex  = '0';
    pictureContainer.style.zIndex = '1';
}
function closeCameraEvent() {
    webcam.stop();
    mediaContainer.style.display  = 'none';
    cameraContainer.style.zIndex  = '1';
    pictureContainer.style.zIndex = '0';
    
    if(picture==null)   return;
    savedPicture.src = picture;
}

function deletePictureEvent(){
    picture                       = null;
    cameraContainer.style.zIndex  = '1';
    pictureContainer.style.zIndex = '0';
}

const webcamElement     = document.getElementById('webcam');
const canvasElement     = document.getElementById('canvas');
const snapSoundElement  = document.getElementById('snapSound');
const cameraButton      = document.getElementById('cameraButton');
const takePictureButton = document.getElementById('buttonTakePicture');
const closeCameraButton = document.getElementById('closeButton');
const mediaContainer    = document.getElementById('mediaContainer');
const cameraContainer   = document.getElementById('cameraContainer');
const pictureContainer  = document.getElementById('pictureContainer');
const deletePicture     = document.getElementById('deletePicture');
const savePicture       = document.getElementById('savePicture');
const savedPicture      = document.getElementById('savedPicture');
const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);

setEvents();
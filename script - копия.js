var ImgList = document.getElementsByClassName('gallery-list-main')[0]; // Блок списка миниатюр

window.onload = function() {
	var countImage = 1; // счётчик кол-ва картинок

  function loadImageList(countImage){
    var newImg = new Image();
    newImg.src = 'img/photo'+ countImage +'.jpg';
    newImg.onload = function(){
      // if(newImg.width >= newImg.height){
      //   ImgList.innerHTML += '<div class="gallery-list-item"><img src="img/photo' + countImage + '.jpg" width="100px"></div>';
      // }
      // else{
      //   ImgList.innerHTML += '<div class="gallery-list-item"><img src="img/photo' + countImage + '.jpg" height="100px"></div>';
      // }
      /*if(newImg.width >= newImg.height){*/
        // ImgList.innerHTML += '<img class="gallery-list-item" src="img/photo' + countImage + '.jpg" width="100px">';
        ImgList.innerHTML += '<div class="gallery-list-item" style="background: url(img/photo' + countImage + '.jpg); background-size: cover; background-position: center;" width="100px">';
      /*}
      else{
        ImgList.innerHTML += '<img class="gallery-list-item" src="img/photo' + countImage + '.jpg" height="100px">';
      }*/
      countImage++;
      loadImageList(countImage);
    } 
  }

  loadImageList(countImage);

}

function Photos() {
    document.getElementById("main__content").innerHTML = "<h2>Galeria</h2><div class=wrapper__img><center><img class=slider__img src=img/image1-min.jpg> <img class=slider__img src=img/image2-min.jpg> <img class=slider__img src=img/image3-min.jpg></center></div><style>@media (max-width:600px){.page{grid-template-rows:minmax(200px,201px) minmax(100px,101px) minmax(950px,400px) minmax(180px,181px)}.slider__img{width:400px;height:400px}}</style><style>.wrapper_img{display:flex;justify-content:center}.slider__img{width:250px;height:250px}</style>";

    document.title = "Galeria";

}
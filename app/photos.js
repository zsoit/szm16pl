function Photos() {
    document.getElementById("main__content").innerHTML = "<h2>Galeria</h2><br><div class=wrapper__home><style>*{box-sizing:border-box}body{font-family:Verdana,sans-serif;margin:0}.mySlides{display:none}img{vertical-align:middle}.slideshow-container{max-width:500px;position:relative;margin:auto}.next,.prev{cursor:pointer;position:absolute;top:50%;width:auto;padding:16px;margin-top:-22px;color:red;background-color:#fff;border-radius:100%;border:1px solid #000;font-weight:700;font-size:18px;transition:.6s ease;border-radius:0 3px 3px 0;user-select:none}.next{right:0;border-radius:3px 0 0 3px}.next:hover,.prev:hover{background-color:rgba(0,0,0,.8)}.text{color:#f2f2f2;font-size:15px;padding:8px 12px;position:absolute;bottom:8px;width:100%;text-align:center}.numbertext{color:#f2f2f2;font-size:12px;padding:8px 12px;position:absolute;top:0}.dot{cursor:pointer;height:15px;width:15px;margin:0 2px;background-color:#bbb;border-radius:50%;display:inline-block;transition:background-color .6s ease}.active,.dot:hover{background-color:#717171}.fade{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;animation-name:fade;animation-duration:1.5s}@-webkit-keyframes fade{from{opacity:.4}to{opacity:1}}@keyframes fade{from{opacity:.4}to{opacity:1}}@media only screen and (max-width:300px){.next,.prev,.text{font-size:11px}}</style><div class=slideshow-container><div class=mySlides class=fade><div class=numbertext></div><img src=img/IMG1.jpg style=width:100%><div class=text>1/9</div></div><div class=mySlides class=fade><div class=numbertext></div><img src=img/IMG2.jpg style=width:100%><div class=text>2/9</div></div><div class=mySlides class=fade><div class=numbertext></div><img src=img/IMG3.jpg style=width:100%><div class=text>3/9</div></div><div class=mySlides class=fade><div class=numbertext></div><img src=img/IMG4.jpg style=width:100%><div class=text>4/9</div></div><div class=mySlides class=fade><div class=numbertext></div><img src=img/IMG5.jpg style=width:100%><div class=text>5/9</div></div><div class=mySlides class=fade><div class=numbertext></div><img src=img/IMG6.jpg style=width:100%><div class=text>6/9</div></div><div class=mySlides class=fade><div class=numbertext></div><img src=img/IMG7.jpg style=width:100%><div class=text>7/9</div></div><div class=mySlides class=fade><div class=numbertext></div><img src=img/IMG8.jpg style=width:100%><div class=text>8/9</div></div><div class=mySlides class=fade><div class=numbertext></div><img src=img/IMG9.jpg style=width:100%><div class=text>9/9</div></div><a class=prev onclick=plusSlides(-1)>❮</a> <a class=next onclick=plusSlides(1)>❯</a></div><br><div style=text-align:center><span class=dot onclick=currentSlide(1)></span> <span class=dot onclick=currentSlide(2)></span> <span class=dot onclick=currentSlide(3)></span></div>";

    document.title = "Galeria";

}
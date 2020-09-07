<template>
<div class="my-4">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner ">
            <div class="carousel-item active ">
                <div class="inner-1"></div>

                <div class="container">

                </div>
            </div>
            <div class="carousel-item">
                <div class="inner-2"></div>

                <div class="container">

                </div>
            </div>
            <div class="carousel-item">
                <div class="inner-3"></div>

                <div class="container">

                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>
</template>

<style>
.inner-1 {
    background-image: url(https://img.pcstore.com.tw/pch_ad/pch_mar_ad/159/495/7413/15949574133993.jpg?d=071720114333);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-bottom: 27%;
}

.inner-2 {
    background-image: url(https://cdn.store-assets.com/s/324686/f/5126107.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-bottom: 27%;
}

.inner-3 {
    background-image: url(https://upload.cc/i1/2020/08/21/ComStD.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-bottom: 27%;
}

.carousel-item {
    height: auto;
}
</style>

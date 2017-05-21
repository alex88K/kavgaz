<?php include "head.php" ?>
<body class="inner service-inner">
<div class="layout">
   <?php include "header.php" ?>
   <main class="main">
   	<div class="content-wrap">
   		<div class="breadcrumb">
   			<div class="container">
	   			<ul>
	   				<li><a href="/">Главная</a></li>
	   				<li>Услуги</li>
	   			</ul>
   			</div>
   		</div>
   		<article class="content">
   			<div class="container">
               <header class="inner-header">
                  <div class="inner-title">Услуги</div>
               </header>
   				<div class="row">
                  <div class="col-md-5">
                     <div class="article-slider">
                        <div class="slider-container">
                           <ul class="owl-carousel owl-theme slider" id="slider"> 
                              <li class="slider-item"><img class="img-responsive" src="pic/article/maz.jpg" alt="image title"></li>
                              <li class="slider-item"><img class="img-responsive" src="pic/article/maz.jpg" alt="image title"></li>
                              <li class="slider-item"><img class="img-responsive" src="pic/article/projection.jpg" alt="image title"></li>
                              <li class="slider-item"><img class="img-responsive" src="pic/article/fuel.jpg" alt="image title"></li>
                              <li class="slider-item"><img class="img-responsive" src="pic/article/projection.jpg" alt="image title"></li>
                           </ul>
                           <div class="slider-controls"> 
                              <a class="slider-left" href="javascript:;"><span><i class="fa fa-2x fa-angle-left"></i></span></a> 
                              <a class="slider-right" href="javascript:;"><span><i class="fa fa-2x fa-angle-right"></i></span></a> 
                           </div> 
                        </div>
                        <div class="thumbnail-slider-container"> 
                           <ul id="thumbnailSlider" class="owl-thumbs thumbnail-slider owl-carousel"> 
                              <li class="owl-thumb-item image-responsive"><img src="pic/article/maz.jpg" width="100" height="90"></li>
                              <li class="owl-thumb-item image-responsive"><img src="pic/article/maz.jpg" width="100" height="90"></li>
                              <li class="owl-thumb-item image-responsive"><img src="pic/article/projection.jpg" width="100" height="90"></li>
                              <li class="owl-thumb-item image-responsive"><img src="pic/article/fuel.jpg" width="100" height="90"></li>
                              <li class="owl-thumb-item image-responsive"><img src="pic/article/projection.jpg" width="100" height="90"></li>
                           </ul> 
                        </div>
                     </div>
                  </div>
                  <div class="col-md-7">
                     <h1>Бензин</h1>
                     <p>Бензин - это смесь легких углеводородов с температурой кипения от 30 ° С до 200 ° C. Плотность бензина составляет около 0,7 г / см ³. Теплотворная способность горючего вещества примерно соответствует 10 500 ккал / кг.</p>
                     <p>Получается бензин путем перегонки нефти, гидрокрекинга и, при необходимости дальнейшей ароматизации - каталитическим крекингом и риформинга. Для специальных бензинов характерна дополнительная очистка от нежелательных компонентов и смешение с полезными добавками.</p>
                     <a href="#" class="btn btn-blue">Заказать</a>
                  </div>
               </div>
            </div>
         </article>
      </div>
      <div class="contact-f">
         <div class="container reveal-anim">
            <div class="section-header">
               <h2 class="section-title">Связаться с нами</h2>
            </div>
            <form action="#" class="contact-form">
               <div class="form-group">
                  <input type="text" class="form-control" name="uname" placeholder="Ваше имя">
                  <label><i class="icons man-i"><svg viewbox="0 0 18 16"><use xlink:href="#man"></svg></i></label>
               </div>
               <div class="form-group">
                  <input type="text" class="form-control" name="phone" placeholder="Ваш телефон">
                  <label><i class="fa fa-phone" aria-hidden="true"></i></label>
               </div>
               <div class="form-group submit-wrap"><input type="submit" name="submit" class="btn btn-blue btn-submit" value="Связаться"></div>
               <div class="protected"><i class="icons lock-i"><svg viewbox="0 0 13 17"><use xlink:href="#lock"></svg></i>Ваши контактные данные в безопасности и не будут переданы третьим лицам</div>
            </form>
         </div>
      </div>
   </main>
   <?php include "footer.php" ?>
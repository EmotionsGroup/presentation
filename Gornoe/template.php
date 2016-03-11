<?php if(!defined('IN_GS')){ die('you cannot load this page directly.'); }
/****************************************************
*
* @File:         template.php
* @Package:      GetSimple
* @Action:       Beadysite theme for GetSimple CMS
*
*****************************************************/
?>
<!-- login-gornoe pass-2mCYZB -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html lang="en">
  <head>
    <meta charset="utf-8">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->
    <meta name=viewport content="width=1024">
    <link rel="shortcut icon" href="<?php get_theme_url(); ?>/img/favicon.ico" type="image/x-icon">
    <meta name="robots" content="all"/>
    <meta name="Description" content="">
    <meta name="Keywords" content="">

    <title>Горное солнце</title>
    <!-- build:css css/vendor.css -->
    <!-- bower:css -->
    <link rel="stylesheet" href="<?php get_theme_url(); ?>/bower_components/bootstrap/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="<?php get_theme_url(); ?>/bower_components/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="<?php get_theme_url(); ?>/bower_components/LogosDistort/dist/css/perspectiveRules.css" />
    <!-- endbower -->
    <!-- endbuild -->
    <link rel="stylesheet" href="<?php get_theme_url(); ?>/css/alertify.default.css" />
    <link rel="stylesheet" href="<?php get_theme_url(); ?>/css/alertify.core.css" />
    <link rel="stylesheet" href="<?php get_theme_url(); ?>/css/glide.core.min.css" />
    <link rel="stylesheet" href="<?php get_theme_url(); ?>/css/glide.theme.min.css" />
    <link rel="stylesheet" href="<?php get_theme_url(); ?>/css/swiper.css">
    <link rel="stylesheet" href="<?php get_theme_url(); ?>/css/animate.min.css">
    <link rel="stylesheet" href="<?php get_theme_url(); ?>/css/fancybox.css">
    <link rel="stylesheet" href="<?php get_theme_url(); ?>/css/onepage-scroll.css">
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
    <!-- build:css css/main.css -->
    <link rel="stylesheet" href="<?php get_theme_url(); ?>/css/main.css">
    <!-- endbuild -->
    <link href="<?php get_theme_url(); ?>/css/main1600.css" rel="stylesheet" type="text/css" media="screen and (min-width: 1580px) and (max-width: 1890px)">
    <link href="<?php get_theme_url(); ?>/css/main1900.css" rel="stylesheet" type="text/css" media="screen and (min-width: 1890px)">
    <link href="<?php get_theme_url(); ?>/css/main1024.css" rel="stylesheet" type="text/css" media="screen and (min-width: 1000px) and (max-width: 1200px)">
    <link href="<?php get_theme_url(); ?>/css/main1280.css" rel="stylesheet" type="text/css" media="screen and (min-width: 1200px) and (max-width: 1350px)">
  </head>
  <body>
    <?php get_page_content(); ?>
    <div id="cbh_widget_wrapper" class="cbh-free-usage" style="height: 935px;">
        <div class="cbh-widget cbh-ru cbh-icon-sideways-right cbh-show" id="cbh_phone" style="opacity: 1; right: 0px; bottom: 0;">
            <div class="cbh-widget-micromenu cbh-hide-micromenu">
                <div class="cbh-icon-phone cbh-icon-anim1" style="display: block;"></div>
                <div class="cbh-icon-dialog cbh-icon-anim2" style="display: block;"></div>
                <div class="cbh-icon-subscribe cbh-icon-anim3" style="display: block;"></div>
            </div>
            <div class="cbh-widget-global-icon">
                <div class="cbh-widget-bg"><span class="cbh-bg-icon"></span></div>
                <div class="cbh-widget-content">
                    <div class="cbh-widget-phone cbh-rotate-icon">
                    <div class="dot1"></div><div class="dot2"></div><div class="dot3"></div><span class="cbh-widget-phone-icon"></span></div>
                    <div class="cbh-widget-name"><span class="cbh-widget-name-wrap cbh-widget-name-text" id="cbh_widget_helloName1"></span><span class="cbh-widget-name-wrap cbh-widget-name-text" id="cbh_widget_helloName2"></span></div>
                    <div class="cbh-widget-call"><span class="cbh-widget-call-icon"></span></div>
                    <div class="cbh-widget-rating"><span class="cbh-widget-rating-value">5.0</span><span class="cbh-widget-rating-icon"></span></div>
                    <div class="cbh-widget-logo"><span class="cbh-widget-logo-icon"></span></div>
                </div>
            </div>
        </div>
        <div class="cbh cbh-on cbh-hide" id="cbh_container" style="height: 935px;">
            <div class="no-blur">
                <div class="cbh-blured"></div>
                <div class="cbh-faded no-blur"></div>
            </div>
            <div class="cbh-arrow">
                <div class="cbh-arrow-wrapper">
                    <div class="cbh-arrow-part"></div>
                    <div class="cbh-arrow-part cbh-bottom"></div>
                </div>
            </div>
            <div class="cbh-body" style="position: absolute;">
                <div class="cbh-x" id="cbh-x"></div>
                <img class="cbh-arrow-part"style="position: absolute; margin-top:120px; margin-left: 280px; "src="http://bigaliqf.bget.ru/wp-content/uploads/2015/10/close_krest.png">
                <div class="cbh-icons">
                    <div class="cbh-icon cbh-icon-phone cbh-icon-anim1 cbh-active" id="route_callNow">
                        <div class="cbh-img"></div>
                        <div class="cbh-text">Звонок</div>
                    </div>
                    <div class="cbh-icon cbh-icon-dialog cbh-icon-anim2" id="route_intro" style="display:none;">
                        <div class="cbh-img"></div>
                        <div class="cbh-text">Диалог</div>
                    </div>
                    <div class="cbh-icon cbh-icon-subscribe cbh-icon-anim3" id="route_contactForm">
                        <div class="cbh-img"></div>
                        <div class="cbh-text">Письмо</div>
                    </div>
                </div>
                <div class="cbh-wrapper">
                    <div class="cbh-item cbh-show" style="height: 253px;" id="cbh_item_call_deferred">
                        <div class="cbh-text">
                            <div class="cbh-big-text j-cbh-big-text-later cbh-typed" id="cbh_item_call_deferred_head">Мы свяжемся с вами в ближайшее время</div>
                            <form id="feedback-call">
                                <!-- Hidden Required Fields -->
                                <input type="hidden" name="project_name" value="gornoesolnce.kz">
                                <input type="hidden" name="admin_email" value="gornoesolnce@inbox.ru ">
                                <input type="hidden" name="form_subject" value="Заказ звонка">
                                <input type="hidden" id="cbh_time_deferred" value="-1">
                                <input id="input111" type="text" class="cbh-input" name="Телефон" value="" placeholder="Введите ваш номер" maxlength="18" required>
                                <input type="submit" valnue="Жду звонка!" class="cbh-button" id="cbh_send_deferred">
                            </form>
                        </div>
                    </div>
                    <div class="cbh-item cliseRModel" id="cbh_item_dialog" style="height: 253px;">
                        <div class="cbh-text" id="cbh_item_dialog_content">
                            <div class="cbh-form cbh-letter cbh-show">
                                <form id="feedback-message">
                                    <!-- Hidden Required Fields -->
                                    <input type="hidden" name="project_name" value="gornoesolnce.kz">
                                    <input type="hidden" name="admin_email" value="gornoesolnce@inbox.ru ">
                                    <input type="hidden" name="form_subject" value="Новая заявка">
                                    <div>
                                        <div data-index="0" class="cbh-form-elem">
                                            <textarea rows="5" name="Вопрос" id="cbh_item_dialog_input_0" placeholder="Напишите вопрос" class="cbh-input cbh-form-input" required></textarea>
                                        </div>
                                        <div class="cbh-form-error-message" id="cbh_form_error_0"></div>
                                    </div>
                                    <div>
                                        <div data-index="1" class="cbh-form-elem">
                                            <input type="text" name="Почта" id="cbh_item_dialog_input_1" placeholder="Ваш E-mail (для ответа)" class="cbh-input cbh-form-input" required>
                                        </div>
                                        <div class="cbh-form-error-message" id="cbh_form_error_1"></div>
                                    </div>

                                    <div>
                                        <div data-index="2" class="cbh-form-elem">
                                            <input type="text" name="Телефон" id="cbh_item_dialog_input_2" placeholder="Ваш телефон (по желанию)" class="cbh-input cbh-form-input">
                                        </div>
                                        <div class="cbh-form-error-message" id="cbh_form_error_2"></div>
                                    </div>

                                    <div>
                                        <div data-index="3" class="cbh-form-elem">
                                            <input type="submit" value="Отправить" class="cbh-button">
                                        </div>
                                        <div class="cbh-big-text cbh-typed undefined">Сделаем всё,</div>
                                        <div class="cbh-normal-text cbh-typed">чтобы ответить вам<br> в ближайшее время <br> Пишите!</div>
                                        <div class="cbh-form-error-message" id="cbh_form_error_3"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cbh-branding"></div>
        </div>
    </div>
    <div class="nav-arrows">
        <i style="" id="up-slide" class="fa  fa-chevron-up"></i>
        <i style="" id="down-slide" class="fa  fa-chevron-down"></i>
    </div>
    <div id="page-preloader"><span class="spinner"></span></div>
    <div style="display:none">
      <div class="apart1-price"><?php get_component('apartment-number-1'); ?></div>
      <div class="apart2-price"><?php get_component('apartment-number-2'); ?></div>
      <div class="apart3-price"><?php get_component('apartment-number-3'); ?></div>
      <div class="apart4-price"><?php get_component('apartment-number-4'); ?></div>
      <div class="apart5-price"><?php get_component('apartment-number-5'); ?></div>
      <div class="apart6-price"><?php get_component('apartment-number-6'); ?></div>
      <div class="apart7-price"><?php get_component('apartment-number-7'); ?></div>
      <div class="apart8-price"><?php get_component('apartment-number-8'); ?></div>
      <div class="apart9-price"><?php get_component('apartment-number-9'); ?></div>
      <div class="apart10-price"><?php get_component('apartment-number-10'); ?></div>
      <div class="apart11-price"><?php get_component('apartment-number-11'); ?></div>
      <div class="apart12-price"><?php get_component('apartment-number-12'); ?></div>
      <div class="apart13-price"><?php get_component('apartment-number-13'); ?></div>
      <div class="apart14-price"><?php get_component('apartment-number-14'); ?></div>
      <div class="apart15-price"><?php get_component('apartment-number-15'); ?></div>
      <div class="apart16-price"><?php get_component('apartment-number-16'); ?></div>
      <div class="apart17-price"><?php get_component('apartment-number-17'); ?></div>
      <div class="apart18-price"><?php get_component('apartment-number-18'); ?></div>
      <div class="apart19-price"><?php get_component('apartment-number-19'); ?></div>
      <div class="apart20-price"><?php get_component('apartment-number-20'); ?></div>
      <div class="apart21-price"><?php get_component('apartment-number-21'); ?></div>
      <div class="apart22-price"><?php get_component('apartment-number-22'); ?></div>
      <div class="apart23-price"><?php get_component('apartment-number-23'); ?></div>
      <div class="apart24-price"><?php get_component('apartment-number-24'); ?></div>
      <div class="apart25-price"><?php get_component('apartment-number-25'); ?></div>
      <div class="apart26-price"><?php get_component('apartment-number-26'); ?></div>
      <div class="apart27-price"><?php get_component('apartment-number-27'); ?></div>
      <div class="apart28-price"><?php get_component('apartment-number-28'); ?></div>
      <div class="apart29-price"><?php get_component('apartment-number-29'); ?></div>
      <div class="apart30-price"><?php get_component('apartment-number-30'); ?></div>
      <div class="apart31-price"><?php get_component('apartment-number-31'); ?></div>
      <div class="apart32-price"><?php get_component('apartment-number-32'); ?></div>
      <div class="apart33-price"><?php get_component('apartment-number-33'); ?></div>
      <div class="apart34-price"><?php get_component('apartment-number-34'); ?></div>
      <div class="apart35-price"><?php get_component('apartment-number-35'); ?></div>
      <div class="apart36-price"><?php get_component('apartment-number-36'); ?></div>
      <div class="apart37-price"><?php get_component('apartment-number-37'); ?></div>
      <div class="apart38-price"><?php get_component('apartment-number-38'); ?></div>
      <div class="apart39-price"><?php get_component('apartment-number-39'); ?></div>
      <div class="apart40-price"><?php get_component('apartment-number-40'); ?></div>
      <div class="apart41-price"><?php get_component('apartment-number-41'); ?></div>
      <div class="apart42-price"><?php get_component('apartment-number-42'); ?></div>
      <div class="apart43-price"><?php get_component('apartment-number-43'); ?></div>
      <div class="apart44-price"><?php get_component('apartment-number-44'); ?></div>
      <div class="apart45-price"><?php get_component('apartment-number-45'); ?></div>
      <div class="apart46-price"><?php get_component('apartment-number-46'); ?></div>
      <div class="apart47-price"><?php get_component('apartment-number-47'); ?></div>
      <div class="apart48-price"><?php get_component('apartment-number-48'); ?></div>
      <div class="apart49-price"><?php get_component('apartment-number-49'); ?></div>
      <div class="apart50-price"><?php get_component('apartment-number-50'); ?></div>
      <div class="apart51-price"><?php get_component('apartment-number-51'); ?></div>
      <div class="apart52-price"><?php get_component('apartment-number-52'); ?></div>
      <div class="apart53-price"><?php get_component('apartment-number-53'); ?></div>
      <div class="apart54-price"><?php get_component('apartment-number-54'); ?></div>
      <div class="apart55-price"><?php get_component('apartment-number-55'); ?></div>
      <div class="apart56-price"><?php get_component('apartment-number-56'); ?></div>
      <div class="apart57-price"><?php get_component('apartment-number-57'); ?></div>
      <div class="apart58-price"><?php get_component('apartment-number-58'); ?></div>
      <div class="apart59-price"><?php get_component('apartment-number-59'); ?></div>
      <div class="apart60-price"><?php get_component('apartment-number-60'); ?></div>
      <div class="apart61-price"><?php get_component('apartment-number-61'); ?></div>
      <div class="apart62-price"><?php get_component('apartment-number-62'); ?></div>
      <div class="apart63-price"><?php get_component('apartment-number-63'); ?></div>
      <div class="apart64-price"><?php get_component('apartment-number-64'); ?></div>
      <div class="apart65-price"><?php get_component('apartment-number-65'); ?></div>
      <div class="apart66-price"><?php get_component('apartment-number-66'); ?></div>
      <div class="apart67-price"><?php get_component('apartment-number-67'); ?></div>
      <div class="apart68-price"><?php get_component('apartment-number-68'); ?></div>
      <div class="apart69-price"><?php get_component('apartment-number-69'); ?></div>
      <div class="apart70-price"><?php get_component('apartment-number-70'); ?></div>
      <div class="apart71-price"><?php get_component('apartment-number-71'); ?></div>
      <div class="apart72-price"><?php get_component('apartment-number-72'); ?></div>
      <div class="apart73-price"><?php get_component('apartment-number-73'); ?></div>
      <div class="apart74-price"><?php get_component('apartment-number-74'); ?></div>
      <div class="apart75-price"><?php get_component('apartment-number-75'); ?></div>
      <div class="apart76-price"><?php get_component('apartment-number-76'); ?></div>
      <div class="apart77-price"><?php get_component('apartment-number-77'); ?></div>
      <div class="apart78-price"><?php get_component('apartment-number-78'); ?></div>
      <div class="apart79-price"><?php get_component('apartment-number-79'); ?></div>
      <div class="apart80-price"><?php get_component('apartment-number-80'); ?></div>
      <div class="apart81-price"><?php get_component('apartment-number-81'); ?></div>
      <div class="apart82-price"><?php get_component('apartment-number-82'); ?></div>
      <div class="apart83-price"><?php get_component('apartment-number-83'); ?></div>
      <div class="apart84-price"><?php get_component('apartment-number-84'); ?></div>
      <div class="apart85-price"><?php get_component('apartment-number-85'); ?></div>
      <div class="apart86-price"><?php get_component('apartment-number-86'); ?></div>
      <div class="apart87-price"><?php get_component('apartment-number-87'); ?></div>
      <div class="apart88-price"><?php get_component('apartment-number-88'); ?></div>
      <div class="apart89-price"><?php get_component('apartment-number-89'); ?></div>
      <div class="apart90-price"><?php get_component('apartment-number-90'); ?></div>
      <div class="apart91-price"><?php get_component('apartment-number-91'); ?></div>
      <div class="apart92-price"><?php get_component('apartment-number-92'); ?></div>
      <div class="apart93-price"><?php get_component('apartment-number-93'); ?></div>
      <div class="apart94-price"><?php get_component('apartment-number-94'); ?></div>
      <div class="apart95-price"><?php get_component('apartment-number-95'); ?></div>
      <div class="apart96-price"><?php get_component('apartment-number-96'); ?></div>
      <div class="apart97-price"><?php get_component('apartment-number-97'); ?></div>
      <div class="apart98-price"><?php get_component('apartment-number-98'); ?></div>
      <div class="apart99-price"><?php get_component('apartment-number-99'); ?></div>
      <div class="apart100-price"><?php get_component('apartment-number-100'); ?></div>
      <div class="apart101-price"><?php get_component('apartment-number-101'); ?></div>
      <div class="apart102-price"><?php get_component('apartment-number-102'); ?></div>
      <div class="apart103-price"><?php get_component('apartment-number-103'); ?></div>
      <div class="apart104-price"><?php get_component('apartment-number-104'); ?></div>
      <div class="apart105-price"><?php get_component('apartment-number-105'); ?></div>
      <div class="apart106-price"><?php get_component('apartment-number-106'); ?></div>
      <div class="apart107-price"><?php get_component('apartment-number-107'); ?></div>
      <div class="apart108-price"><?php get_component('apartment-number-108'); ?></div>
      <div class="apart109-price"><?php get_component('apartment-number-109'); ?></div>
      <div class="apart110-price"><?php get_component('apartment-number-110'); ?></div>
      <div class="apart111-price"><?php get_component('apartment-number-111'); ?></div>
      <div class="apart112-price"><?php get_component('apartment-number-112'); ?></div>
      <div class="apart113-price"><?php get_component('apartment-number-113'); ?></div>
      <div class="apart114-price"><?php get_component('apartment-number-114'); ?></div>
      <div class="apart115-price"><?php get_component('apartment-number-115'); ?></div>
      <div class="apart116-price"><?php get_component('apartment-number-116'); ?></div>
      <div class="apart117-price"><?php get_component('apartment-number-117'); ?></div>
      <div class="apart118-price"><?php get_component('apartment-number-118'); ?></div>
      <div class="apart119-price"><?php get_component('apartment-number-119'); ?></div>
      <div class="apart120-price"><?php get_component('apartment-number-120'); ?></div>
      <div class="apart121-price"><?php get_component('apartment-number-121'); ?></div>
      <div class="apart122-price"><?php get_component('apartment-number-122'); ?></div>
      <div class="apart123-price"><?php get_component('apartment-number-123'); ?></div>
      <div class="apart124-price"><?php get_component('apartment-number-124'); ?></div>
      <div class="apart125-price"><?php get_component('apartment-number-125'); ?></div>
      <div class="apart126-price"><?php get_component('apartment-number-126'); ?></div>
      <div class="apart127-price"><?php get_component('apartment-number-127'); ?></div>
      <div class="apart128-price"><?php get_component('apartment-number-128'); ?></div>
      <div class="apart129-price"><?php get_component('apartment-number-129'); ?></div>
      <div class="apart130-price"><?php get_component('apartment-number-130'); ?></div>
      <div class="apart131-price"><?php get_component('apartment-number-131'); ?></div>
      <div class="apart132-price"><?php get_component('apartment-number-132'); ?></div>
      <div class="apart133-price"><?php get_component('apartment-number-133'); ?></div>
      <div class="apart134-price"><?php get_component('apartment-number-134'); ?></div>
      <div class="apart135-price"><?php get_component('apartment-number-135'); ?></div>
      <div class="apart136-price"><?php get_component('apartment-number-136'); ?></div>
      <div class="apart137-price"><?php get_component('apartment-number-137'); ?></div>
      <div class="apart138-price"><?php get_component('apartment-number-138'); ?></div>
      <div class="apart139-price"><?php get_component('apartment-number-139'); ?></div>
      <div class="apart140-price"><?php get_component('apartment-number-140'); ?></div>
      <div class="apart141-price"><?php get_component('apartment-number-141'); ?></div>
      <div class="apart142-price"><?php get_component('apartment-number-142'); ?></div>
      <div class="apart143-price"><?php get_component('apartment-number-143'); ?></div>
      <div class="apart144-price"><?php get_component('apartment-number-144'); ?></div>
      <div class="apart145-price"><?php get_component('apartment-number-145'); ?></div>
      <div class="apart146-price"><?php get_component('apartment-number-146'); ?></div>
      <div class="apart147-price"><?php get_component('apartment-number-147'); ?></div>
      <div class="apart148-price"><?php get_component('apartment-number-148'); ?></div>
      <div class="apart149-price"><?php get_component('apartment-number-149'); ?></div>
      <div class="apart150-price"><?php get_component('apartment-number-150'); ?></div>
      <div class="apart151-price"><?php get_component('apartment-number-151'); ?></div>
      <div class="apart152-price"><?php get_component('apartment-number-152'); ?></div>
      <div class="apart153-price"><?php get_component('apartment-number-153'); ?></div>
      <div class="apart154-price"><?php get_component('apartment-number-154'); ?></div>
      <div class="apart155-price"><?php get_component('apartment-number-155'); ?></div>
      <div class="apart156-price"><?php get_component('apartment-number-156'); ?></div>
      <div class="apart157-price"><?php get_component('apartment-number-157'); ?></div>
      <div class="apart158-price"><?php get_component('apartment-number-158'); ?></div>
      <div class="apart159-price"><?php get_component('apartment-number-159'); ?></div>
      <div class="apart160-price"><?php get_component('apartment-number-160'); ?></div>
      <div class="apart161-price"><?php get_component('apartment-number-161'); ?></div>
      <div class="apart162-price"><?php get_component('apartment-number-162'); ?></div>
      <div class="apart163-price"><?php get_component('apartment-number-163'); ?></div>
      <div class="apart164-price"><?php get_component('apartment-number-164'); ?></div>
      <div class="apart165-price"><?php get_component('apartment-number-165'); ?></div>
      <div class="apart166-price"><?php get_component('apartment-number-166'); ?></div>
      <div class="apart167-price"><?php get_component('apartment-number-167'); ?></div>
      <div class="apart168-price"><?php get_component('apartment-number-168'); ?></div>
      <div class="apart169-price"><?php get_component('apartment-number-169'); ?></div>
      <div class="apart170-price"><?php get_component('apartment-number-170'); ?></div>
      <div class="apart171-price"><?php get_component('apartment-number-171'); ?></div>
      <div class="apart172-price"><?php get_component('apartment-number-172'); ?></div>
      <div class="apart173-price"><?php get_component('apartment-number-173'); ?></div>
      <div class="apart174-price"><?php get_component('apartment-number-174'); ?></div>
      <div class="apart175-price"><?php get_component('apartment-number-175'); ?></div>
    </div>
    <!-- build:js js/vendor.js -->
    <!-- bower:js -->
    <script src="<?php get_theme_url(); ?>/bower_components/jquery/jquery.js"></script>
    <script src="<?php get_theme_url(); ?>/bower_components/bootstrap/dist/js/bootstrap.js"></script>
    <!-- // <script src="bower_components/LogosDistort/dist/jquery.logosDistort.min.js"></script> -->
    <!-- // <script src="js/scrollspy.js"></script> -->
    <!-- // <script src="js/anchor.js"></script> -->
    <script src="<?php get_theme_url(); ?>/js/jquery.easing-1.3.min.js"></script>
    <!-- // <script src="js/jquery.validate.min.js"></script> -->
    <!-- // <script src="js/alertify.min.js"></script> -->
    <script src="<?php get_theme_url(); ?>/js/glide.min.js"></script>
    <script src="<?php get_theme_url(); ?>/js/swiper.min.js"></script>
    <script src="<?php get_theme_url(); ?>/js/jquery.animateNumber.min.js"></script>
    <script src="<?php get_theme_url(); ?>/js/jquery.waypoints.min.js"></script>
    <script src="<?php get_theme_url(); ?>/js/animate-css.js"></script>
    <script src="<?php get_theme_url(); ?>/js/fancybox.js"></script>
    <script src="<?php get_theme_url(); ?>/js/fancybox.pack.js"></script>
    <script src="<?php get_theme_url(); ?>/js/jquery.onepage-scroll.min.js"></script>
    <!-- endbower -->
    <!-- endbuild -->
    <script src="http://maps.googleapis.com/maps/api/js"></script>
    <script type="text/javascript" src="http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/src/infobox.js"></script>
    <!-- build:js js/common.js -->
    <script src="<?php get_theme_url(); ?>/js/common.js"></script>
    <!-- endbuild -->
 <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-73827161-1', 'auto');
  ga('require', 'linkid');
  ga('send', 'pageview');

</script>
 </body>
</html>

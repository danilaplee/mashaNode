(function(a){"use strict";if(!a){return}a.addMessages("ivideon.models.StreamerAPI",{"quality.0":"Низкое качество","quality.0.short":"Низкое","quality.1":"Среднее качество","quality.1.short":"Среднее","quality.2":"Высокое качество","quality.2.short":"Высокое"});
a.addMessages("ivideon.models.Camera",{"save.notification.wait.title":"Камера &laquo;<strong>{camera}</strong>&raquo; отредактирована","save.notification.wait.text":"Изменения сохраняются... Подождите.","save.notification.done.title":"Камера &laquo;<strong>{camera}</strong>&raquo; отредактирована","save.notification.done.text":"Изменения сохранены.","save.notification.fail.title":"Ошибка","save.notification.fail.text":"Не удалось отредактировать камеру &laquo;<strong>{camera}</strong>&raquo;. Изменения отменены.","status.enabled.online.visible":"Камера доступна и включена.","status.enabled.online.hidden":"Камера доступна и включена. Камера спрятана.","status.enabled.offline.visible":"Камера недоступна и включена!","status.enabled.offline.hidden":"Камера недоступна и включена! Камера спрятана.","status.disabled.online.visible":"Камера доступна и отключена.","status.disabled.online.hidden":"Камера доступна и отключена. Камера спрятана.","status.disabled.offline.visible":"Камера недоступна и отключена.","status.disabled.offline.hidden":"Камера недоступна и отключена. Камера спрятана."});
a.addMessages("ivideon.views.CameraStreamPlayer",{"player.error.engine_not_found":'Реализация проигрывателя "{engine}" не найдена.',"player.error.engine_not_available":"Проигрыватель видео недоступен.","player.error.engine_load_timeout":"Время ожидания загрузки проигрывателя истекло.","player.error.flash_required":"Для работы проигрывателя необходим Adobe Flash Player версии не ниже {version}.","player.flowplayer.error.components_not_loaded":"Компоненты проигрывателя Flowplayer не загрузились.","player.flowplayer.error.plugin_load_failed":"Ошибка загрузки компонента проигрывателя.","player.flowplayer.error.plugin_init_failed":"Ошибка инициализации компонента проигрывателя.","player.flowplayer.error.stream_not_found":"Видеопоток не найден.","player.flowplayer.error.stream_not_available":"Видеопоток недоступен.","player.flowplayer.error.provider_not_available":"Видеопоток недоступен.","player.flowplayer.error.init_failed":"Ошибка инициализации проигрывателя.","player.flowplayer.error.external_interface_error":"Ошибка взаимодействия с проигрывателем.","player.flowplayer.error.resource_load_failed":"Ошибка загрузки дополнительных ресурсов.","player.flowplayer.error.unknown":"Произошла ошибка проигрывателя видео (код ошибки: Flowplayer#{errorCode}).","player.mediaelement.error.components_not_loaded":"Компоненты проигрывателя MediaElement.js не загрузились.","player.mediaelement.error.load_exception":"Попытка проигрывания видеопотока привела к ошибке.","player.jplayer.error.components_not_loaded":"Компоненты проигрывателя jPlayer не загрузились.","player.jplayer.error.stream_not_found":"Видеопоток не найден.","player.jplayer.error.no_solution":"Проигрыватель видео недоступен.","player.jplayer.error.load_exception":"Попытка проигрывания видеопотока привела к ошибке.","player.swf.error.components_not_loaded":"Компоненты проигрывателя SWF-файлов не загрузились.","player.swf.error.stream_not_available":"Видеопоток недоступен.","player.ios.error.stream_not_available":"Видеопоток недоступен.","player.ios.error.components_not_loaded":"Компоненты проигрывателя iOS не загрузились.","stream.error.source_not_available":"Ссылка на видеопоток недоступна.","stream.error.timeout":"Время ожидания загрузки видео истекло."});
a.addMessages("ivideon.models.TimelineRecord",{"error.end_before_start":"Время окончания архивной записи должно следовать за временем начала. startTime == {startTime}, endTime == {endTime}"});a.addMessages("ivideon.views.TimelineView",{"button.calendar.title":"Перейти к дате...","button.zoom_in.title":"Увеличить временной масштаб","button.zoom_in.text":"+","button.zoom_out.title":"Уменьшить временной масштаб","button.zoom_out.text":"-","button.scroll_left.title":"Записи раньше","button.scroll_left.text":"&larr;","button.scroll_right.title":"Записи позже","button.scroll_right.text":"&rarr;","button.live.title":"Онлайн","button.live.text":"|&gt;"});
a.addMessages("ivideon.views.TimelineCalendar",{"button.prev.tooltip":"Месяц раньше","button.next.tooltip":"Месяц позже"});a.addMessages("ivideon.models.CameraPublicInfo",{"embed_code.link.url":"http://www.ivideon.com/","embed_code.link.text":"powered by Ivideon","embed_code.link.text.short":"powered by Ivideon","comments.value.vkontakte":"ВКонтакте","comments.value.facebook":"Facebook","comments.value.none":"отключить комментарии","comments.value.default":"по умолчанию"});
a.addMessages("ivideon.views.CameraEmbedPreviewDialog",{title:"Просмотр встроенного видео с камеры «{cameraName}»"});a.addMessages("ivideon.views.CameraPublishDialog",{title:"Публичный доступ к камере",message:"Чтобы разместить видео с этой камеры на сайте или в социальных сетях, нужно открыть публичный доступ к ней.","message.tv":'<br /><br />Эта камера станет доступна для встраивания в сайт или блог и будет видна в Ivideon TV — каталоге камер, открытых нашими пользователями для публичного просмотра. <a href="{tv_home_url}" target="_blank">Подробнее...</a>',"button.publish":"Открыть публичный доступ","button.cancel":"Отмена"});
a.addMessages("ivideon.views.VideoEmbedDialog",{"dialog.title":"Публичный доступ к камере «{cameraName}»","tab.embed":"Встроить в сайт","tab.tv_link":"Получить ссылку","tab.public_info":"Настройки","embed.title":"Код для встраивания","embed.instructions":"Скопируйте и вставьте приведённый выше HTML-код в текст страницы<br/>(код изменяется при выборе размера видео).","embed.video_size":"Размер видео","embed.custom_size.title":"Произвольный размер","embed.custom_size.width":"Ширина","embed.custom_size.height":"Высота","tv_link.title":"Ссылка на видео","tv_link.instructions":"Отправьте эту ссылку друзьям!","public_info.warning":"Информация ниже применяется ко всем встроенным видео с этой камеры. Данные сохраняются автоматически после редактирования.","public_info.embedded_link.title":"Ссылка на ваш сайт","public_info.embedded_link.title_hint":"Привлеките людей на ваш сайт, добавив ссылку на него поверх вашего видео!","public_info.embedded_link.url.tooltip":"Адрес ссылки (URL)","public_info.embedded_link.url.placeholder":"Адрес ссылки (URL) не задан","public_info.embedded_link.text.tooltip":"Текст ссылки","public_info.embedded_link.text.placeholder":"Текст ссылки не задан","public_info.tv.title":"Ivideon TV","public_info.tv.title_hint":'Ivideon TV — каталог камер, открытых нашими пользователями для публичного просмотра. <a href="{tv_home_url}" target="_blank">Подробнее...</a><br/>Вы можете исключить публичную камеру из Ivideon TV на странице «<a href="{:url(billing/tariff)}">Мои услуги</a>».<br/>Мы оставляем за собой право блокировки публичного доступа к данной камере, если её описание окажется недостоверным.',"public_info.description.tooltip":"Описание камеры","public_info.description.placeholder":"Описание камеры не задано","public_info.comments_label":"Система комментариев:","public_info.get.error":"Произошла ошибка при получении публичных данных о камере.","public_info.save.error":"Произошла ошибка при сохранении публичных данных о камере.","button.public_access.close":"Закрыть публичный доступ к этой камере","button.public_info.save":"Сохранить","button.preview":"Просмотреть","button.close":"Закрыть"});
a.addMessages("ivideon.views.VideoAbuseDialog",{"abuse.title":"Пожаловаться на видео","abuse.disclaimer":'<span class="g-nowrap">Сервис «{serviceName}»</span> <b>не&nbsp;является владельцем камеры</b> и&nbsp;предоставляет только услуги трансляции <span class="g-nowrap">онлайн-видео</span>. Постарайтесь связаться напрямую с&nbsp;<b>владельцем камеры</b> по&nbsp;вопросам качества изображения, направления камеры, отсутствия изображения.',"abuse.disclaimer.with_comments":'<span class="g-nowrap">Сервис «{serviceName}»</span> <b>не&nbsp;является владельцем камеры</b> и&nbsp;предоставляет только услуги трансляции <span class="g-nowrap">онлайн-видео</span>. Пожелания по&nbsp;качеству изображения, направлению камеры, отсутствию изображения оставляйте в&nbsp;<b>комментариях под видео</b>&nbsp;— так их&nbsp;сможет увидеть владелец камеры.',"abuse.message":"Укажите информацию, которая поможет нам определить состав нарушения.","abuse.topic":"Причина жалобы:","abuse.topic.default":"(укажите причину жалобы)","abuse.topic.spam":"Спам или мошенничество","abuse.topic.hate":"Выражение ненависти","abuse.topic.violence":"Насилие","abuse.topic.copyright":"Нарушение авторских прав","abuse.topic.sexual":"Материалы сексуального характера","abuse.topic.public_info":"Оскорбительная информация о камере","abuse.topic.other":"Другое (укажу в комментарии)","abuse.comment":"Комментарий (жалобы о качестве видео не рассматриваются):","abuse.comment.placeholder":"замечания по нарушению, адрес страницы с видео, известная вам информация о владельце камеры","abuse.email":"Ваш e-mail:","abuse.email.placeholder":"при необходимости связаться с вами","abuse.submit":"Отправить и закрыть","abuse.cancel":"Закрыть"});
a.addMessages("ivideon.views.CameraPublishWizard",{title:"Публичный доступ к камере",loading:"Загрузка...",load_error:"При получении публичных данных о камере произошла ошибка.",loading_map:"Загрузка карты...",loading_map_error:"При загрузке карты произошла ошибка.","retry_load_button.text":"Повторить попытку","old_close_public_access_button.text":"Закрыть публичный доступ к этой камере","step.name_description":"Название и описание","step.location":"Местоположение","step.link.not_owner":"Связь с сайтом владельца","step.link.owner":"Связь с моим сайтом","step.comments":"Связь с социальными сетями","step.public_access":"Публичная ссылка и код для встраивания","proceed_button.text":"Продолжить","publish_button.text":"Опубликовать камеру","save_button.text":"Сохранить","reset_button.text":"Отменить","name.label":"Задайте такое название, чтобы оно описывало объект съёмки:","name.placeholder":"Например, Санаторий «Море»","name.error.invalid":"Пожалуйста, заполните название камеры.","name.empty.not_owner":"Владелец не заполнил название камеры.","description.label":"Опишите изображение с камеры подробнее:","description.placeholder":"Например, Насладитесь отдыхом на побережье Черного моря, в уютном заливе, огражденном величественными горами.","description.error.invalid":"Пожалуйста, заполните описание камеры.","description.empty.not_owner":"Владелец не заполнил описание камеры.",name_description_info:"Ivideon оставляет за собой право блокировать публичный доступ к камерам с некорректным названием или описанием.","coords.intro":'Покажите, откуда транслирует ваша камера&nbsp;&mdash; тогда посетители <a href="{tv_home_url}" target="_blank">Ivideon&nbsp;TV</a> смогут найти камеры в своём городе или там, где хотели бы отдохнуть.',"coords.label":"Чтобы установить маркер, нажмите на карту. Чтобы переместить маркер, перетащите его в новое место.","coords.error.empty":"Пожалуйста, укажите координаты камеры.","coords.empty.not_owner":"Владелец не указал координаты камеры.","link.label":"Привлеките людей на ваш сайт, добавив ссылку на него к видео с этой камеры!","link.tooltip":"Адрес вашего сайта, например, http://sanatoriy-more.ru/","link.placeholder":"Например, http://sanatoriy-more.ru/","link.error.invalid":"Введите корректный адрес вашего сайта (URL).","link_text.label":"Следующий текст будет отображаться вместо адреса (необязательно):","link_text.tooltip":"Текст, который будет отображаться вместо адреса.","link_text.placeholder":"Например, Заказать путёвку в санаторий «Море»","link_text.error.invalid":"Введите текст, который будет отображаться вместо ссылки.","link_example.label":"Ссылка будет размещена поверх видео сверху и&nbsp;будет выглядеть так:","link_example.empty.owner":"(ни адрес, ни текст не заданы&nbsp;&mdash; ссылка отображаться не будет)","link_example.empty.not_owner":"Владелец не задал ссылку на свой сайт.","comments.intro":"Обсуждайте видео с вашей камеры в&nbsp;социальных сетях!","comments.label":"Выберите, комментарии какой социальной сети будут отображаться под видео с&nbsp;вашей камеры:",comments_info:'По умолчанию социальная сеть выбирается в&nbsp;зависимости от&nbsp;языка, выбранного на странице <a href="{tv_home_url}" target="_blank">Ivideon&nbsp;TV</a>.',separator_text:"или","public_link.label.owner":"Поделитесь ссылкой на вашу камеру:","public_link.label.not_owner":"Поделитесь ссылкой на эту камеру:","public_link.button":"Открыть","embed_code.label.owner":"Встройте видео в свой сайт. Скопируйте HTML-код и добавьте его на страницу сайта.","embed_code.label.not_owner":"Встройте видео в свой сайт. Скопируйте HTML-код и добавьте его на страницу сайта.","embed_code.button":"Просмотреть","embed_size.label":"Размер:","embed_size.value.custom":"Свой размер","embed_size.custom_width.title":"Ширина (в пикселях)","embed_size.custom_height.title":"Высота (в пикселях)","public_access_switch.label.on.owner":"Вы можете отключить публичный доступ к этой камере. Видео, в том числе встроенное, перестанет быть публично доступным.","public_access_switch.label.on.not_owner":"Владелец может отключить публичный доступ к этой камере. Видео, в том числе встроенное, перестанет быть публично доступным.","public_access_switch.label.off.owner":"Публичный доступ к этой камере отключен. Публичная ссылка и встроенное видео недоступны.","public_access_switch.label.off.not_owner":"Публичный доступ к этой камере отключен. Публичная ссылка и встроенное видео недоступны.","public_access_switch.value.on":"Вкл","public_access_switch.value.off":"Откл","unsaved_changes_confirm.title":"Изменения не сохранены","unsaved_changes_confirm.message":"У вас остались несохранённые изменения. Вы действительно хотите отменить их?"});
a.addMessages("ivideon.views.TimelineCalendarButton",{"button.prev.tooltip":"День раньше","button.next.tooltip":"День позже","button.curr.tooltip":"Календарь"});a.addMessages("ivideon.views.TimelineZoomCenterButtons",{"button.zoom_in.tooltip":"Увеличить","button.zoom_out.tooltip":"Уменьшить","button.center.tooltip":"Перейти к проигрываемой записи"});
a.addMessages("ivideon.views.CameraPtzController",{"button.zoom_in.title":"Приблизить","button.zoom_in.text":"+","button.zoom_out.title":"Отдалить","button.zoom_out.text":"-","button.move_up.title":"Повернуть вверх","button.move_up.text":"&uarr;","button.move_down.title":"Повернуть вниз","button.move_down.text":"&darr;","button.move_left.title":"Повернуть влево","button.move_left.text":"&larr;","button.move_right.title":"Повернуть вправо","button.move_right.text":"&rarr;","button.move_home.title":"Вернуть в исходное положение","button.restore.title":"Повернуть в сохраненное положение {presetName}","button.restore.text":"{presetName}","error.rotate.not_implemented":"Поворот не реализован","error.zoom.not_implemented":"Абсолютное увеличение/уменьшение не реализовано.","error.areazoom.not_implemented":"Увеличение рамкой не реализовано.","error.move.not_implemented":"Перемещение {direction} не реализовано.","error.save.not_implemented":"Сохранение положения не реализовано."});
a.addMessages("ivideon.views.CameraVideoView",{"button.fullscreen_enter":"Развернуть","button.fullscreen_exit":"Вернуться","button.fullscreen_enter.native":"На весь экран","button.fullscreen_exit.native":"Вернуться","button.fullscreen_enter.external":"Открыть в отдельном окне","button.fullscreen_exit.external":"Закрыть отдельное окно","button.pause":"Приостановить","button.play":"Продолжить","button.pause_live":"Приостановить онлайн-просмотр","button.play_live":"Продолжить онлайн-просмотр","button.stop":"Остановить","button.mute":"Отключить звук","button.unmute":"Включить звук","button.live":"Онлайн","button.embed":"Поделиться этим видео","button.abuse":"Пожаловаться на камеру","button.archive_save":"Экспорт архивных записей...","button.archive_save_done":"Поставить в очередь загрузки","button.archive_save_cancel":"Отменить экспорт","button.quality":"Качество видео","button.archive_speed":"Скорость просмотра архива","archive_save.hint.tooltip":"Выделите интервал времени для экспорта.","archive_save.no_records_visible.tooltip":"На видимом интервале нет записей. Воспользуйтесь календарем для поиска.","archive_save.no_records_selected.tooltip":"Выделенный интервал не содержит записей.","archive_save.success.tooltip":"Выделенный интервал архива поставлен в очередь загрузки.","archive_save.error.tooltip":"{error}","time_overlay.title":"Локальное время на видеосервере","time_overlay.text":"Сейчас на видеосервере {time}","timeline_status.not_loaded":"Архив не загружен","timeline_status.loading":"Получение архива...","timeline_status.loading_error":"Нет записей","timeline_status.updating":"Получение архива...","timeline_status.updating_error":"Нет записей","timeline_status.loaded":"Архив загружен","timeline_status.loaded_empty":"Нет записей","timeline_tick.today":"сегодня","timeline_tick.yesterday":"вчера","timeline_tick.day_before_yesterday":"позавчера","stream.empty":"Нет видео","stream.live":"Онлайн","stream.live_with_time":"Live: {time}","stream.archive":"Запись от {archiveRecordStartTime} продолжительностью {archiveRecordDuration}","statusbar.idle":"Выберите архивную запись или онлайн-видео.","statusbar.live_connecting":"{streamTitle}. Подключение...","statusbar.live_connecting_retry":"{streamTitle}. Повтор подключения {retry}...","statusbar.live_playing":"{streamTitle}. Просмотр... {time}","statusbar.live_limited":"{streamTitle}. Время непрерывного просмотра онлайн-видео ограничено.","statusbar.live_ended":"Просмотр онлайн-видео окончен.","statusbar.live_error":"Просмотр онлайн-видео недоступен.","statusbar.archive_connecting":"{streamTitle}. Подключение...","statusbar.archive_connecting_retry":"{streamTitle}. Повтор подключения {retry}...","statusbar.archive_paused":"{streamTitle}. Просмотр приостановлен. {time}","statusbar.archive_playing":"{streamTitle}. Просмотр... {time}","statusbar.archive_limited":"{streamTitle}. Время непрерывного просмотра архива ограничено.","statusbar.archive_ended":"{streamTitle}. Просмотр окончен. {time}","statusbar.archive_error":"Просмотр архивной записи от {archiveRecordStartTime} продолжительностью {archiveRecordDuration} с камеры &laquo;{camera}&raquo; недоступен. {errorText}","dialog.archive_demo_mode.title":"Демо-режим","dialog.archive_demo_mode.text":"В демо-режиме просмотр видео из архива отключен.","dialog.idle.text":"Запустите онлайн-просмотр или выберите архивную запись.","dialog.idle_offline.title":"Онлайн-видео недоступно","dialog.idle_offline.text":"Повторите попытку через несколько минут.<br/>Проверьте соединение с Интернет и настройки камеры.","dialog.fullscreen_external.title":"Полноэкранный режим в отдельном окне","dialog.fullscreen_external.text":"Проигрыватель развернут на полный экран в отдельном окне. <br/><br/>Если окно не открылось, возможно, оно было заблокировано как нежелательное. Чтобы использовать полноэкранный режим, <strong>разрешите всплывающие окна для этого сайта</strong> в настройках браузера.","dialog.live_video_loading_error.title":"Онлайн-видео недоступно","dialog.live_video_loading_error.text":"Повторите попытку через несколько минут.<br/>Проверьте соединение с Интернет и настройки камеры.","dialog.live_video_loading_error.button.retry":"Повторить попытку","dialog.live_video_loading_error.button.close":"Закрыть","dialog.live_video_ended.title":"Онлайн-видео прервалось","dialog.live_video_ended.text":"Повторите попытку через несколько минут.<br/>Проверьте соединение с Интернет и настройки камеры.","dialog.live_video_ended.button.retry":"Повторить попытку","dialog.live_video_ended.button.close":"Закрыть","dialog.live_streaming_limited.title":"Время непрерывного онлайн-просмотра ограничено","dialog.live_streaming_limited.text":"Просмотр начался {playbackStartTime}. Ограничение: {playbackLimit}.","dialog.live_streaming_limited.button.continue_live":"Продолжить онлайн-просмотр","dialog.live_streaming_limited.button.close":"Закрыть","dialog.archive_streaming_limited.title":"Время непрерывного просмотра архива ограничено","dialog.archive_streaming_limited.text":"Просмотр начался {playbackStartTime}. Ограничение: {playbackLimit}.","dialog.archive_streaming_limited.button.continue_archive":"Продолжить просмотр архива","dialog.archive_streaming_limited.button.close":"Закрыть","dialog.archive_video_loading_error.title":"Архивная запись недоступна","dialog.archive_video_loading_error.text":"Повторите попытку через несколько минут.<br/>Проверьте соединение с Интернет и настройки камеры.","dialog.archive_video_loading_error.button.retry":"Повторить попытку","dialog.archive_video_loading_error.button.close":"Закрыть","dialog.archive_video_ended.title":"Просмотр архива закончился","dialog.archive_video_ended.text":"Выберите архивную запись или запустите онлайн-просмотр.","dialog.archive_video_ended.button.continue_archive":"Продолжить просмотр архива","dialog.archive_video_ended.button.start_live":"Запустить онлайн-просмотр","dialog.archive_video_error.title":"Просмотр архива прервался","dialog.archive_video_error.text":"Повторите попытку через несколько минут.<br/>Проверьте соединение с Интернет и настройки камеры.","dialog.archive_video_error.button.retry":"Повторить попытку","dialog.archive_video_error.button.close":"Закрыть","dialog.flash_required_error.title":'Для просмотра видео требуется <span class="g-nowrap">Adobe&reg; Flash&reg; Player</span>',"dialog.flash_required_error.text":'Установите последнюю версию <span class="g-nowrap">Adobe&reg; Flash&reg; Player</span> <strong><a href="{install_url}" target="_blank" class="g-nowrap" style="outline: none;">с сайта Adobe</a></strong>.',"dialog.flash_required_error.install_url":"http://get.adobe.com/ru/flashplayer/","dialog.flash_required_error.button.install":"Перейти к установке","dialog.flash_required_error.button.close":"Закрыть","dialog.player_engine_error.title":"Проигрыватель видео недоступен","dialog.player_engine_error.text":"Возможно, настройки или дополнения браузера блокируют автоматическое выполнение подключаемых модулей.<br/><br/>Чтобы смотреть видео, разрешите автоматическое выполнение подключаемых модулей для этого сайта и перезагрузите страницу.","dialog.player_engine_error.button.retry":"Повторить попытку","dialog.player_engine_error.button.close":"Закрыть","video_state_changed.archive_records_load_scheduled":"Запланирована загрузка списка архивных записей через {delay} мс.","video_state_changed.live_video_loading_cancelled":"Загрузка онлайн-видео была отменена.","video_state_changed.live_video_loading_error_retry":"Онлайн-видео недоступно. {statusbar} Запланировано автоматическое переподключение.","video_state_changed.live_video_loading_error":"Онлайн-видео недоступно. {statusbar}","video_state_changed.live_video_loaded":"Онлайн-видео загрузилось. {statusbar}","video_state_changed.live_video_stalled":"Онлайн-видео зависло {when} на {timeout} мс. {statusbar} Запланировано автоматическое переподключение.","video_state_changed.live_video_ended_retry":"Онлайн-видео прервалось. {statusbar} Запланировано автоматическое переподключение.","video_state_changed.live_video_ended":"Онлайн-видео прервалось. {statusbar}","video_state_changed.live_streaming_limited":"Время непрерывного онлайн-просмотра истекло. Просмотр начался {playbackStartTime}. Ограничение: {playbackLimit}.","video_state_changed.archive_streaming_limited":"Время непрерывного просмотра архива истекло. Просмотр начался {playbackStartTime}. Ограничение: {playbackLimit}.","video_state_changed.live_video_playback_cancelled":"Проигрывание онлайн-видео было остановлено.","video_state_changed.live_video_paused":"Онлайн-видео приостановлено. {statusbar}","video_state_changed.live_video_suspended":"Онлайн-видео в режиме ожидания. {statusbar}","video_state_changed.live_video_playing":"Онлайн-видео воспроизводится. {statusbar}","video_state_changed.archive_video_loading_cancelled":"Загрузка архивного видео была отменена.","video_state_changed.archive_video_loading_error_retry":"Архивная запись недоступна. {statusbar} Запланировано автоматическое переподключение.","video_state_changed.archive_video_loading_error":"Архивная запись недоступна. {statusbar}","video_state_changed.archive_video_loaded":"Архивное видео загрузилось. {statusbar}","video_state_changed.archive_video_stalled":"Архивное видео зависло {when} на {timeout} мс. {statusbar} Запланировано автоматическое переподключение.","video_state_changed.archive_video_ended":"Просмотр архива закончился. {statusbar}","video_state_changed.archive_video_error":"Просмотр архива прервался. {statusbar}","video_state_changed.archive_video_playback_cancelled":"Проигрывание архивного видео было остановлено.","video_state_changed.archive_video_paused":"Архивное видео приостановлено. {statusbar}","video_state_changed.archive_video_suspended":"Архивное видео в режиме ожидания. {statusbar}","video_state_changed.archive_video_playing":"Архивное видео воспроизводится. {statusbar}","video_state_changed.flash_required_error":"Adobe Flash Player {version} недоступен.","video_state_changed.player_engine_error":"Проигрыватель видео недоступен."});
a.addMessages("ivideon.views.ServersList",{owner:"владелец: ",no_cameras:"Здесь появятся ваши камеры",no_matches:"Нет совпадений","marker.drag.remove":'Отпустите здесь, чтобы <span class="g-nowrap">убрать метку</span> <span class="g-nowrap">с карты</span>',"marker.drag.cancel_add":'Отпустите здесь, чтобы <span class="g-nowrap">не добавлять метку</span> <span class="g-nowrap">на карту</span>',"marker.drag.cancel":"Отпустите здесь, чтобы отменить перемещение метки"});
a.addMessages("ivideon.views.CamerasList",{all_empty:"Нет камер.",all_offline:"Все камеры отключены.",no_matches:"Нет совпадений."});a.addMessages("ivideon.views.ServersCamerasFilter",{placeholder:"Введите название..."});
a.addMessages("ivideon.views.CameraSavedArchiveRecordsList",{"list.empty":"Нет сохраненных записей.","list.counter":"Сохраненных записей: <strong>{count}</strong>.","list.updating":"Загрузка...","list.show_deleted":"Показать удаленные записи","list.hide_deleted":"Скрыть удаленные записи","record.camera-not-found":"(камера была удалена)","record.requestTime":"Сохранение началось {requestTime}","summary.range.date":"{date:date}","action.download":"Скачать...","action.retry":"Повторить попытку","action.retry-deleted":"Сохранить еще раз","action.delete":"Удалить...","action.delete.confirm.title":"Подтверждение","action.delete.confirm.message":"Вы действительно хотите удалить сохраненную запись <b>{name}</b>?","status.queued":"В очереди.","status.saving":'<span class="g-nowrap">Размер файла: <attr class="g-nowrap" title="{size:filesize(0)}">{size:filesize}</attr></span> &ndash; обработка...',"status.done":'<span class="g-nowrap">Размер файла: <attr class="g-nowrap" title="{size:filesize(0)}">{size:filesize}</attr></span> &ndash; готово.',"status.interrupted":'<span class="g-nowrap">Размер файла: <attr class="g-nowrap" title="{size:filesize(0)}">{size:filesize}</attr></span> &ndash; прервано.',"status.server-not-available":"Нет связи с камерой.","status.record-not-found":"Выделенный интервал архива не содержит записей.","status.not-paid":"Подключите услугу, чтобы скачать.","status.quota-exhausted":"Достигнут лимит сохраненных файлов. Удалите часть файлов и повторите попытку.","status.record-deleting":"Удаляется...","status.record-deleted":"Запись была удалена."});
a.addMessages("ivideon.controllers.EmbeddedVideo",{"abuse.success.text":"Ваша жалоба будет рассмотрена. Спасибо!","abuse.error.text":"Не удалось отправить жалобу."})}(window._ivideon&&window._ivideon.lang));
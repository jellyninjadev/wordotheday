this["window"] = this["window"] || {};
this["window"]["App"] = this["window"]["App"] || {};
this["window"]["App"]["JST"] = this["window"]["App"]["JST"] || {};

this["window"]["App"]["JST"]["api"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<article>\n\n\t<p>Апи находится по адресу <a href="http://wordoftheday.herokuapp.com/api"></a></p>\n\n\t<h2>Доступные команды</h2>\n\n\t<h3>Аутефикация</h3>\n\n\t<dl>\n\t\t<dt>POST <strong>/api</strong></dt>\n\t\t\t<dd>Тестовая аутефикация по токену. Принимает пост запрос с параметром auth. Тестовый запрос будет ввиде auth=test.</dd>\n\t\t<dt>GET <strong>/api</strong></dt>\n\t\t\t<dd>GET Запрос на всех пользователей. На данный момент все запросы идут без аутефикации. Посему просто GET запрос. В последствиии все GET запросы будут запросами POST с токеном аутефикации.</dd>\n\t</dl>\n\n\t<h3>Слова</h3>\n\n\t<dl>\n\t\t<dt>GET <strong>/api/words</strong></dt>\n\t\t\t<dd>Получить все слова. Возвращает json {answer, category_id, id, word}</dd>\n\n\t\t<dt>GET <strong>/api/words/{:word}</strong></dt>\n\t\t\t<dd>Слово по id. Возвращает json {answer, category_id, id, word}</dd>\n\n\t\t<dt>POST <strong>/api/words</strong></dt>\n\t\t\t<dd>Создать новое слово. Принимает word=string, answer=string, test_id=integer</dd>\n\n\t\t<dt>DELETE <strong>/api/words/{:word}</strong></dt>\n\t\t\t<dd>Удалить слово по id</dd>\n\t</dl>\n\n\t<h3>Пользователи</h3>\n\n\t<dl>\n\t\t<dt>GET <strong>/api/users</strong></dt>\n\t\t\t<dd>Получить всех пользователей</dd>\n\n\t\t<dt>GET <strong>/api/users/{:user}</strong></dt>\n\t\t\t<dd>Получить пользователя по id</dd>\n\n\t\t<dt>PUT <strong>/api/users/{:user}</strong></dt>\n\t\t\t<dd>Отредактировать пользователя по id. Принимает username=string, password=string, balance=integer</dd>\n\n\t\t<dt>DELETE <strong>/api/users/{:user}</strong></dt>\n\t\t\t<dd>Удалить пользователя по id</dd>\n\n\t\t<dt>GET <strong>/api/user/{:user}/words</strong></dt>\n\t\t\t<dd>Показать все слова добавленные пользователем на модерацию</dd>\n\n\t\t<dt>POST <strong>/api/user/{:user}/addword</strong></dt>\n\t\t\t<dd>Добавить слово на модерацию. Принимает word=string, answer=string</dd>\n\n\t\t<dt>POST <strong>/api/user/{:word}/removeword</strong></dt>\n\t\t\t<dd>Удалить слово из слов пользователя.</dd>\n\t</dl>\n\n\t<h3>Слова на модерацию</h3>\n\n\t<dl>\n\t\t<dt>GET <strong>/api/moderate/words</strong></dt>\n\t\t\t<dd>Получить все слова на модерацию</dd>\n\n\t\t<dt>GET <strong>/api/moderate/words/{:word}</strong></dt>\n\t\t\t<dd>Получить слово по id</dd>\n\n\t\t<dt>DELETE <strong>/api/moderate/word{:word}</strong></dt>\n\t\t\t<dd>Пометить слово как "отвергнутое". Изменяет статус слова на rejected</dd>\n\n\t\t<dt>POST <strong>/api/moderate/words/{:word}/changestatus</strong></dt>\n\t\t\t<dd>Изменить статус слова. Принимает status=accepted/rejected/waiting</dd>\n\t\t\t<dd>При указании статуса как accepted создает копию в базу слов</dd>\n\t</dl>\n\n\t<h3>Подписки</h3>\n\n\t<dl>\n\t\t<dt>POST <strong>/api/user/{:user}/subscribe</strong></dt>\n\t\t\t<dd>Подписать пользователя на категорию. Принимает category_id=integer</dd>\n\n\t\t<dt>GET <strong>/api/user/{:user}/subscriptions</strong></dt>\n\t\t\t<dd>Получить список подписанных категорий</dd>\n\n\t\t<dt>POST <strong>/api/user/{:user}/unsubscribe</strong></dt>\n\t\t\t<dd>Отписать пользователя от категории category_id=integer</dd>\n\t</dl>\n\n\t<h3>Устройства</h3>\n\n\t<dl>\n\t\t<dt>GET <strong>/api/user/{:user}/devices</strong></dt>\n\t\t\t<dd>Получить все устройства пользователя</dd>\n\n\t\t<dt>POST <strong>/api/user/{:user}/add_device</strong></dt>\n\t\t\t<dd>Добавить устройство к пользователю. Принимает device_id</dd>\n\n\t\t<dt>POST <strong>/api/user/{:user}/remove_device</strong></dt>\n\t\t\t<dd>Удалить устройство у пользователя. Принимает device_id=integer</dd>\n\n\t</dl>\n\n\t<h3>Категории</h3>\n\n\t<dl>\n\t\t<dt>GET <strong>/api/categories</strong></dt>\n\t\t\t<dd>Возвращает все категории [{id, name, subscription_price, test_price, words}, {...}]</dd>\n\n\t\t<dt>GET <strong>/api/categories/{:category}</strong></dt>\n\t\t\t<dd>Возвращает категорию по id, в формате {id, name, subscription_price, test_price, words}</dd>\n\n\t\t<dt>DELETE <strong>/api/category/{:category}</strong></dt>\n\t\t\t<dd>Удаляет категорию по id</dd>\n\n\t\t<dt>Удаление и редактирование категорий - апи написано, функционал представлен в админке</dt>\n\t</dl>\n\n\t<h3>Тест</h3>\n\n\t<dl>\n\t\t<dt>POST <strong>/api/test/start</strong></dt>\n\t\t\t<dd>Начать тест, принимает category=id user=id.</dd>\n\t\t\t<dd>Возвращает, balance, cards{answer, category_id, id, word}</dd>\n\n\t\t<dt>POST <strong>/api/test/result</strong></dt>\n\t\t\t<dd>Принимает user=id</dd>\n\t\t\t<dd>Возвращает status, balance</dd>\n\n\t\t<dt>POST <strong>/api/user/{user_id}/addlife</strong></dt>\n\t\t\t<dd>Принимает user=id</dd>\n\t\t\t<dd>Возвращает пользователя {balance, id, max_result, overal_standing, username}</dd>\n\t</dl>\n\n\t<h3>Настройки</h3>\n\n\t<dl>\n\t\t<dt>GET <strong>/api/settings</strong></dt>\n\t\t\t<dd>Получить настройки. Возвращает json {answer_time, daily_bonus, general_cost, test_cost, top_bonus, word_cost}</dd>\n\n\t\t<dt>POST <strong>/api/settings</strong></dt>\n\t\t\t<dd>Редактировать настройки. Отправить новые настройки. Принимает answer_time=integer, daily_bonus=interger, general_cost=integer, top_bonus=integer, word_cost=integer</dd>\n\t</dl>\n\n</article>';

}
return __p
};

this["window"]["App"]["JST"]["auth"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="header"><h1>Панель управления</h1></div>\n\t<div class="content">\n\t<form id="auth" class="pure-form">\n\t\t<div>\n\t\t\t<label for="user">Пользователь</label>\n\t\t\t<input type="text" id="user">\n\t\t</div>\n\n\t\t<div>\n\t\t\t<label for="password">Пароль</label>\n\t\t\t<input type="password" id="password">\n\t\t</div>\n\n\t\t<div>\n\t\t\t<span="#" id="log-in" class="pure-button pure-button-primary">Войти</span>\n\t\t</div>\n</form></div>';

}
return __p
};

this["window"]["App"]["JST"]["card/add"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form class="pure-form" id="addWord">\n\n\t<div>\n\t\t<label for="word">Слово</label>\n\t\t <input type="text" id="word" name="word">\n\t</div>\n\n\t<div>\n\t\t<label for="answer">Ответ</label>\n\t\t<textarea type="answer" id="answer" name="answer"></textarea>\n\t</div>\n\t\n\t<div>\n\t\t<label id="cat_id_label" for="test_id">Категория</label>\n\t</div>\n\t\n\t<div>\n\t\t<input type="submit" class="pure-button pure-button-primary" value="Добавить">\n\t\t<span class="pure-button close">Закрыть</span>\n\t</div>\n\n</form>';

}
return __p
};

this["window"]["App"]["JST"]["card/all"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td>' +
((__t = ( word )) == null ? '' : __t) +
'</td>\n<td><a href="/words/' +
((__t = ( id )) == null ? '' : __t) +
'/edit" class="edit"><img src="/img/edit.png"></a></td>\n<td><a href="/words/' +
((__t = ( id )) == null ? '' : __t) +
'" class="delete"><img src="/img/delete.png"></a></td>';

}
return __p
};

this["window"]["App"]["JST"]["card/edit"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form id="editWordForm">\n\t<div>\n\t\t<label for="word">Слово</label>\n\t\t<input type="text" id="edit_word" name="word" value="' +
((__t = ( word )) == null ? '' : __t) +
'">\n\t</div>\n\t\n\t<div>\n\t\t<label for="answer">Ответ</label>\n\t\t<textarea type="answer" id="edit_answer" name="answer">' +
((__t = ( answer )) == null ? '' : __t) +
'</textarea>\n\t</div>\n\n\t<div>\n\t\t<label id="cat_id_label" for="category_id">Категория</label>\n\t</div>\n\n\t<div>\n\t\t<input type="submit" class="pure-button pure-button-primary" value="Редактировать">\n\t\t<span class="pure-button close">Закрыть</span>\n\t</div>\n</form>\'';

}
return __p
};

this["window"]["App"]["JST"]["card/layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="content-header"><a href="categories" class="back"><img src="/img/left.png"></a>Карточки слов<a href="category/' +
((__t = ( category_id )) == null ? '' : __t) +
'/word/add"><img src="/img/add.png"></a></h2>\n\n<table>\n\t<thead>\n\t\t<tr>\n\t\t\t<td>слово</td>\n\t\t\t<td colspan="2" class="options">Опции</td>\n\t\t</tr>\n\t</thead>\n</table>';

}
return __p
};

this["window"]["App"]["JST"]["card/single"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td class="id">' +
((__t = ( id )) == null ? '' : __t) +
'</td>\n<td>' +
((__t = ( name )) == null ? '' : __t) +
'</td>\n<td>' +
((__t = ( words )) == null ? '' : __t) +
'</td>\n<td class="edit-c"><a href="/category/' +
((__t = ( id )) == null ? '' : __t) +
'/edit" class="edit"><img src="/img/edit.png"></a></td>\n<td class="delete-c"><a href="/category/' +
((__t = ( id )) == null ? '' : __t) +
'" class="delete"><img src="/img/delete.png"></a></td>\n<td class="words-c"><a href="/category/' +
((__t = ( id )) == null ? '' : __t) +
'/words" class="words"><img src="/img/right.png"></a></td>';

}
return __p
};

this["window"]["App"]["JST"]["category/add"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form class="pure-form" id="addCategory">\n\t<div>\n\t\t<label for="name">Название</label>\n\t\t<input type="text" id="name" name="name">\n\t</div>\n\n\t<div>\n\t\t<label for="subscription_price">Цена подписки</label>\n\t\t<input type="subscription_price" id="subscription_price" name="subscription_price">\n\t</div>\n\n\t<div>\n\t\t<label for="test_price">Цена теста</label>\n\t\t<input type="test_price" id="test_price" name="test_price">\n\t</div>\n\n\t<div>\n\t\t<input type="submit" class="pure-button pure-button-primary" value="Добавить">\n\t\t<span class="pure-button close">Закрыть</span>\n\t</div>\n</form>';

}
return __p
};

this["window"]["App"]["JST"]["category/all"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};

this["window"]["App"]["JST"]["category/edit"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form id="editCategory">\n\t<div>\n\t\t<label for="edit_name">Название</label>\n\t\t<input type="text" id="edit_name" name="edit_name" value="' +
((__t = ( name )) == null ? '' : __t) +
'">\n\t</div>\n\n\t<div>\n\t\t<label for="edit_subscription_price">Цена подписки</label>\n\t\t<input type="edit_subscription_price" id="edit_subscription_price" name="subscription_price" value="' +
((__t = ( subscription_price )) == null ? '' : __t) +
'">\n\t</div>\n\n\t<div>\n\t\t<label for="edit_testa_price">Цена теста</label>\n\t\t<input type="edit_test_price" id="edit_test_price" name="edit_test_price" value="' +
((__t = ( test_price )) == null ? '' : __t) +
'">\n\t</div>\n\n\t<div>\n\t\t<input type="submit" class="pure-button pure-button-primary" value="Редактировать">\n\t\t<span class="pure-button close">Закрыть</span>\n\t</div>\n</form>';

}
return __p
};

this["window"]["App"]["JST"]["category/layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="content-header">Категории<a href="/category/add"><img src="img/add.png"></a></h2>\n\n<table>\n\t<thead>\n\t\t<tr>\n\t\t\t<td>ID</td>\n\t\t\t<td>Название</td>\n\t\t\t<td>Слов</td>\n\t\t\t<td colspan="3" class="options">Опции</td>\n\t\t</tr>\n\t</thead>\n</table>';

}
return __p
};

this["window"]["App"]["JST"]["category/single"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td class="id">' +
((__t = ( id )) == null ? '' : __t) +
'</td>\n<td>' +
((__t = ( name )) == null ? '' : __t) +
'</td>\n<td>' +
((__t = ( words )) == null ? '' : __t) +
'</td>\n<td class="edit-c"><a href="/category/' +
((__t = ( id )) == null ? '' : __t) +
'/edit" class="edit"><img src="img/edit.png"></a></td>\n<td class="delete-c"><a href="/category/' +
((__t = ( id )) == null ? '' : __t) +
'" class="delete"><img src="img/delete.png"></a></td>\n<td class="words-c"><a href="/category/' +
((__t = ( id )) == null ? '' : __t) +
'/words" class="words"><img src="img/right.png"></a></td>';

}
return __p
};

this["window"]["App"]["JST"]["layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="#" id="menuLink" class="menu-link">\n\t<span></span>\n</a>\n\n<div id="menu">\n\t<div class="pure-menu pure-menu-open">\n\t\t<a class="pure-menu-heading" href="/">WOTD</a>\n\t\t\n\t\t<ul>\n\t\t\t<li><a href="/users">Пользователи</a></li>\n\t\t\t<li><a href="/categories">Категории</a></li>\n\t\t\t<li><a href="/moderation">Модерация</a></li>\n\t\t\t<li><a href="/settings">Настройки</a></li>\n\t\t\t<li><a href="/api/usage">Функции апи</a></li>\n\t\t\t<li><a href="/logout">Выход</a></li>\n\t\t</ul>\n\t</div>\n</div>\n\n<div id="main">\n\t<div class="header">\n\t\t<h1>Панель управления</h1>\n\t\t<h2>Слово дня</h2>\n\t</div>\n\n\t<div class="content">\n\n\t</div>\n\n</div>';

}
return __p
};

this["window"]["App"]["JST"]["moderation/layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="content-header">Слова на модерацию</a></h2>\n\n<table>\n\t<thead>\n\t\t<tr>\n\t\t\t<td>ID</td>\n\t\t\t<td>Слово</td>\n\t\t\t<td>Ответ</td>\n\t\t\t<td>Поместить в</td>\n\t\t\t<td colspan="2" class="options">Опции</td>\n\t\t</tr>\n\t</thead>\n</table>';

}
return __p
};

this["window"]["App"]["JST"]["moderation/single"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td class="id">' +
((__t = ( id )) == null ? '' : __t) +
'</td>\n<td>' +
((__t = ( word )) == null ? '' : __t) +
'</td>\n<td>' +
((__t = ( answer )) == null ? '' : __t) +
'</td>\n<td class="categories-dropdown">In: Category</td>\n<td class="edit"><a href="/api/moderate/' +
((__t = ( id )) == null ? '' : __t) +
'/accept" class="accept"><img src="/img/ok.png"></a></td>\n<td class="delete"><a href="/api/moderate/' +
((__t = ( id )) == null ? '' : __t) +
'/decline" class="reject"><img src="/img/delete.png"></a></td>la';

}
return __p
};

this["window"]["App"]["JST"]["settings"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form class="pure-form" id="settings">\n\t<div>\n\t\t<label for="answer_time">Время ответа</label>\n\t \t<input type="text" id="answer_time" name="answer_time" value="' +
((__t = ( answer_time )) == null ? '' : __t) +
'">\n\t</div>\n\n\t<div>\n\t\t<label for="daily_bonus">Ежедневный бонус</label>\n\t\t <input type="text" id="daily_bonus" name="daily_bonus" value="' +
((__t = ( daily_bonus )) == null ? '' : __t) +
'">\n\t</div>\n\n\t<div>\n\t\t<label for="general_cost">Базовая стоимость</label>\n\t\t <input type="text" id="general_cost" name="general_cost" value="' +
((__t = ( general_cost )) == null ? '' : __t) +
'">\n\t</div>\n\n\t<div>\n\t\t<label for="test_cost">Стоимость слова</label>\n\t\t <input type="text" id="test_cost" name="test_cost" value="' +
((__t = ( test_cost )) == null ? '' : __t) +
'">\n\t</div>\n\n\t<div>\n\t\t<label for="top_bonus">Максимальный бонус</label>\n\t\t <input type="text" id="top_bonus" name="top_bonus" value="' +
((__t = ( top_bonus )) == null ? '' : __t) +
'">\n\t</div>\n\n\t<div>\n\t\t<label for="word_cost">Слово</label>\n\t\t<input type="text" id="word_cost" name="word_cost" value="' +
((__t = ( word_cost )) == null ? '' : __t) +
'">\n\t</div>\n\n\t<div>\n\t\t<input type="submit" class="pure-button pure-button-primary" value="Сохранить">\n\t</div>\n\n</form>';

}
return __p
};

this["window"]["App"]["JST"]["user/add"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form class="pure-form" id="addWord">\n\t\n\t<div>\n\t\t<label for="username">Имя пользователя</label>\n\t\t<input type="text" id="username" name="username">\n\t</div>\n\n\t<div>\n\t\t<label for="password">Пароль</label>\n\t\t<input type="text" id="password" name="password">\n\t</div>\n\n\t<div>\n\t\t<input type="submit" class="pure-button pure-button-primary" value="Добавить">\n\t\t<span class="pure-button close">Закрыть</span>\n\t</div>\n\n</form>';

}
return __p
};

this["window"]["App"]["JST"]["user/edit"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form id="editUser" class="pure-form" id="addWord">\n\t\n\t<div>\n\t\t<label for="edit_username">Имя пользователя</label>\n\t\t<input type="text" id="edit_username" name="edit_username" value="' +
((__t = ( username )) == null ? '' : __t) +
'">\n\t</div>\n\n\t<div>\n\t\t<label for="edit_password">Пароль</label>\n\t\t<input type="password" id="edit_password" name="edit_password" >\n\t</div>\n\n\t<div>\n\t\t<label for="edit_balance">Монет</label>\n\t\t<input type="text" id="edit_balance" name="edit_balance" value="' +
((__t = ( balance )) == null ? '' : __t) +
'">\n\t</div>\n\n\t<div>\n\t\t<label for="edit_max_result">Максимальный результат</label>\n\t\t<input type="text" id="edit_max_result" name="edit_max_result" value="' +
((__t = ( max_result )) == null ? '' : __t) +
'">\n\t</div>\n\n\t<div>\n\t\t<label for="edit_overal_standing">Общий зачет</label>\n\t\t<input type="text" id="edit_overal_standing" name="edit_overal_standing" value="' +
((__t = ( overal_standing )) == null ? '' : __t) +
'">\n\t</div>\n\n\t<div>\n\t\t<input type="submit" class="pure-button pure-button-primary" value="Редактировать">\n\t\t<span class="pure-button close">Закрыть</span>\n\t</div>\n\n</form>';

}
return __p
};

this["window"]["App"]["JST"]["user/layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="content-header">Пользователи<a href="/user/add"><img src="img/add.png"></a></h2>\n\n<table>\n\t<thead>\n\t\t<tr>\n\t\t\t<td>Имя</td>\n\t\t\t<td>Монеты</td>\n\t\t\t<td>Макс Результат</td>\n\t\t\t<td>Общий зачет</td>\n\t\t\t<td colspan="2" class="options">Опции</td>\n\t\t</tr>\n\t</thead>\n</table>';

}
return __p
};

this["window"]["App"]["JST"]["user/list"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = ( username )) == null ? '' : __t) +
', монет: ' +
((__t = ( balance )) == null ? '' : __t) +
'\n<a href="/user/' +
((__t = ( id )) == null ? '' : __t) +
'/edit" class="edit">Редактировать</a>\n<a href="/user/' +
((__t = ( id )) == null ? '' : __t) +
'" class="delete">X</a>';

}
return __p
};

this["window"]["App"]["JST"]["user/single"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td>' +
((__t = ( username )) == null ? '' : __t) +
'</td>\n<td>' +
((__t = ( balance )) == null ? '' : __t) +
'</td>\n<td>' +
((__t = ( max_result )) == null ? '' : __t) +
'</td>\n<td>' +
((__t = ( overal_standing )) == null ? '' : __t) +
'</td>\n<td><a href="/user/' +
((__t = ( id )) == null ? '' : __t) +
'/edit" class="edit"><img src="/img/edit.png"></a></td>\n<td><a href="/user/' +
((__t = ( id )) == null ? '' : __t) +
'" class="delete"><img src="/img/delete.png"></a></td>\n';

}
return __p
};
<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['email'])&&$_POST['email']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'info@ideapskov.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Заказ'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>

                        <p>Имя: '.$_POST['name'].'</p>
                        <p>E-mail: '.$_POST['email'].'</p>
                        <p>Сообщение: '.$_POST['comment'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Tsepi-Plus.ru \r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>
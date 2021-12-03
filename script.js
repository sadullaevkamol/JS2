function info (birth,now) {
    var age = now - birth;
    return age
}


var name = prompt('Введите своё имя');
var birthAge = +prompt('Введите год рождения'); 
var nowAge = +prompt('Введите нынешний год');


alert(name + (',') + (' Ваш возраст ') +  info(birthAge,nowAge))



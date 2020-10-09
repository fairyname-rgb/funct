function welcomeToSchool(name, years) {
    const MIN_YEARS = 18;
    const TEACHER_NAME = 'А. С. Иванов';
    const SCHOOL_ADDRESS = 'Санкт-Петербург, ул. Пушкина, дом 23';
    name = prompt('Как вас зовут?',) || name;
    years = parseFloat(prompt('Укажите ваш возраст',))|| years;

    if (!name){
    alert('Вы не указали имя!');
    return this(name)
    }
   
    if (!years){
    alert('Вы не указали возраст!');
    return this(years);
    }

   else if (years < MIN_YEARS){
    alert(`Вам запрещено водить авто, вам должно быть ${MIN_YEARS} лет или больше`)
    }
    else if (years => MIN_YEARS) {
    alert(`Добро пожаловать в автошколу, ${name}`);
    alert(`Ваш преподаватель: ${TEACHER_NAME}<br><br>Ждём вас по адресу: ${SCHOOL_ADDRESS}`)
    }

  
}

// welcomeToSchool('Александр', 26);
// welcomeToSchool('', 15);
//welcomeToSchool();
//welcomeToSchool('Александр', 18);
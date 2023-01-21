/*
Частина №1

Створити скрипт, який повинен виконувати наступне:
запитати у користувача рік народження;
запитати в нього, в якому місті він живе;
запитати його улюблений вид спорту.

При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:

його вік;
якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце точок підставляємо країну, столицею якої є місто. Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.

Частина №2

Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач вкаже один із цих видів спорту, то показуємо йому повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.

Все це має бути відображено в одному вікні (алерті).

Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення – “Шкода, що Ви не захотіли ввести свій(ою) …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту.
 */

'use strict'

const askQuestions = () => {
    let Age = prompt('How old are you, my friend?', '13');
    let City = prompt('What city do you live in?', '');
    let Sport = prompt('What kind of sports do you like the most?', '');

    if (Age === null) {
        Age = 'Such a pity you didn`t enter your age!';
    } else if (Age.trim() === '') {
        Age = 'Such a pity you didn`t enter your age!';
    } else if (Number.isNaN) {
        Age = 'Such a pity you didn`t enter your age!';
    } else {
        Age = `Your age is ${Age}`;
    }

    switch (City) {
        case 'Kyiv': {
            City = 'Ukrainians are brave! Good to know you are from the capital of Ukraine!'
            break;
        }
        case 'Washington': {
            City = 'Wow! You are from the capital of USA!'
            break;
        }
        case 'London': {
            City = 'You live in the capital of the UK!'
            break;
        }
        case null:
        case '': {
            City = 'Such a pity you didn`t enter the city you live in!'
            break;
        }
        default: {
            City = `Aha. You are from ${City}...`
            break;
        }
    }

    switch (Sport) {
        case 'football': {
            Sport = 'Awesome! Wanna be like Lionel Messi?';
            break;
        }
        case 'golf': {
            Sport = 'Curious! Wanna be like Tiger Woods?';
            break;
        }
        case 'tennis': {
            Sport = 'Bounce-bounce! Wanna be like Rafa Nadal?';
            break;
        }
        case null:
        case '': {
            Sport = 'Such a pity you didn`t enter your favourite sport!';
            break;
        }
        default: {
            Sport = `${Sport} - that's amazing!`;
            break;
        }
    }

    alert(`
   ${Age}
   ${City}
   ${Sport}`
    );
}

askQuestions();
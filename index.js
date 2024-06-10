const select = prompt("Оберіть свій напій: чай, каву або сік.").toLowerCase();
switch (select) {
  case "чай":
    alert("Ви обрали чай, це гарячий та освіжаючий напій.");
    break;

  case "кава":
    alert("Ви обрали каву, це терпкий і енергійний напій.");
    break;

  case "сік":
    alert("Ви обрали сік, це напій який зроблений з певних фруктів та овочів.");
    break;

  default:
    alert("Ви обрали напій, якого немає у нашому списку!");
}


const weekday = prompt("Назвіть будь-який день тижня:").toLowerCase();
switch (weekday) {
  case "понеділок":
    alert("Це робочий день тижня.");
    break;

  case "вівторок":
    alert("Це робочий день тижня.");
    break;

  case "середа":
    alert("Це робочий день тижня.");
    break;

  case "четвер":
    alert("Це робочий день тижня.");
    break;

  case "п'ятниця":
    alert("Це робочий день тижня.");
    break;

  case "субота":
    alert("Це вихідний день тижня.");
    break;

  case "неділя":
    alert("Це вихідний день тижня.");
    break;

  default:
    alert("Такого дня в тижні немає!");
}


const seasonNumberMonth = Number(prompt("Введіть номер місяця для того, щоб дізнатися якої пори року цей місяць."));
switch (seasonNumberMonth) {
  case 1:
    alert("Це січень, а значить середина зими!")
    break;

  case 2:
    alert("Це лютий, а значить кінець зими!")
    break;

  case 3:
    alert("Це березень, а значить початок весни!");
    break;

  case 4:
    alert("Це квітень, а значить середина весни!");
    break;

  case 5:
    alert("Це травень, а значить кінець весни!");
    break;

  case 6:
    alert("Це червень, а значить початок літа!");
    break;

  case 7:
    alert("Це липень, а значить середина літа!");
    break;

  case 8:
    alert("Це серпень, а значить кінець літа!");
    break;

  case 9:
    alert("Це вересень, а значить початок осені!");
    break;

  case 10:
    alert("Це жовтень, а значить середина осені!");
    break;

  case 11:
    alert("Це листопад, а значить кінець осені!");
    break;

  case 12:
    alert("Це грудень, а значить початок зими!");
    break;

  default:
    if (seasonNumberMonth >= 13) {
      alert("Такого номера місяця немає!");
    } else {
      alert("Це навіть не число, а пустота, набір букв або слово!");
    };
}


const daysNumberMonth = Number(
  prompt("Введіть номер місяця, для розрахунку днів у ньому!")
);
switch (daysNumberMonth) {
  case 1:
    alert("Це січень, в ньому 31 день.");
    break;

  case 2:
    alert(
      "Це лютий, в ньому 29 днів у високосному році, але 28 днів у невисокосному році."
    );
    break;

  case 3:
    alert("Це березень, в ньому 31 день.");
    break;

  case 4:
    alert("Це квітень, в ньому 30 днів.");
    break;

  case 5:
    alert("Це травень, в ньому 31 день.");
    break;

  case 6:
    alert("Це червень, в ньому 30 днів.");
    break;

  case 7:
    alert("Це липень, в ньому 31 день.");
    break;

  case 8:
    alert("Це серпень, в ньому 31 день.");
    break;

  case 9:
    alert("Це вересень, в ньму 30 днів.");
    break;

  case 10:
    alert("Це жовтень, в ньому 31 день.");
    break;

  case 11:
    alert("Це листопад, в ньому 30 днів.");
    break;

  case 12:
    alert("Це грудень, в ньому 31 день.");
    break;

  default:
    if (daysNumberMonth >= 13) {
      alert("Такого номера місяця немає!");
    } else {
      alert("Це навіть не число, а пустота, набір букв або слово!");
    }
}


const color = prompt("Введіть будь-який колір який є на світлофорі!").toLowerCase();
switch (color) {
  case "червоний":
    alert('Червоний колір на світлофорі означає - "Cтоп" або "Зупинитися".');
    break;

  case "зелений":
    alert('Зелений колір на світлофорі означає - "Йти".');
    break;

  case "жовтий":
    alert('Жовтий колір на світлофорі означає - "Чекати".');
    break;

  default:
    alert("Неправильно введені кольори!");
}


const firstNumber = Number(
  prompt("Введіть перше число з яким хочете зробити розрахунок:")
);

if (firstNumber !== Number(firstNumber)) {
  alert(
    "Це не число, повторіть знову!"
  );
} else {
  const mathematicalSymbol = prompt(
    'Введіть математичний знак який буде робити щось з першим числом, наприклад: "+", "-", "*" або "/".'
  );

  if (
    (mathematicalSymbol !== "+", mathematicalSymbol !== "-", mathematicalSymbol !== "*", mathematicalSymbol !== "/")
  ) {
    alert("Тут немає математичниго знаку!");
  } else {
    const secondNumber = Number(prompt("Введіть друге число для розрахунку:"));

    if (secondNumber !== Number(secondNumber)) {
      alert("Це не число, повторіть знову!");
    } else {
      let result;
      switch (mathematicalSymbol) {
        case "+":
          result = firstNumber + secondNumber;
          alert(
            `У нас вийшов такий приклад: ${firstNumber} ${mathematicalSymbol} ${secondNumber} = ${result}.`
          );
          break;

        case "-":
          result = firstNumber - secondNumber;
          alert(
            `У нас вийшов такий приклад: ${firstNumber} ${mathematicalSymbol} ${secondNumber} = ${result}.`
          );
          break;

        case "*":
          result = firstNumber * secondNumber;
          alert(
            `У нас вийшов такий приклад: ${firstNumber} ${mathematicalSymbol} ${secondNumber} = ${result}.`
          );
          break;

        case "/":
          switch (secondNumber) {
            case 0:
              alert("Ділити на нуль не можна!");
              break;
            default:
              result = firstNumber / secondNumber;
              alert(
                `У нас вийшов такий приклад: ${firstNumber} ${mathematicalSymbol} ${secondNumber} = ${result}.`
              );
          }
          break;
      }
    }
  }
}


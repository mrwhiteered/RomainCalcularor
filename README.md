# RomainCalcularor
Задача Calculator
Описание

Создайте функцию calculate. Функция должна принимать арифметические операции двух чисел в виде строки и возвращать строку с результатом их выполнения.
Функция принимает данные из аргументов и возвращает с помощью return.
Требования

    Успешно решенное задание должно пройти все тесты на repl.it (описание работы с платформой см. ниже)
    Калькулятор умеет выполнять операции сложения, вычитания, умножения и деления с двумя числами: a + b, a - b, a * b, a / b. Данные передаются в виде одной строки!
    Калькулятор умеет работать как с арабскими (1,2,3,4,5…), так и с римскими (I,II,III,IV,V…) числами.
    Калькулятор должен принимать на вход числа от 1 до 10 включительно, не более. На выходе числа не ограничиваются по величине и могут быть любыми.
    Калькулятор умеет работать только с целыми числами.
    Результат на выходе всегда строка с целым числом. В делении учитываем только целую часть.
    Калькулятор умеет работать только с арабскими или римскими цифрами одновременно, при вводе пользователем строки вроде 3 + II калькулятор должен выбросить исключение и прекратить свою работу.
    Т.к. в римской системе нет нуля и отрицательных чисел - возвращаем пустую строку.
    При вводе пользователем неподходящих чисел приложение выбрасывает исключение и завершает свою работу.
    При вводе пользователем строки не соответствующей одной из вышеописанных арифметических операций приложение выбрасывает исключение и завершает свою работу.
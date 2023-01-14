const { format, parse, add, addBusinessDays, differenceInSeconds, set, isSameDay, isAfter, isBefore, startOfDay, endOfDay } = require('date-fns');

//Método format
//Converte objeto js em string
const formatDate = new Date(2017, 3, 12);
const formatDate1 = format(formatDate, "dd-MMM-yyyy");
const formatDate2 = format(formatDate, "dd/MMM/yyyy");
const formatDate3 = format(formatDate, "dd 'de' MMMM 'de' yyyy");
console.log("format:", formatDate1);
console.log("format:", formatDate2);
console.log("format:", formatDate3);

//"2021-08-10 23:40:35"
const dataRegistroDeposito = format(new Date(), "yyyy-dd-MM kk:mm:ss");
console.log("deposito:", dataRegistroDeposito);

//Método parse
//Converte string em objeto js
const parseDate = parse('02/11/2014', 'MM/dd/yyyy', new Date());
console.log("parse:", parseDate);

//Método add
//Faz operações aritiméticas (somar/subtrair) de um objeto de data. Ele não modifica o objeto original, cria um novo.
const addDate = new Date(2017, 3, 12);
console.log("new Date():", addDate);
//Mais 2 segundos, 1 dia e 10 anos
const newAddDate = add(addDate, {
    seconds: 2,
    days: 1,
    years: 10
});
console.log("add:", newAddDate);

//Método addBusinessDays (dias úteis)
//Soma dias uteis a uma data. Atenção pode variar pois os feriados são diferentes de país para país.

//Somar 10 dias uteis em 1/9/2014
const addBusinessDaysDate = addBusinessDays(new Date(2014, 8, 1), 10);
console.log("addBusinessDays:", addBusinessDaysDate);

//Método difference
//Existem vários, com funcionamento parecido
//Nesse exemplo é a diferença de segundos entre:
//2/7/2014 12:30:07:999 e 2/7/2014 12:30:20:000
const differenceInSecondsDate = differenceInSeconds(
    new Date(2014, 6, 2, 30, 20, 0),
    new Date(2014, 6, 2, 30, 07, 999)
);
console.log("differenceInSeconds:", differenceInSecondsDate);

//Método set
//Existem vários, com funcionamento parecido
//Modifica uma data
//Transforma 1/9/214 para 20/10/2015
const setDate = set(new Date(2014, 8, 20), {
    year: 2015,
    month: 9,
    date: 20
});
console.log("set:", setDate);

//Método isSame
//Existem vários, com funcionamento parecido
//Nesse exemplo verifica se os dias são iguais
const mesmoDia = isSameDay(
    new Date(2014, 8, 4, 6, 0),
    new Date(2014, 8, 4, 18, 0));
console.log("isSameDay:", mesmoDia);

//Método isAfter
//Nesse exemplo verifica se uma data é depois da outra
//10/7/1989 é depois de 11/1/1987
const depois = isAfter(
    new Date(1989, 6, 10),
    new Date(1987, 1, 11));
console.log("isAfter:", depois);

//Método isBefore
//Nesse exemplo verifica se uma data é antes da outra
const antes = isBefore(
    new Date(1989, 6, 10),
    new Date(1987, 1, 11));
console.log("isBefore:", antes);

//Método startOf
//Nesse exemplo arredonda para o inicio
const arredondarAntes = startOfDay(new Date(2014, 8, 2, 11, 55, 0));
console.log("startOfDay:", arredondarAntes);
//2014-09-02T03:00:00.000Z

//Método endOf
//Nesse exemplo arredonda para o final
const arredondarDepois = endOfDay(new Date(2014, 8, 2, 11, 55, 0));
console.log("endOfDay:", arredondarDepois);

//Conersão de time zone
const { zonedTimeToUtc, utcToZonedTime } = require('date-fns-tz');

//Seta data para "2018-09-01T16:01:36.386Z"
const utcDate = zonedTimeToUtc('2018-09-01 18:01:36.386', 'Europe/Berlin');
console.log("zonedTimeToUtc:", utcDate);

//Obtem a instacia de Data que será convertida para o horario de Berlin em data UTC
const date = new Date('2018-09-01T16:01:36.386Z');
const timeZone = 'Europe/Berlin'
const zonedDate = utcToZonedTime(date, timeZone);
console.log("utcToZonedTime:", zonedDate);
//zonedDat pode ser usada para incializar a selecionador de data ou imprimir formatada local dia/hora.
//Seta a saída para "1.9.2018 18:01:36:386 GMT+02:00 (CEST)"
const patter = `d.M.yyyy HH:mm:ss.SSS \ 'GMT\ ' XXX (z)`
const output = format(zonedDate, patter, { timeZone: 'Europe/Berlin' })
console.log("Seta a saída para:", output);







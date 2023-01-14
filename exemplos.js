//Datas em JS

//new Date()
//-> É um objeto nativo do JavaScript criado especialmente para armazenar e manipular datas.

//Diferença de data e momento
//-> Uma data tem um momento
//-> Um momento tem varias datas
//-> new Date() considera momento (dia, mês, ano, hora e fuso horário)

//new Date() vazio pega o momento agora
const agora = new Date();
//2023-01-06T06:03:38.157Z
console.log(agora);
//T -> tempo
//Z - fuso horario UTC (horario Greenwitch - Londres), baseado na configuração do computador.

//Imprimir o primeiro dia do ano
//mês 01 (janeiro) = 0
//dia 01 = 1
const date = new Date(2023, 0);
//2023-01-01T03:00:00.000Z
console.log(date);
//3 horas de diferença entre São Paulo e Londres

//Imprimir data da final da copa
const finalDaCopa = new Date(2002, 5, 30, 8);
//2002-06-30T11:00:00.000Z
console.log(finalDaCopa);
//new Date(ano, (mês - 1), dia, hora, minuto, segundo, milesimo);

//timestamp
//Um número que representa um momento da história. Esse número é a quantidade de milissegundos que passaram desde primeiro de janeiro de 1970, a 00:00:00.000 em Greenwich.

//Imprimir timestamp da final da copa
const finalDaCopaTimeStamp = new Date(2002, 5, 30, 8);
const timestamp = +finalDaCopa;
console.log(timestamp);
//1025434800000

//Mais uma hora
const finalMaisUmaHoraTimeStamp = +finalDaCopa + (1000 * 60 * 60);
console.log(finalMaisUmaHoraTimeStamp);
//1025438400000

//Mais uma hora
const finalMaisUmaHoraDate = new Date(finalMaisUmaHoraTimeStamp);
console.log(finalMaisUmaHoraDate);
//2002-06-30T12:00:00.000Z

//Exercicio resolvido
//A final foi vencida pelo Brasil com dois gols de Ronaldo Fenomeno:
//Sabendo que um tempo tem 45 minutos e que são 15 minutos de intervalo, crie dois objetos com datas em que ocorreram cada um dos gols. Use Timestamps.

//1 O primeiro aos 22 minutos do segundo tempo.
const fCopaTimeStamp = new Date(2002, 5, 30, 8);
const ts = +fCopaTimeStamp;
const primeiroGolTimeStamp = ts + (45 + 15 + 22) * 60 * 1000;
const primeiroGolDate = new Date(primeiroGolTimeStamp)
console.log(primeiroGolDate);
//2002-06-30T12:22:00.000Z

//2 O segundo aos 34 minutos do segundo tempo.
const segundoGolTimeStamp = ts + (45 + 15 + 34) * 60 * 1000;
const segundoGolDate = new Date(segundoGolTimeStamp)
console.log(segundoGolDate);
//2002-06-30T12:34:00.000Z

//Criar datas a partir de texto NÃO FAÇAM ISSO EM CASA
const dataTexto = new Date("2002-06-30T12:34:00.000Z");
console.log(dataTexto);

//Comparando datas USAR TIMESTAMP
//Datas são objetos, portanto são comparados por referência, ou seja: new Date(0) !== new Date(0)
//Ou seja, caso queira comparar se é o mesmo momento, use timestamps: +(new Date(0)) === +(new Date(0))
//Caso queira comparar anterioridade ou posterioridade, use timestamps e os operadores tradicionais >, >, >= e <=

//Getters e Setters
//date-fns
// npm install date-fns --save


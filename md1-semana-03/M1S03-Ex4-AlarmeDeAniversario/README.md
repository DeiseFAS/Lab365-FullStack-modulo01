[M1S03] Ex4 - Alarme de Aniversário

Use uma sintaxe que chama uma função em intervalos de tempo definidos e faça ela verificar se chegou uma data, se essa data chegou, ela deve imprimir feliz aniversário. Se não chegou, ela deve dizer quantos dias faltam para chegar a data.
Para facilitar o cálculo de dias, pode se basear no algorítimo abaixo.
const d1 = '2021-10-05';
const d2 = '2021-11-12';
const diffInMs = new Date(d2) - new Date(d1)
const diffInDays = diffInMs / (1000 60 60 * 24);
console.log(diffInDays) // 38

Docente: Walberson Dias


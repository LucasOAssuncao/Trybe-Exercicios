const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
const ex5 = () => names.reduce((acc, nome) =>
acc + nome.split('').reduce((acumulator, nome2) => {
   if (nome2 === 'a' || nome2 === 'A') return acumulator + 1;
   return acumulator;
}, 0), 0);

console.log(ex5());

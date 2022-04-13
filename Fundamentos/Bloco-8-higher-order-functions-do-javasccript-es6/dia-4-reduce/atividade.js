const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  const ex1 = () => arrays.reduce((acc, item ) => {
      item.forEach((accitem) => {
          acc.push(accitem);
      });
      return acc;
  }, []);

  console.log(ex1());
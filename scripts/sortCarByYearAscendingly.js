function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  for (let i = 1; i < result.length; i++) {
    let temp = result[i];
    
    for (let j = i - 1; j >= 0 && result[j].year > temp.year; j--) {
      result[j + 1] = result[j];
      result[j] = temp;
    }
  }
  console.log(result);
  
  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}

interface NotaPeso {
    nota: number;
    peso: number;
  }
  
  function calcularMediaPonderada(listaNotas: NotaPeso[]): number {
    let somaNotas = 0;
    let somaPesos = 0;
  
    for (const notaPeso of listaNotas) {
      const { nota, peso } = notaPeso;
      somaNotas += nota * peso;
      somaPesos += peso;
    }
  
    const media = somaNotas / somaPesos;
    return media;
  }
  
  const notas = [
    { nota: 7, peso: 2 },
    { nota: 8, peso: 3 },
  ];
  
  const mediaPonderada = calcularMediaPonderada(notas);
  console.log(mediaPonderada);
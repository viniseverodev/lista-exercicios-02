function ehDataValida(dia, mes, ano) {
  if(typeof dia !== "number" || typeof mes !== "number" || typeof ano !== "number") {
    return false
  }


  if(dia < 1 || dia > 31 || mes < 1 || mes > 12) {
    return false
  }

  let bissexto = false

  if (ano % 400 === 0) {
    bissexto = true
  } else if(ano % 100 === 0) {
    bissexto = false
  }else if(ano % 4 === 0) {
    bissexto = true
  } else {
    bissexto = false
  }

  let finalMes = [31, 28, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  if(mes === 2 && bissexto === true) {
    finalMes[1] = 29
  }

  if(dia > finalMes[mes -1]) {
    return false
  }

  return true
}

console.log(ehDataValida(11, 12, 2021))
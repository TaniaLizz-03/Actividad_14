const compraCasco = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("Comprando Casco")
        },1000)
    })
}


const compraGuantes = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(" Comprando Guantes")
        },2000)
    })
}

const irPaseo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(" Paseo en Bici")
        },8000)
    })
}

const planCompras = async () => {
   const cas = await compraCasco();
   const gua = await compraGuantes();
   const paseo = await irPaseo();
   return [cas, gua, paseo]
}

planCompras()
.then(data => console.log(data));
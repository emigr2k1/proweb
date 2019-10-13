let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(0, 0, 500, 500);

// estrellas
ctx.fillStyle = "rgb(255, 255, 255)";
{
    for (let i = 0; i < 200; i++) {
        let x = Math.random() * 500;
        let y = Math.random() * 300;
        ctx.beginPath();
        ctx.ellipse(x, y, 1, 1, 0, Math.PI * 2, 0);
        ctx.fill();
    }
}

// edificio izquierda atras
ctx.fillStyle = "rgb(10, 10, 10)";
ctx.fillRect(0, 200, 100, 300);

// ventanas
{
    ctx.fillStyle = "rgb(82, 81, 51)"
    let cantidadVentanasX = 6;
    let cantidadVentanasY = 20;

    let margenVentanasX = 8;
    let margenVentanasY = 8;

    let tamanoVentanaX = (100-(margenVentanasX*(cantidadVentanasX+1)))/cantidadVentanasX;
    let tamanoVentanaY = (300-(margenVentanasY*(cantidadVentanasY+1)))/cantidadVentanasY;
    console.log(tamanoVentanaX);
    console.log(tamanoVentanaY);
    for (let i = 0; i < cantidadVentanasX; i++) {
        for (let j = 0; j < cantidadVentanasY; j++) {
            ctx.fillRect(0 + margenVentanasX*i + tamanoVentanaX*i, 200 + margenVentanasY*j + tamanoVentanaY*j, tamanoVentanaX, tamanoVentanaY);
        }
    }
}

// edificio derecha hasta atras
ctx.fillStyle = "rgb(5, 5, 5)";
ctx.fillRect(280, 350, 150, 150);
// ventanas
{
    ctx.fillStyle = "rgb(82, 81, 51)"
    let cantidadVentanasX = 6;
    let cantidadVentanasY = 10;

    let margenVentanasX = 8;
    let margenVentanasY = 8;

    let tamanoVentanaX = (150-(margenVentanasX*(cantidadVentanasX+1)))/cantidadVentanasX;
    let tamanoVentanaY = (150-(margenVentanasY*(cantidadVentanasY+1)))/cantidadVentanasY;
    console.log(tamanoVentanaX);
    console.log(tamanoVentanaY);
    for (let i = 0; i < cantidadVentanasX; i++) {
        for (let j = 0; j < cantidadVentanasY; j++) {
            ctx.fillRect(280 + margenVentanasX*i + tamanoVentanaX*i, 350 + margenVentanasY*j + tamanoVentanaY*j, tamanoVentanaX, tamanoVentanaY);
        }
    }
}

// edificio izquierda medio
ctx.fillStyle = "rgb(20, 20, 20)";
ctx.fillRect(80, 230, 130, 270);
// ventanas
{
    let inicioX = 90;
    let inicioY = 240;
    let tamanoX = 110;
    let tamanoY = 250;

    ctx.fillStyle = "rgb(138, 136, 67)"
    let cantidadVentanasX = 6;
    let cantidadVentanasY = 20;

    let margenVentanasX = 8;
    let margenVentanasY = 8;

    let tamanoVentanaX = (tamanoX-(margenVentanasX*(cantidadVentanasX+1)))/cantidadVentanasX;
    let tamanoVentanaY = (tamanoY-(margenVentanasY*(cantidadVentanasY+1)))/cantidadVentanasY;
    console.log(tamanoVentanaX);
    console.log(tamanoVentanaY);
    for (let i = 0; i < cantidadVentanasX; i++) {
        for (let j = 0; j < cantidadVentanasY; j++) {
            ctx.fillRect(inicioX + margenVentanasX*i + tamanoVentanaX*i, inicioY + margenVentanasY*j + tamanoVentanaY*j, tamanoVentanaX, tamanoVentanaY);
        }
    }
}

// edificio centro frente
ctx.fillStyle = "rgb(30, 30, 30)";
ctx.fillRect(170, 70, 170, 430);
// ventanas
{
    let inicioX = 180;
    let inicioY = 90;
    let tamanoX = 160;
    let tamanoY = 410;

    ctx.fillStyle = "rgb(224, 220, 76)"
    let cantidadVentanasX = 10;
    let cantidadVentanasY = 30;

    let margenVentanasX = 8;
    let margenVentanasY = 8;

    let tamanoVentanaX = (tamanoX-(margenVentanasX*(cantidadVentanasX+1)))/cantidadVentanasX;
    let tamanoVentanaY = (tamanoY-(margenVentanasY*(cantidadVentanasY+1)))/cantidadVentanasY;
    console.log(tamanoVentanaX);
    console.log(tamanoVentanaY);
    for (let i = 0; i < cantidadVentanasX; i++) {
        for (let j = 0; j < cantidadVentanasY; j++) {
            ctx.fillRect(inicioX + margenVentanasX*i + tamanoVentanaX*i, inicioY + margenVentanasY*j + tamanoVentanaY*j, tamanoVentanaX, tamanoVentanaY);
        }
    }
}

// edificio derecha atras
ctx.fillStyle = "rgb(10, 10, 10)";
ctx.fillRect(350, 280, 150, 220);
// ventanas
{
    let inicioX = 350;
    let inicioY = 300;
    let tamanoX = 150;
    let tamanoY = 200;

    ctx.fillStyle = "rgb(122, 121, 61)"
    let cantidadVentanasX = 10;
    let cantidadVentanasY = 14;

    let margenVentanasX = 6;
    let margenVentanasY = 6;

    let tamanoVentanaX = (tamanoX-(margenVentanasX*(cantidadVentanasX+1)))/cantidadVentanasX;
    let tamanoVentanaY = (tamanoY-(margenVentanasY*(cantidadVentanasY+1)))/cantidadVentanasY;
    console.log(tamanoVentanaX);
    console.log(tamanoVentanaY);
    for (let i = 0; i < cantidadVentanasX; i++) {
        for (let j = 0; j < cantidadVentanasY; j++) {
            ctx.fillRect(inicioX + margenVentanasX*i + tamanoVentanaX*i, inicioY + margenVentanasY*j + tamanoVentanaY*j, tamanoVentanaX, tamanoVentanaY);
        }
    }
}

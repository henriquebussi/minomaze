const color = require('cli-color');
const input = require('prompt-sync')();

const planta: number[][] = [

        [22, 22, 22, 22, 22, 33, 11, 22, 22, 22, 22, 22, 22, 11, 11, 22, 22, 22, 22, 22],
        [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
        [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
        [22, 11, 88, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 11],
        [22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
        [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
        [22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
        [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
        [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
        [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
        [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
        [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
        [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
        [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
        [22, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
        [22, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
        [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
        [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
]

const planta1: number[][] = [

        [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
        [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
        [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
        [77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 22],
        [77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 22],
        [22, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 22],
        [22, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 22],
        [22, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 22],
        [77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 22],
        [77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 22],
        [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
        [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
        [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]

]


const colorir = (text: number): string => {
        if (text == 22) {
                return color.red.bgRed('  ')
        } else if (text == 11) {
                return color.blue.bgBlue('  ')
        } else if (text == 33) {
                return color.green.bgGreen('  ')
        } else if (text == 77) {
                return color.magenta.bgMagenta('  ')
        } else {
                return color.yellow.bgYellow('  ')
        }
}

var x: number = 0;
var y: number = 5;
var passos: number = 0;

const mostrarPlanta = (planta_atual: number[][]): void => {
        console.clear();
        for (let i of planta_atual) {
                let linha: any[] = [];
                for (let e of i) {
                        linha.push(colorir(e))
                }
                console.log(linha.toString().replaceAll(',', ''));
        }
        console.log('Passos: ', passos);

}

const subir = (planta:number[][]): void => {
        if (x - 1 >= 0 && planta[x-1][y] !== 22) {
                planta[x][y] = 11
                x = x - 1
                planta[x][y] = 33
                passos++
        }
}

const descer = (planta:number[][]): void => {
        if (x + 1 < planta.length && planta[x+1][y] !== 22) {
                planta[x][y] = 11
                x = x + 1
                planta[x][y] = 33
                passos++
        }
}

const esquerda = (planta:number[][]): void => {
        if (y - 1 >= 0 && planta[x][y - 1] !== 22) {
                planta[x][y] = 11
                y = y - 1
                planta[x][y] = 33
                passos++
        }
}

const direita = (planta:number[][]): void => {
        if (y + 1 < planta[0].length && planta[x][y + 1] !== 22) {
                planta[x][y] = 11
                y = y + 1
                planta[x][y] = 33
                passos++
        }
}

const verificaproduto = ():boolean => {
        for (var linha of planta){
                for (var item of linha){
                        if (item == 88) {
                                return false;
                        }
                }
        }
        return true;
}

const start = (planta_atual:number[][]) => {
        mostrarPlanta(planta_atual);
        let escolha: string = input('Digite uma direção (w, a, s, d) ou (q) para sair: ')
        if (escolha.toUpperCase() == "Q" || verificaproduto()) {
                return
        } else if (escolha.toUpperCase() == 'W') {
                subir(planta_atual);
        } else if (escolha.toUpperCase() == 'A') {
                esquerda(planta_atual);
        } else if (escolha.toUpperCase() == 'S') {
                descer(planta_atual);
        } else if (escolha.toUpperCase() == 'D') {
                direita(planta_atual);
        }
        if (x == 3 && y == 19){
                planta_atual = planta1
                x = 3;
                y = 0;
                
                planta[3][19] = 11
                planta_atual[3][0] = 33
        }
        if (planta_atual == planta1 && x == 8 && y == 0 || x == 9 && y == 0){
                planta_atual = planta
                x = 0;
                y = 5;
                planta1[8][0] = 11
                planta1[9][0] = 11
                planta_atual[0][5] = 33
        }
        start(planta_atual)
}

start(planta)
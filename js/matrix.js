//relacionar a constant Canvas com o elemento canvas no html, e o ctx com o contexto 2D do canvas, para desenhar nele
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

//definir o tamanho do canvas para preencher a janela inteira, para que as letras caiam pelo ecrã canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//constante com o que queremos utilizar no matrix
const chars = [
    "{", "}", "[", "]", "<", ">", "/", "\\", "=", "+", "-", "*", "%", "$", "#", "@",
    "if", "else", "var", "let", "null", "true", "false",
    "<div>", "</div>", "<html>", "<script>",
    "0", "1", "A", "B", "C", "D", "E", "F"
];


//definir o tamanho da letra
const tamanhoLetra = 12;
//math.floor arredonda para baixo, para prevenir sair dos limites da pagina
const colunas = Math.floor(canvas.width / tamanhoLetra);

// array para armazenar a posiçao das letras
const gotas = [];

//inicializar o array gotas com a posiçao inicial das letras, para que comecem a cair do topo da pagina
for (let i = 0; i < colunas; i++) {
    gotas[i] = 1;
}

//Draw = funçao para desenhar as letras no canvas, e para atualizar a posiçao das letras, para que caiam
const draw = () => {
	const isLightMode = document.body.classList.contains('light-mode');
	ctx.fillStyle = isLightMode ? 'rgba(232, 255, 232, 0.05)' : 'rgba(0, 0, 0, 0.05)';

	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = isLightMode ? '#007a1f' : '#0F0';
	
	
	ctx.font = tamanhoLetra + 'px monospace';

    //loop para desenhar as letras no canvas, e para atualizar a posiçao das letras, para que caiam
	for(let i = 0; i < gotas.length; i++)
	{
        //charAt = metodo para apanhar um caracter do alfabeto, e math.random para randomizar a escolha da letra, para que nao sejam sempre as mesmas letras a cair
		const text = chars[Math.floor(Math.random() * chars.length)];
        //fillText = metodo para desenhar a letra no canvas, e i*tamanhoLetra para posicionar a letra na horizontal,
        //  e gotas[i]*tamanhoLetra para posicionar a letra na vertical
		ctx.fillText(text, i*tamanhoLetra, gotas[i]*tamanhoLetra);
		// if para randomizar a queda das letras, para fazer com que nao caiam todas ao mesmo tempo, e para fazer com que as letras voltem a cair depois de chegar ao fim da pagina
		if(gotas[i]*tamanhoLetra > canvas.height && Math.random() > 0.975){
			gotas[i] = 0;
        }
		gotas[i]++;
	}
};
setInterval(draw, 70);
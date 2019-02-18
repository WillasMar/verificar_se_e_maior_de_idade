$(function(){
	$('form').bind('submit',function(e){
		//evita que o formulário envie os dados
		e.preventDefault();

		/*armazena a data que o usuário 
		informou no campo data*/
		var data_nascimento = $('#data').val();

		/*verifica se informou a data de nascimento*/
		if(data_nascimento != ''){
			/*cria um array separando a
			data que o usuário informou 
			por ano, mes e dia, conforme
			os dados recebidos do campo data*/
			var dataN = data_nascimento.split('-');
			var diaN = dataN[2]; //dia nascimento
			var mesN = dataN[1]; //mes nascimento
			var anoN = dataN[0]; //ano nascimento
			
			/*armazena a data atual, 
			depois separa por dia, mes e ano*/
			var data_atual = new Date();
			var dia_atual = data_atual.getDate();
			var mes_atual = data_atual.getMonth() + 1;
			var ano_atual = data_atual.getFullYear();

			/*coloca um zero no mês caso o número
			seja menor do que dez*/
			if(mes_atual < 10){
				mes_atual = '0'+mes_atual;
			}

			//determina a idade com base no ano
			var idade = ano_atual - anoN; 

			/*verifica se está fazendo ou
			se já fez aniversário,
			se sim então mantém a idade que foi
			baseada no ano, se não diminui 1 na idade*/
			if(mesN != mes_atual && mesN > mes_atual){
				idade -= 1;
			}else if(mesN == mes_atual){ 
				if(diaN != dia_atual && diaN < dia_atual){
					idade -= 1;
				}else if(diaN == dia_atual){
					alert('Feliz aniversário!');
				}				
			}

			//verifica se é maior de idade
			if(idade >= 18){
				alert('Idade = '+idade+' | Maior de idade!');
			} else {
				alert('Idade = '+idade+' | Menor de idade!');
			}

		} else {
			alert('Por favor, informe sua data de nascimento!');
		}

		document.getElementById('data').focus();
		$('#data').val('');
		
	});
})
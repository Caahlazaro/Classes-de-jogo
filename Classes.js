// Definição da classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
// Método para realizar um ataque, exibindo a mensagem conforme o tipo do herói
    atacar() {
      let ataque;
 
 // Usando um switch para determinar o ataque com base no tipo do herói

//O switch é uma estrutura de controle de decisão que avalia uma expressão
      switch (this.tipo) {
        case "Mago"://case é usado dentro de um switch para comparar um valor específico com o valor da expressão
          ataque = "usou magia";
          break; // é utilizado para sair do switch após a execução do bloco de código do caso correspondente.
        case "Guerreiro":
          ataque = "usou Espada";
          break;
        case "Bruxa":
          ataque = "usou Bruxaria";
          break;
        case "Feiticeiro":
          ataque = " Feitiço das sombras";
          break;
        default://default é utilizado quando nenhum dos casos correspondentes é encontrado
          ataque = "usou um ataque indefinido";
      }

    // Exibindo a mensagem formatada no console
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
// Exemplo de uso:
  const heroi1 = new Heroi("Aragorn", 30, "Guerreiro");
  const heroi2 = new Heroi("Gandalf", 150, "Mago");
  const heroi3 = new Heroi("Liara",250, "Bruxa");
  const heroi4 = new Heroi("Merlin", 320,"Feiticeiro")
  
// Chamando o método atacar para cada herói
  heroi1.atacar(); // Saída: O guerreiro Aragorn atacou usando espada
  heroi2.atacar(); // Saída: O mago Gandalf atacou usando magia
  heroi3.atacar(); // Saída: A Bruxa Liara atacou usando bruxaria
  heroi4.atacar(); //O feiticeiro Merlin atacou usando feitiço das sombras

  
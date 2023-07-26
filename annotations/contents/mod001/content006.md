# Serviços

## O que é
Nos utilizamos o serviço para que não tenha a necessidade de 
deixar toda a logica a cargo do template.
O template fica a cargo da interação com usuário. Deixando chamadas de servidor
e validações com a class de serviço

esquema ideal de fluxo de dados e logica.

![img](/annotations/assets/img/intro_008.png)

## Criar um service

Gera o service no diretório explicito, caso não explicitar
o serviço é alocado na pasta raiz do projeto.
~~~ bash
$ ng g service dir/name_service 
~~~

Feito o serviço atribuiremos todas as logicas que cabem a ele. 

## Demostração de injeção

vamos adicionar em nosso serviço uma simulação de chamada ao servidor
que espera como retorno uma lista de cursos.

~~~ javascript
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }
  
  nomePortal:string = "Loiane Trainer";
  cursos: string[] = ["Java Básico", "Java Avançado", "SpringBoot", "Javascript Básico", "Javascript Avançado", "Angular 13"];
 
}

~~~

Vamos utilizar a injeção de dependência para poder adicionar uma instancia
do serviço em nosso component.
O que nos possibilita torna nosso serviço injetável é o decorator ***@Injectable***. No exemplo acima ele tem um objeto
como parâmetro informando que ele será provido para todo e qualquer component de qualquer modulo. Quando dizemos provido,
queremos dizer que o component que desejar usar suas funções poderá injetá-lo sem problemas.

Caso o serviço não estiver com **providedIn: root**. Precisaríamos declarar nosso service no decorator providers do módulo
qual queremos utilizar.

A injeção sera feita via **constructor**:
No paramento do construtor. Adicionamos uma instancia do service

~~~ javascript
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  nomePortal: string = '';

  constructor(private cursosService: CursosService) {

    this.cursos = this.cursosService.getCursos();
    this.nomePortal = this.cursosService.getNomePortal();
  }


  ngOnInit(): void {
  }

}
~~~

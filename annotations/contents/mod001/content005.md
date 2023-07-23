## Templates 

É a parte da View que sera renderizado ao usuário.
Todo componente tem o seu template. Seja por meio de templateUrl ou template literal.
Vamos criar um exemplo de apresentação de dados definidos no component e apresentar no template.


Neste exemplo estamos criando duas variáveis sendo uma um array, e iremos fazer o dataBinding do componente para o template
afim de apresentar as duas variáveis na view(template).

~~~ javascript
export class CursoComponent{
    nomePortal: string;
    cursos: string[] = ["Java Básico","Java Avançado","SpringBoot","Javascript Básico","Javascript Avançado","Angular 13"];
    constructor(){}
}
~~~

No html utilizaremos a diretiva do Angular ***NgFor***, que servira para percorrer o array de string cursos
criando um novo elemento ***li*** para cada index de cursos
~~~ html
<p> Lista de cursos do portal: {{nomePortal}}</p>
<ul>
    <li *ngFor="let curso of cursos"> {{curso}}</li>
</ul>

~~~

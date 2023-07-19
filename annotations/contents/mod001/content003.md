## Criar Projeto
Para criar o primeiro projeto vamos utilizar o Angular/CLI

~~~ bash
$ ng new primeiro-projeto # cria um novo projeto angular com o nome de primeiro-projeto
~~~
Depois que rodarmos o comando o CLI ira criar toda a estrutura de um projeto
instalando pacotes(dependências) necessárias.

Apos o projeto criado iremos ver no diretório a pasta de ***node-modules***, é onde estará
todas as bibliotecas do projeto, atuais e futuras que poderão ser instaladas.
No arquivo ***package.json*** está a declaração de todas as dependências e bibliotecas adicionadas no projeto.


 Rodando o comando no diretório do projeto. Poderemos ver o Angular rodando uma pagina default. Onde iremos
modificar para tratarmos nossos projetos.
~~~ bash
ng serve #roda o projeto inicial na porta 4200 do localhost
~~~

Abrindo o navegador na URL localhost:4200 veremos:

![](/annotations/assets/img/intro_005.png)

## Criar componentes
No caminho do diretório do projeto **src/app** é onde iremos criar os nossos ***components***
nele poderemos ver uma estrutura inicial ja formada.

![](/annotations/assets/img/intro_006.png)

- Inicialmente iremos criar um component de forma manual. Então no diretório de src/app criaremos uma nova
pasta com o nome de ***meu-primeiro***

- Criar arquivo typescript(ts) para o primeiro component.

![](/annotations/assets/img/intro_009.png)

- Declara uma class como o nome do component, seguindo o style guide do typescript. Por enquanto
a class não será um component, será apenas uma class normal em TS

~~~ javascript
class MeuPrimeiroComponent{

}
~~~

-  Para torna a class um component utilizaremos o decorator(o semelhante a annotation em JAVA)

***@Component*** do pacote ***@angular/core***. O @Component tem um corpo com seus **metadados** eles são
declarados entre as chaves ***{}***. 

Descrição dos metadados do ***@Component***:
    - **selector:** informa o nome da tag do component. Assim quando for adicionar o mesmo em outro componente
ele será declarado como \<nome-component\> \</nome-component\>
    
- **templateUrl:** referencia o arquivo html onde sera construída a view do component. Ou podemos utiliza o decorator 

- ***template:*** para adicionar de forma literal toda a estrutura HTML entre aspas  **''**.

- ***styleUrls:*** array com referência a arquivos de style dos templates que construiremos.


~~~ javascript
import {Component} from "@angular/core";

@Component({
  selector: 'app-meu-primeiro',
  templateUrl: 'meu-primeiro.component.html',
  styleUrls: ['meu-primeiro.component.css']
})
export class MeuPrimeiroComponent {

}
~~~

**OBS**: Lembrar de criar os arquivos de css e html declarados nos metadados de templateUrl e styleUrls.

 Podemos então adicionar alguma informação em nosso template e tentar renderiza-lo em outro component. O component 
 ***app.component.ts*** é um component que foi criado na construção do projeto, ele é o mesmo que renderiza na pagina 
 inicial do projeto Angular. Para renderizar o meu-primeiro.component.ts seguimos os passos:


- Adicionamos o nosso selector no template do **app.component**
- Adicionarmos a keyword ***export*** em nosso component. Assim ele poderá ser visto e utilizado por outros components 
no projeto
- Todo component pertence a um modulo. Então o nosso component precisa ser declarado em um modulo. No caso utilizaremos
o modulo default criado pelo CLI, o ***app.module***. O app.module, assim como no component, contém um decorator para o 
identificar e o configurar como um modulo, e um dos metadados do seu decorator é ***declarations:[]***, nele onde
é declarado todos os components pertencente aquele modulo. Então adicionaremos o nome de class do nosso component em seu
declarations. Então podemos rodar o projeto novamente e verificar o render.

  ![](/annotations/assets/img/intro_009.png)


## Criar component com o CLI
Agora como o component criado e renderizado na página inicial, vamos criar um component via CLI. 
No diretório do projeto rodamos:

~~~ bash
ng g component nome-component
# ou
ng generate component meu-segundo
# ou
ng g c meu-segundo
~~~

Apos rodar o comando o CLI criar o component na pasta de app e ja declara o component
no **declarations** do app.modules.
os arquivos criados são:

![](/annotations/assets/img/intro_007.png)



## Style guide
O style guide do angular para criar pastas é separa as palavras por traços como no component criado

    meu-primeiro.component.ts

Para criar arquivos ts,css,html, etc... separamos as definições por '**.**'(DOT).

    meu-primeiro.component.ts
    meu-primeiro.component.html
    meu-primeiro.component.css
    
Declaração de classes devem ter o nome da class em **CamelCase**.

```typescript
export class CamelCaseClassTypeScript {
    
}
```



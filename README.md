<h1>Calculadora com alternância de temas</h1>

## Índice

- [Descrição do Projeto](#descrição-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [O Que Aprendi](#o-que-aprendi)
- [Desenvolvimento Contínuo](#desenvolvimento-contínuo)
- [Autor](#autor)

## Descrição do Projeto 

Calculadora que permite que o usuário realize cálculos e tenha a opção de alterar o tema. 

URL:https://calculator-app-dun.vercel.app/

![design calculadora](https://user-images.githubusercontent.com/122060348/233091117-4eeee69d-1a3f-45b0-9078-131362c12e27.jpg)


## Tecnologias Utilizadas

`HTML`
`CSS`
`Javascript`


### O Que Aprendi

Na realização do projeto aprendi mais sobre toggle e seu funcionamento e como deixar salvo a opção de tema que o usuário selecionou. 

Segue exemplo, trechos dos códigos abaixo: 

JS
```js
   toggle.addEventListener("change", function () {
    toggleRetroMode();

    localStorage.removeItem("retro");
  
    if (document.body.classList.contains("retro")) {
      localStorage.setItem("retro", 1);
    }
})

```

### Desenvolvimento Contínuo

Para os próximos projetos irei estudar mais sobre arrays e manipulação de objetos. 


## Autor

- Linkedin - [Ana Carolina Bianchini](https://www.linkedin.com/in/ana-carolina-bianchini-desenvolvedora-front-end/)


# Projeto-Dados-Covid-19

O projeto I-Sars foi desenvolvido com o intuito de informar e orientar as pessoas de forma interativa e didática a respeito do coronavírus.

O site conta com um chat-bot que fornece informações confiáveis sobre a COVID-19, gráficos informativos sobre números de casos e mortes por estado do Brasil, além de permitir o usuário pesquisar sua cidade para saber o número de casos da mesma e permite verificar o número de casos por bairro da cidade de Belo Horizonte.

Para mineração dos dados foi feito um programa em Java, que usa informações sobre coronavírus extraidos da base de dados do governo, e armazena num banco PostgreSQL.

Para a realização dos gráficos, foi feito uma API para extrair os dados desse banco e por meio da linguagem JavaScript, renderiza-los na tela. As pesquisas de casos e mortes por cidade também foi utilizado JavaScript

Para criação do chat-bot, foi utilizado a API QnA Maker da Microsoft Azure, onde extrai dados de covid de um site informativo sobre a doença. Contudo, o bot está fora do ar, pois nao está hospedado devido ao custo para manter no servidor. Porém, pode-se vê-lo em funcionamento no gif presente nesse arquivo.

(todos os dados foram atualizados em novembro de 2020)

# 
|Home|Chat-Bot|DashBoard│
| --- | --- | --- │
| ![sample Home]() | ![sample Chat-Bot]() | ![sample DashBoard]() |

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    items: MenuItem[] = [];

    constructor() { }

    ngOnInit(): void {

        this.items = [

            {
                label: 'Celular e Acessorios',
                routerLink: 'marca',
                queryParams: {
                    modelo: '',
                    marca: 'Celular e Acessorios'
                },

                items: [
                    {
                        "label": "Wearables",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {

                            "marca": "Celular e Acessorios",
                            "modelo": "Wearables",

                        }
                    },
                    {
                        "label": "Celulares",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Celular e Acessorios",
                            "modelo": "Celulares",

                        }
                    },
                    {
                        "label": "Capas de Celular",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Celular e Acessorios",
                            "modelo": "Capas de Celular",
                        }
                    },
                    {
                        "label": "Cabos e Carregadores",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {

                            "marca": "Celular e Acessorios",
                            "modelo": "Cabos e Carregadores",
                        }
                    },
                    {
                        "label": "Peliculas",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Celular e Acessorios",
                            "modelo": "Peliculas",
                        }
                    },
                    {
                        "label": "Suporte para Celular",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Celular e Acessorios",
                            "modelo": "Suporte para Celular",

                        }
                    },
                    {
                        "label": "Gadgets",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Celular e Acessorios",
                            "modelo": "Gadgets",
                        }
                    },
                    {
                        "label": "Jogos para Celular",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Celular e Acessorios",
                            "modelo": "Jogos para Celular",
                        }
                    },
                    {
                        "label": "Pijamas",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Celular e Acessorios",
                            "modelo": "Pijamas",
                        }
                    },
                    {
                        "label": "Fones de Ouvido",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Celular e Acessorios",
                            "modelo": "Fones de Ouvido",
                        }
                    }
                ]
            },
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
            {
                label: 'Informatica',
                routerLink: 'marca',
                queryParams: {
                    modelo: '',
                    marca: 'Informatica'
                },
                items: [
                    {
                        label: 'Pendrives',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'Pendrives',
                            marca: 'Informatica',
                        }
                    },
                    {
                        label: 'Discos Rigidos',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            marca: 'Informatica',
                            modelo: 'Discos Rigidos',

                        }
                    },
                    {
                        label: 'Equipamentos e Componentes de Rede',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            marca: 'Informatica',
                            modelo: 'Equipamentos e Componentes de Rede',
                        }
                    },
                    {
                        label: 'Acessorios para PC',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            marca: 'Informatica',
                            modelo: 'Acessorios para PC',
                        }
                    },
                    {
                        label: 'Componentes para Computadores',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            marca: 'Informatica',
                            modelo: 'Componentes para Computadores',
                        }
                    },
                    {
                        label: 'Notebooks',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            marca: 'Informatica',
                            modelo: 'Notebooks',
                        }
                    },
                    {
                        label: 'Tablets',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            marca: 'Informatica',
                            modelo: 'Tablets',
                        }
                    },
                    {
                        label: 'Acessorios Eletronico para Escritorio',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            marca: 'Informatica',
                            modelo: 'Prisma',
                        }
                    },
                    {
                        label: 'Pilhas',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            marca: 'Informatica',
                            modelo: 'Pilhas',
                        }
                    },
                    {
                        label: 'Fontes',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            marca: 'Informatica',
                            modelo: 'Fontes',
                        }
                    },

                ]
            },
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
            {

                label: 'Calçados',
                routerLink: 'marca',
                queryParams: {
                    modelo: '',
                    marca: 'Calçados'
                },
                items: [
                    {
                        label: 'Rasteiras',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'Rasteiras',
                            marca: 'Calçados',
                        }
                    },
                    {
                        label: 'Saltos Altos',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'Saltos Altos',
                            marca: 'Calçados',
                        }
                    },
                    {
                        label: 'Mocassins',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'Mocassins',
                            marca: 'Calçados',
                        }
                    },
                    {
                        label: 'Sapatos Formais',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'Sapatos Formais',
                            marca: 'Calçados',
                        }
                    },
                    {
                        label: 'Botas',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'Botas',
                            marca: 'Calçados'
                        }
                    },
                    {
                        label: 'Sandalia',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'Sandalia',
                            marca: 'Calçados'
                        }
                    },
                    {
                        label: 'Chinelo',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'Chinelo',
                            marca: 'Calçados'
                        }
                    },
                    {
                        label: 'Tenis',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'Tenis',
                            marca: 'Calçados'
                        }
                    },
                    {
                        label: 'Calcado Desportivo',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'Calcado Desportivo',
                            marca: 'Calçados'
                        }
                    },
                    {
                        label: 'Palmilhas',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'Palmilhas',
                            marca: 'Calçados'
                        }
                    },


                ]
            },
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
            {
                label: 'Esportes e Lazer',
                routerLink: 'marca',
                queryParams: {
                    modelo: '',
                    marca: 'Esportes e Lazer'
                },

                items: [
                    {
                        "label": "Acessorios de TVnees e Musculacao",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Esportes e Lazer",
                            "modelo": "Acessorios de TVnees e Musculacao",
                        }
                    },
                    {
                        "label": "Pesca",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Esportes e Lazer",
                            "modelo": "Pesca",
                        }
                    },
                    {
                        "label": "Ciclismo",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Esportes e Lazer",
                            "modelo": "Ciclismo",
                        }
                    },
                    {
                        "label": "Futebol",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Esportes e Lazer",
                            "modelo": "Futebol",
                        }
                    },
                    {
                        "label": "Futebol de Areia",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Esportes e Lazer",
                            "modelo": "Futebol de Areia",
                        }
                    },
                    {
                        "label": "Basquete",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Esportes e Lazer",
                            "modelo": "Basquete",
                        }
                    },
                    {
                        "label": "Skate",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Esportes e Lazer",
                            "modelo": "Skate",
                        }
                    },
                    {
                        "label": "Volei",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Esportes e Lazer",
                            "modelo": "Volei",
                        }
                    },
                    {
                        "label": "Patins",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Esportes e Lazer",
                            "modelo": "Patins",
                        }
                    },
                    {
                        "label": "Patinete",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Esportes e Lazer",
                            "modelo": "Patinete",
                        }
                    },
                ]
            },
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
            {
                label: 'Audio,Informatica e Cameras',
                routerLink: 'marca',
                queryParams: {
                    modelo: '',
                    marca: 'Audio,Informatica e Cameras'
                },

                items: [
                    {
                        "label": "Tv´s",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Audio,Informatica e Cameras",
                            "modelo": "TVs",
                        }
                    },
                    {
                        "label": "Smart TVs",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Audio,Informatica e Cameras",
                            "modelo": "Smart TVs",
                        }
                    },
                    {
                        "label": "JBL",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Audio,Informatica e Cameras",
                            "modelo": "JBL",
                        }
                    },
                    {
                        "label": "Audio",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Audio,Informatica e Cameras",
                            "modelo": "Audio",
                        }
                    },
                    {
                        "label": "Acessorios de TV",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Audio,Informatica e Cameras",
                            "modelo": "Acessorios de TV",
                        }
                    },
                    {
                        "label": "Cameras",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Audio,Informatica e Cameras",
                            "modelo": "Cameras",
                        }
                    },
                    {
                        "label": "Lentes de Camera",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Audio,Informatica e Cameras",
                            "modelo": "Lentes de Camera",
                        }
                    },
                    {
                        "label": "Acessorios de Camera",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Audio,Informatica e Cameras",
                            "modelo": "Acessorios de Camera",
                        }
                    },
                    {
                        "label": "Bolsa para Carregar",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Audio,Informatica e Cameras",
                            "modelo": "Bolsa para Carregar",
                        }
                    },
                    {
                        "label": "Fone",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Audio,Informatica e Cameras",
                            "modelo": "Fone",
                        }
                    }
                ]
            },
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
            {
                label: 'Roupas Masculinas',
                routerLink: 'marca',
                queryParams: {
                    modelo: '',
                    marca: 'Roupas Masculinas'
                },

                items: [
                    {
                        "label": "Casacos",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Roupas Masculinas",
                            "modelo": "Casacos",
                        }
                    },
                    {
                        "label": "Blusas",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Roupas Masculinas",
                            "modelo": "Blusas",
                        }
                    },
                    {
                        "label": "Camisas",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Roupas Masculinas",
                            "modelo": "Camisas",
                        }
                    },
                    {
                        "label": "Camisetas",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Roupas Masculinas",
                            "modelo": "Camisetas",
                        }
                    },
                    {
                        "label": "Calca",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Roupas Masculinas",
                            "modelo": "Calca",
                        }
                    },
                    {
                        "label": "Bermuda",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Roupas Masculinas",
                            "modelo": "Bermuda",
                        }
                    },
                    {
                        "label": "Ternos",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Roupas Masculinas",
                            "modelo": "Ternos",
                        }
                    },
                    {
                        "label": "Cuecas",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Roupas Masculinas",
                            "modelo": "Cuecas",
                        }
                    },
                    {
                        "label": "Meias",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Roupas Masculinas",
                            "modelo": "Meias",
                        }
                    },
                    {
                        "label": "Pijamas",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Roupas Masculinas",
                            "modelo": "Pijamas",
                        }
                    }
                ]
            },
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
            {
                label: 'Acessorios de Veiculos',
                routerLink: 'marca',
                queryParams: {
                    modelo: '',
                    marca: 'Acessorios de Veiculos'
                },

                items: [
                    {
                        "label": "Acessorio Exterior",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Acessorios de Veiculos",
                            "modelo": "Acessorio Exterior",
                        }
                    },
                    {
                        "label": "Acessorio Interior",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Acessorios de Veiculos",
                            "modelo": "Acessorio Interior",
                        }
                    },
                    {
                        "label": "Carregador Veicular",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Acessorios de Veiculos",
                            "modelo": "Carregador Veicular",
                        }
                    },
                    {
                        "label": "Suporte de Celular",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Acessorios de Veiculos",
                            "modelo": "Suporte de Celular",
                        }
                    },
                    {
                        "label": "Limpeza e Manutencao",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Acessorios de Veiculos",
                            "modelo": "Limpeza e Manutencao",
                        }
                    },
                    {
                      "label": "Oleos e Fluidos",
                      "icon": "pi pi-fw pi-check",
                      "routerLink": "exibicao",
                      "queryParams": {
                          "marca": "Acessorios de Veiculos",
                          "modelo": "Oleos e Fluidos",
                      }
                  },
                  {
                    "label": "Pecas",
                    "icon": "pi pi-fw pi-check",
                    "routerLink": "exibicao",
                    "queryParams": {
                        "marca": "Acessorios de Veiculos",
                        "modelo": "Pecas",
                    }
                },
                {
                  "label": "Som",
                  "icon": "pi pi-fw pi-check",
                  "routerLink": "exibicao",
                  "queryParams": {
                      "marca": "Acessorios de Veiculos",
                      "modelo": "Som",
                  }
              },
              {
                "label": "Pecas para motos",
                "icon": "pi pi-fw pi-check",
                "routerLink": "exibicao",
                "queryParams": {
                    "marca": "Acessorios de Veiculos",
                    "modelo": "Pecas para motos",
                }
            },
            {
              "label": "Pintura",
              "icon": "pi pi-fw pi-check",
              "routerLink": "exibicao",
              "queryParams": {
                  "marca": "Acessorios de Veiculos",
                  "modelo": "Pintura",
              }
            },
                ]
            },
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
            {
                label: 'Brinquedos e Hobbies',
                routerLink: 'marca',
                queryParams: {
                    modelo: '',
                    marca: 'Brinquedos e Hobbies'
                },

                items: [
                    {
                        "label": "Bonecas",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Brinquedos e Hobbies ",
                            "modelo": "Bonecas",
                        }
                    },
                    {
                        "label": "Brinquedo de Bebe",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Brinquedos e Hobbies ",
                            "modelo": "Brinquedo de Bebe",
                        }
                    },
                    {
                        "label": "Tabuleiro",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Brinquedos e Hobbies ",
                            "modelo": "Tabuleiro",
                        }
                    },
                    {
                        "label": "Cartas",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Brinquedos e Hobbies ",
                            "modelo": "Cartas",
                        }
                    },
                    {
                        "label": "Brinquedo de Pelucia",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Brinquedos e Hobbies ",
                            "modelo": "Brinquedo de Pelucia",
                        }
                    },
                    {
                        "label": "Jogo da Memoria",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Brinquedos e Hobbies ",
                            "modelo": "Jogo da Memoria",
                        }
                    },
                    {
                        "label": "Colecionaveis",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Brinquedos e Hobbies ",
                            "modelo": "Colecionaveis",
                        }
                    },
                    {
                        "label": "Modelismo",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Brinquedos e Hobbies ",
                            "modelo": "Modelismo",
                        }
                    },
                    {
                        "label": "Carrinhos",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Brinquedos e Hobbies ",
                            "modelo": "Carrinhos",
                        }
                    },
                    {
                        "label": "Action Figures",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Brinquedos e Hobbies ",
                            "modelo": "Action Figures",
                        }
                    }
                ]
            },
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
            {
                label: 'Saude e Beleza',
                routerLink: 'marca',
                queryParams: {
                    modelo: '',
                    marca: 'Saude e Beleza'
                },

                items: [
                    {
                        "label": "Maquiagem",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Saude e Beleza",
                            "modelo": "Maquiagem",
                        }
                    },
                    {
                        "label": "Cuidados da Pele",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Saude e Beleza",
                            "modelo": "Cuidados da Pele",
                        }
                    },
                    {
                        "label": "Manicure",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Saude e Beleza",
                            "modelo": "Manicure",
                        }
                    },
                    {
                        "label": "Pedicure",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Saude e Beleza",
                            "modelo": "Pedicure",
                        }
                    },
                    {
                        "label": "Barbearia",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Saude e Beleza",
                            "modelo": "Barbearia",
                        }
                    },
                    {
                      "label": "Depilacao",
                      "icon": "pi pi-fw pi-check",
                      "routerLink": "exibicao",
                      "queryParams": {
                          "marca": "Saude e Beleza",
                          "modelo": "Depilacao",
                      }
                  },
                  {
                    "label": "Suplementos",
                    "icon": "pi pi-fw pi-check",
                    "routerLink": "exibicao",
                    "queryParams": {
                        "marca": "Saude e Beleza",
                        "modelo": "Suplementos",
                    }
                },
                {
                  "label": "Perfumes",
                  "icon": "pi pi-fw pi-check",
                  "routerLink": "exibicao",
                  "queryParams": {
                      "marca": "Saude e Beleza",
                      "modelo": "Perfumes",
                  }
              },
              {
                "label": "Condicionador",
                "icon": "pi pi-fw pi-check",
                "routerLink": "exibicao",
                "queryParams": {
                    "marca": "Saude e Beleza",
                    "modelo": "Condicionador",
                }
            },
            {
              "label": "Remedio",
              "icon": "pi pi-fw pi-check",
              "routerLink": "exibicao",
              "queryParams": {
                  "marca": "Saude e Beleza",
                  "modelo": "Remedio",
              }
          },
                ]
            },
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
            {
                label: 'Alimentos e Bebidas',
                routerLink: 'marca',
                queryParams: {
                    modelo: '',
                    marca: 'Alimentos e Bebidas'
                },

                items: [
                    {
                        "label": "Alimentos Basicos",
                         "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Alimentos e Bebidas",
                            "modelo": "Alimentos Basicos",
                        }
                    },
                    {
                        "label": "Bebidas",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Alimentos e Bebidas",
                            "modelo": "Bebidas",
                        }
                    },
                    {
                        "label": "Bebidas Alcoolicas",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Alimentos e Bebidas",
                            "modelo": "Bebidas Alcoolicas",
                        }
                    },
                    {
                        "label": "Cafe da Manha",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Alimentos e Bebidas",
                            "modelo": "Cafe da Manha",
                        }
                    },
                    {
                        "label": "Chocolate",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Alimentos e Bebidas",
                            "modelo": "Chocolate",
                        }
                    },
                    {
                        "label": "Chocolate sem Lactose",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Alimentos e Bebidas",
                            "modelo": "Chocolate sem Lactose",
                        }
                    },
                    {
                        "label": "Padaria",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Alimentos e Bebidas",
                            "modelo": "Padaria",
                        }
                    },
                    {
                        "label": "Vinho",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Alimentos e Bebidas",
                            "modelo": "Vinho",
                        }
                    },
                    {
                        "label": "Vinho Fermentado",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Alimentos e Bebidas",
                            "modelo": "Vinho Fermentado",
                        }
                    },
                    {
                        "label": "Cestas de Presente",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Alimentos e Bebidas",
                            "modelo": "Cestas de Presente",
                        }
                    }
                ]
            },
        ]
    }
}

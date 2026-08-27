const personagens = [
    { nome: "Goku", serie: "Dragon Ball", popularidade: 1000, ocidente: 1000, oriente: 1000, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: true, transformacao: true, forca: 1000, magia_poder: 100, qi: 600, qi_batalha: 1000, exp: 950, velocidade: 980, resistencia: 975, defesa: 1000, taijutsu: 993, ninjutsu: 550, genjutsu: 350 },
    { nome: "Freeza", serie: "Dragon Ball", popularidade: 880, ocidente: 850, oriente: 900, heroi: false, humano: false, anime: true, superpoderes: true, armadura: false, vilao: true, magia: false, voa: true, transformacao: true, forca: 920, magia_poder: 200, qi: 800, qi_batalha: 900, exp: 900, velocidade: 900, resistencia: 910, defesa: 910, taijutsu: 907, ninjutsu: 633, genjutsu: 500 },
    { nome: "Vegeta", serie: "Dragon Ball", popularidade: 930, ocidente: 900, oriente: 950, heroi: true, humano: true, anime: true, superpoderes: true, armadura: true, vilao: false, magia: false, voa: true, transformacao: true, forca: 950, magia_poder: 80, qi: 700, qi_batalha: 950, exp: 920, velocidade: 930, resistencia: 935, defesa: 950, taijutsu: 943, ninjutsu: 567, genjutsu: 390 },
    { nome: "Piccolo", serie: "Dragon Ball", popularidade: 830, ocidente: 800, oriente: 850, heroi: true, humano: false, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: true, transformacao: true, forca: 850, magia_poder: 300, qi: 750, qi_batalha: 880, exp: 880, velocidade: 850, resistencia: 865, defesa: 865, taijutsu: 860, ninjutsu: 643, genjutsu: 525 },
    { nome: "Gohan", serie: "Dragon Ball", popularidade: 850, ocidente: 820, oriente: 880, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: true, transformacao: true, forca: 880, magia_poder: 100, qi: 750, qi_batalha: 800, exp: 700, velocidade: 850, resistencia: 790, defesa: 840, taijutsu: 843, ninjutsu: 517, genjutsu: 425 },
    { nome: "Capitão Ginyu", serie: "Dragon Ball", popularidade: 300, ocidente: 250, oriente: 350, heroi: false, humano: true, anime: true, superpoderes: true, armadura: true, vilao: false, magia: false, voa: false, transformacao: false, forca: 500, magia_poder: 200, qi: 400, qi_batalha: 600, exp: 650, velocidade: 500, resistencia: 575, defesa: 550, taijutsu: 533, ninjutsu: 417, genjutsu: 300 },
    { nome: "Nail", serie: "Dragon Ball", popularidade: 150, ocidente: 100, oriente: 200, heroi: true, humano: false, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 350, magia_poder: 150, qi: 400, qi_batalha: 400, exp: 500, velocidade: 400, resistencia: 425, defesa: 375, taijutsu: 383, ninjutsu: 350, genjutsu: 275 },
    { nome: "Recoome", serie: "Dragon Ball", popularidade: 200, ocidente: 150, oriente: 250, heroi: false, humano: true, anime: true, superpoderes: true, armadura: true, vilao: true, magia: false, voa: false, transformacao: true, forca: 400, magia_poder: 0, qi: 200, qi_batalha: 350, exp: 400, velocidade: 300, resistencia: 400, defesa: 375, taijutsu: 350, ninjutsu: 200, genjutsu: 100 },
    { nome: "Naruto", serie: "Naruto", popularidade: 980, ocidente: 950, oriente: 1000, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: true, transformacao: true, forca: 800, magia_poder: 900, qi: 600, qi_batalha: 950, exp: 850, velocidade: 900, resistencia: 825, defesa: 875, taijutsu: 883, ninjutsu: 783, genjutsu: 750 },
    { nome: "Sasuke", serie: "Naruto", popularidade: 930, ocidente: 900, oriente: 950, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: true, transformacao: true, forca: 780, magia_poder: 900, qi: 750, qi_batalha: 950, exp: 820, velocidade: 950, resistencia: 800, defesa: 865, taijutsu: 893, ninjutsu: 823, genjutsu: 825 },
    { nome: "Gojo Satoru", serie: "Jujutsu Kaisen", popularidade: 950, ocidente: 880, oriente: 970, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: true, voa: true, transformacao: false, forca: 600, magia_poder: 1000, qi: 950, qi_batalha: 1000, exp: 900, velocidade: 950, resistencia: 750, defesa: 800, taijutsu: 850, ninjutsu: 950, genjutsu: 975 },
    { nome: "Sukuna", serie: "Jujutsu Kaisen", popularidade: 930, ocidente: 860, oriente: 960, heroi: false, humano: true, anime: true, superpoderes: true, armadura: false, vilao: true, magia: true, voa: true, transformacao: false, forca: 800, magia_poder: 1000, qi: 900, qi_batalha: 1000, exp: 1000, velocidade: 900, resistencia: 900, defesa: 900, taijutsu: 900, ninjutsu: 967, genjutsu: 950 },
    { nome: "Yuji Itadori", serie: "Jujutsu Kaisen", popularidade: 800, ocidente: 750, oriente: 850, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 800, magia_poder: 600, qi: 500, qi_batalha: 700, exp: 300, velocidade: 750, resistencia: 550, defesa: 750, taijutsu: 750, ninjutsu: 467, genjutsu: 550 },
    { nome: "Bulma", serie: "Dragon Ball", popularidade: 780, ocidente: 700, oriente: 800, heroi: true, humano: true, anime: true, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 10, magia_poder: 0, qi: 980, qi_batalha: 100, exp: 850, velocidade: 50, resistencia: 430, defesa: 55, taijutsu: 53, ninjutsu: 610, genjutsu: 490 },
    { nome: "Android 18", serie: "Dragon Ball", popularidade: 750, ocidente: 720, oriente: 780, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 850, magia_poder: 0, qi: 600, qi_batalha: 800, exp: 700, velocidade: 900, resistencia: 775, defesa: 825, taijutsu: 850, ninjutsu: 433, genjutsu: 300 },
    { nome: "Hinata Hyuga", serie: "Naruto", popularidade: 750, ocidente: 700, oriente: 800, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 550, magia_poder: 600, qi: 600, qi_batalha: 700, exp: 650, velocidade: 600, resistencia: 600, defesa: 625, taijutsu: 617, ninjutsu: 617, genjutsu: 600 },
    { nome: "Sakura Haruno", serie: "Naruto", popularidade: 700, ocidente: 650, oriente: 750, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 700, magia_poder: 600, qi: 700, qi_batalha: 700, exp: 750, velocidade: 600, resistencia: 725, defesa: 700, taijutsu: 667, ninjutsu: 683, genjutsu: 650 },
    { nome: "Nobara Kugisaki", serie: "Jujutsu Kaisen", popularidade: 680, ocidente: 600, oriente: 720, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 500, magia_poder: 700, qi: 550, qi_batalha: 700, exp: 250, velocidade: 500, resistencia: 375, defesa: 600, taijutsu: 567, ninjutsu: 500, genjutsu: 625 },
    { nome: "Maki Zenin", serie: "Jujutsu Kaisen", popularidade: 730, ocidente: 650, oriente: 760, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 700, magia_poder: 100, qi: 600, qi_batalha: 800, exp: 400, velocidade: 800, resistencia: 550, defesa: 750, taijutsu: 767, ninjutsu: 367, genjutsu: 350 },
    { nome: "Meliodas", serie: "Nanatsu no Taizai", popularidade: 920, ocidente: 850, oriente: 940, heroi: true, humano: false, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: true, transformacao: true, forca: 950, magia_poder: 800, qi: 700, qi_batalha: 950, exp: 900, velocidade: 950, resistencia: 925, defesa: 950, taijutsu: 950, ninjutsu: 800, genjutsu: 750 },
    { nome: "Escanor", serie: "Nanatsu no Taizai", popularidade: 880, ocidente: 810, oriente: 900, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: true, transformacao: true, forca: 1000, magia_poder: 600, qi: 500, qi_batalha: 800, exp: 800, velocidade: 600, resistencia: 900, defesa: 900, taijutsu: 800, ninjutsu: 633, genjutsu: 550 },
    { nome: "Ban", serie: "Nanatsu no Taizai", popularidade: 800, ocidente: 750, oriente: 820, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 700, magia_poder: 300, qi: 600, qi_batalha: 750, exp: 750, velocidade: 700, resistencia: 725, defesa: 725, taijutsu: 717, ninjutsu: 550, genjutsu: 450 },
    { nome: "Merlin", serie: "Nanatsu no Taizai", popularidade: 750, ocidente: 680, oriente: 780, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: true, voa: false, transformacao: false, forca: 300, magia_poder: 1000, qi: 950, qi_batalha: 800, exp: 900, velocidade: 400, resistencia: 600, defesa: 550, taijutsu: 500, ninjutsu: 950, genjutsu: 975 },
    { nome: "King", serie: "Nanatsu no Taizai", popularidade: 780, ocidente: 700, oriente: 800, heroi: true, humano: false, anime: true, superpoderes: true, armadura: false, vilao: false, magia: true, voa: false, transformacao: false, forca: 500, magia_poder: 850, qi: 700, qi_batalha: 700, exp: 750, velocidade: 600, resistencia: 625, defesa: 600, taijutsu: 600, ninjutsu: 767, genjutsu: 775 },
    { nome: "Deku", serie: "My Hero Academia", popularidade: 950, ocidente: 880, oriente: 920, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: true, transformacao: true, forca: 900, magia_poder: 100, qi: 800, qi_batalha: 950, exp: 400, velocidade: 850, resistencia: 650, defesa: 925, taijutsu: 900, ninjutsu: 433, genjutsu: 450 },
    { nome: "All Might", serie: "My Hero Academia", popularidade: 900, ocidente: 850, oriente: 880, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: true, transformacao: true, forca: 1000, magia_poder: 50, qi: 600, qi_batalha: 900, exp: 950, velocidade: 900, resistencia: 975, defesa: 950, taijutsu: 933, ninjutsu: 533, genjutsu: 325 },
    { nome: "Bakugo", serie: "My Hero Academia", popularidade: 830, ocidente: 780, oriente: 850, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: true, transformacao: true, forca: 700, magia_poder: 700, qi: 600, qi_batalha: 850, exp: 350, velocidade: 800, resistencia: 525, defesa: 775, taijutsu: 783, ninjutsu: 550, genjutsu: 650 },
    { nome: "Todoroki", serie: "My Hero Academia", popularidade: 800, ocidente: 750, oriente: 820, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: true, transformacao: true, forca: 600, magia_poder: 850, qi: 700, qi_batalha: 750, exp: 350, velocidade: 500, resistencia: 475, defesa: 675, taijutsu: 617, ninjutsu: 633, genjutsu: 775 },
    { nome: "Tomura Shigaraki", serie: "My Hero Academia", popularidade: 730, ocidente: 680, oriente: 760, heroi: false, humano: true, anime: true, superpoderes: true, armadura: false, vilao: true, magia: false, voa: false, transformacao: false, forca: 500, magia_poder: 800, qi: 750, qi_batalha: 800, exp: 450, velocidade: 500, resistencia: 475, defesa: 650, taijutsu: 600, ninjutsu: 667, genjutsu: 775 },
    { nome: "Homem de Ferro", serie: "Marvel", popularidade: 980, ocidente: 980, oriente: 850, heroi: true, humano: true, anime: false, superpoderes: false, armadura: true, vilao: false, magia: false, voa: false, transformacao: false, forca: 300, magia_poder: 0, qi: 1000, qi_batalha: 800, exp: 900, velocidade: 400, resistencia: 600, defesa: 550, taijutsu: 500, ninjutsu: 633, genjutsu: 500 },
    { nome: "Capitão América", serie: "Marvel", popularidade: 930, ocidente: 950, oriente: 800, heroi: true, humano: true, anime: false, superpoderes: true, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 800, magia_poder: 0, qi: 750, qi_batalha: 950, exp: 850, velocidade: 700, resistencia: 825, defesa: 875, taijutsu: 817, ninjutsu: 533, genjutsu: 375 },
    { nome: "Thor", serie: "Marvel", popularidade: 950, ocidente: 960, oriente: 820, heroi: true, humano: false, anime: false, superpoderes: true, armadura: false, vilao: false, magia: false, voa: true, transformacao: false, forca: 1000, magia_poder: 800, qi: 600, qi_batalha: 750, exp: 950, velocidade: 800, resistencia: 975, defesa: 875, taijutsu: 850, ninjutsu: 783, genjutsu: 700 },
    { nome: "Hulk", serie: "Marvel", popularidade: 900, ocidente: 920, oriente: 780, heroi: true, humano: true, anime: false, superpoderes: true, armadura: false, vilao: false, magia: false, voa: false, transformacao: true, forca: 1000, magia_poder: 0, qi: 200, qi_batalha: 400, exp: 600, velocidade: 500, resistencia: 800, defesa: 700, taijutsu: 633, ninjutsu: 267, genjutsu: 100 },
    { nome: "Viúva Negra", serie: "Marvel", popularidade: 850, ocidente: 880, oriente: 750, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 500, magia_poder: 0, qi: 800, qi_batalha: 850, exp: 800, velocidade: 700, resistencia: 650, defesa: 675, taijutsu: 683, ninjutsu: 533, genjutsu: 400 },
    { nome: "Homem-Aranha", serie: "Marvel", popularidade: 1000, ocidente: 1000, oriente: 920, heroi: true, humano: true, anime: false, superpoderes: true, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 700, magia_poder: 0, qi: 750, qi_batalha: 850, exp: 500, velocidade: 800, resistencia: 600, defesa: 775, taijutsu: 783, ninjutsu: 417, genjutsu: 375 },
    { nome: "Superman", serie: "DC", popularidade: 1000, ocidente: 1000, oriente: 880, heroi: true, humano: false, anime: false, superpoderes: true, armadura: false, vilao: false, magia: false, voa: true, transformacao: false, forca: 1000, magia_poder: 100, qi: 700, qi_batalha: 800, exp: 850, velocidade: 1000, resistencia: 925, defesa: 900, taijutsu: 933, ninjutsu: 550, genjutsu: 400 },
    { nome: "Batman", serie: "DC", popularidade: 1000, ocidente: 1000, oriente: 900, heroi: true, humano: true, anime: false, superpoderes: false, armadura: true, vilao: false, magia: false, voa: false, transformacao: false, forca: 600, magia_poder: 0, qi: 1000, qi_batalha: 1000, exp: 950, velocidade: 500, resistencia: 775, defesa: 800, taijutsu: 700, ninjutsu: 650, genjutsu: 500 },
    { nome: "Mulher-Maravilha", serie: "DC", popularidade: 930, ocidente: 950, oriente: 820, heroi: true, humano: false, anime: false, superpoderes: true, armadura: false, vilao: false, magia: false, voa: true, transformacao: false, forca: 900, magia_poder: 400, qi: 700, qi_batalha: 900, exp: 800, velocidade: 800, resistencia: 850, defesa: 900, taijutsu: 867, ninjutsu: 633, genjutsu: 550 },
    { nome: "Flash", serie: "DC", popularidade: 880, ocidente: 900, oriente: 780, heroi: true, humano: true, anime: false, superpoderes: true, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 300, magia_poder: 0, qi: 700, qi_batalha: 650, exp: 600, velocidade: 1000, resistencia: 450, defesa: 475, taijutsu: 650, ninjutsu: 433, genjutsu: 350 },
    { nome: "Aquaman", serie: "DC", popularidade: 780, ocidente: 800, oriente: 680, heroi: true, humano: true, anime: false, superpoderes: true, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 800, magia_poder: 200, qi: 600, qi_batalha: 700, exp: 700, velocidade: 700, resistencia: 750, defesa: 750, taijutsu: 733, ninjutsu: 500, genjutsu: 400 },
    { nome: "Luffy", serie: "One Piece", popularidade: 1000, ocidente: 900, oriente: 1000, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: true, transformacao: true, forca: 900, magia_poder: 0, qi: 500, qi_batalha: 950, exp: 800, velocidade: 850, resistencia: 850, defesa: 925, taijutsu: 900, ninjutsu: 433, genjutsu: 250 },
    { nome: "Zoro", serie: "One Piece", popularidade: 950, ocidente: 850, oriente: 980, heroi: true, humano: true, anime: true, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 900, magia_poder: 0, qi: 400, qi_batalha: 900, exp: 850, velocidade: 800, resistencia: 875, defesa: 900, taijutsu: 867, ninjutsu: 417, genjutsu: 200 },
    { nome: "Sanji", serie: "One Piece", popularidade: 850, ocidente: 780, oriente: 900, heroi: true, humano: true, anime: true, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 750, magia_poder: 0, qi: 600, qi_batalha: 850, exp: 750, velocidade: 900, resistencia: 750, defesa: 800, taijutsu: 833, ninjutsu: 450, genjutsu: 300 },
    { nome: "Nami", serie: "One Piece", popularidade: 780, ocidente: 720, oriente: 820, heroi: true, humano: true, anime: true, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 200, magia_poder: 100, qi: 850, qi_batalha: 600, exp: 650, velocidade: 400, resistencia: 425, defesa: 400, taijutsu: 400, ninjutsu: 533, genjutsu: 475 },
    { nome: "Trafalgar Law", serie: "One Piece", popularidade: 880, ocidente: 800, oriente: 920, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 600, magia_poder: 900, qi: 850, qi_batalha: 900, exp: 750, velocidade: 650, resistencia: 675, defesa: 750, taijutsu: 717, ninjutsu: 833, genjutsu: 875 },
    { nome: "Blair Waldorf", serie: "Gossip Girl", popularidade: 700, ocidente: 750, oriente: 500, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 50, magia_poder: 0, qi: 800, qi_batalha: 400, exp: 300, velocidade: 100, resistencia: 175, defesa: 225, taijutsu: 183, ninjutsu: 367, genjutsu: 400 },
    { nome: "Serena van der Woodsen", serie: "Gossip Girl", popularidade: 650, ocidente: 700, oriente: 450, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 80, magia_poder: 0, qi: 550, qi_batalha: 200, exp: 250, velocidade: 150, resistencia: 165, defesa: 140, taijutsu: 143, ninjutsu: 267, genjutsu: 275 },
    { nome: "Gru", serie: "Meu Malvado Favorito", popularidade: 850, ocidente: 880, oriente: 750, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 300, magia_poder: 0, qi: 900, qi_batalha: 600, exp: 700, velocidade: 250, resistencia: 500, defesa: 450, taijutsu: 383, ninjutsu: 533, genjutsu: 450 },
    { nome: "Minion (Bob)", serie: "Meu Malvado Favorito", popularidade: 800, ocidente: 850, oriente: 780, heroi: true, humano: false, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 200, magia_poder: 0, qi: 200, qi_batalha: 200, exp: 150, velocidade: 200, resistencia: 175, defesa: 200, taijutsu: 200, ninjutsu: 117, genjutsu: 100 },
    { nome: "Rick Grimes", serie: "The Walking Dead", popularidade: 820, ocidente: 850, oriente: 650, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 650, magia_poder: 0, qi: 750, qi_batalha: 850, exp: 800, velocidade: 550, resistencia: 725, defesa: 750, taijutsu: 683, ninjutsu: 517, genjutsu: 375 },
    { nome: "Daryl Dixon", serie: "The Walking Dead", popularidade: 800, ocidente: 830, oriente: 620, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 700, magia_poder: 0, qi: 600, qi_batalha: 800, exp: 750, velocidade: 600, resistencia: 725, defesa: 750, taijutsu: 700, ninjutsu: 450, genjutsu: 300 },
    { nome: "Dean Winchester", serie: "Supernatural", popularidade: 780, ocidente: 800, oriente: 600, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 600, magia_poder: 0, qi: 650, qi_batalha: 800, exp: 850, velocidade: 550, resistencia: 725, defesa: 700, taijutsu: 650, ninjutsu: 500, genjutsu: 325 },
    { nome: "Sam Winchester", serie: "Supernatural", popularidade: 750, ocidente: 770, oriente: 580, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 550, magia_poder: 0, qi: 750, qi_batalha: 700, exp: 800, velocidade: 500, resistencia: 675, defesa: 625, taijutsu: 583, ninjutsu: 517, genjutsu: 375 },
    { nome: "Jon Snow", serie: "Game of Thrones", popularidade: 920, ocidente: 930, oriente: 780, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 800, magia_poder: 0, qi: 650, qi_batalha: 850, exp: 700, velocidade: 650, resistencia: 750, defesa: 825, taijutsu: 767, ninjutsu: 450, genjutsu: 325 },
    { nome: "Daenerys Targaryen", serie: "Game of Thrones", popularidade: 900, ocidente: 910, oriente: 760, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 200, magia_poder: 500, qi: 750, qi_batalha: 700, exp: 600, velocidade: 200, resistencia: 400, defesa: 450, taijutsu: 367, ninjutsu: 617, genjutsu: 625 },
    { nome: "Joe Goldberg", serie: "You", popularidade: 720, ocidente: 750, oriente: 550, heroi: false, humano: true, anime: false, superpoderes: false, armadura: false, vilao: true, magia: false, voa: false, transformacao: false, forca: 350, magia_poder: 0, qi: 750, qi_batalha: 650, exp: 300, velocidade: 350, resistencia: 325, defesa: 500, taijutsu: 450, ninjutsu: 350, genjutsu: 375 },
    { nome: "Love Quinn", serie: "You", popularidade: 650, ocidente: 680, oriente: 500, heroi: false, humano: true, anime: false, superpoderes: false, armadura: false, vilao: true, magia: false, voa: false, transformacao: false, forca: 300, magia_poder: 0, qi: 650, qi_batalha: 600, exp: 250, velocidade: 300, resistencia: 275, defesa: 450, taijutsu: 400, ninjutsu: 300, genjutsu: 325 },
    { nome: "Dominic Toretto", serie: "Velozes e Furiosos", popularidade: 820, ocidente: 850, oriente: 720, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 750, magia_poder: 0, qi: 600, qi_batalha: 800, exp: 750, velocidade: 300, resistencia: 750, defesa: 775, taijutsu: 617, ninjutsu: 450, genjutsu: 300 },
    { nome: "Brian O'Conner", serie: "Velozes e Furiosos", popularidade: 800, ocidente: 830, oriente: 700, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 650, magia_poder: 0, qi: 650, qi_batalha: 750, exp: 650, velocidade: 350, resistencia: 650, defesa: 700, taijutsu: 583, ninjutsu: 433, genjutsu: 325 },
    { nome: "Kakashi Hatake", serie: "Naruto", popularidade: 900, ocidente: 880, oriente: 920, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: true, transformacao: true, forca: 700, magia_poder: 850, qi: 850, qi_batalha: 950, exp: 900, velocidade: 800, resistencia: 800, defesa: 825, taijutsu: 817, ninjutsu: 867, genjutsu: 850 },
    { nome: "Itachi Uchiha", serie: "Naruto", popularidade: 920, ocidente: 900, oriente: 940, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: true, transformacao: true, forca: 750, magia_poder: 950, qi: 900, qi_batalha: 980, exp: 850, velocidade: 900, resistencia: 800, defesa: 865, taijutsu: 877, ninjutsu: 900, genjutsu: 925 },
    { nome: "Jiraiya", serie: "Naruto", popularidade: 850, ocidente: 820, oriente: 880, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: true, transformacao: false, forca: 750, magia_poder: 880, qi: 750, qi_batalha: 900, exp: 920, velocidade: 700, resistencia: 835, defesa: 825, taijutsu: 783, ninjutsu: 850, genjutsu: 815 },
    { nome: "Chuck Bass", serie: "Gossip Girl", popularidade: 680, ocidente: 720, oriente: 480, heroi: false, humano: true, anime: false, superpoderes: false, armadura: false, vilao: true, magia: false, voa: false, transformacao: false, forca: 100, magia_poder: 0, qi: 750, qi_batalha: 350, exp: 300, velocidade: 100, resistencia: 200, defesa: 225, taijutsu: 183, ninjutsu: 350, genjutsu: 375 },
    { nome: "Nate Archibald", serie: "Gossip Girl", popularidade: 620, ocidente: 660, oriente: 440, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 200, magia_poder: 0, qi: 550, qi_batalha: 250, exp: 200, velocidade: 200, resistencia: 200, defesa: 225, taijutsu: 217, ninjutsu: 250, genjutsu: 275 },
    { nome: "Jenny Humphrey", serie: "Gossip Girl", popularidade: 550, ocidente: 580, oriente: 400, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: true, magia: false, voa: false, transformacao: false, forca: 50, magia_poder: 0, qi: 450, qi_batalha: 200, exp: 150, velocidade: 100, resistencia: 100, defesa: 125, taijutsu: 117, ninjutsu: 200, genjutsu: 225 },
    { nome: "Vector", serie: "Meu Malvado Favorito", popularidade: 680, ocidente: 720, oriente: 620, heroi: false, humano: true, anime: false, superpoderes: false, armadura: false, vilao: true, magia: false, voa: false, transformacao: false, forca: 150, magia_poder: 0, qi: 500, qi_batalha: 300, exp: 200, velocidade: 150, resistencia: 175, defesa: 225, taijutsu: 200, ninjutsu: 233, genjutsu: 250 },
    { nome: "Lucy Wilde", serie: "Meu Malvado Favorito", popularidade: 650, ocidente: 680, oriente: 600, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 250, magia_poder: 0, qi: 650, qi_batalha: 500, exp: 350, velocidade: 250, resistencia: 300, defesa: 375, taijutsu: 333, ninjutsu: 333, genjutsu: 325 },
    { nome: "Agnes", serie: "Meu Malvado Favorito", popularidade: 700, ocidente: 740, oriente: 660, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 50, magia_poder: 0, qi: 300, qi_batalha: 100, exp: 50, velocidade: 200, resistencia: 50, defesa: 75, taijutsu: 117, ninjutsu: 117, genjutsu: 150 },
    { nome: "Michonne", serie: "The Walking Dead", popularidade: 780, ocidente: 800, oriente: 600, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 700, magia_poder: 0, qi: 650, qi_batalha: 800, exp: 650, velocidade: 600, resistencia: 675, defesa: 750, taijutsu: 700, ninjutsu: 433, genjutsu: 325 },
    { nome: "Glenn Rhee", serie: "The Walking Dead", popularidade: 720, ocidente: 740, oriente: 560, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 450, magia_poder: 0, qi: 700, qi_batalha: 700, exp: 500, velocidade: 650, resistencia: 475, defesa: 575, taijutsu: 600, ninjutsu: 400, genjutsu: 350 },
    { nome: "Carl Grimes", serie: "The Walking Dead", popularidade: 650, ocidente: 680, oriente: 500, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 350, magia_poder: 0, qi: 550, qi_batalha: 600, exp: 300, velocidade: 500, resistencia: 325, defesa: 475, taijutsu: 483, ninjutsu: 283, genjutsu: 275 },
    { nome: "Castiel", serie: "Supernatural", popularidade: 800, ocidente: 820, oriente: 620, heroi: true, humano: false, anime: false, superpoderes: true, armadura: false, vilao: false, magia: true, voa: true, transformacao: false, forca: 500, magia_poder: 900, qi: 700, qi_batalha: 600, exp: 800, velocidade: 600, resistencia: 650, defesa: 550, taijutsu: 567, ninjutsu: 800, genjutsu: 800 },
    { nome: "Crowley", serie: "Supernatural", popularidade: 720, ocidente: 740, oriente: 560, heroi: false, humano: true, anime: false, superpoderes: true, armadura: false, vilao: true, magia: false, voa: false, transformacao: false, forca: 300, magia_poder: 800, qi: 850, qi_batalha: 700, exp: 900, velocidade: 400, resistencia: 600, defesa: 500, taijutsu: 467, ninjutsu: 850, genjutsu: 825 },
    { nome: "Bobby Singer", serie: "Supernatural", popularidade: 700, ocidente: 720, oriente: 540, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 400, magia_poder: 0, qi: 800, qi_batalha: 600, exp: 850, velocidade: 300, resistencia: 625, defesa: 500, taijutsu: 433, ninjutsu: 550, genjutsu: 400 },
    { nome: "Tyrion Lannister", serie: "Game of Thrones", popularidade: 950, ocidente: 960, oriente: 800, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 100, magia_poder: 0, qi: 1000, qi_batalha: 500, exp: 750, velocidade: 100, resistencia: 425, defesa: 300, taijutsu: 233, ninjutsu: 583, genjutsu: 500 },
    { nome: "Arya Stark", serie: "Game of Thrones", popularidade: 930, ocidente: 940, oriente: 780, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 500, magia_poder: 0, qi: 750, qi_batalha: 900, exp: 500, velocidade: 850, resistencia: 500, defesa: 700, taijutsu: 750, ninjutsu: 417, genjutsu: 375 },
    { nome: "Cersei Lannister", serie: "Game of Thrones", popularidade: 850, ocidente: 860, oriente: 720, heroi: false, humano: true, anime: false, superpoderes: false, armadura: false, vilao: true, magia: false, voa: false, transformacao: false, forca: 150, magia_poder: 0, qi: 850, qi_batalha: 600, exp: 700, velocidade: 150, resistencia: 425, defesa: 375, taijutsu: 300, ninjutsu: 517, genjutsu: 425 },
    { nome: "Guinevere Beck", serie: "You", popularidade: 600, ocidente: 630, oriente: 460, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 100, magia_poder: 0, qi: 600, qi_batalha: 200, exp: 200, velocidade: 150, resistencia: 150, defesa: 150, taijutsu: 150, ninjutsu: 267, genjutsu: 300 },
    { nome: "Candace Stone", serie: "You", popularidade: 580, ocidente: 610, oriente: 440, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: true, magia: false, voa: false, transformacao: false, forca: 150, magia_poder: 0, qi: 600, qi_batalha: 400, exp: 200, velocidade: 200, resistencia: 175, defesa: 275, taijutsu: 250, ninjutsu: 267, genjutsu: 300 },
    { nome: "Forty Quinn", serie: "You", popularidade: 620, ocidente: 650, oriente: 480, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 100, magia_poder: 0, qi: 500, qi_batalha: 200, exp: 150, velocidade: 150, resistencia: 125, defesa: 150, taijutsu: 150, ninjutsu: 217, genjutsu: 250 },
    { nome: "Letty Ortiz", serie: "Velozes e Furiosos", popularidade: 780, ocidente: 800, oriente: 680, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 600, magia_poder: 0, qi: 550, qi_batalha: 700, exp: 650, velocidade: 300, resistencia: 625, defesa: 650, taijutsu: 533, ninjutsu: 400, genjutsu: 275 },
    { nome: "Roman Pearce", serie: "Velozes e Furiosos", popularidade: 720, ocidente: 740, oriente: 640, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 450, magia_poder: 0, qi: 500, qi_batalha: 500, exp: 400, velocidade: 300, resistencia: 425, defesa: 475, taijutsu: 417, ninjutsu: 300, genjutsu: 250 },
    { nome: "Han Lue", serie: "Velozes e Furiosos", popularidade: 750, ocidente: 770, oriente: 660, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 400, magia_poder: 0, qi: 650, qi_batalha: 650, exp: 500, velocidade: 300, resistencia: 450, defesa: 525, taijutsu: 450, ninjutsu: 383, genjutsu: 325 },
    { nome: "Billy Butcher", serie: "The Boys", popularidade: 850, ocidente: 870, oriente: 700, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 600, magia_poder: 0, qi: 750, qi_batalha: 850, exp: 700, velocidade: 550, resistencia: 650, defesa: 725, taijutsu: 667, ninjutsu: 483, genjutsu: 375 },
    { nome: "Homelander", serie: "The Boys", popularidade: 920, ocidente: 940, oriente: 750, heroi: false, humano: true, anime: false, superpoderes: true, armadura: false, vilao: true, magia: false, voa: true, transformacao: true, forca: 950, magia_poder: 50, qi: 500, qi_batalha: 600, exp: 500, velocidade: 950, resistencia: 725, defesa: 775, taijutsu: 833, ninjutsu: 350, genjutsu: 275 },
    { nome: "Hughie Campbell", serie: "The Boys", popularidade: 720, ocidente: 740, oriente: 580, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 200, magia_poder: 0, qi: 650, qi_batalha: 350, exp: 150, velocidade: 300, resistencia: 175, defesa: 275, taijutsu: 283, ninjutsu: 267, genjutsu: 325 },
    { nome: "Starlight", serie: "The Boys", popularidade: 780, ocidente: 800, oriente: 620, heroi: true, humano: true, anime: false, superpoderes: true, armadura: false, vilao: false, magia: false, voa: true, transformacao: false, forca: 400, magia_poder: 700, qi: 600, qi_batalha: 500, exp: 300, velocidade: 500, resistencia: 350, defesa: 450, taijutsu: 467, ninjutsu: 533, genjutsu: 650 },
    { nome: "Soldier Boy", serie: "The Boys", popularidade: 740, ocidente: 760, oriente: 580, heroi: false, humano: true, anime: false, superpoderes: true, armadura: true, vilao: true, magia: false, voa: false, transformacao: true, forca: 800, magia_poder: 100, qi: 400, qi_batalha: 600, exp: 700, velocidade: 400, resistencia: 750, defesa: 700, taijutsu: 600, ninjutsu: 400, genjutsu: 250 },
    { nome: "Rachel Green", serie: "Friends", popularidade: 820, ocidente: 850, oriente: 650, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 50, magia_poder: 0, qi: 600, qi_batalha: 200, exp: 400, velocidade: 100, resistencia: 225, defesa: 125, taijutsu: 117, ninjutsu: 333, genjutsu: 300 },
    { nome: "Ross Geller", serie: "Friends", popularidade: 800, ocidente: 830, oriente: 620, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 80, magia_poder: 0, qi: 850, qi_batalha: 200, exp: 500, velocidade: 80, resistencia: 290, defesa: 140, taijutsu: 120, ninjutsu: 450, genjutsu: 425 },
    { nome: "Chandler Bing", serie: "Friends", popularidade: 850, ocidente: 880, oriente: 640, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 60, magia_poder: 0, qi: 750, qi_batalha: 150, exp: 450, velocidade: 100, resistencia: 255, defesa: 105, taijutsu: 103, ninjutsu: 400, genjutsu: 375 },
    { nome: "Archie Andrews", serie: "Riverdale", popularidade: 600, ocidente: 630, oriente: 420, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 400, magia_poder: 0, qi: 500, qi_batalha: 350, exp: 200, velocidade: 400, resistencia: 300, defesa: 375, taijutsu: 383, ninjutsu: 233, genjutsu: 250 },
    { nome: "Betty Cooper", serie: "Riverdale", popularidade: 650, ocidente: 680, oriente: 440, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 300, magia_poder: 0, qi: 700, qi_batalha: 500, exp: 250, velocidade: 350, resistencia: 275, defesa: 400, taijutsu: 383, ninjutsu: 317, genjutsu: 350 },
    { nome: "Veronica Lodge", serie: "Riverdale", popularidade: 620, ocidente: 650, oriente: 420, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 100, magia_poder: 0, qi: 700, qi_batalha: 300, exp: 200, velocidade: 150, resistencia: 150, defesa: 200, taijutsu: 183, ninjutsu: 300, genjutsu: 350 },
    { nome: "Jughead Jones", serie: "Riverdale", popularidade: 640, ocidente: 670, oriente: 430, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 200, magia_poder: 0, qi: 750, qi_batalha: 400, exp: 200, velocidade: 200, resistencia: 200, defesa: 300, taijutsu: 267, ninjutsu: 317, genjutsu: 375 },
    { nome: "Harry Potter", serie: "Harry Potter", popularidade: 980, ocidente: 980, oriente: 900, heroi: true, humano: true, anime: false, superpoderes: true, armadura: false, vilao: false, magia: true, voa: false, transformacao: false, forca: 200, magia_poder: 800, qi: 700, qi_batalha: 700, exp: 400, velocidade: 300, resistencia: 300, defesa: 450, taijutsu: 400, ninjutsu: 633, genjutsu: 750 },
    { nome: "Hermione Granger", serie: "Harry Potter", popularidade: 950, ocidente: 950, oriente: 880, heroi: true, humano: true, anime: false, superpoderes: true, armadura: false, vilao: false, magia: true, voa: false, transformacao: false, forca: 150, magia_poder: 900, qi: 950, qi_batalha: 600, exp: 350, velocidade: 250, resistencia: 250, defesa: 375, taijutsu: 333, ninjutsu: 733, genjutsu: 925 },
    { nome: "Voldemort", serie: "Harry Potter", popularidade: 920, ocidente: 920, oriente: 850, heroi: false, humano: true, anime: false, superpoderes: true, armadura: false, vilao: true, magia: true, voa: false, transformacao: false, forca: 250, magia_poder: 1000, qi: 950, qi_batalha: 900, exp: 900, velocidade: 500, resistencia: 575, defesa: 575, taijutsu: 550, ninjutsu: 950, genjutsu: 975 },
    { nome: "Ron Weasley", serie: "Harry Potter", popularidade: 900, ocidente: 900, oriente: 840, heroi: true, humano: true, anime: false, superpoderes: true, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 200, magia_poder: 600, qi: 550, qi_batalha: 500, exp: 300, velocidade: 250, resistencia: 250, defesa: 350, taijutsu: 317, ninjutsu: 483, genjutsu: 575 },
    { nome: "Frodo Baggins", serie: "Senhor dos Anéis", popularidade: 880, ocidente: 900, oriente: 760, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 100, magia_poder: 0, qi: 600, qi_batalha: 300, exp: 400, velocidade: 200, resistencia: 250, defesa: 200, taijutsu: 200, ninjutsu: 333, genjutsu: 300 },
    { nome: "Gandalf", serie: "Senhor dos Anéis", popularidade: 960, ocidente: 970, oriente: 820, heroi: true, humano: false, anime: false, superpoderes: true, armadura: false, vilao: false, magia: true, voa: true, transformacao: false, forca: 600, magia_poder: 950, qi: 950, qi_batalha: 800, exp: 1000, velocidade: 400, resistencia: 800, defesa: 700, taijutsu: 600, ninjutsu: 967, genjutsu: 950 },
    { nome: "Aragorn", serie: "Senhor dos Anéis", popularidade: 900, ocidente: 920, oriente: 780, heroi: true, humano: true, anime: false, superpoderes: false, armadura: true, vilao: false, magia: false, voa: false, transformacao: false, forca: 850, magia_poder: 0, qi: 700, qi_batalha: 900, exp: 850, velocidade: 650, resistencia: 850, defesa: 875, taijutsu: 800, ninjutsu: 517, genjutsu: 350 },
    { nome: "Gollum", serie: "Senhor dos Anéis", popularidade: 820, ocidente: 840, oriente: 720, heroi: false, humano: true, anime: false, superpoderes: false, armadura: false, vilao: true, magia: false, voa: false, transformacao: false, forca: 200, magia_poder: 0, qi: 450, qi_batalha: 500, exp: 500, velocidade: 400, resistencia: 350, defesa: 350, taijutsu: 367, ninjutsu: 317, genjutsu: 225 },
    { nome: "Michael Jackson", serie: "Celebridades", popularidade: 1000, ocidente: 1000, oriente: 970, heroi: false, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 100, magia_poder: 0, qi: 850, qi_batalha: 300, exp: 700, velocidade: 400, resistencia: 400, defesa: 200, taijutsu: 267, ninjutsu: 517, genjutsu: 425 },
    { nome: "Cristiano Ronaldo", serie: "Celebridades", popularidade: 990, ocidente: 990, oriente: 980, heroi: false, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 750, magia_poder: 0, qi: 700, qi_batalha: 850, exp: 800, velocidade: 850, resistencia: 775, defesa: 800, taijutsu: 817, ninjutsu: 500, genjutsu: 350 },
    { nome: "Messi", serie: "Celebridades", popularidade: 980, ocidente: 980, oriente: 980, heroi: false, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 600, magia_poder: 0, qi: 750, qi_batalha: 900, exp: 800, velocidade: 800, resistencia: 700, defesa: 750, taijutsu: 767, ninjutsu: 517, genjutsu: 375 },
    { nome: "Freddie Mercury", serie: "Celebridades", popularidade: 960, ocidente: 980, oriente: 880, heroi: false, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 80, magia_poder: 0, qi: 850, qi_batalha: 200, exp: 500, velocidade: 150, resistencia: 290, defesa: 140, taijutsu: 143, ninjutsu: 450, genjutsu: 425 },
    { nome: "Pelé", serie: "Celebridades", popularidade: 960, ocidente: 970, oriente: 900, heroi: false, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 500, magia_poder: 0, qi: 700, qi_batalha: 850, exp: 900, velocidade: 700, resistencia: 700, defesa: 675, taijutsu: 683, ninjutsu: 533, genjutsu: 350 },
    { nome: "Neymar", serie: "Celebridades", popularidade: 820, ocidente: 790, oriente: 880, heroi: false, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 400, magia_poder: 0, qi: 550, qi_batalha: 700, exp: 500, velocidade: 800, resistencia: 450, defesa: 550, taijutsu: 633, ninjutsu: 350, genjutsu: 275 },
    { nome: "Rainha Elizabeth", serie: "Celebridades", popularidade: 830, ocidente: 860, oriente: 720, heroi: false, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 50, magia_poder: 0, qi: 750, qi_batalha: 300, exp: 900, velocidade: 50, resistencia: 475, defesa: 175, taijutsu: 133, ninjutsu: 550, genjutsu: 375 },
    { nome: "Justin Bieber", serie: "Celebridades", popularidade: 680, ocidente: 660, oriente: 720, heroi: false, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 100, magia_poder: 0, qi: 400, qi_batalha: 150, exp: 200, velocidade: 200, resistencia: 150, defesa: 125, taijutsu: 150, ninjutsu: 200, genjutsu: 200 },
    { nome: "Levi Ackerman", serie: "Attack on Titan", popularidade: 960, ocidente: 930, oriente: 980, heroi: true, humano: true, anime: true, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 850, magia_poder: 0, qi: 750, qi_batalha: 950, exp: 950, velocidade: 960, resistencia: 850, defesa: 875, taijutsu: 990, ninjutsu: 550, genjutsu: 400 },
    { nome: "Eren Yeager", serie: "Attack on Titan", popularidade: 940, ocidente: 920, oriente: 950, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: false, transformacao: true, forca: 880, magia_poder: 200, qi: 700, qi_batalha: 900, exp: 700, velocidade: 800, resistencia: 850, defesa: 875, taijutsu: 867, ninjutsu: 533, genjutsu: 400 },
    { nome: "Mikasa Ackerman", serie: "Attack on Titan", popularidade: 920, ocidente: 900, oriente: 940, heroi: true, humano: true, anime: true, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 800, magia_poder: 0, qi: 650, qi_batalha: 900, exp: 700, velocidade: 920, resistencia: 800, defesa: 825, taijutsu: 933, ninjutsu: 450, genjutsu: 350 },
    { nome: "Tanjiro Kamado", serie: "Demon Slayer", popularidade: 970, ocidente: 940, oriente: 990, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 750, magia_poder: 500, qi: 750, qi_batalha: 900, exp: 600, velocidade: 850, resistencia: 700, defesa: 775, taijutsu: 867, ninjutsu: 667, genjutsu: 725 },
    { nome: "Nezuko Kamado", serie: "Demon Slayer", popularidade: 930, ocidente: 900, oriente: 950, heroi: true, humano: false, anime: true, superpoderes: true, armadura: false, vilao: false, magia: true, voa: false, transformacao: true, forca: 700, magia_poder: 800, qi: 500, qi_batalha: 700, exp: 500, velocidade: 800, resistencia: 650, defesa: 700, taijutsu: 733, ninjutsu: 700, genjutsu: 700 },
    { nome: "Rengoku Kyojuro", serie: "Demon Slayer", popularidade: 900, ocidente: 870, oriente: 920, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 850, magia_poder: 700, qi: 700, qi_batalha: 950, exp: 900, velocidade: 800, resistencia: 850, defesa: 875, taijutsu: 917, ninjutsu: 733, genjutsu: 700 },
    { nome: "Light Yagami", serie: "Death Note", popularidade: 950, ocidente: 930, oriente: 960, heroi: false, humano: true, anime: true, superpoderes: false, armadura: false, vilao: true, magia: false, voa: false, transformacao: false, forca: 100, magia_poder: 0, qi: 1000, qi_batalha: 600, exp: 800, velocidade: 200, resistencia: 300, defesa: 250, taijutsu: 250, ninjutsu: 700, genjutsu: 850 },
    { nome: "L Lawliet", serie: "Death Note", popularidade: 940, ocidente: 920, oriente: 950, heroi: true, humano: true, anime: true, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 150, magia_poder: 0, qi: 1000, qi_batalha: 700, exp: 900, velocidade: 300, resistencia: 350, defesa: 300, taijutsu: 433, ninjutsu: 767, genjutsu: 900 },
    { nome: "Edward Elric", serie: "Fullmetal Alchemist", popularidade: 930, ocidente: 950, oriente: 880, heroi: true, humano: true, anime: true, superpoderes: true, armadura: false, vilao: false, magia: true, voa: false, transformacao: false, forca: 400, magia_poder: 900, qi: 950, qi_batalha: 800, exp: 850, velocidade: 500, resistencia: 500, defesa: 550, taijutsu: 600, ninjutsu: 883, genjutsu: 875 },
    { nome: "Spike Spiegel", serie: "Cowboy Bebop", popularidade: 900, ocidente: 920, oriente: 850, heroi: true, humano: true, anime: true, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 700, magia_poder: 0, qi: 750, qi_batalha: 900, exp: 900, velocidade: 700, resistencia: 700, defesa: 750, taijutsu: 883, ninjutsu: 517, genjutsu: 450 },
    { nome: "Mario", serie: "Super Mario", popularidade: 1000, ocidente: 1000, oriente: 980, heroi: true, humano: true, anime: false, superpoderes: true, armadura: false, vilao: false, magia: false, voa: false, transformacao: true, forca: 700, magia_poder: 400, qi: 600, qi_batalha: 700, exp: 850, velocidade: 650, resistencia: 700, defesa: 700, taijutsu: 733, ninjutsu: 483, genjutsu: 325 },
    { nome: "Sonic the Hedgehog", serie: "Sonic", popularidade: 980, ocidente: 990, oriente: 950, heroi: true, humano: false, anime: false, superpoderes: true, armadura: false, vilao: false, magia: false, voa: false, transformacao: true, forca: 600, magia_poder: 100, qi: 500, qi_batalha: 700, exp: 750, velocidade: 1000, resistencia: 600, defesa: 575, taijutsu: 700, ninjutsu: 367, genjutsu: 250 },
    { nome: "Link", serie: "The Legend of Zelda", popularidade: 970, ocidente: 980, oriente: 920, heroi: true, humano: true, anime: false, superpoderes: true, armadura: true, vilao: false, magia: true, voa: false, transformacao: false, forca: 800, magia_poder: 700, qi: 750, qi_batalha: 800, exp: 850, velocidade: 700, resistencia: 775, defesa: 825, taijutsu: 867, ninjutsu: 683, genjutsu: 625 },
    { nome: "Master Chief", serie: "Halo", popularidade: 940, ocidente: 960, oriente: 820, heroi: true, humano: true, anime: false, superpoderes: true, armadura: true, vilao: false, magia: false, voa: false, transformacao: false, forca: 850, magia_poder: 0, qi: 700, qi_batalha: 950, exp: 900, velocidade: 700, resistencia: 900, defesa: 950, taijutsu: 867, ninjutsu: 500, genjutsu: 325 },
    { nome: "Kratos", serie: "God of War", popularidade: 960, ocidente: 970, oriente: 880, heroi: true, humano: false, anime: false, superpoderes: true, armadura: false, vilao: false, magia: false, voa: false, transformacao: true, forca: 1000, magia_poder: 500, qi: 600, qi_batalha: 950, exp: 1000, velocidade: 700, resistencia: 950, defesa: 925, taijutsu: 983, ninjutsu: 683, genjutsu: 450 },
    { nome: "Lara Croft", serie: "Tomb Raider", popularidade: 930, ocidente: 950, oriente: 850, heroi: true, humano: true, anime: false, superpoderes: false, armadura: false, vilao: false, magia: false, voa: false, transformacao: false, forca: 650, magia_poder: 0, qi: 850, qi_batalha: 850, exp: 900, velocidade: 750, resistencia: 700, defesa: 725, taijutsu: 800, ninjutsu: 517, genjutsu: 450 },
    { nome: "Geralt of Rivia", serie: "The Witcher", popularidade: 950, ocidente: 960, oriente: 850, heroi: true, humano: true, anime: false, superpoderes: true, armadura: true, vilao: false, magia: true, voa: false, transformacao: false, forca: 800, magia_poder: 700, qi: 800, qi_batalha: 900, exp: 950, velocidade: 700, resistencia: 825, defesa: 850, taijutsu: 900, ninjutsu: 750, genjutsu: 700 },
    { nome: "Cloud Strife", serie: "Final Fantasy VII", popularidade: 940, ocidente: 950, oriente: 920, heroi: true, humano: true, anime: false, superpoderes: true, armadura: true, vilao: false, magia: true, voa: false, transformacao: true, forca: 900, magia_poder: 700, qi: 700, qi_batalha: 900, exp: 850, velocidade: 800, resistencia: 800, defesa: 850, taijutsu: 900, ninjutsu: 783, genjutsu: 700 },
    { nome: "Doom Slayer", serie: "DOOM", popularidade: 880, ocidente: 900, oriente: 780, heroi: true, humano: true, anime: false, superpoderes: true, armadura: true, vilao: false, magia: false, voa: false, transformacao: false, forca: 1000, magia_poder: 0, qi: 500, qi_batalha: 900, exp: 950, velocidade: 800, resistencia: 950, defesa: 950, taijutsu: 933, ninjutsu: 367, genjutsu: 125 },
    { nome: "Steve", serie: "Minecraft", popularidade: 950, ocidente: 960, oriente: 940, heroi: true, humano: true, anime: false, superpoderes: false, armadura: true, vilao: false, magia: false, voa: false, transformacao: false, forca: 500, magia_poder: 0, qi: 600, qi_batalha: 400, exp: 600, velocidade: 400, resistencia: 500, defesa: 400, taijutsu: 400, ninjutsu: 317, genjutsu: 275 },
];

function formatarPopularidade(n) {
    return n.toLocaleString('pt-BR');
}

personagens.forEach(p => {
    p.estamina = Math.round((p.resistencia + p.defesa + p.forca) / 3);
    p.agilidade = Math.round((p.velocidade + p.taijutsu) / 2);
    p.carisma = Math.round((p.qi + p.exp) / 2);
    p.furtividade = Math.round((p.velocidade + p.ninjutsu + p.genjutsu) / 3);
    p.percepcao = Math.round((p.qi + p.genjutsu + p.qi_batalha) / 3);
    p.forca_vontade = Math.round((p.genjutsu + p.qi + p.resistencia) / 3);

    const base = [p.forca, p.magia_poder, p.qi, p.qi_batalha, p.exp, p.velocidade, p.resistencia, p.defesa, p.taijutsu, p.ninjutsu, p.genjutsu];
    const media = Math.round(base.reduce((a,b) => a+b, 0) / base.length);
    const desvioPadrao = Math.round(Math.sqrt(base.reduce((s, v) => s + (v - media) ** 2, 0) / base.length));

    const top3 = [...base].sort((a,b) => b-a).slice(0,3);
    const forcaRelativa = Math.round(top3[0] / (media || 1) * 100);

    if (forcaRelativa > 160) {
        p.forca = Math.round(p.forca * (p.forca > 700 ? 1 : 1));
        p.qi = Math.round(p.qi * (p.qi < 600 ? 0.85 : 1));
        p.genjutsu = Math.round(p.genjutsu * 0.8);
        p.taijutsu = Math.round(p.taijutsu * 0.85);
    }

    if (p.superpoderes && p.qi > 800 && p.forca > 600) {
        p.qi = Math.round(p.qi * 0.9);
    }

    const seriesPoderosas = ["Dragon Ball", "DC", "Marvel", "Nanatsu no Taizai", "Jujutsu Kaisen", "One Piece", "God of War", "DOOM"];
    const seriesNormais = ["Gossip Girl", "Friends", "Riverdale", "You", "The Walking Dead", "Supernatural", "Velozes e Furiosos", "The Boys", "Meu Malvado Favorito", "Harry Potter", "Senhor dos Anéis", "Game of Thrones"];

    if (seriesNormais.includes(p.serie) && !p.superpoderes) {
        ['forca','magia_poder','velocidade','resistencia','defesa','taijutsu','ninjutsu','genjutsu'].forEach(s => {
            if (p[s] > 700) p[s] = Math.round(p[s] * 0.75);
        });
    }

    if (p.serie === "Harry Potter" && p.magia_poder > 800) {
        ['forca','velocidade','resistencia','defesa','taijutsu'].forEach(s => {
            p[s] = Math.round(p[s] * 0.6);
        });
    }

    ['forca','magia_poder','qi','qi_batalha','exp','velocidade','resistencia','defesa','taijutsu','ninjutsu','genjutsu'].forEach(s => {
        if (p[s] > 1000) p[s] = 1000;
        if (p[s] < 0) p[s] = 0;
    });

    const fraquezasAuto = [];
    if (p.superpoderes && p.magia_poder < 200) fraquezasAuto.push("Magia");
    if (p.superpoderes && p.qi < 300) fraquezasAuto.push("Enganação");
    if (p.voa) fraquezasAuto.push("Espaços Fechados");
    if (p.armadura) { fraquezasAuto.push("Eletricidade"); fraquezasAuto.push("Calor Extremo"); }
    if (p.magia && p.forca < 300) fraquezasAuto.push("Corpo a Corpo");
    if (p.transformacao) fraquezasAuto.push("Tempo Limitado");
    if (p.forca > 800 && p.qi < 200) fraquezasAuto.push("Estratégia");
    if (p.velocidade > 800 && p.resistencia < 300) fraquezasAuto.push("Ataques em Área");
    if (!p.superpoderes && p.humano && p.serie !== "Celebridades") fraquezasAuto.push("Fadiga");
    if (p.vilao && p.humano) fraquezasAuto.push("Ego");
    if (p.heroi && p.humano && !p.superpoderes) fraquezasAuto.push("Vínculos");
    if (p.magia_poder > 800 && p.forca < 400) fraquezasAuto.push("Corpo Frágil");

    const fraquezasIconicas = {
        "Superman": ["Kryptonita", "Magia"],
        "Batman": ["Sem Preparação"],
        "Goku": ["Doença do Coração", "Cauda"],
        "Naruto Uzumaki": ["Selos"],
        "Monkey D. Luffy": ["Água do Mar"],
        "Harry Potter": ["Avada Kedavra", "Trouxa"],
        "Kratos": ["Esperança", "Traição"],
        "Thor": ["Sem Martelo"],
        "Wonder Woman": ["Laço da Verdade"],
        "Homem de Ferro": ["Escassez de Recursos"],
        "Guts": ["Ego", "Escuridão"],
        "Vegeta": ["Orgulho Saiyajin"],
        "Saitama": ["Tédio"],
        "Sasuke Uchiha": "", // will ignore
        "Light Yagami": ["Morte ao Escrever"],
        "Eren Yeager": ["Determinação Abalada"],
        "Darth Vader": ["Circuito Danificado"],
        "Spider-Man": ["Tias", "Responsabilidade"],
        "Flash": ["Frio Extremo"],
        "Aquaman": ["Fora d'Água"],
        "L": ["Doce"],
        "Tanjiro Kamado": [], // not needed
        "Zoro": ["Direção"],
        "Loki": ["Ego", "Consequências"],
        "Deadpool": ["Fator de Cura Instável"],
        "Hulk": ["Raiva Incontrolável"],
        "Wolverine": ["Adamantium Limitado"],
        "Shrek": [], // not needed
        "Frodo": ["Um Anel"],
        "Gandalf": ["Limitações Istari"],
        "John Wick": ["Cachorros"],
        "Nemo": ["Peixe Cirurgião"],
        "Saul Goodman": ["Consciência"],
        "Daryl Dixon": ["Flechas Limitadas"],
        "Sonic": ["Água Profunda"],
        "Mario": ["Cogumelo? Nunca."],
        "Doom Slayer": ["Demônios Ilimitados"],
        "Steve": ["Sem Ferramentas", "Fome"],
        "Velma": ["Óculos"],
        "Pikachu": ["Treinador Distraído"],
        "Neo": ["Agentes", "Matrix"],
        "Yoda": ["Limitações Etárias"],
        "Optimus Prime": ["Matéria-Prima"],
        "Megatron": ["Liderança Questionável"],
        "Gollum": ["Anel", "Personalidade"],
        "Voldemort": ["Horcruxes", "Orgulho"],
        "Bilbo Bolseiro": ["Aventura"],
        "Samwise Gamgee": ["Bolso"],
        "Lara Croft": ["Equipamento"],
        "Geralt": ["Neutralidade"],
        "Senku Ishigami": ["Baixa Força Física"],
        "Rick Sanchez": ["Ego", "Dependência"],
        "Morty": ["Fragilidade Emocional"],
        "Sheldon Cooper": ["Social"],
        "Walter White": ["Ego"],
        "Jesse Pinkman": [], // not needed
        "Daenerys Targaryen": ["Dragões Ilimitados"],
        "Jon Snow": ["Honra"],
        "Tyrion Lannister": ["Baixa Estatura"],
        "Cersei Lannister": ["Filhos"],
        "Aragorn": ["Descendência"],
        "Legolas": [], // not needed
        "Gimli": ["Baixa Estatura"],
        "Sauron": ["Um Anel"],
        "Saruman": ["Orgulho"],
        "Goku Black": ["Zamasu"],
        "Vergil": ["Motivação Questionável"],
        "Dante": ["Falta de Foco"],
        "Zero (Mega Man)": ["Carga de Bateria"],
        "Samus Aran": ["Armadura Danificada"],
        "Sub-Zero": ["Fogo"],
        "Scorpion": [], // not needed
        "Ryu": [], // not needed
        "Ken Masters": [] // not needed
    };

    p.fraquezas = fraquezasIconicas[p.nome] && fraquezasIconicas[p.nome].length
        ? fraquezasIconicas[p.nome]
        : [...new Set(fraquezasAuto)].slice(0, 3);

    if (!p.fraquezas.length) p.fraquezas = ["Nenhuma Aparente"];
});

const seriesAnimesHQ = ["Dragon Ball", "Naruto", "Jujutsu Kaisen", "Nanatsu no Taizai", "My Hero Academia", "One Piece", "Marvel", "DC"];
const personagensSuper = personagens.filter(p => seriesAnimesHQ.includes(p.serie) || p.superpoderes);
const personagensNormal = personagens.filter(p => !seriesAnimesHQ.includes(p.serie) && !p.superpoderes && p.serie !== "Celebridades");

function criarSistemaDuelo(idLuta, idInfo, idResultado, idComparacao, pool) {
    const state = { p1: null, p2: null, escolheu: false };

    function poderTotal(p) {
        return p.forca + p.magia_poder + p.qi + p.qi_batalha + p.exp + p.velocidade + p.resistencia + p.defesa + p.taijutsu + p.ninjutsu + p.genjutsu + p.estamina + p.agilidade + p.carisma + p.furtividade + p.percepcao + p.forca_vontade;
    }

    function statsHTML(p) {
        const total = poderTotal(p);
        const labels = ['forca','magia_poder','qi','qi_batalha','exp','velocidade','resistencia','defesa','estamina','agilidade','carisma','furtividade','percepcao','forca_vontade','taijutsu','ninjutsu','genjutsu'];
        const nomes = ['Força','Magia','QI','QI Batalha','EXP','Velocidade','Resistência','Defesa','Estamina','Agilidade','Carisma','Furtividade','Percepção','Força Vontade','Físico','Técnica','Mental'];
        return labels.map((f,i) =>
            `<div class="pr-stat-bar">
                <span class="pr-stat-label">${nomes[i]}</span>
                <div class="pr-stat-track">
                    <div class="pr-stat-fill" style="width:${p[f]/10}%"></div>
                </div>
                <span class="pr-stat-val">${p[f]}</span>
            </div>`
        ).join("") + `<div class="pr-stat-bar" style="margin-top:3px; border-top:1px solid #e2e8f0; padding-top:2px;">
            <span class="pr-stat-label" style="font-weight:700;color:#4f46e5;">Total</span>
            <div class="pr-stat-track"><div class="pr-stat-fill" style="width:${total/170}%;background:linear-gradient(90deg,#6366f1,#8b5cf6);"></div></div>
            <span class="pr-stat-val" style="font-weight:700;color:#4f46e5;">${total}</span>
        </div>` + 
        (() => {
            const mapa = [
                {key:'forca', nome:'Força Bruta', cor:'#ef4444'},
                {key:'magia_poder', nome:'Místico', cor:'#8b5cf6'},
                {key:'qi', nome:'Estratégia', cor:'#3b82f6'},
                {key:'qi_batalha', nome:'Combate', cor:'#f97316'},
                {key:'exp', nome:'Veterano', cor:'#f59e0b'},
                {key:'velocidade', nome:'Velocidade', cor:'#06b6d4'},
                {key:'resistencia', nome:'Resistência', cor:'#10b981'},
                {key:'defesa', nome:'Fortaleza', cor:'#14b8a6'},
                {key:'estamina', nome:'Condicionamento', cor:'#84cc16'},
                {key:'agilidade', nome:'Agilidade', cor:'#22d3ee'},
                {key:'carisma', nome:'Liderança', cor:'#f472b6'},
                {key:'furtividade', nome:'Furtividade', cor:'#6b7280'},
                {key:'percepcao', nome:'Intuição', cor:'#a78bfa'},
                {key:'forca_vontade', nome:'Determinação', cor:'#fb923c'},
                {key:'taijutsu', nome:'Físico', cor:'#f97316'},
                {key:'ninjutsu', nome:'Técnica', cor:'#6366f1'},
                {key:'genjutsu', nome:'Mental', cor:'#a855f7'}
            ];
            const maxVal = Math.max(...mapa.map(s => p[s.key]));
            const best = mapa.find(s => p[s.key] === maxVal);
            const fraq = p.fraquezas.map(f => `<span class="pr-fraqueza-tag">${f}</span>`).join("");
            return `<div class="pr-especialidade" style="color:${best.cor};">Especialidade: ${best.nome}</div>
            <div class="pr-fraquezas">${fraq}</div>`;
        })();
    }

    function sortear() {
        const lutadoresEl = document.getElementById(idLuta);
        const infoEl = document.getElementById(idInfo);
        const resultadoEl = document.getElementById(idResultado);
        const comparacaoEl = document.getElementById(idComparacao);

        const idx1 = Math.floor(Math.random() * pool.length);
        let idx2;
        do { idx2 = Math.floor(Math.random() * pool.length); } while (idx2 === idx1);

        state.p1 = pool[idx1];
        state.p2 = pool[idx2];
        state.escolheu = false;

        lutadoresEl.innerHTML = `
            <div class="pr-lutadores-wrapper">
                <div class="pr-lutador">
                    <div class="pr-nome">${state.p1.nome}</div><div class="pr-serie">${state.p1.serie}</div>
                    <button class="pr-btn-escolha" data-escolha="1">👊 Escolher</button>
                </div>
                <div class="pr-vs-text">VS</div>
                <div class="pr-lutador">
                    <div class="pr-nome">${state.p2.nome}</div><div class="pr-serie">${state.p2.serie}</div>
                    <button class="pr-btn-escolha" data-escolha="2">👊 Escolher</button>
                </div>
            </div>
        `;

        lutadoresEl.querySelectorAll(".pr-btn-escolha").forEach(btn => {
            btn.onclick = function () { escolher(parseInt(this.dataset.escolha)); };
        });

        infoEl.textContent = "> Qual deles tem o maior poder total?";
        resultadoEl.textContent = "";
        comparacaoEl.innerHTML = "";
    }

    function compararAtributos(p1, p2) {
        const vantagens = {
            forca: { forte: "defesa", fraco: "velocidade", label: "Força" },
            defesa: { forte: "velocidade", fraco: "forca", label: "Defesa" },
            velocidade: { forte: "forca", fraco: "defesa", label: "Velocidade" },
            magia_poder: { forte: "resistencia", fraco: "qi", label: "Magia" },
            resistencia: { forte: "qi", fraco: "magia_poder", label: "Resistência" },
            qi: { forte: "magia_poder", fraco: "resistencia", label: "QI" },
            taijutsu: { forte: "ninjutsu", fraco: "genjutsu", label: "Taijutsu" },
            ninjutsu: { forte: "genjutsu", fraco: "taijutsu", label: "Ninjutsu" },
            genjutsu: { forte: "taijutsu", fraco: "ninjutsu", label: "Genjutsu" },
            exp: { forte: "qi", fraco: "velocidade", label: "EXP" },
            qi_batalha: { forte: "taijutsu", fraco: "forca", label: "QI Batalha" }
        };
        const labelMap = { forca:"Força",magia_poder:"Magia",qi:"QI",qi_batalha:"QI Batalha",exp:"EXP",velocidade:"Velocidade",resistencia:"Resistência",defesa:"Defesa",taijutsu:"Taijutsu",ninjutsu:"Ninjutsu",genjutsu:"Genjutsu" };

        const attrs = [
            {key:"forca", label:"Força"},
            {key:"magia_poder", label:"Magia"},
            {key:"qi", label:"QI"},
            {key:"qi_batalha", label:"QI Batalha"},
            {key:"exp", label:"EXP"},
            {key:"velocidade", label:"Velocidade"},
            {key:"resistencia", label:"Resistência"},
            {key:"defesa", label:"Defesa"},
            {key:"estamina", label:"Estamina"},
            {key:"agilidade", label:"Agilidade"},
            {key:"carisma", label:"Carisma"},
            {key:"furtividade", label:"Furtividade"},
            {key:"percepcao", label:"Percepção"},
            {key:"forca_vontade", label:"Força Vontade"},
            {key:"taijutsu", label:"Taijutsu"},
            {key:"ninjutsu", label:"Ninjutsu"},
            {key:"genjutsu", label:"Genjutsu"}
        ];
        const sup1 = [], sup2 = [], emp = [];

        for (const a of attrs) {
            if (p1[a.key] > p2[a.key]) sup1.push(a.label);
            else if (p2[a.key] > p1[a.key]) sup2.push(a.label);
            else emp.push(a.label);
        }

        const baseKeys = ['forca','magia_poder','qi','qi_batalha','exp','velocidade','resistencia','defesa','taijutsu','ninjutsu','genjutsu'];
        const topP1 = [...baseKeys].sort((a,b) => p1[b] - p1[a]).slice(0,3);
        const topP2 = [...baseKeys].sort((a,b) => p2[b] - p2[a]).slice(0,3);
        let score1 = 0, score2 = 0;
        const linhas1 = [], linhas2 = [];

        for (const s1 of topP1) {
            for (const s2 of topP2) {
                if (vantagens[s1] && vantagens[s1].forte === s2) {
                    score1++;
                    linhas1.push(`${vantagens[s1].label} > ${vantagens[s2].label}`);
                }
                if (vantagens[s2] && vantagens[s2].forte === s1) {
                    score2++;
                    linhas2.push(`${vantagens[s2].label} > ${vantagens[s1].label}`);
                }
            }
        }

        let leitura = "";
        if (score1 || score2) {
            const vencedor = score1 > score2 ? p1.nome : score2 > score1 ? p2.nome : null;
            leitura = `<div class="pr-vantagem-box">
                <div class="pr-vantagem-header">📐 Pedra-Papel-Tesoura dos Atributos</div>
                <div class="pr-vantagem-linha vantagem-p1">
                    🔥 ${p1.nome}: ${linhas1.join(", ") || "—"}
                </div>
                <div class="pr-vantagem-linha vantagem-p2">
                    ⚡ ${p2.nome}: ${linhas2.join(", ") || "—"}
                </div>
                ${vencedor ? `<div class="pr-vantagem-result">🏆 ${vencedor} tem vantagem de tipo!</div>` : ""}
            </div>`;
        }

        return `<div class="pr-comparacao">
            <div class="pr-cmp-col"><strong>${p1.nome}</strong> superior em:<br>${sup1.join(", ") || "—"}</div>
            <div class="pr-cmp-col"><strong>${p2.nome}</strong> superior em:<br>${sup2.join(", ") || "—"}</div>
        </div>${leitura}`;
    }

    function escolher(escolha) {
        if (state.escolheu) return;
        state.escolheu = true;

        const lutadoresEl = document.getElementById(idLuta);
        const resultadoEl = document.getElementById(idResultado);
        const comparacaoEl = document.getElementById(idComparacao);
        const infoEl = document.getElementById(idInfo);

        const total1 = poderTotal(state.p1);
        const total2 = poderTotal(state.p2);
        const vencedor = total1 >= total2 ? state.p1 : state.p2;
        const acertou = (escolha === 1 && vencedor === state.p1) || (escolha === 2 && vencedor === state.p2);

        infoEl.textContent = `📊 ${state.p1.nome}: ${total1}  VS  ${state.p2.nome}: ${total2}`;

        lutadoresEl.innerHTML = `
            <div class="pr-lutadores-wrapper">
                <div class="pr-lutador ${escolha === 1 ? (acertou ? 'acertou' : 'errou') : (acertou ? 'revelado' : '')}">
                    <div class="pr-nome">${state.p1.nome}</div><div class="pr-serie">${state.p1.serie}</div>
                    ${statsHTML(state.p1)}
                </div>
                <div class="pr-vs-text">VS</div>
                <div class="pr-lutador ${escolha === 2 ? (acertou ? 'acertou' : 'errou') : (acertou ? 'revelado' : '')}">
                    <div class="pr-nome">${state.p2.nome}</div><div class="pr-serie">${state.p2.serie}</div>
                    ${statsHTML(state.p2)}
                </div>
            </div>
        `;

        comparacaoEl.innerHTML = compararAtributos(state.p1, state.p2);

        if (acertou) {
            resultadoEl.textContent = `✅ Você acertou! ${vencedor.nome} vence com ${vencedor === state.p1 ? total1 : total2} de poder total!`;
        } else {
            resultadoEl.textContent = `❌ Você errou! ${vencedor.nome} vence com ${vencedor === state.p1 ? total1 : total2} de poder total!`;
        }
    }

    return { sortear };
}

const dueloSuper = criarSistemaDuelo("lutadores", "popularidade-info", "resultado-luta", "comparacao-luta", personagensSuper);
const dueloNormal = criarSistemaDuelo("lutadores-normal", "popularidade-info-normal", "resultado-luta-normal", "comparacao-luta-normal", personagensNormal);

function sortearLutaSuper() { dueloSuper.sortear(); }
function sortearLutaNormal() { dueloNormal.sortear(); }

let personagemAlvo = null;
let bloqueado = false;

function sortearPersonagemAlvo() {
    personagemAlvo = personagens[Math.floor(Math.random() * personagens.length)];

    document.getElementById("dicas").innerHTML = `
        <div class="pr-dica ${personagemAlvo.heroi ? 'pr-sim' : 'pr-nao'}">${personagemAlvo.heroi ? '✅' : '❌'} Herói</div>
        <div class="pr-dica ${personagemAlvo.vilao ? 'pr-sim' : 'pr-nao'}">${personagemAlvo.vilao ? '✅' : '❌'} Vilão</div>
        <div class="pr-dica ${personagemAlvo.humano ? 'pr-sim' : 'pr-nao'}">${personagemAlvo.humano ? '✅' : '❌'} Humano</div>
        <div class="pr-dica ${personagemAlvo.anime ? 'pr-sim' : 'pr-nao'}">${personagemAlvo.anime ? '✅' : '❌'} Anime/Mangá</div>
        <div class="pr-dica ${personagemAlvo.superpoderes ? 'pr-sim' : 'pr-nao'}">${personagemAlvo.superpoderes ? '✅' : '❌'} Superpoderes</div>
        <div class="pr-dica ${personagemAlvo.magia ? 'pr-sim' : 'pr-nao'}">${personagemAlvo.magia ? '✅' : '❌'} Magia</div>
        <div class="pr-dica ${personagemAlvo.voa ? 'pr-sim' : 'pr-nao'}">${personagemAlvo.voa ? '✅' : '❌'} Voa</div>
        <div class="pr-dica ${personagemAlvo.transformacao ? 'pr-sim' : 'pr-nao'}">${personagemAlvo.transformacao ? '✅' : '❌'} Transformação</div>
        <div class="pr-dica ${personagemAlvo.armadura ? 'pr-sim' : 'pr-nao'}">${personagemAlvo.armadura ? '✅' : '❌'} Armadura/Traje</div>
    `;

    document.getElementById("resultado-adivinhar").textContent = "";
    const imgEl = document.getElementById("img-personagem");
    if (imgEl) imgEl.classList.remove("mostrar");

    bloqueado = false;

    const errados = personagens.filter(p => p.nome !== personagemAlvo.nome);
    const sorteados = [];
    while (sorteados.length < 3) {
        const idx = Math.floor(Math.random() * errados.length);
        if (!sorteados.includes(idx)) sorteados.push(idx);
    }
    const opcoes = [personagemAlvo, ...sorteados.map(i => errados[i])];
    for (let i = opcoes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opcoes[i], opcoes[j]] = [opcoes[j], opcoes[i]];
    }

    const opcoesEl = document.getElementById("opcoes-personagem");
    opcoesEl.innerHTML = opcoes.map(p =>
        `<button class="pr-btn-opcao" onclick="escolherPersonagem('${p.nome.replace(/'/g, "\\'")}')">${p.nome}</button>`
    ).join("");
}

function escolherPersonagem(nome) {
    if (bloqueado) return;
    bloqueado = true;
    const resultadoEl = document.getElementById("resultado-adivinhar");
    const botoes = document.querySelectorAll(".pr-btn-opcao");
    botoes.forEach(b => b.disabled = true);

    if (nome === personagemAlvo.nome) {
        resultadoEl.textContent = `🎉 Correto! O personagem era ${personagemAlvo.nome}!`;
        botoes.forEach(b => { if (b.textContent === personagemAlvo.nome) b.classList.add("acertou"); });
        const imgEl = document.getElementById("img-personagem");
        if (imgEl) imgEl.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personagemAlvo.nome)}&background=6366f1&color=fff&size=72&bold=true`;
        if (imgEl) imgEl.classList.add("mostrar");
    } else {
        resultadoEl.textContent = `❌ Errou! O personagem era ${personagemAlvo.nome}.`;
        botoes.forEach(b => { if (b.textContent === nome) b.classList.add("errou"); if (b.textContent === personagemAlvo.nome) b.classList.add("acertou"); });
    }
}

function gerarRanking(tipo) {
    const lista = document.getElementById("ranking-lista");
    let items;

    if (tipo === "geral") {
        const sorted = [...personagens].sort((a, b) => b.popularidade - a.popularidade);
        items = sorted.map((p, i) =>
            `<div class="pr-ranking-item">
                <span class="pr-pos">#${i + 1}</span>
                <span class="pr-nome-rank">${p.nome}</span>
                <span class="pr-popularidade-rank">${formatarPopularidade(p.popularidade)}</span>
            </div>`
        );
    } else if (tipo === "ocidente") {
        const sorted = [...personagens].sort((a, b) => b.ocidente - a.ocidente);
        items = sorted.map((p, i) =>
            `<div class="pr-ranking-item">
                <span class="pr-pos">#${i + 1}</span>
                <span class="pr-nome-rank">${p.nome}</span>
                <span class="pr-popularidade-rank">${formatarPopularidade(p.ocidente)}</span>
            </div>`
        );
    } else if (tipo === "oriente") {
        const sorted = [...personagens].sort((a, b) => b.oriente - a.oriente);
        items = sorted.map((p, i) =>
            `<div class="pr-ranking-item">
                <span class="pr-pos">#${i + 1}</span>
                <span class="pr-nome-rank">${p.nome}</span>
                <span class="pr-popularidade-rank">${formatarPopularidade(p.oriente)}</span>
            </div>`
        );
    } else if (tipo === "series") {
        const series = {};
        personagens.forEach(p => {
            if (!series[p.serie]) series[p.serie] = { total: 0, count: 0, personagens: [] };
            series[p.serie].total += p.popularidade;
            series[p.serie].count++;
            series[p.serie].personagens.push(p.nome);
        });
        const sorted = Object.entries(series)
            .map(([nome, dados]) => ({ nome, media: Math.round(dados.total / dados.count), personagens: dados.personagens }))
            .sort((a, b) => b.media - a.media)
            .slice(0, 10);
        items = sorted.map((s, i) =>
            `<div class="pr-ranking-item" style="flex-wrap:wrap; padding:6px;">
                <span class="pr-pos">#${i + 1}</span>
                <span class="pr-nome-rank" style="font-weight:700;">${s.nome}</span>
                <span class="pr-popularidade-rank">${s.media}</span>
                <div style="width:100%; font-size:0.55rem; color:var(--text-muted); margin-top:2px; padding-left:22px;">
                    ${s.personagens.join(', ')}
                </div>
            </div>`
        );
    } else if (tipo === "animes") {
        const sorted = personagens.filter(p => p.anime).sort((a, b) => b.popularidade - a.popularidade);
        items = sorted.map((p, i) =>
            `<div class="pr-ranking-item">
                <span class="pr-pos">#${i + 1}</span>
                <span class="pr-nome-rank">${p.nome}</span>
                <span class="pr-popularidade-rank">${formatarPopularidade(p.popularidade)}</span>
            </div>`
        );
    } else if (tipo === "filmes") {
        const seriesFilmes = ["Marvel", "DC", "Harry Potter", "Senhor dos Anéis", "Meu Malvado Favorito", "Velozes e Furiosos"];
        const sorted = personagens.filter(p => seriesFilmes.includes(p.serie)).sort((a, b) => b.popularidade - a.popularidade);
        items = sorted.map((p, i) =>
            `<div class="pr-ranking-item">
                <span class="pr-pos">#${i + 1}</span>
                <span class="pr-nome-rank">${p.nome}</span>
                <span class="pr-popularidade-rank">${formatarPopularidade(p.popularidade)}</span>
            </div>`
        );
    } else if (tipo === "seriestv") {
        const seriesTV = ["Gossip Girl", "The Walking Dead", "Supernatural", "Game of Thrones", "You", "The Boys", "Friends", "Riverdale"];
        const sorted = personagens.filter(p => seriesTV.includes(p.serie)).sort((a, b) => b.popularidade - a.popularidade);
        items = sorted.map((p, i) =>
            `<div class="pr-ranking-item">
                <span class="pr-pos">#${i + 1}</span>
                <span class="pr-nome-rank">${p.nome}</span>
                <span class="pr-popularidade-rank">${formatarPopularidade(p.popularidade)}</span>
            </div>`
        );
    } else if (tipo === "celebridades") {
        const sorted = personagens.filter(p => p.serie === "Celebridades").sort((a, b) => b.popularidade - a.popularidade);
        items = sorted.map((p, i) =>
            `<div class="pr-ranking-item">
                <span class="pr-pos">#${i + 1}</span>
                <span class="pr-nome-rank">${p.nome}</span>
                <span class="pr-popularidade-rank">${formatarPopularidade(p.popularidade)}</span>
            </div>`
        );
    }

    lista.innerHTML = items.join("");
}

sortearLutaSuper();
sortearLutaNormal();
sortearPersonagemAlvo();
gerarRanking("geral");



var CANBUS_FRAMES = [
    {
        id : "0x064",
        title: 'FCU Display',
        description: "Informations relatives à l'afficheur du FCU",
        size : 8,
        bits: [
            {
                value : "SSSSSSSS ",
                info : [
                    "Les dizaines de la vitesse, pour une vitesse de 250 la valeur sera 50",
                    "Si MACH, vitesse / 100"
                ]
            },
            {
                value : "HHHHHHHH ",
                info: ["Les dizaines du cap, pour cap au 320 la valeur sera 20"]
            },
            {
                value: 'SSSSS',
                info: [
                    "Les centaines de la vitesse",
                    '10000 - SSSSSSSS + 100 knots',
                    '01000 - SSSSSSSS + 200 knots',
                    '00100 - SSSSSSSS + 300 knots',
                    '00010 - SSSSSSSS + 400 knots',
                    '00001 - SSSSSSSS + 500 knots'
                ]
            },
            {
                value: 'HHH ',
                info: [
                    "Les centaines du cap",
                    '100 - HHHHHHHH + 100°',
                    '010 - HHHHHHHH + 200°',
                    '001 - HHHHHHHH + 300°'
                ]
            },
            {
                value: 'I',
                info: ['0 - Knots, 1 - Mach (unité de la vitesse)']
            },
            {
                value: 'I',
                info: ['0 - Heading, 1 - Track (type de cap)']
            },
            {
                value: 'I',
                info: ['0 - information LAT non affichée, 1 - information LAT affichée']
            },
            {
                value: 'I',
                info: ['0 - Pied par minutes, 1 - FPA (type de descente verticale)']
            },
            {
                value: 'M',
                info: ['0 - Vitesse managée, 1 - Vitesse gérée']
            },
            {
                value: 'M',
                info: ['0 - Cap managé, 0 - Cap géré']
            },
            {
                value: 'M',
                info: ['0 - Altitude managée, 1 - Altitude gérée']
            },
            {
                value: 'M ',
                info: ['0 - Vitesse verticale négative, 1 - vitesse verticale positive']
            },
            {
                value : "AAAAAAAA aaaaaaaa ",
                info: ["Altitude, (AAAAAAAA + aaaaaaaa) * 100"]
            },
            {
                value: 'VVVVVVVV ',
                info: [
                    'Vitesse verticale',
                    'Si FPA VVVVVVVV / 10',
                    'Sinon VVVVVVVV * 100'
                ]
            },
            {
                value: 'D',
                info: ['0 - Vitesse affichée, 1 - Vitesse caché (---)']
            },
            {
                value: 'D',
                info: ['0 - Cap affiché, 1 - Cap caché (---)']
            },
            {
                value: 'D',
                info: ['0 - Altitude affichée, 1 - Altitude cachée (-----)']
            },
            {
                value: 'D',
                info: ['0 - Vitesse verticale affichée, 1 - Vitesse verticale cachée (-----)']
            },
            {
                value: '0000',
                info: []
            }
        ]
    },
    {
        id : "0x065",
        title: 'FCU',
        description: "Information liées aux FCU",
        size : 4,
        bits: [
            {
                value: 'A',
                info : [
                    "0 - AP1 inactif, 1 - AP1 actif"
                ]
            },
            {
                value: 'A',
                info : [
                    "0 - AP2 inactif, 1 - AP2 actf"
                ]
            },
            {
                value: 'T',
                info : [
                    "0 - A/THR inactif, 1 - A/THR actif"
                ]
            },
            {
                value: 'L',
                info : [
                    "0 - LOC inactif, 1 - LOC actif"
                ]
            },
            {
                value: 'E',
                info : [
                    "0 - Exped activé, 1 - Exped actif"
                ]
            },
            {
                value: 'A',
                info : [
                    "0 - Approche inactif, 1 - Approche actif"
                ]
            },
            {
                value: '00 ',
                info : []
            },
            {
                value : "DDDDDDDD ",
                info : [
                    "Rétroéclairage des écrans du FCU (de 0 à 255)"
                ]
            },
            {
                value : "BBBBBBBB ",
                info : [
                    "Rétroéclairage des boutons du FCU (de 0 à 255)"
                ]
            },
            {
                value : "PPPPPPPP ",
                info : [
                    "Rétroéclairage du panel du FCU (de 0 à 255)"
                ]
            },
        ]
    },
    {
        id : "0x0C8",
        title: 'Backlight global',
        description: "Rétroaiclairage / lumière indicateurs",
        size : 2,
        bits: [
            {
                value: 'T',
                info : [
                    "Tests des lumières d'indicateurs, allume toutes les LED des boutons et des afficheurs",
                    "0 - inactif, 1 - actif"
                ]
            },
            {
                value: '0000000 ',
                info: ["Inutilisé"]
            },
            {
                value : "TTTTTTTT ",
                info : [
                    "Rétroéclairage des témoins des boutons (de 0 à 255)"
                ]
            },
        ]
    },
    {
        id : "0x12C",
        title: 'Electricité',
        description: "Infomrations liées aux bus éléctrique",
        size : 2,
        bits: [
            {
                value: 'B',
                info : [
                    "Alimentation électrique du Bus AC 1",
                    "1 - allimenté, 0 - inactif"
                ]
            },
            {
                value: '0000000 ',
                info: ["Inutilisé"]
            },
        ]
    }
];
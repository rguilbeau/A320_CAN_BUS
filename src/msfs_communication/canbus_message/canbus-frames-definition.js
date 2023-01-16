var CANBUS_FRAMES = [
    {
        id : "0x064",
        source: 'MFSF',
        period: 'à la demande',
        destination: 'FCU_Display',
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
        id : "0x0C8",
        source: 'FS2020, FCU_panel',
        period: 'à la demande',
        destination: 'all',
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
                value : "FFFFFFFF ",
                info : [
                    "Rétroéclairage des écrans du FCU (de 0 à 100%)"
                ]
            }
        ]
    },
    {
        id : "0x12C",
        source: 'MSFS',
        period: 'à la demande',
        destination: 'all',
        description: "Electricité",
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
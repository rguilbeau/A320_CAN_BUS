var CANBUS_FRAMES = [
    {
        id : "0x064",
        source: 'FS2020',
        period: 'à la demande',
        destination: 'FCU_Display',
        description: "Informations relatives à l'afficheur du FCU",
        size : 8,
        bits: [
            {
                value : "SSSSSSSS ",
                info : [
                    "Dizaines d'unité de la vitesse, pour une vitesse de 250 la valeur sera 50",
                    "Si MACH, SSSSSSSS / 100"
                ]
            },
            {
                value : "HHHHHHHH ",
                info: ["Dizaines d'unité du cap, pour cap au 320 la valeur sera 20"]
            },
            {
                value: 'SSSSS',
                info: [
                    "Centaine d'unité de la vitesse",
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
                    "Centaine d'untité du cap",
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
                info: ['0 - Navigation standard, 1 - navigation LAT']
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
        source: 'Cockpit',
        period: 'à la demande',
        destination: 'all',
        description: "Niveau de rétroéclairage",
        size : 1,
        bits: [
            {
                value : "FFFFFFFF ",
                info : [
                    "Rétroéclairage des écrans du FCU (de 0 à 100%)"
                ]
            }
        ]
    }
];
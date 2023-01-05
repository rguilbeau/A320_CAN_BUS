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
                info : ["Dizaines d'unité de la vitesse, pour une vitesse de 250 la valeur sera 50"]
            },
            {
                value : "HHHHHHHH ",
                info: ["Dizaines d'unité du cap, pour cap au 320 la valeur sera 20"]
            },
            {
                value: 'SSSSS',
                info: [
                    '10000 - vitesse + 100 knots',
                    '01000 - vitesse + 200 knots',
                    '00100 - vitesse + 300 knots',
                    '00010 - vitesse + 400 knots',
                    '00001 - vitesse + 500 knots'
                ]
            },
            {
                value: 'HHH ',
                info: [
                    '100 - cap + 100°',
                    '010 - cap + 200°',
                    '001 - cap + 300°'
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
                value : "AAAAAAAA AAAAAAAA ",
                info: ["Altitude, additionner les deux bytes entre eux"]
            },
            {
                value: 'VVVVVVVV ',
                info: [
                    'Vitesse verticale',
                    'Si FPA vitesse verticale / 10',
                    'Sinon vitesse verticale * 100'
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
    }
];
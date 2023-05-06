var CANBUS_FRAMES = [
    {
        id : "0x000",
        title: 'Cockpit event',
        description: "Tous les évenements du cockpit (bouton appuyé, switch, bouton rotatif). Ils sont tous envoyés via la frame 0x000, et l'id de l'evenement se trouve dans la frame.",
        size : 7,
        bits: [
            {
                value: 'IIIIIIII IIIIIIII ',
                info : ["L'id de l'evenement"]
            },
            {
                value: 'VVVVVVVV VVVVVVVV VVVVVVVV VVVVVVVV VVVVVVVV ',
                info : ["La valeur de l'evenement en float"]
            },
        ]
    },
    {
        id : "0x010",
        title: 'Ping',
        description: "Frame de ping, permet de forcer les modules du cockpit, à envoyer leurs informations même si elles n'ont pas été modifiées",
        size : 1,
        bits: [
            {
                value: 'RRRRRRRR ',
                info : ["Valeur random (0x00 à 0xFF)"]
            }
        ]
    },
    {
        id : "0x020",
        title: 'Brightness panel',
        description: "Rétroaiclairage des panels",
        size : 5,
        bits: [
            {
                value: 'GGGGGGGG ',
                info : ["Rétroaiclairage du glareshield (0 à 255)"]
            },
            {
                value: 'OOOOOOOO ',
                info: ["Rétroaiclairage de l'overhead panel (0 à 255)"]
            },
            {
                value : "PPPPPPPP ",
                info : ["Rétroaiclairage du pedestale (0 à 255)"]
            },
            {
                value : "IIIIIIII ",
                info : ["Rétroaiclairage des témoins des boutons (0 à 255)"]
            },
            {
                value : "BBBBBBBB ",
                info : ["Rétroaiclairage des boutons (0 à 255)"]
            }
        ]
    },
    {
        id : "0x030",
        title: 'Sevent segment brightness',
        description: "Le rétroaiclaire des écrans 7 segments",
        size : 5,
        bits: [
            {
                value: 'T',
                info : [
                    "Les lumières du cockpit sont en mode \"test\"",
                    "1 - actif, 0 - inactif"
                ]
            },
            {
                value: '0000000 ',
                info: []
            },
            {
                value: 'AAAAAAAA ',
                info : ["Rétroaiclairage des altimètres (0 à 255)"]
            },
            {
                value: 'BBBBBBBB ',
                info : ["Rétroaiclairage de l'afficheur de la tension des batteries (0 à 255)"]
            },
            {
                value: 'RRRRRRRR ',
                info : ["Rétroaiclairage de la fréquence des radios (0 à 255)"]
            },
        ]
    },
    {
        id : "0x011",
        title: 'FCU Display',
        description: "Informations relatives à l'afficheur du FCU",
        size : 8,
        bits: [
            {
                value : "SSSSSSSS ",
                info : [
                    "Les dizaines de la vitesse, pour une vitesse de 250 la valeur sera 50",
                    "Si MACH, SSSSSSSS + (sssss) / 100"
                ]
            },
            {
                value : "HHHHHHHH ",
                info: ["Les dizaines du cap, pour cap au 320 la valeur sera 20"]
            },
            {
                value: 'sssss',
                info: [
                    "Les centaines de la vitesse",
                    '10000 - (SSSSSSSS + 100 knots)',
                    '01000 - (SSSSSSSS + 200 knots)',
                    '00100 - (SSSSSSSS + 300 knots)',
                    '00010 - (SSSSSSSS + 400 knots)',
                    '00001 - (SSSSSSSS + 500 knots)'
                ]
            },
            {
                value: 'hhh ',
                info: [
                    "Les centaines du cap",
                    '100 - (HHHHHHHH + 100°)',
                    '010 - (HHHHHHHH + 200°)',
                    '001 - (HHHHHHHH + 300°)'
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
        id : "0x021",
        title: 'Glareshield indicators',
        description: "Les témoins des boutons des panels du glareshield",
        size : 1,
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
            }
        ]
    }
];
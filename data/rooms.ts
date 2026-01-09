export interface Room {
    id: string;
    name: string;
    building: string;
    images: any[];
    floor: string;
    capacity: string;
    roomType: string;
    searchAliases?: string[];
}

export interface Building {
    id: string;
    name: string;
    rooms: Room[];
}

export const BUILDINGS_DATA: Building[] = [
    {
        id: 'owen',
        name: 'Owen Hall',
        rooms: [
            {
                id: 'owen-hall-101',
                name: 'Room 101',
                building: 'Owen Hall',
                images: [
                    require('../assets/images/rooms/owen-hall-101.jpeg'),
                ],
                floor: '1',
                capacity: '84',
                roomType: 'Classroom',
                searchAliases: ['Owen 101'],
            },
            {
                id: 'owen-hall-102',
                name: 'Room 102',
                building: 'Owen Hall',
                images: [
                    require('../assets/images/rooms/owen-hall-102.jpeg'),
                ],
                floor: '1',
                capacity: '94',
                roomType: 'Lecture Hall',
                searchAliases: ['Owen 102'],
            },
            {
                id: 'owen-hall-106',
                name: 'Room 106',
                building: 'Owen Hall',
                images: [
                    require('../assets/images/rooms/owen-hall-106.jpeg'),
                ],
                floor: '1',
                capacity: '56',
                roomType: 'Classroom',
                searchAliases: ['Owen 106'],
            },
            {
                id: 'owen-hall-109',
                name: 'Room 109',
                building: 'Owen Hall',
                images: [
                    require('../assets/images/rooms/owen-hall-109.jpeg')
                ],
                floor: '1',
                capacity: '29',
                roomType: 'Lab Classroom',
                searchAliases: ['Owen 109'],
            },
            {
                id: 'owen-hall-110',
                name: 'Room 110',
                building: 'Owen Hall',
                images: [
                    require('../assets/images/rooms/owen-hall-110.jpeg')
                ],
                floor: '1',
                capacity: '41',
                roomType: 'Classroom',
                searchAliases: ['Owen 110', 'Survey Lab'],
            },
            {
                id: 'owen-hall-217',
                name: 'Room 217',
                building: 'Owen Hall',
                images: [
                    require('../assets/images/placeholder.png')
                ],
                floor: '2',
                capacity: '13',
                roomType: 'Lab Room',
                searchAliases: ['Owen 217', 'Photogrammetry Lab'],
            },
            {
                id: 'owen-hall-224',
                name: 'Room 224',
                building: 'Owen Hall',
                images: [
                    require('../assets/images/rooms/owen-hall-224.jpeg')
                ],
                floor: '2',
                capacity: '10',
                roomType: 'Meeting Room',
                searchAliases: ['Owen 224'],
            },
            {
                id: 'owen-hall-237',
                name: 'Room 237',
                building: 'Owen Hall',
                images: [
                    require('../assets/images/placeholder.png')
                ],
                floor: '2',
                capacity: '41',
                roomType: 'Unknown',
                searchAliases: ['Owen 237'],
            },
            {
                id: 'owen-hall-241',
                name: 'Room 241',
                building: 'Owen Hall',
                images: [
                    require('../assets/images/rooms/owen-hall-241.jpeg')
                ],
                floor: '2',
                capacity: '63',
                roomType: 'Computer Room',
                searchAliases: ['Owen 241'],
            },
            {
                id: 'owen-hall-424',
                name: 'Room 424',
                building: 'Owen Hall',
                images: [
                    require('../assets/images/rooms/owen-hall-424.jpeg')
                ],
                floor: '4',
                capacity: '12',
                roomType: 'Meeting Room',
                searchAliases: ['Owen 424'],
            },
            {
                id: 'owen-hall-433',
                name: 'Room 433',
                building: 'Owen Hall',
                images: [
                    require('../assets/images/rooms/owen-hall-433.jpeg')
                ],
                floor: '4',
                capacity: '18',
                roomType: 'Lab Room',
                searchAliases: ['Owen 433'],
            },
        ]
    },
    {
        id: 'linc',
        name: 'Learning Innovation Center (LINC)',
        rooms: [
            {
                id: 'linc-100',
                name: 'Room 100',
                building: 'LINC',
                images: [
                    require('../assets/images/rooms/linc-100.jpeg')
                ],
                floor: '1',
                capacity: '588',
                roomType: 'Round Lecture Hall',
                searchAliases: ['LINC 100'],
            },
            {
                id: 'linc-128',
                name: 'Room 128',
                building: 'LINC',
                images: [
                    require('../assets/images/rooms/linc-128.jpeg')
                ],
                floor: '1',
                capacity: '395',
                roomType: 'Lecture Hall',
                searchAliases: ['LINC 128'],
            },
            {
                id: 'linc-200',
                name: 'Room 200',
                building: 'LINC',
                images: [
                    require('../assets/images/rooms/linc-200.jpeg')
                ],
                floor: '2',
                capacity: '174',
                roomType: 'Round Lecture Hall',
                searchAliases: ['LINC 200'],
            },
            {
                id: 'linc-210',
                name: 'Room 210',
                building: 'LINC',
                images: [
                    require('../assets/images/rooms/linc-210.jpeg')
                ],
                floor: '2',
                capacity: '225',
                roomType: 'Lecture Hall',
                searchAliases: ['LINC 210'],
            },
            {
                id: 'linc-228',
                name: 'Room 228',
                building: 'LINC',
                images: [
                    require('../assets/images/rooms/linc-228.jpeg')
                ],
                floor: '2',
                capacity: '277',
                roomType: 'Round Lecture Hall',
                searchAliases: ['LINC 228'],
            },
            {
                id: 'linc-268',
                name: 'Room 268',
                building: 'LINC',
                images: [
                    require('../assets/images/rooms/linc-268.jpeg')
                ],
                floor: '2',
                capacity: '60',
                roomType: 'Classroom',
                searchAliases: ['LINC 268'],
            },
            {
                id: 'linc-302',
                name: 'Room 302',
                building: 'LINC',
                images: [
                    require('../assets/images/rooms/linc-302.jpeg')
                ],
                floor: '3',
                capacity: '96',
                roomType: 'Lecture Hall',
                searchAliases: ['LINC 302'],
            },
            {
                id: 'linc-303',
                name: 'Room 303',
                building: 'LINC',
                images: [
                    require('../assets/images/rooms/linc-303.jpeg')
                ],
                floor: '3',
                capacity: '72',
                roomType: 'Collaborative Pods',
                searchAliases: ['LINC 303'],
            },
            {
                id: 'linc-307',
                name: 'Room 307',
                building: 'LINC',
                images: [
                    require('../assets/images/rooms/linc-307.jpeg')
                ],
                floor: '3',
                capacity: '72',
                roomType: 'Collaborative Pods',
                searchAliases: ['LINC 307'],
            },
            {
                id: 'linc-314',
                name: 'Room 314',
                building: 'LINC',
                images: [
                    require('../assets/images/rooms/linc-314.jpeg')
                ],
                floor: '3',
                capacity: '60',
                roomType: 'U-Shaped Lecture Hall',
                searchAliases: ['LINC 314'],
            },
            {
                id: 'linc-343',
                name: 'Room 343',
                building: 'LINC',
                images: [
                    require('../assets/images/rooms/linc-343.jpeg')
                ],
                floor: '3',
                capacity: '24',
                roomType: 'Classroom',
                searchAliases: ['LINC 343'],
            },
            {
                id: 'linc-345',
                name: 'Room 345',
                building: 'LINC',
                images: [
                    require('../assets/images/rooms/linc-345.jpeg')
                ],
                floor: '3',
                capacity: '24',
                roomType: 'Classroom',
                searchAliases: ['LINC 345'],
            },
            {
                id: 'linc-350',
                name: 'Room 350',
                building: 'LINC',
                images: [
                    require('../assets/images/placeholder.png')
                ],
                floor: '3',
                capacity: '16',
                roomType: 'Classroom',
                searchAliases: ['LINC 350'],
            },
            {
                id: 'linc-360',
                name: 'Room 360',
                building: 'LINC',
                images: [
                    require('../assets/images/placeholder.png')
                ],
                floor: '3',
                capacity: '16',
                roomType: 'Classroom',
                searchAliases: ['LINC 360'],
            },
            {
                id: 'linc-368',
                name: 'Room 368',
                building: 'LINC',
                images: [
                    require('../assets/images/rooms/linc-368.jpeg')
                ],
                floor: '3',
                capacity: '60',
                roomType: 'Classroom',
                searchAliases: ['LINC 368'],
            },
        ]
    },
    {
        id: 'wgnd',
        name: 'Wiegand Hall',
        rooms: [
            {
                id: 'wgnd-106',
                name: 'Room 106',
                building: 'Wiegand Hall',
                images: [
                    require('../assets/images/rooms/wgnd-106.jpeg')
                ],
                floor: '1',
                capacity: '80',
                roomType: 'Classroom',
                searchAliases: ['WGND 106'],
            },
            {
                id: 'wgnd-115',
                name: 'Room 115',
                building: 'Wiegand Hall',
                images: [
                    require('../assets/images/rooms/wgnd-115.jpeg')
                ],
                floor: '1',
                capacity: '217',
                roomType: 'Lecture Hall',
                searchAliases: ['WGND 115'],
            },
            {
                id: 'wgnd-118',
                name: 'Room 118',
                building: 'Wiegand Hall',
                images: [
                    require('../assets/images/rooms/wgnd-118.jpeg')
                ],
                floor: '1',
                capacity: '12',
                roomType: 'Lab Classroom',
                searchAliases: ['WGND 118'],
            },
            {
                id: 'wgnd-120',
                name: 'Room 120',
                building: 'Wiegand Hall',
                images: [
                    require('../assets/images/rooms/wgnd-120.jpeg')
                ],
                floor: '1',
                capacity: '10',
                roomType: 'Food Lab',
                searchAliases: ['WGND 120'],
            },
            {
                id: 'wgnd-126',
                name: 'Room 126',
                building: 'Wiegand Hall',
                images: [
                    require('../assets/images/rooms/wgnd-126.jpeg')
                ],
                floor: '1',
                capacity: '17',
                roomType: 'Lab Room',
                searchAliases: ['WGND 126'],
            },
            {
                id: 'wgnd-130',
                name: 'Room 130',
                building: 'Wiegand Hall',
                images: [
                    require('../assets/images/rooms/wgnd-130.jpeg')
                ],
                floor: '1',
                capacity: '24',
                roomType: 'Lab Room',
                searchAliases: ['WGND 130'],
            },
            {
                id: 'wgnd-132',
                name: 'Room 132',
                building: 'Wiegand Hall',
                images: [
                    require('../assets/images/rooms/wgnd-132.jpeg')
                ],
                floor: '1',
                capacity: '50',
                roomType: 'Classroom',
                searchAliases: ['WGND 132'],
            },
            {
                id: 'wgnd-206',
                name: 'Room 206',
                building: 'Wiegand Hall',
                images: [
                    require('../assets/images/rooms/wgnd-206.jpeg')
                ],
                floor: '2',
                capacity: '18',
                roomType: 'Lab Room',
                searchAliases: ['WGND 206'],
            },
            {
                id: 'wgnd-238',
                name: 'Room 238',
                building: 'Wiegand Hall',
                images: [
                    require('../assets/images/placeholder.png')
                ],
                floor: '2',
                capacity: '30',
                roomType: 'Classroom',
                searchAliases: ['WGND 238'],
            },
        ]
    },
    {
        id: 'phar',
        name: 'Pharmacy Building',
        rooms: [
            {
                id: 'phar-107',
                name: 'Room 107',
                building: 'Pharmacy Building',
                images: [
                    require('../assets/images/rooms/phar-107.jpeg')
                ],
                floor: '1',
                capacity: '25',
                roomType: 'Classroom',
                searchAliases: ['PHAR 107'],
            },
            {
                id: 'phar-213',
                name: 'Room 213',
                building: 'Pharmacy Building',
                images: [
                    require('../assets/images/rooms/phar-213.jpeg')
                ],
                floor: '2',
                capacity: '25',
                roomType: 'Meeting Room',
                searchAliases: ['PHAR 213'],
            },
            {
                id: 'phar-219',
                name: 'Room 219',
                building: 'Pharmacy Building',
                images: [
                    require('../assets/images/rooms/phar-219.jpeg')
                ],
                floor: '2',
                capacity: '60',
                roomType: 'Classroom',
                searchAliases: ['PHAR 219'],
            },
            {
                id: 'phar-227',
                name: 'Room 227',
                building: 'Pharmacy Building',
                images: [
                    require('../assets/images/placeholder.png')
                ],
                floor: '2',
                capacity: '34',
                roomType: 'Lab Room',
                searchAliases: ['PHAR 227'],
            },
            {
                id: 'phar-237',
                name: 'Room 237',
                building: 'Pharmacy Building',
                images: [
                    require('../assets/images/placeholder.png')
                ],
                floor: '2',
                capacity: '18',
                roomType: 'Lab Room',
                searchAliases: ['PHAR 237'],
            },
            {
                id: 'phar-305',
                name: 'Room 305',
                building: 'Pharmacy Building',
                images: [
                    require('../assets/images/rooms/phar-305.jpeg')
                ],
                floor: '3',
                capacity: '149',
                roomType: 'Lecture Hall',
                searchAliases: ['PHAR 305'],
            },
            {
                id: 'phar-329',
                name: 'Room 329',
                building: 'Pharmacy Building',
                images: [
                    require('../assets/images/placeholder.png')
                ],
                floor: '3',
                capacity: '12',
                roomType: 'Lab Room',
                searchAliases: ['PHAR 329'],
            },
        ]
    },
    {
        id: 'cord',
        name: 'Cordley Hall',
        rooms: [
            {
                id: 'cord-1100',
                name: 'Room 1100',
                building: 'Cordley Hall',
                images: [
                    require('../assets/images/placeholder.png')
                ],
                floor: '1',
                capacity: '34',
                roomType: 'Unknown',
                searchAliases: ['CORD 1100'],
            },
            {
                id: 'cord-1112',
                name: 'Room 1112',
                building: 'Cordley Hall',
                images: [
                    require('../assets/images/placeholder.png')
                ],
                floor: '1',
                capacity: '34',
                roomType: 'Lab Room',
                searchAliases: ['CORD 1112'],
            },
            {
                id: 'cord-1200',
                name: 'Room 1200',
                building: 'Cordley Hall',
                images: [
                    require('../assets/images/rooms/cord-1200.jpeg')
                ],
                floor: '1',
                capacity: '45',
                roomType: 'Lab Room',
                searchAliases: ['CORD 1200'],
            },
            {
                id: 'cord-1210',
                name: 'Room 1210',
                building: 'Cordley Hall',
                images: [
                    require('../assets/images/rooms/cord-1210.jpeg')
                ],
                floor: '1',
                capacity: '45',
                roomType: 'Lab Room',
                searchAliases: ['CORD 1210'],
            },
            {
                id: 'cord-1302',
                name: 'Room 1302',
                building: 'Cordley Hall',
                images: [
                    require('../assets/images/placeholder.png')
                ],
                floor: '1',
                capacity: '45',
                roomType: 'Lab Room',
                searchAliases: ['CORD 1302'],
            },
            {
                id: 'cord-1316',
                name: 'Room 1316',
                building: 'Cordley Hall',
                images: [
                    require('../assets/images/rooms/cord-1316.jpeg')
                ],
                floor: '1',
                capacity: '211',
                roomType: 'Lecture Hall',
                searchAliases: ['CORD 1316'],
            },
            {
                id: 'cord-1424',
                name: 'Room 1424',
                building: 'Cordley Hall',
                images: [
                    require('../assets/images/rooms/cord-1424.jpeg')
                ],
                floor: '1',
                capacity: '45',
                roomType: 'Classroom',
                searchAliases: ['CORD 1424'],
            },
            {
                id: 'cord-1506',
                name: 'Room 1506',
                building: 'Cordley Hall',
                images: [
                    require('../assets/images/placeholder.png')
                ],
                floor: '1',
                capacity: '30',
                roomType: 'Lab Room',
                searchAliases: ['CORD 1506'],
            },
            {
                id: 'cord-1518',
                name: 'Room 1518',
                building: 'Cordley Hall',
                images: [
                    require('../assets/images/placeholder.png')
                ],
                floor: '1',
                capacity: '29',
                roomType: 'Lab Room',
                searchAliases: ['CORD 1518'],
            },
            {
                id: 'cord-1604',
                name: 'Room 1604',
                building: 'Cordley Hall',
                images: [
                    require('../assets/images/placeholder.png')
                ],
                floor: '1',
                capacity: '37',
                roomType: 'Lab Room',
                searchAliases: ['CORD 1604'],
            },
            {
                id: 'cord-1616',
                name: 'Room 1616',
                building: 'Cordley Hall',
                images: [
                    require('../assets/images/rooms/cord-1616.jpeg')
                ],
                floor: '1',
                capacity: '60',
                roomType: 'Classroom',
                searchAliases: ['CORD 1616'],
            },
            {
                id: 'cord-2200',
                name: 'Room 2200',
                building: 'Cordley Hall',
                images: [
                    require('../assets/images/rooms/cord-2200.jpeg')
                ],
                floor: '2',
                capacity: '45',
                roomType: 'Lab Classroom',
                searchAliases: ['CORD 2200'],
            },
            {
                id: 'cord-2212',
                name: 'Room 2212',
                building: 'Cordley Hall',
                images: [
                    require('../assets/images/placeholder.png')
                ],
                floor: '2',
                capacity: '45',
                roomType: 'Lab Room',
                searchAliases: ['CORD 2212'],
            },
            {
                id: 'cord-2306',
                name: 'Room 2306',
                building: 'Cordley Hall',
                images: [
                    require('../assets/images/placeholder.png')
                ],
                floor: '2',
                capacity: '45',
                roomType: 'Lab Room',
                searchAliases: ['CORD 2306'],
            },
            {
                id: 'cord-2316',
                name: 'Room 2316',
                building: 'Cordley Hall',
                images: [
                    require('../assets/images/placeholder.png')
                ],
                floor: '2',
                capacity: '45',
                roomType: 'Lab Room',
                searchAliases: ['CORD 2316'],
            },
            {
                id: 'cord-2406',
                name: 'Room 2406',
                building: 'Cordley Hall',
                images: [
                    require('../assets/images/placeholder.png')
                ],
                floor: '2',
                capacity: '45',
                roomType: 'Lab Room',
                searchAliases: ['CORD 2406'],
            },
            {
                id: 'cord-2414',
                name: 'Room 2414',
                building: 'Cordley Hall',
                images: [
                    require('../assets/images/rooms/cord-2414.jpeg')
                ],
                floor: '2',
                capacity: '49',
                roomType: 'Conference Room',
                searchAliases: ['CORD 2414'],
            },
            {
                id: 'cord-2602',
                name: 'Room 2602',
                building: 'Cordley Hall',
                images: [
                    require('../assets/images/placeholder.png')
                ],
                floor: '2',
                capacity: '40',
                roomType: 'Conference Room',
                searchAliases: ['CORD 2602'],
            },
            {
                id: 'cord-4629',
                name: 'Room 4629',
                building: 'Cordley Hall',
                images: [
                    require('../assets/images/placeholder.png')
                ],
                floor: '4',
                capacity: '8',
                roomType: 'Conference/Office Room',
                searchAliases: ['CORD 4629'],
            },
        ]

    },
];

export function getRoomById(roomId: string): Room | null {
    for (const building of BUILDINGS_DATA) {
        const room = building.rooms.find(r => r.id === roomId);
        if (room) return room;
    }
    return null;
}

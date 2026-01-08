export interface Room {
    id: string;
    name: string;
    building: string;
    image: any; // Using 'any' for require() assets
    floor: string;
    capacity: string;
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
                id: 'owen-room-101',
                name: 'Room 101',
                building: 'Owen Hall',
                image: require('../assets/images/buildings/owenhall.jpg'),
                floor: '1',
                capacity: '30 Seats',
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

export interface OsuLink {
    title: string;
    url: string;
    icon?: string; // Ionicon name
    appScheme?: string; // Custom URL scheme to open installed app
    category: 'Apps' | 'Websites';
}

export const OSU_LINKS: OsuLink[] = [
    {
        title: 'Canvas',
        url: 'https://apps.apple.com/us/app/canvas-by-instructure/id480883488',
        icon: 'school',
        appScheme: 'canvas-courses://',
        category: 'Apps',
    },
    {
        title: 'OSU Events App',
        url: 'https://apps.apple.com/us/app/oregon-state-events/id1641761931',
        icon: 'calendar',
        appScheme: 'localist://',
        category: 'Apps',
    },
    {
        title: 'Outlook',
        url: 'https://apps.apple.com/us/app/microsoft-outlook/id951937596',
        icon: 'mail',
        appScheme: 'ms-outlook://',
        category: 'Apps',
    },
    {
        title: 'BeaverHub',
        url: 'https://beaverhub.oregonstate.edu',
        icon: 'grid',
        category: 'Websites',
    },
    {
        title: 'Campus Map',
        url: 'https://map.oregonstate.edu',
        icon: 'map',
        category: 'Websites',
    },
    {
        title: 'Food',
        url: 'https://food.oregonstate.edu',
        icon: 'restaurant',
        category: 'Websites',
    },
    {
        title: 'Class Schedule',
        url: 'https://prodapps.isadm.oregonstate.edu/StudentRegistrationSsb/ssb/registrationHistory/registrationHistory',
        icon: 'calendar',
        category: 'Websites',
    },
    {
        title: 'MyDegrees',
        url: 'https://mydegrees.oregonstate.edu',
        icon: 'ribbon',
        category: 'Websites',
    },
    {
        title: 'OSU Rooms (Web)',
        url: 'https://osurooms.bobjoerules.com',
        icon: 'star',
        category: 'Websites',
    },
];

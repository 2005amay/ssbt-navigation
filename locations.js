// locations.js

// Central point of SSBT COET (Precise from Google Maps)
const SSBT_CENTER = [21.014892, 75.502914];

const campusBuildings = [
    {
        id: 'admin-block',
        name: 'Admin Block',
        category: 'academic',
        center: [21.013972, 75.502861],
        description: 'Administrative offices, records, and student services.',
        icon: 'admin_panel_settings',
        image: 'main_block_entrance_1776833109572.png'
    },
    {
        id: 'main-block',
        name: 'Main Engineering Block',
        category: 'academic',
        center: [21.014892, 75.502914],
        description: 'Administrative offices, Principal cabin, and central classrooms.',
        icon: 'school',
        image: 'main_block_entrance_1776833109572.png'
    },
    {
        id: 'library',
        name: 'Central Library',
        category: 'library',
        center: [21.014771, 75.502972],
        description: 'Main reading halls and digital library access.',
        icon: 'local_library',
        image: 'library_facade_1776833133075.png'
    },
    {
        id: 'electrical-it-dept',
        name: 'Electrical & IT Dept',
        category: 'academic',
        center: [21.013824, 75.502705],
        description: 'Electrical Engineering labs, IT labs, and classrooms.',
        icon: 'bolt',
        image: 'main_block_entrance_1776833109572.png'
    },
    {
        id: 'basketball-court',
        name: 'Basketball Court',
        category: 'recreation',
        center: [21.014295, 75.502321],
        description: 'Outdoor basketball court and sports area.',
        icon: 'sports_basketball',
        image: 'main_block_entrance_1776833109572.png'
    },
    {
        id: 'playing-ground',
        name: 'Main Playing Ground',
        category: 'recreation',
        center: [21.014402, 75.501604],
        description: 'Cricket ground, athletics track, and outdoor sports.',
        icon: 'sports_cricket',
        image: 'main_block_entrance_1776833109572.png'
    },
    {
        id: 'main-gate',
        name: 'SSBT Main Gate',
        category: 'facility',
        center: [21.016750, 75.504417],
        description: 'Main campus entrance from Dhule Highway with security cabin.',
        icon: 'door_front',
        image: 'main_block_entrance_1776833109572.png'
    },
    {
        id: 'cafeteria',
        name: 'SSBT Cafeteria',
        category: 'cafeteria',
        center: [21.016551, 75.504699],
        description: 'Food court near the northern campus entrance.',
        icon: 'restaurant',
        image: 'cafeteria_entrance_1776833148614.png'
    },
    {
        id: 'canteen',
        name: 'SSBT Canteen',
        category: 'cafeteria',
        center: [21.013105, 75.502502],
        description: 'Snacks and beverages near the academic buildings.',
        icon: 'local_cafe',
        image: 'cafeteria_entrance_1776833148614.png'
    },
    {
        id: 'ssbt-lawn',
        name: 'SSBT Lawn',
        category: 'recreation',
        center: [21.015502, 75.502804],
        description: 'Large landscaped green area for gatherings.',
        icon: 'park',
        image: 'main_block_entrance_1776833109572.png'
    },
    {
        id: 'ssbt-temple',
        name: 'SSBT Temple',
        category: 'facility',
        center: [21.015621, 75.502305],
        description: 'Campus temple located north of the main block.',
        icon: 'temple_hindu',
        image: 'main_block_entrance_1776833109572.png'
    },
    {
        id: 'boys-hostel',
        name: "Boy's Hostel",
        category: 'residential',
        center: [21.012462, 75.502801],
        description: 'In-campus boys residential accommodation.',
        icon: 'hotel',
        image: 'main_block_entrance_1776833109572.png'
    },
    {
        id: 'staff-quarter-b',
        name: 'Staff Quarter Type B',
        category: 'residential',
        center: [21.014705, 75.500502],
        description: 'Staff residential quarters west of the playing ground.',
        icon: 'home',
        image: 'main_block_entrance_1776833109572.png'
    },
    {
        id: 'parking',
        name: 'Main Parking Area',
        category: 'facility',
        center: [21.014081, 75.503462],
        description: 'Two-wheeler and four-wheeler parking.',
        icon: 'local_parking',
        image: 'main_block_entrance_1776833109572.png'
    },
    {
        id: 'entc-katta',
        name: 'E&TC KATTA',
        category: 'recreation',
        center: [21.015302, 75.503804],
        description: 'Popular student gathering spot near E&TC department.',
        icon: 'groups',
        image: 'main_block_entrance_1776833109572.png'
    },
    {
        id: 'staff-quarter-4',
        name: '4 Staff Quarter SSBT',
        category: 'residential',
        center: [21.014605, 75.503701],
        description: 'Staff residential units on the east side of campus.',
        icon: 'home',
        image: 'main_block_entrance_1776833109572.png'
    }
];

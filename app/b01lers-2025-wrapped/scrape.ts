import { writeFile } from 'node:fs/promises';


// @ts-ignore
const ctftimeTableRegex = /<p align="left">Overall rating place:.*?(\d+).*?with.*?(\d+\.\d+).*?pts in (\d+).*?Country place:.*?(\d+).*?<table class="table table-striped">(.*?)<\/table>/gs;

async function fetchTeamMetadata(id: string) {
    const raw = await (await fetch(`https://ctftime.org/team/${id}`)).text();

    const matches = raw.matchAll(ctftimeTableRegex);
    return [...matches].map(([, globalPlace, total, year, countryPlace,]) => ({
        year,
        globalPlace: Number(globalPlace),
        countryPlace: Number(countryPlace),
        points: Number(total)
    }));
}

async function fetchAllEvents(id: string) {
    const raw = await (await fetch(`https://ctftime.org/team/${id}`)).text();

    const matches = raw.matchAll(ctftimeTableRegex);
    return [...matches].map(([, globalPlace, total, year, countryPlace, inner]) => ({
        year,
        globalPlace: Number(globalPlace),
        countryPlace: Number(countryPlace),
        points: Number(total),
        events: parseCTFTable(inner)
    }));
}

function parseCTFTable(inner: string) {
    const matches = inner.matchAll(/<tr><td class="place_ico"><\/td><td class="place.*?">(\d+)<\/td><td><a href="(.+?)">(.+?)<\/a><\/td><td>(\d+\.\d+)<\/td><td>(\d+\.\d+)<\/td><\/tr>/g);
    return [...matches].map(([, place, url, name, points, rating]) => ({
        place: Number(place),
        url,
        name,
        points: Number(points),
        rating: Number(rating),
    }));
}

async function fetchTeams() {
    const raw = await (await fetch('https://ctftime.org/stats/2025/US')).text();
    const matches = raw.matchAll(/<tr><td class="place">(\d+)<\/td><td><\/td><td class="place.*?">(\d+)<\/td><td><\/td><td><a href=".+?">(.+?)<\/a><\/td><td>(\d+\.\d+)<\/td><td>\d+<\/td><\/tr>/g);
    return [...matches].map(([, globalPlace, countryPlace, name, points]) => ({
        globalPlace: Number(globalPlace),
        countryPlace: Number(countryPlace),
        name,
        points: Number(points)
    }))
}

const teamData: Record<string, { lat: number, lng: number }> = {
    'b01lers': { lat: 40.4237543960544, lng: -86.92119207991612 },
    'Shellphish': { lat: 34.41395400566384, lng: -119.84891813250306 },
    'SIGPwny': { lat: 40.10472794277409, lng: -88.22888599286861 },
    'PBR | UCLA': { lat: 34.069962915416745, lng: -118.4438399367731 },
    'Knightsec': { lat: 28.602502336777825, lng: -81.20002984524042 },
    'Plaid Parliament of Pwning': { lat: 40.44321067143486, lng: -79.94285079216527 },
    'NYUSEC': { lat: 40.729505229417, lng: -73.99645559570783 },
    'BYU Cyberia': { lat: 40.25182705296938, lng: -111.64931353243009 },
    'CTF Academy': { lat: 33.42299744633826, lng: -111.92780833227222 },
    'CSG': { lat: 32.98592050462486, lng: -96.75032538132112 },
    'Kernel Sanders': { lat: 29.646533447488483, lng: -82.35331124210632 },
    'UMDCSEC': { lat: 38.98685938585996, lng: -76.94253308013079 },
    'RPISEC': { lat: 42.72980981066629, lng: -73.67883610948103 },
    'SavedByTheShell': { lat: 42.38657385617477, lng: -72.5314550178278 },
    'wolvsec': { lat: 42.277192572035474, lng: -83.73820709703907 },
    'scriptohio': { lat: 40.00607238760995, lng: -83.028227273053 },
    'OSUSEC': { lat: 44.56181714117988, lng: -123.28222092013654 },
    'Nol3ptr': { lat: 30.44206851248394, lng: -84.29795592793819 }
}

async function getUniversityTeams() {
    const teams = await fetchTeams();
    const univ = new Set(Object.keys(teamData));

    return teams
        .filter((t) => univ.has(t.name))
        .map((t) => ({ ...t, ...teamData[t.name] }));
}

;(async () => {
    const teams = await getUniversityTeams();
    console.log(teams);

    const events = await fetchAllEvents('11464');
    await writeFile(`./events.json`, JSON.stringify(events, null, 4));

    for (const id of ['27763', '186494', '284']) {
        const events = await fetchTeamMetadata(id);
        await writeFile(`./events-${id}.json`, JSON.stringify(events, null, 4));
    }
})()

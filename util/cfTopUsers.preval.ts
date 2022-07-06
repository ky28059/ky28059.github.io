import preval from 'next-plugin-preval';


export type User = {
    handle: string, email?: string, firstName?: string, lastName?: string,
    country?: string, city?: string, organization?: string,
    contribution: number, rank: string, maxRank: string, rating: number, maxRating: number,
    lastOnlineTimeSeconds: number, registrationTimeSeconds: number,
    friendOfCount: number, avatar: string, titlePhoto: string
}
async function getTopUsers() {
    const res = await (await fetch('https://codeforces.com/api/user.ratedList?activeOnly=true&includeRetired=false')).json();
    return res.result.slice(0, 10) as User[];
}

export default preval(getTopUsers());

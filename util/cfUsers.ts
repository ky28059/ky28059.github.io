export type User = {
    handle: string, email?: string, firstName?: string, lastName?: string,
    country?: string, city?: string, organization?: string,
    contribution: number, rank: string, maxRank: string, rating: number, maxRating: number,
    lastOnlineTimeSeconds: number, registrationTimeSeconds: number,
    friendOfCount: number, avatar: string, titlePhoto: string
}

// Returns the Codeforces users preloaded for the concept pages. This includes the top 10 rated users
// for the sidebar as a `User[]` and ourselves as a `User`.
export async function getCfUsers() {
    const top: User[] = (await (await fetch('https://codeforces.com/api/user.ratedList?activeOnly=true&includeRetired=false')).json())
        .result.slice(0, 10);
    const self: User = (await (await fetch('https://codeforces.com/api/user.info?handles=ky28059')).json()).result[0];
    return {top, self};
}

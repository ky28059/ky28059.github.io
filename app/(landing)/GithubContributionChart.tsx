import { DateTime } from 'luxon';
import GithubContributionChartWrapper from './GithubContributionChartWrapper';


export default async function GithubContributionChart() {
    const start = DateTime.fromISO('2020-01-01');
    const end = DateTime.now();

    let curr = start;
    const weeks: ContributionWeek[] = [];
    let total = 0;

    // Calculate contribution history one year at a time.
    while (curr < end) {
        const next = curr.plus({ 'year': 1 });
        const res = await fetchContributionData(
            curr,
            next > end ? end : next.minus({ day: 1 })
        );

        total += res.data.user.contributionsCollection.contributionCalendar.totalContributions;

        // Push newly fetched contributions, merging fetch boundaries when they arise.
        const newWeeks = res.data.user.contributionsCollection.contributionCalendar.weeks;
        if (weeks.length && newWeeks[0].contributionDays.length < 7) {
            weeks.at(-1)!.contributionDays.push(...newWeeks[0].contributionDays);
            newWeeks.shift();
        }
        weeks.push(...newWeeks);
        curr = next;
    }

    return (
        <GithubContributionChartWrapper>
            <span className="font-mono flex-none text-secondary [writing-mode:vertical-lr] text-center rotate-180 py-4">
                {start.toLocaleString(DateTime.DATE_FULL)}
            </span>

            {weeks.map((week, i) => (
                <div className="dark:invert dark:hue-rotate-180 flex flex-col gap-1" key={i}>
                    {week.contributionDays.map((day) => (
                        <div
                            className="rounded-sm size-4"
                            style={{ backgroundColor: day.color }}
                            key={day.date}
                        />
                    ))}
                </div>
            ))}

            <span className="flex-none text-secondary [writing-mode:vertical-rl] py-4">
                <p className="font-mono">{end.toLocaleString(DateTime.DATE_FULL)}</p>
                <p className="text-sm text-secondary/50">{total} commits total</p>
            </span>
            {/*
            <div className="pl-2 text-sm italic text-gray-500 w-36">
                <p>{res.data.user.contributionsCollection.contributionCalendar.totalContributions} contributions in the past year.</p>
            </div>
            */}
        </GithubContributionChartWrapper>
    )
}

async function fetchContributionData(from: DateTime, to: DateTime): Promise<ContributionsResponse> {
    const res = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.GH_USER_TOKEN}`,
        },
        body: JSON.stringify({
            query,
            variables: { username: 'ky28059', from: from.toISO(), to: to.toISO() }
        })
    })
    return res.json();
}

const query = `
query($username: String!, $from: DateTime, $to: DateTime) {
  user(login: $username) {
    contributionsCollection(from: $from, to: $to) {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            color
            date
          }
        }
      }
    }
  }
}
`

type ContributionDay = {
    contributionCount: number,
    color: string,
    date: string
}

type ContributionWeek = {
    contributionDays: ContributionDay[]
}

type ContributionsResponse = {
    data: {
        user: {
            contributionsCollection: {
                contributionCalendar: {
                    totalContributions: number,
                    weeks: ContributionWeek[]
                }
            }
        }
    }
}

export default async function GithubContributionChart() {
    const res = await fetchContributionData();

    return (
        <section className="relative w-max max-w-full mx-auto flex gap-1 justify-end overflow-hidden py-4 before:w-20 before:bg-gradient-to-r before:from-white dark:before:from-midnight before:absolute before:inset-y-0 before:left-0 before:z-10">
            {res.data.user.contributionsCollection.contributionCalendar.weeks.map((week, i) => (
                <div className="dark:invert dark:hue-rotate-180 flex flex-col gap-1" key={i}>
                    {week.contributionDays.map((day) => (
                        <div
                            className="rounded-sm w-4 h-4"
                            style={{backgroundColor: day.color}}
                            key={day.date}
                        />
                    ))}
                </div>
            ))}
            {/*
            <div className="pl-2 text-sm italic text-gray-500 w-36">
                <p>{res.data.user.contributionsCollection.contributionCalendar.totalContributions} contributions in the past year.</p>
            </div>
            */}
        </section>
    )
}

async function fetchContributionData(): Promise<ContributionsResponse> {
    const res = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.GH_USER_TOKEN}`,
        },
        body: JSON.stringify({query, variables: {username: 'ky28059'}})
    })
    return res.json()
}

const query = `
query($username:String!) {
  user(login: $username){
    contributionsCollection {
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

type ContributionsResponse = {
    data: {
        user: {
            contributionsCollection: {
                contributionCalendar: {
                    totalContributions: number,
                    weeks: {
                        contributionDays: ContributionDay[]
                    }[]
                }
            }
        }
    }
}

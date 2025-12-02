import { teamData } from '@/app/b01lers-2025-wrapped/data';


export default function TopCTFsTable() {
    const current = teamData.find((f) => f.year === '2025')!;
    const top = current.events.sort((a, b) => b.rating - a.rating)
        .slice(0, 10)

    return (
        <table className="w-full border border-tertiary">
            <thead>
                <tr className="border-b border-tertiary bg-dark">
                    <th className="text-right text-primary pr-6 py-1 font-medium">#</th>
                    <th className="text-sm text-left">CTF</th>
                    <th className="text-sm text-left">Rating gain</th>
                </tr>
            </thead>

            <tbody className="divide-y divide-tertiary">

                {top.map((t) => (
                    <tr key={t.name} className="hover:bg-white/10">
                        <td className="text-right text-primary text-sm pr-6 w-14 py-1 font-jetbrains">{t.place}</td>
                        <td>{t.name}</td>
                        <td className="font-jetbrains text-sm">{t.rating.toFixed(3)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

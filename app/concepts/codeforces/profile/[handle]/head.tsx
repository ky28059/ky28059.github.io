export default function Head({params}: {params: {handle: string}}) {
    return (
        <>
            <title>{params.handle} | Codeforces</title>
        </>
    )
}

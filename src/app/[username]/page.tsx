import Link from 'next/link'

export default function Page({ params }: {
    params: {
        username: string;
    }
}) {
    return (
        <div className={'flex w-screen flex-col h-screen flex-1 justify-center items-center content-center bg-red-500'}>
            {params.username}!

            <Link href={'/'}>Volver</Link>
        </div>
    )
}
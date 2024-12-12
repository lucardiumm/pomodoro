import Header from '@/components/navigation/home/Header'

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <>
            <Header />

            <main>
                {children}
            </main>
        </>
    )
}
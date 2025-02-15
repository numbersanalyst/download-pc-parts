export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex justify-center">
            <div className="flex flex-col gap-8 w-full max-w-6xl relative p-8 md:p-12">
                {children}
            </div>
        </main>
    )
}

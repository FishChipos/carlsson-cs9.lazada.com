import '@/app/globals.css'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body className='antialiased'>
                {children}
            </body>
        </html>
    )
}

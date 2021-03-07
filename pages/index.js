const Home = ({ user }) => {

    const login = () => {
        fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'hey@mail.ru',
                password: 'password'
            })
        }).then(() => {
            window.location.href = '/'
        })
    }

    return (
        <div className="w-full">
            <nav className="w-full h-16 bg-blue-900">
                <div className="max-w-6xl px-12 md:px-0 h-full flex justify-between items-center mx-auto">
                    <span className="text-white text-xl font-bold">Http-only Cookies</span>
                    <button onClick={user ? undefined : login} className="text-white cursor-pointer font-semibold">
                        {user ? user.email : 'Login'}
                    </button>
                </div>
            </nav>

            <section className="max-w-6xl mx-auto grid grid-cols-4 gap-4 mt-16">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(sq => <div className="w-full bg-blue-100 rounded h-96" key={sq}></div>)}
            </section>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    return {
        props: {
            user: ctx.req.session.user || null
        }
    }
}

export default Home

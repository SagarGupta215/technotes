import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Gupta Systems</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful City of Sanskardhani Jabalpur , Gupta Systems provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Gupta Systems<br />
                    opposite Samdariya Mall <br />
                    Jabalpur, 482001<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Sagar Gupta</p>
            </main>
            <footer>
                <Link to="/login">Staff Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public
import './AboutPage.scss'
type Props = {}

const AboutPage = (props: Props) => {
    return (
        <section className="about-me">
            <div className="about-me__title-wrapper title-bg">
                <h1 className="title">About me</h1>
            </div>
            <div className="about-me__content pages-content wrapper grid">
                <div className="photo-wrapper indent-from-below">
                    <img src="/images/main/about-me.jpg" alt="" />
                </div>
                <blockquote className="blockquote-wrapper indent-from-below">
                    <p className="quote">
                        Hi, I”m Victoria Wolf. This section contains many common
                        flower varieties that can often be found at your local
                        professional florist. I love to work hard every day and
                        I am happy.
                    </p>
                </blockquote>
                <div className="text-wrapper indent-from-below">
                    <p className="text">
                        This section contains many common flower varieties that
                        can often be found at your local professional florist.
                        With an expanding global market and advanced technology,
                        more and more varieties are available year round. Used
                        alone or mixed with others, they can create a beautiful
                        arrangement.
                    </p>
                </div>
                <div className="autograph-wrapper">
                    <img
                        src="/images/main/about-me-signature.jpg"
                        alt=""
                        className="autograph"
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutPage

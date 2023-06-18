const HeroSection = () => {
    return(
        <main className="hero container">
            <div className="hero-content">
            <h1>UNLEASH WAVES AMPLIFY ADEVENTURE</h1>
            <p>UNLEASH THE SOUND OF FREEDOM. BOAT SPEAKERS DELIVER
                UNPARALLELED AUDIO PERFORMANCE, TAKING YOUR BOATING
                ADVENTURES TO NEW DEPTHS OF SONIC EXCELLENCE.
            </p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also Available On</p>
                <div className="brand-icons">
                    <img src="/images/flipkart-icon 1.png" alt="flipkart-logo" />
                    <img src="/images/amazon 1.png" alt="amazon-logo" />
                </div>
            </div>
            </div>
            <div className="hero-image">
                <img src="/images/boat.png" alt="hero-image" />
            </div>

        </main>
    )
}
export default HeroSection;
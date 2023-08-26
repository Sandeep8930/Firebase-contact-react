import vg from '../assets/2.webp';
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from 'react-icons/ai'


const Home = () => {
    return (
        <>
            <div className="home" id='home'>
                <main>
                    <h1>S.Gautam</h1>
                    <p>Solution of all your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />

                <div>
                    <p>
                        We are your one and only solution to the tech problems you face
                        eveyday. We are leading tech company whose aim is to increase the problems solving ability  in childern
                    </p>
                </div>

            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who We Are</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit voluptate aspernatur odit quia molestiae, dolorum nostrum velit neque officia eveniet quaerat, iusto aut magni praesentium obcaecati ullam. Quisquam, quaerat nemo rerum porro facere magni recusandae libero odio consequatur repellendus quidem, temporibus dignissimos aliquid veritatis quibusdam corrupti voluptatibus dolorum ex aut!</p>
                </div>
            </div>

            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{ animationDelay: "0.3s" }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div style={{ animationDelay: "0.5s" }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div style={{ animationDelay: "0.7s" }}>
                            <AiFillYoutube />
                            <p>YouTube</p>
                        </div>

                        <div style={{ animationDelay: "1s" }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>

        </>

    )
}

export default Home

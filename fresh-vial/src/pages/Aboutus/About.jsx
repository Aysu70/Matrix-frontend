import Video from  '../../assests/photos/About/video.jpg'

const About=()=>{
    return(
        <>
        <div className='About'>
            <div className="container">
                <h1>OUR VIDEO HISTORY</h1>
                <p>Nunc molestie mi nunc, nec accumsan libero dignissim sit amet. Fusce sit amet tincidunt metus. Nunc eu risus suscipit massa dapibus blandit. Vivamus ac commodo eros.</p>
                <img src={Video} alt="video of water" />
            </div>
        </div>

        </>
    )
}

export default About;
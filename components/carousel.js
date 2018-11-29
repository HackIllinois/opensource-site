function getCreated () {
    return [
        {id: '', project: '', company: '', 
        logo: '', 
        github: '', 
        mentor: '', team: '', 
        blurb: ''}
    ]
}

const Carousel = () => (
    <div className="carousel">
        <h4>Contributed to at HackIllinois</h4>
        <h4>Created at HackIllinois</h4>
        <style jsx>{`
        .carousel {
            align-items: center;
            display: block;
        }
        h4 {
            text-align: center;
            font-family: "Montserrat";
        }
        `} 
        </style>
    </div>
)

export default  Carousel
import Tour from './Tour';

function Tours({tours}) {
    return (
        <section>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {tours.map((tour) => {
                    return <Tour key={tour.id} ></Tour>
                })}
            </div>
        </section>
    )
}

export default Tours;
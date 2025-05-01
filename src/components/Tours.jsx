import '../css/Tours.css';
import Tour from './Tour';

function Tours({tours, removeTour}) {
    return (
        <section className="tours">
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {tours.map((tour) => {
                    return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
                })}
            </div>
        </section>
    )
}

export default Tours;
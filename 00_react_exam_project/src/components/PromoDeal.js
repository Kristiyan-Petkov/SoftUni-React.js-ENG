export const PromoDeal = (props) => {
    return (<li>
        <img src={props.src} alt="promo-deal" />
        <section className="info">
            <div>
                <h3>Lorem Ipsum</h3>
                <p>15h February 2019</p>
            </div>
            <div>
                $50
            </div>
        </section>
        <section className="moreInfo">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <button>ENROLL TODAY</button>
        </section>
    </li>)
}
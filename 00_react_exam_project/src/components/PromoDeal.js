export const PromoDeal = (props) => {
    return (<li>
        <img src={props.src} alt="promo-deal" />
        <section className="info">
            <div>
                <h3>{props.details.title}</h3>
                <p>{props.details.subTitle}</p>
            </div>
            <div>
                {props.details.price}€/h
            </div>
        </section>
        <section className="moreInfo">
            <p>{props.details.description}</p>
            <button>GET TODAY</button>
        </section>
    </li>)
}
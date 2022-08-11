export const PromoDeal = (props) => {
    return (<li>
        <img src={props.imgUrl} alt="promo-deal" />
        <section className="info">
            <div>
                <h3>{props.title}</h3>
                <p>{props.subTitle}</p>
            </div>
            <div>
                {props.price}€/h
            </div>
        </section>
        <section className="moreInfo">
            <p>{props.description}</p>
            <button>GET TODAY</button>
        </section>
    </li>)
}
import { useState, useEffect } from "react"

export const PromoDeal = (props) => {
    //useEffect only on load
    useEffect(() => {
        console.log('Mounting promos');
    }, []);

    const [highlighted, setHighlighted] = useState(false)
    const clickHandler = () => {
        setHighlighted(state => !state);
    }
    let style = {};
    if (highlighted) {
        style.backgroundColor = 'orange';
    }

    //useEffect on every change of state
    useEffect(() => {
        if (highlighted) {
            console.log(`${props.title} selected`);
        } else {
            console.log(`${props.title} de-selected`);
        }

    }, [highlighted, props.title]);

    return (<li onClick={clickHandler} style={style}>
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
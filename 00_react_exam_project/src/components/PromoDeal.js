import { useState, useEffect } from "react"

export const PromoDeal = (props) => {
    //useEffect only on load
    useEffect(() => {
        console.log('Mounting promos');
    }, []);

    const [highlighted, setHighlighted] = useState(false);
    const [marked, setMarked] = useState(false);

    //to select elements
    const clickHandler = () => {
        setHighlighted(state => !state);
    }

    const deleteHandler = () => {
        setMarked(state => !state);
    }
    let style = {};
    if (highlighted) {
        style.backgroundColor = 'orange';
    }
    if (marked) {
        style.backgroundColor = 'red';
    }

    //useEffect on every change of state
    useEffect(() => {
        if (highlighted) {
            console.log(`${props.title} selected`);
        } else {
            console.log(`${props.title} de-selected`);
        }

    }, [highlighted, props.title]);

    //to delete an element
    useEffect(() => {
        if (marked) {
            console.log(`${props.title} promo to be removed`);
        }
    }, [marked, props.title]);

    return (<li style={style}>
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
            <button onClick={clickHandler}>Highlight</button>
            <button onClick={deleteHandler}>Delete</button>
            <button>GET TODAY</button>
        </section>
    </li>)
}
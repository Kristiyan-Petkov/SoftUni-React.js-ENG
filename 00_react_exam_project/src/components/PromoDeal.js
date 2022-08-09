export const PromoDeal = (props) => {
    return (<li>
        <img src={props.src} alt="promo-deal" />
        <section className="info">
            <div>
                <h3>Title</h3>
                <p>Sub-title</p>
            </div>
            <div>
                $50
            </div>
            {/* <div>
                {props.title}
            </div> */}
        </section>
        <section className="moreInfo">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <button>GET TODAY</button>
        </section>
    </li>)
}
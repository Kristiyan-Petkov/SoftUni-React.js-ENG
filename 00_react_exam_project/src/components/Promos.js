import { PromoDeal } from "./PromoDeal"

export const Promos = (props) => {
    const allDeals = props.promos.map((promoDeal, i) => <PromoDeal key={i} {...promoDeal}/>)
    return (<section className="hot-promos">
        <h2>Lorem Ipsum</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <ul>
            {allDeals}
        </ul>
    </section>)
}
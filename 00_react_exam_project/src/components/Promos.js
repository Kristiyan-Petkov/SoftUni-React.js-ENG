import { PromoDeal } from "./PromoDeal"

export const Promos = (props) => {
    return (<section className="hot-promos">
        <h2>Lorem Ipsum</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <ul>
            <PromoDeal details={props.promos[0]} src="https://www.qtrainers.com/upload/original-image/2017/09/topic-281059a95d687479f.jpg"/>
            
            <PromoDeal details={props.promos[1]} src="https://www.techyv.com/sites/default/users/Images-Folder/AmiBroker-Stock-Charting-Software.jpg"/>

            <PromoDeal details={props.promos[2]} src="https://t2conline.com/wp-content/uploads/2018/07/IMAGE-_a-href_http-__www.freepik.com__Designed-by-Freepik__a_.png"/>
            
        </ul>
    </section>)
}
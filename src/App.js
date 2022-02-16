import NavBar from './NavBar';

export default function App() {
	return (
	<div>
		<NavBar />
	</div>
	)
}


export function cost(props) {
    const cost= props.cost;
    return (
        <div>
            <input type="text" cost={props.cost} />
        </div>
    )
}
export function amountCover(props) {
    const amountCover= props.amountCover;

    return (
        <div>
            <input type="text" amountCover={props.amountCover} />
        </div>
    )
}


export function currentAid(props) {
    return (
        <ReactComponent>
            <form>
                <input
                    type="text"
                    name="value"
                    value={props.state.value}
                    currentAid={props.currentAid}
                />
            </form>
            </ReactComponent>
    )
}
export function potentialAid(props) {
    return (
        <ReactComponent>
            <form>
                <input
                    type="text"
                    name="value"
                    value={props.state.value}
                    potentialAid={props.potentialAid}
                />
            </form>
            </ReactComponent>
    )
}

export function amountLeft(props) {
    return (
        <ReactComponent>
            <form>
                <input
                    type="text"
                    name="value"
                    value={props.state.username}
                    potentialAid={props.amountLeft}
                />
            </form>
        </ReactComponent>
    )
}


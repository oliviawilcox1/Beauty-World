import IndexProducts from "./products/IndexProducts"

const Home = (props) => {
	const { user, msgAlert } = props 
	return (
		<>
			<IndexProducts user={user} msgAlert={msgAlert}/>
		</>
	)
}

export default Home

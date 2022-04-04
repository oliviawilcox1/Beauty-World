import IndexProducts from "./products/IndexProducts"


const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)
	const { user, msgAlert } = props 

	return (
		<>
			<h2>Home Page</h2>
			<IndexProducts user={user} msgAlert={msgAlert}/>
		</>
	)
}

export default Home

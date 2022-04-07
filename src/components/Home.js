import IndexProducts from "./products/IndexProducts"


const homeStyle = {
	backgroundColor: "#A6C48A",
}


const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)
	const { user, msgAlert } = props 

	return (
		<>
			{/* <h2>Product List </h2> */}
			<IndexProducts style = {homeStyle} user={user} msgAlert={msgAlert}/>
		</>
	)
}

export default Home

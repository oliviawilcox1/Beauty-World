import IndexProducts from "./products/IndexProducts"


// const homeStyle = {
// 	backgroundColor: "#A6C48A",
// }


const Home = (props) => {
	console.log('props in home', props)
	const { user, msgAlert } = props 

	return (
		<>
			<IndexProducts  user={user} msgAlert={msgAlert}/>
		</>
	)
}

export default Home

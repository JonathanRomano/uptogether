import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return <>
		<Component {...pageProps} />
		<style jsx global>{`
				body{
					color: white  
				}
			`}
    	</style>
	</>
}

export default MyApp

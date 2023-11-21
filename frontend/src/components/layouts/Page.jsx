
const Page = ({ title, description, Component }) => {

	document.title = title || "Koxy AI";
	document.description = description || "The Serverless AI-Powered Platform";

	return (
		<>
			<Component />
		</>
	)

}

export default Page;
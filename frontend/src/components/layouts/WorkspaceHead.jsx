import Hero from "./Hero";
import Button from "../buttons/Button";

const WorkspaceHead = ({ workspace, info }) => {

    return (

        <Hero
            title={workspace?.name}
            description={info}
            icon="cloud"
            Actions={() => {
                return (
                    <>
                        <Button options={{
                            classes: "primaryButton",
                            title: "Manage plan",
                        }} />
                        <Button options={{
                            classes: "primaryButton",
                            title: "Settings",
                            leftIcon: "gear"
                        }} />
                    </>
                )
            }}
        />

    )

}

export default WorkspaceHead;
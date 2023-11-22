import RequireWorkspace from "../../functionality/requireWorkspace";
import WorkspaceHead from "../../components/layouts/WorkspaceHead";
import Button from "../../components/buttons/Button";
import AuthInput from "../../components/inputs/AuthInput";
import Cube from "./assets/sandboxCube.svg";
import CodeIcon from "./assets/code.svg";
import GithubIcon from "./assets/github.svg";
import TemplateIcon from "./assets/template.svg";
import RobotIcon from "./assets/robot.svg";
import OptionButton from "../../components/buttons/OptionButton";

const WorkspaceOverview = ({ user }) => {

    return (
        <RequireWorkspace Component={Overview} user={user} active="sandboxes" title="Overview" />
    )

}

const Overview = ({ id, workspace, user }) => {

    return (

        <div className="mainContainer">

            <WorkspaceHead workspace={workspace} info="Deployed Sandboxes" />

            <div className="innerContainer">

                <div className="flex items-center gap-6 mb-8">
                    <div className="w-full">
                        <AuthInput icon="search" placeholder="Search your Koxy Sandboxes..." />
                    </div>
                    <div className="">
                        <Button options={{
                            classes: "hoverButton pl-4 pr-4 text-[.8rem]",
                            title: "New sandbox",
                            leftIcon: "plus"
                        }} />
                    </div>
                </div>

                <div className="infoContainer items-center flex-col p-10">

                    <div className="w-14 h-14 flex items-center justify-center border-1 border-white/20 rounded-xl gradientBack">
                        <img src={Cube} className="w-10" />
                    </div>

                    <h2>Create your first <span className="text-green-500">Koxy Sandbox</span></h2>

                    <p className="text-sm opacity-70 text-center max-w-[60%] mb-4">
                        Koxy Sandboxes are <span className="underline">serverless isolated environments hosted using Deno</span> designed for developers to effortlessly deploy a variety of projects, including APIs, edge functions, websites, and more served from 34 locations around the world edge-close to users.
                    </p>

                    <div className="flex flex-col gap-6 p-8 border-1 border-border bg-bg rounded-xl items-center">

                        <div className="flex items-center gap-2 w-full mb-2">

                            <h3 className="min-w-max">New Sandbox</h3>

                            <div className="w-full flex items-center justify-end">
                                <Button options={{
                                    classes: "opacityButton",
                                    title: "Check the docs",
                                    rightIcon: "up-right-from-square"
                                }} />
                            </div>

                        </div>

                        <OptionButton
                            title="Empty sandbox"
                            icon={CodeIcon}
                            description="Start an empty sandbox"
                        />

                        <OptionButton
                            title="AI-powered sandbox"
                            label={{
                                type: "success",
                                info: "Pro"
                            }}
                            icon={RobotIcon}
                            description="Our smart AI model will build your sandbox"
                        />

                        <OptionButton
                            title="Import from Github"
                            label={{
                                type: "default",
                                info: "Local setup"
                            }}
                            icon={GithubIcon}
                            description="Import and deploy any public Github repository"
                        />

                        <OptionButton
                            title="Browse templates"
                            icon={TemplateIcon}
                            description="Start with a ready-to-go template"
                        />

                    </div>

                </div>

            </div>

        </div>

    )

}

export default WorkspaceOverview;
import HeroIcon from "../icons/HeroIcon";

const Hero = ({ title, description, icon, Actions }) => {

    return (

        <div className="innerContainer bg-fgLight/40 flex items-center w-full mb-4 border-b-1 border-border">

            <div className="flex flex-col gap-5">
        
                <div className="flex items-center gap-6">
                    <div className="flex flex-col gap-1">
                        <h2 className="title">{title}</h2>
                        {description !== undefined ?<p className="text-xs opacity-70 min-w-max">{description}</p> : <></>}
                    </div>
                </div>
        
            </div>
            
            <div className="flex w-full items-center justify-end gap-6">
                {Actions !== undefined
                    ? <Actions />
                    : <></>
                }
            </div>
        
        </div>

    )

}

export default Hero;
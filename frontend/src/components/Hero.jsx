import HeroIcon from "./HeroIcon";

const Hero = ({ title, description, icon, Actions }) => {

    return (

        <div className="innerContainer bg-fgLight/30 flex items-center w-full mb-4 border-b-1 border-border">

            <div className="flex flex-col gap-5">
        
                <div className="flex items-center gap-5">
                    <HeroIcon icon={icon} />
                    <div className="flex flex-col gap-1">
                        <p className="text-sm opacity-70 min-w-max">{description}</p>
                        <h2 className="text-2xl font-bold p-0 m-0 min-w-max">{title}</h2>
                    </div>
                </div>
        
            </div>
            
            <div className="flex w-full items-center justify-end">
                {Actions !== undefined
                    ? <Actions />
                    : <></>
                }
            </div>
        
        </div>

    )

}

export default Hero;
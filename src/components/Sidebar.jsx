import Icon from "./Icon";

import Logo from "./Logo";
import AsideLink from "./AsideLink";

const Sidebar = () => {

    return (

        <aside className="sidebar">

            <div className="scale-95">
                <Logo />
            </div>

            <AsideLink title="Overview" icon="home" />
            <AsideLink title="Services" icon="widgets" />
            <AsideLink title="AI tools" icon="smart_toy" />

            <div className="text-green-500">
                <AsideLink title="Upgrade plan" icon="hotel_class" />
            </div>

            <AsideLink title="Client library" icon="sdk" />
            <AsideLink title="Deployments" icon="deployed_code" />
            <AsideLink title="Secret keys" icon="key" />
            <AsideLink title="Settings" icon="settings" />

        </aside>

    )

}

export default Sidebar;
import React from "react";
import Logo from "./Logo";
import SLogo from "./SidebarLogo";
import HomeLogo from "./HomeIcons.js";
import MoviesIcon from "../Components/MoviesIcon"
import TvLogo from "./Tvseries";
import UpcomingLogo from "./Upcoming";
import Logout from "./Logout";
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <SLogo/> <p>MovieBox</p>
            </div>
            <div className="sidebar-items">
                <nav>
                <ul>
        <Link className="link" to="/" ><li>&thinsp;&thinsp;<HomeLogo/> &thinsp;&thinsp;&thinsp; <span>Home</span></li></Link>
                <li className="active">&thinsp;&thinsp;<MoviesIcon/> &thinsp;&thinsp;&thinsp; <span>Movies</span></li>
                <li>&thinsp;&thinsp;<TvLogo/>  &thinsp;&thinsp;&thinsp;<span>TV Series</span></li>
                <li>&thinsp;&thinsp;<UpcomingLogo/> &thinsp;&thinsp;&thinsp; <span>Upcoming</span></li>
                </ul>
                </nav>
            </div>
            <div className="quiz">
                <h3>Play movie quizes and earn free tickets</h3>
                <p>50k people are playing now</p>
                <button>Start playing</button>
            </div>
            <div className="logout">
            &thinsp;&thinsp; <Logout/>&thinsp;&thinsp;&thinsp; <p>Logout</p>
            </div>
        </div>
    )
}
export default Sidebar;
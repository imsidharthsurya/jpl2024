import jpllogo from "../img/jpl logo.png"
const Header=()=>{

    return (
        <div className="mt-4">
            <img alt="jpl-logo"  className="object-cover h-28 lg:mx-[25%]" src={jpllogo}/>
        </div>
    )
}

export default Header;
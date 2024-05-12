import CricketPlayerCard from "./CricketPlayerCard";
import { players } from '../utils/data'
const PlayerList=()=>{


    return (
        <div className="mt-16 lg:w-3/4 mx-auto">
            <h1 className="mb-7 text-red-400 text-2xl font-bold text-center">Players List</h1>
            <div className="flex flex-wrap justify-around items-center h-screen">
                
            {players.map((player,index)=>{
                return <CricketPlayerCard player={player} />
            })}
            
            </div>
        </div>
      )
}

export default PlayerList;
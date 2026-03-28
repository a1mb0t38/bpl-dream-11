import React from 'react';
import { FaFlag, FaUser } from "react-icons/fa";

const AvailablePlayers = ({ players }) => {
    console.log(players);
    return (

        <div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                players.map((player) => {
                    return <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img className='rounded-2xl w-full'
                        src={player.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"><FaUser />
                        {player.name}</h2>
                    <div className='flex justify-between items-center gap-2'>
                        <div className='flex items-center gap-2'>
                            <FaFlag></FaFlag>
                            <p>{player.country}</p>
                        </div>
                        <button className='btn'>{player.type}</button>
                    </div>
                    <div className='divider'></div>

                    <h2 className='font-bold'>Rating: {player.rating}</h2>
                    <div className='flex justify-between gap-4 font-bold'>
                        <p>{player.battingStyle} </p>
                        <p className='text-right'>{player.bowlingStyle}</p>
                    </div>
                    <div className="card-actions justify-between items-center">
                        <p className='font-semibold'>Price: $1500000</p>
                        <button className="btn">Choose Player</button>
                    </div>
                </div>
            </div>
                })
            }
            </div>

            
        </div>
    );
};

export default AvailablePlayers;
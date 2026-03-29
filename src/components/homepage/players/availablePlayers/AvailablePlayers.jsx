import React from 'react';

import Cards from '../../../ul/Cards';

const AvailablePlayers = ({ players, setCoin, coin }) => {
    // console.log(players);
    return (

        <div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                players.map((player,index) => { 
                    return <Cards key={index} player={player} setCoin={setCoin} coin={coin}></Cards>
                })
            }
            </div>

            
        </div>
    );
};

export default AvailablePlayers;
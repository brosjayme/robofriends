import React from 'react';


const Card = ({name,username,email,id})=> {

   return (
     <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
         <img alt='robots' src={`https://robohash.org/${id}?200*200`} />
        <div>
            <h1>{name}</h1>
            <h2>{username}</h2>
            <p>{email}</p>
        </div>
     </div>
   );
}
export default Card;
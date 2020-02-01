import React from 'react';
import 'tachyons';

const Card = ({name, email, id}) => {
    return(
        <div style={{marginTop: "10px", marginBottom: "10px"}} className="tc bg-light-green dib br3 pa3 mr3 grow bw2 shadow-5">
            <img style={{width: "250px", height: "250px"}} src={`https://robohash.org/${id}`} alt="robot"/>
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;

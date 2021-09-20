import {Fragment} from 'react';


const Lyric = ({lyrics}) => {
    if(lyrics.length === 0){
        return null;
    }
    return ( 
        <Fragment>
            <div className="card border-light mb-4">
                <div className="card-body">
                    <h2>Letra de la Canción</h2>
                    <p className="letra">{lyrics}</p>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Lyric;
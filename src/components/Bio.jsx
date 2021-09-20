import { Fragment } from "react";

const Bio = ({bio}) => {
    if (Object.keys(bio).length === 0) return null;
    return (
        <Fragment>
            <div className="card border-light mb-4">
                <div className="card-body">
                    <h2 className="text-center">{bio.strArtist} / {bio.strStyle}</h2>
                    <p className="card-text text-center">Género: {bio.strGenre} - {bio.strCountry}</p>
                    <p>{bio.strBiographyES}</p>
                    <img src={bio.strArtistFanart} alt="Logo Artista" className="rounded"/>
                    <div className="card-icons">
                        <a href={`https://${bio.strFacebook}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href={`https://${bio.strTwitter}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href={`${bio.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-lastfm"></i>
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Bio;
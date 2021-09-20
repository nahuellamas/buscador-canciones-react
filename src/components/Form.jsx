import {useState} from 'react';
import Error from './Error';

const Form = ({setSearchInfo}) => {

    const [search, setSearch] = useState({
        artist: '',
        title: '',
    });
    const {artist, title} = search;

    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    };

    const searchInfo = (e) => {
        e.preventDefault();
       if (artist.trim() === '' || title.trim() === ''){
            setError(true);
            return;
       }
        setError(false);
        setSearchInfo(search);

    };

    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form onSubmit={searchInfo} className="col card text-white bg-transparent mb-5 pt-5 pb-2">
                        {error ? <Error message="Todos los campos son Obligatorios"/> : null}
                        <fieldset>
                            <legend className="text-center">Buscador de letras</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Nombre del Artista"
                                            value={artist}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            className="form-control"
                                            name="title"
                                            placeholder="Ej. Every breath you take"
                                            value={title}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
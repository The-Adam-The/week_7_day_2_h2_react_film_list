const Film = ({name, url}) => {
    return (
        <div className="film">
           <li>
                <a href={url}><h4 className="film">{name}</h4></a>
            </li>
        </div>
    );
};

export default Film
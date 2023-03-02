import "./Albums.scss";
export default function Albums({albums, userId}){

    return(
        <div className="album">
            {albums &&
                albums.filter(albums=>albums.userId===userId)
                    .map(album=><div key={album.id} className="secondary-custom-card">
                        {album.title}
                    </div>)}
        </div>
    )
}
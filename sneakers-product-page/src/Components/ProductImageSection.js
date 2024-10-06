import React from 'react';

export default function ImageSection (props)
{
    return(
        <>
            <article className="image-section">
                <div className="main-image">
                    <img  src={props.pImages[0]} alt="img" height={405} width={418}  />
                </div>

                <div className="thumbnails">
                    {props.pThumbnails.map((thumbnail, index) => (
                        <li className="thumbnail-item" key={index} >
                            <img src={thumbnail} alt="img" />
                        </li>
                    ))}
                </div>
            </article>
        </>
    )
}
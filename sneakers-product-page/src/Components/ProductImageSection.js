import React from 'react';

export default function ImageSection (props)
{
    return(
        <>
            <article className="image-section">
                <div className="main-image">
                    <img src={props.pThumbnails[0]} />
                </div>

                <div className="thumbnails">
                    {props.pThumbnails.map((thumbnail, index) => (
                        <li className="thumbnail-item" key={index} >
                            <img src={thumbnail} alt=""/>
                        </li>
                    ))}
                </div>
            </article>
        </>
    )
}
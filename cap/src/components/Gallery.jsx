
function Gallery ({images}) {
    return (
        <>
        <h2>Your Screenshot</h2>
        <div className="image-container">
            {images && images.length > 0 ? (
                images.map((pic, index) => (
                    <li className="gallery" key={index}>
                      <img
                        className="gallery-screenshot"
                        src={pic}
                        alt="Undefined screenshot from query"
                        width="500"
                      />
             s       </li>
                  )
            )
                ) : (
                <div>
                <h3>You haven't made a screenshot yet!</h3>
                </div>
            )
        }
        </div>
      
      
    </>
      )
}

export default Gallery
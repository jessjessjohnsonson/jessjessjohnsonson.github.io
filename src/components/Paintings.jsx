import './Paintings.css'

export default function Paintings({ paintings, paintingInfo }) {
    // Convert the glob results to an array and map to painting data
    const paintingEntries = Object.entries(paintings).map(([filePath, module]) => {
        // Extract filename from the full path
        const filename = filePath.split('/').pop()
        const info = paintingInfo[filename]
        
        return {
            filePath,
            module,
            filename,
            ...info
        }
    }).filter(painting => painting.title) // Only include paintings with defined info
    
    // Sort by year (oldest first)
    const sortedPaintings = paintingEntries.sort((a, b) => a.year - b.year)

    return (
        <div className="vermeer-gallery">
            <div className="paintings-row">
                {sortedPaintings.map((painting) => (
                    <div key={painting.filePath} className="painting-card">
                        <img 
                            src={painting.module.default} 
                            alt={painting.title}
                            className="painting-image"
                        />
                        <div className="painting-info">
                            <p className="title">{painting.title}</p>
                            <p className="year">{painting.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
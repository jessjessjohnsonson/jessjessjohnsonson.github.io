import Paintings from "../../components/Paintings"

export const title = "My own drawings";
export const image = "/public/images/johnson/2025_Dolomites_Sketch.jpg"
// export const image = "/public/images/johnson/2025_Waiting_For_My_Food_In_Cetara_Sketch.jpg"

const johnsonPaintings = import.meta.glob('/public/images/johnson/*.{jpg,png}', { eager: true })

const johnsonPaintingInfo = Object.fromEntries(
    Object.keys(johnsonPaintings).map((filePath) => {
      const fileName = filePath.split('/').pop()
  
      const baseName = fileName.replace(/\.[^/.]+$/, '')
  
      const [yearStr, ...slugParts] = baseName.split('_')
  
      const title = slugParts.join(' ')
  
      return [
        fileName,
        {
          year:  Number(yearStr),
          title
        }
      ]
    })
  )
  

export default function Mine() {
    return <Paintings paintings={johnsonPaintings} paintingInfo={johnsonPaintingInfo} />
}
import Paintings from "../../components/Paintings"

export const title = "My own drawings";
export const image = "/images/johnson/2025_Dolomites_Sketch.jpg"
// export const image = "/images/johnson/2025_Waiting_For_My_Food_In_Cetara_Sketch.jpg"

const paintings = import.meta.glob('/images/johnson/*.{jpg,png}', { eager: true })

const paintingInfo = Object.fromEntries(
    Object.keys(paintings).map((filePath) => {
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
    return <Paintings paintings={paintings} paintingInfo={paintingInfo} />
}
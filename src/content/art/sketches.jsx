import Art from "../../components/Art"
import coverimage from "/src/assets/johnson_sketches/2025_Dolomites.jpg"

export const title = "My sketches";
export const image = coverimage

const paintings = import.meta.glob('/src/assets/johnson_sketches/*.{jpg,png}', { eager: true })

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

export default function Sketches() {
    return <Art paintings={paintings} paintingInfo={paintingInfo} />
}
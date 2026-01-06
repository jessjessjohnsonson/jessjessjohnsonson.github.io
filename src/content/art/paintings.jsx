import Art from "../../components/Art"
import coverimage from "/src/assets/johnson_paintings/2025_A_Tiny_Bernardo_At_the_Guggenheim.png"

export const title = "My paintings";
export const image = coverimage

const paintings = import.meta.glob('/src/assets/johnson_paintings/*.{jpg,png}', { eager: true })
console.log("Paintings found:", paintings)

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

export default function Paintings() {
    return <Art paintings={paintings} paintingInfo={paintingInfo} />
}
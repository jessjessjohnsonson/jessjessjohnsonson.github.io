import Paintings from "../../components/Paintings"

export const title = "Johannes Vermeer";
export const image = "/images/vermeer/1659_Girl_Reading_a_Letter_at_an_Open_Window.jpg"

const paintings = import.meta.glob('/images/vermeer/*.{jpg,png}', { eager: true })

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
  

export default function Vermeer() {
    return <Paintings paintings={paintings} paintingInfo={paintingInfo} />
}
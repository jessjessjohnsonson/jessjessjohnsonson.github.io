import Paintings from "../../components/Paintings"

export const title = "Johannes Vermeer";
export const image = "/public/images/vermeer/1659_Girl_Reading_a_Letter_at_an_Open_Window.jpg"

const vermeerPaintings = import.meta.glob('/public/images/vermeer/*.{jpg,png}', { eager: true })

const vermeerPaintingInfo = Object.fromEntries(
    Object.keys(vermeerPaintings).map((filePath) => {
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
    return <Paintings paintings={vermeerPaintings} paintingInfo={vermeerPaintingInfo} />
}
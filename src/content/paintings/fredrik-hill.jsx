import Paintings from "../../components/Paintings"

export const title = "Carl Fredrik Hill";
export const image = "/public/images/fredrik-hill/1877_Sister_Anna.jpg"

const vermeerPaintings = import.meta.glob('/public/images/fredrik-hill/*.{jpg,png}', { eager: true })

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
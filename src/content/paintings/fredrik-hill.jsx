import Paintings from "../../components/Paintings"

export const title = "Carl Fredrik Hill";
export const image = "/images/fredrik-hill/1877_Sister_Anna.jpg"

const paintings = import.meta.glob('/images/fredrik-hill/*.{jpg,png}', { eager: true })

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
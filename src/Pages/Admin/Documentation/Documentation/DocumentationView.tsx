import useAxios from '@/hooks/useAxios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

interface Docs {
    id: string
    title: string
    content: string
    content_short: string
    image: string
}

const DocumentationView = (props: Props) => {

    const { id } = useParams()

    const { data, loading, errors, get } = useAxios()

    const { loading: loadingImage, errors: errorsImage, getFile: getImage } = useAxios();

    const [imageUrl, setImageUrl] = useState()

    const [docs, setDocs] = useState<Docs>()

    useEffect(() => {

        if (id)
            get(`admin/documentation/documentation/${id}`)

    }, [id])

    useEffect(() => {
        if (data) {
            setDocs(data?.data)

            if (data?.data?.image) handleFetchImage(data.data.image)

        }

    }, [data])

    const handleFetchImage = async (src: string) => {
        try {
            const imageBlob = await getImage(src);
            const imageSrc = URL.createObjectURL(imageBlob);
            setImageUrl(imageSrc)

        } catch (error) {
            console.error('Error fetching image:', error);
        }
    };

    return (
        <div className='p-2'>
            {
                !loading && docs &&

                <div>
                    <div className='row mb-4'>
                        <h2 className='col-8'>{docs.title}</h2>
                        <div className='col-4 d-flex justify-content-end'>
                            <div className='rounded shadow' style={{ width: 240, height: 240 }}>
                                <img src={imageUrl} alt="Doc image" className='border w-100 h-100 rounded' />
                            </div>
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: docs.content }}></div>
                </div>

            }
        </div>
    )
}

export default DocumentationView
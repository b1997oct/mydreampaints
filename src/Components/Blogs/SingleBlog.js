import { popover } from '@material-tailwind/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import img from "./image.png"
import { Button } from '@mui/material'
import { ChevronLeft } from '@mui/icons-material'

function SingleBlog() {

    const navigate = useNavigate()
    const { blod_id } = useParams()
    const [data, setData] = useState(null)


    useEffect(() => {
        getIdData()
        window.scrollTo(0 , 0)
    }, [])

    function getIdData() {
        axios.get("/blogs/" + blod_id)
            .then(res => {
                setData(res.data)
            }).catch(err => {
                setData("Somthing went wrong!")
            })
    }
    return (
        <div>
            <Button onClick={()=>navigate(-1)} variant='text' sx={{mx:1}} startIcon={<ChevronLeft sx={{ fontSize: 25, }} />} color="error" >
                Back
            </Button>
            {typeof data === "string" ?
                <div className='h-[80vh] flex justify-center items-center flex-col text-red-600'>
                    <h1 className='text-3xl text-blue-500'>Ooops...</h1>
                    <p className='text-sm text-violet-600'>Message : Blogs is deleted or moved to some other palce kindly check blog section</p>
                    <div className='mt-20 text-xl'>{data}</div>
                </div> :
                <div>
                    <div role='button' style={{ background: "#fff", borderRadius: data?.temp_ ? `${data?.radius}px` : null }} className="md:m-[1rem] md:p-[1rem] lg:p-[3rem] m-[.5rem] p-[1rem]">
                        <div style={{ background: data?.h_color, borderRadius: data?.radius + "px" }} className='mb-4 cardheader'>
                            {data?.author && <div style={{ whiteSpace: "nowrap", marginRight: "auto", color: data?.h_text_color }}>Posted By: {data?.author}</div>}
                            <div style={{ color: data?.h_text_color }}>{data?.updated_date}</div>
                        </div>
                        <div className="card-img">
                            <img src={data?.media.secure_url || img} style={{ maxWidth: "80%", width: data?.media.secure_url ? null : "80%", maxHeight: 300, borderRadius: data?.radius + "px" }} alt={data?.media.public_url} />
                        </div>
                        <div className="md:p-4 mt-4 md:mt-14 flex flex-col md:gap-4">
                            <h4 style={{ color: data?.t_color }}>{data?.title}</h4>
                            <p style={{ color: data?.d_color }}>{data?.description}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default SingleBlog

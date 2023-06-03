import React from 'react'
import "./index.css"
import { FaHeart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export function BlogCard({ img, title, description, temp_, date, radius,author,onClick , t_color, d_color, h_color, h_text_color, publish,handlePublish, _id}) {

    const navigate = useNavigate()

    return (
            <div  role='button' onClick={()=>navigate("/blog/"+_id)} style={{background:"#fff", borderRadius:temp_? `${radius}px`:null}} className="card-container box-shadow">
                <div style={{ background:h_color, borderRadius:radius+"px"}} className='card-header'>
                    {author && <div style={{ whiteSpace: "nowrap",marginRight:"auto",color:h_text_color }}>Posted By: {author}</div>}
                    <div  style={{color:h_text_color}}>{date}</div>
                </div>
                <div  className="card-img">
                    <img src={img} style={{maxWidth:"100%", maxHeight:300 , borderRadius:radius+"px"}} alt={img} />
                </div>
                <div className="card-item">
                    <h4 style={{color:t_color}}>{title}</h4>
                    <p style={{color:d_color}}>{description}</p>
                </div>
            </div>
    )
}




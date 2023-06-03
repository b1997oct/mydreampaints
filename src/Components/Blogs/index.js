import axios from 'axios'
import React from 'react'
import "./index.css"
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { BlogCard } from './Components'

function Blogs() {

    const [ blogs , setBlogs ] = useState([])
    const [ loading , setLoading ] = useState(true)
    const [ p_loading , setP_loading ] = useState(false)

    const navigate = useNavigate()

    useEffect(()=>{
       getData()
    },[])

    function getData(){
      axios.get("/blogs")
      .then(res=>{
          setBlogs(res.data)
          setLoading(false)
          setP_loading(false)
      }).catch(err=>{
          toast.warning(err.response?.data || err.message)
          setLoading(false)
          setP_loading(false)
      })
    }

    function handlePublish(id){
      setP_loading(true)
      axios.patch("/blogs/"+id)
      .then(res=>{
        toast.success("changed the publish status")
        getData()
      })
      .catch(err=>{
        toast.info("Something! went wrong")
        setP_loading(false)
      })
  }

  return (
    <div className='gr-bg'>
    <div className='all-blog'>
     { blogs.length ?
      blogs.map(data=>(
        <BlogCard
        p_loading={p_loading}
        handlePublish={handlePublish}
        publish={data.publish}
        img={data?.media?.secure_url}
        date={data?.updated_date}
        author={data?.author}
        title={data?.title}
        description={data?.description}
        h_color={data?.h_color}
        h_text_color={data?.h_text_color}
        t_color={data?.t_color}
        d_color={data?.d_color}
        radius={data?.radius}
        temp_={data?.temp_}
        _id={data._id}
        onClick={()=>navigate("/blog/"+data._id)}
      />
      ))
      : loading?
        <div className="overlay">
          <div className="spinner"></div>
        </div>
      : <h2 style={{color:"gray", textAlign:"center",marginTop:20}}>No Data to Show</h2>
     }
    </div>
    <ToastContainer/>
    </div>
  )
}

export default Blogs

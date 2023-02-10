import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Header from '../Header'
import img from "../Assets/uniAbuja.jpeg"
import img2 from "../Assets/mat1.jpg"
import img3 from "../Assets/mat2.jpg"
import img4 from "../Assets/mat3.jpg"
import img5 from "../Assets/mat4.jpg"
import Footer from '../Footer/Footer'
import Pagination from '../Pagination/Pagination'
import axios from 'axios'
import Swal from "sweetalert2"

interface User {
	coverImage: string;
	title: string;
  course: string
}

const Gallery = () => {

    const [currentpage, setCurrentpage] = useState(1)
    const [postperpage, setPostperpage] = useState(9)
    const [postData, setPostData] = useState<User[]>([])

    const indexOfLastPost = currentpage * postperpage
    const indexOfFirstPost = indexOfLastPost - postperpage
    const currentPosts = postData.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber: number) => setCurrentpage(pageNumber)

    const ReadData = async () => {
      await axios.get("http://localhost:2035/image/get")
        .then((res) => {
          setPostData(res.data.data)
        })
    }
    useEffect(() => {
		ReadData();
	}, []);

  return (
    <Container>
      <Header />
          <Wrapper>
        <Top>
          <Img src={img} />
          <Left>
            <Text>Hello Welcome to <span>Uni-Abuja</span> photo gallery with memories and events coming up</Text>
          </Left>
        </Top>
        {/* {currentPosts?.map((props) => ( */}
         
          <Down>
           {currentPosts.map((props) => (
         <Box>
                <Up>
                    <Imgs src={props.coverImage} />
                    
                </Up>
                <Down2>
                    <Data><span>{props.title}</span><br /><p>{props.course}</p></Data>
                <New>Researcher 🥉</New>
                </Down2>
            </Box>
                            ))}
          
          <Pagi><Pagination postsPerPage={postperpage} totalPosts={postData.length} paginate={paginate}/></Pagi>
        </Down>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Gallery
const Imgs = styled.img`
    transition: all 350ms;
    object-fit: cover;
    width: 100%;
    height: 500px;
    cursor: pointer;
    :hover{
        display: block;
        transform: scale(1.1);
        background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.9));
        z-index: 1;
        filter: grayscale(3);
    }
`
const New = styled.div`
    width: 130px;
    height: 40px;
    border: 1px solid #00A85A;
    background-color: white;
    cursor: pointer;
    position: absolute;
    color: #00A85A;
    align-items: center;
    display: flex;
    /* padding-right: 20px; */
    justify-content: center;
    border-radius: 50px;
    bottom: 450px;
    right: 290px;
    @media screen and (max-width: 1024px) {
        right: 340px;
    }
    @media screen and (max-width: 768px) {
        right: 220px;
    }
    @media screen and (max-width: 425px) {
        right: 220px;
        bottom: 470px;
    }
    @media screen and (max-width: 320px) {
        right: 180px;
        bottom: 475px;
    }
`
const Data = styled.div`
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: -15px;
    p{
        margin: 0;
        font-size: 15px;
    }
    span{
        font-weight: bolder;
        font-size: 1.5rem;
        line-height: 2rem;
        @media screen and (max-width: 320px) {
            font-size: 19px;
        }
    }
   
`
const Down2 = styled.div`
    width: 100%;
    height: 50%;
    background-color: #A74F46;
    display: flex;
    padding-top: 40px;
    padding-left: 40px;
    color: white;
    flex-direction: column;
    position: relative;
`
const Up = styled.div`
    width: 100%;
    height: 65%;
    overflow: hidden;
    :hover{
        
    }
`
const Box = styled.div`
    width: 425px;
    height: 420px;
    overflow: hidden;
    border-radius: 10px;
    margin: 5px;
    margin-bottom: 35px;
    @media screen and (max-width: 1024px) {
        width: 440px;
    }
    @media screen and (max-width: 768px) {
        width: 320px;
    }
    @media screen and (max-width: 425px) {
        width: 100%;
    }

`
const Pagi = styled.div`
	width: 100%;
	display: flex;
	height: 20px;
	/* background-color: red; */
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 60px;
`
const Stack = styled.div`
  
`
const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
`
const Namehold = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`
const Hold = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Image = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  /* background-color: green; */
`
const Imageholder = styled.div`
  width: 250px;
  height: 400px;
  border-radius: 15px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-left: 17px;
`
const Down = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
`
const Text = styled.div`
  font-size: 18px;
  width: 480px;
  text-align: center;
   @media screen and (max-width: 768px) {
    font-size: 17px;
    width: 100%;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
  }
  span{
    color: #219653;
    font-size: 20px;
  }
`
const Left = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const Img = styled.img`
  height: 150px;
  
`
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  padding-top: 50px;
  padding-bottom: 90px;
  flex-wrap: wrap;
  @media screen and (max-width: 425px) {
    padding-top: 10px;
  }
`
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  /* background-color: red; */
  margin-top: 80px;
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
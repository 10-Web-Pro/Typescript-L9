import { useState } from "react";
import "../src/assets/AllActors.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


interface Posts {
  id: string,
  title: string,
  image: string,
  url:string,
  time:string
}

const AllNews = () => {
  const [post, setPost] = useState<Posts[]>([])
  const fetchPosts = async () => {
    fetch("https://ss-2y8e.onrender.com/news")
      .then(response => response.json())
      .then(data => { setPost(data); console.log(data) })
      .catch(error => { console.log(error) })
  }
  return (
    <div className="container">
      <div className="col-md-12 d-flex flex-column align-items-center">
        <h1>Fetch news posts</h1>
        <button onClick={fetchPosts} className="btn btn-danger">Show data</button>
      </div>
      <div className="post-container d-flex flex-wrap justify-content-between">
        {post.map(item => {
          return (
            <Card style={{ width: '18rem' }} key={item.id} className="mt-3">
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  Posted Date: {item.time}
                </Card.Text>
                <Button variant="info" onClick={() => window.open(item.url, '_blank')}>Read detailed</Button>
              </Card.Body>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default AllNews
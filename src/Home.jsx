import { Link } from "react-router-dom"


export function Home() {

  return (
  <div>
    <Link to="/login">Login</Link>
    <Link to="/signup">signup</Link>
  </div>  
  )
}

export default Home

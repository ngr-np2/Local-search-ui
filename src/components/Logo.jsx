import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"

const textclip = keyframes`
to {
    background-position:  200% center;
  }
`
const LSI = styled.div`
animation: ${textclip} 10.9s linear infinite;  
-webkit-text-fill-color: transparent;

`
const Logo = () => {
    return (
        <Link to="/">
            <LSI className="text-white inline-block uppercase font-font-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:200%_auto] bg-clip-text fill-transparent select-none">
                Local Search Itahari
            </LSI>
        </Link>
    )
}
export default Logo
/**
 * Challenge: complete the Navbar to match the Figma design
 * 
 * Hints:
 * - for semantic HTML purposes, the Navbar should render
 *   a <header> with a <nav> nested inside. The image and "ReactFacts"
 *   text elements can both be rendered as children inside the <nav>
 * - reference the Figma design for the most accurate info about
 *   colors, sizes, font information, etc.
 */
import reactLogo from '../assets/react.svg'

function Navbar() {
  return (
    <header className="navbar">
        <nav>
            <img src={reactLogo} alt="React Logo" width="40" height="40" />
            <h1>ReactFacts</h1>
        </nav>
    </header>
  )
}

export default Navbar
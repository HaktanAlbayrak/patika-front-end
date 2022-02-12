import './App.css';
import ReactMarkdown from 'react-markdown'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { useState } from 'react';

const help = `Heading
=======
Sub-heading
-----------
### Another deeper heading
Paragraphs are separated
by a blank line.
Leave 2 spaces at the end of a line to do a
line break
Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .
Shopping list:
  * apples
  * oranges
  * pears
Numbered list:
  1. apples
  2. oranges
  3. pears
The rain---not the reign---in
Spain.
 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;

function App() {

  const [markDown, setMarkDown] = useState("this is user input")

  return (
    <div className="App">

      <div className='header'> 
        <h1 className='header__title' >markdown previewer</h1>

        <span onClick={setMarkDown(help)} class="header__icon">?</span>
      </div>

      <div className='output'>

        <textarea className='output__box' value={markDown} onChange={(e) => setMarkDown(e.target.value)} />

        <ReactMarkdown className='output__box'

          children={markDown}

          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={dark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        />
      </div>






    </div>
  );
}

export default App;

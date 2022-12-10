import React from 'react'
import { VT323 } from '@next/font/google'
const vt = VT323({
  weight: '400',
  display: 'auto',
  subsets: 'latin',
})

const TYPING_SPEED = 150
const DELETING_SPEED = 30
export default class Typer extends React.Component {
  state = {
    text: '',
    isDeleting: false,
    loopNum: 0,
    typingSpeed: TYPING_SPEED,
  }

  componentDidMount() {
    this.handleType()
  }

  handleType = () => {
    const { dataText } = this.props
    const { isDeleting, loopNum, text, typingSpeed } = this.state
    const i = loopNum % dataText.length
    const fullText = dataText[i]

    this.setState({
      text: isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? DELETING_SPEED : TYPING_SPEED,
    })

    if (!isDeleting && text === fullText) {
      setTimeout(() => this.setState({ isDeleting: true }), 500)
    } else if (isDeleting && text === '') {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1,
      })
    }

    setTimeout(this.handleType, typingSpeed)
  }

  render() {
    return (
      <div className="inline font-mono font-medium [&>*]:text-2xl">
        <span className={`${vt.className}`}>{this.props.heading}</span>
        <span className={`${vt.className}`}>{this.state.text}</span>
        <span className="animate-blink border-l-2 border-solid "></span>
      </div>
    )
  }
}

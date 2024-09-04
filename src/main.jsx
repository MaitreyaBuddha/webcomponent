import { createRoot } from 'react-dom/client'
import ChatWidget from './components/ChatWidget'

class ChatWidgetElement extends HTMLElement {
  connectedCallback() {
    const root = document.createElement('div')
    this.appendChild(root)
    const reactRoot = createRoot(root)

    // Get the source attribute from the custom element
    const source = this.getAttribute('source') || ''

    // Pass the source as a prop to the ChatWidget component
    reactRoot.render(<ChatWidget source={source} />)
  }
}

customElements.define('digital-wisdom-chat', ChatWidgetElement)

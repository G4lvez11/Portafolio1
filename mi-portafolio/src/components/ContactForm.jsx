import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes integrar un servicio como EmailJS o Formspree
    console.log('Form data:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-600 transition"
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-600 transition"
          placeholder="tu@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-600 transition resize-none"
          placeholder="Tu mensaje..."
        />
      </div>
      <button
        type="submit"
        className="w-full px-8 py-3 bg-gradient-to-r from-red-600 to-wine-700 hover:from-red-700 hover:to-wine-800 rounded-lg transition font-semibold shadow-lg"
      >
        Enviar Mensaje
      </button>
      {submitted && (
        <p className="text-center text-green-400">¡Mensaje enviado exitosamente!</p>
      )}
    </form>
  )
}

export default ContactForm
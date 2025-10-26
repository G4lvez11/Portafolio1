import ContactForm from './ContactForm'

function Contact() {
  return (
    <section id="contacto" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-wine-600">Contacto</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-wine-900/30">
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-semibold">tu-email@ejemplo.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-3xl">📱</div>
                <div>
                  <p className="text-sm text-gray-400">Teléfono</p>
                  <p className="font-semibold">+503 1234-5678</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <p className="text-sm text-gray-400">Ubicación</p>
                  <p className="font-semibold">El Salvador</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a 
                href="https://github.com/tuusuario" 
                target="_blank"
                className="flex-1 px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-lg transition font-semibold text-center"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/tuusuario" 
                target="_blank"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-wine-700 hover:from-red-700 hover:to-wine-800 rounded-lg transition font-semibold text-center"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-wine-900/30">
            <h3 className="text-2xl font-bold mb-6">Envíame un Mensaje</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
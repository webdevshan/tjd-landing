export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* We Accept */}
        <div className="mb-8">
          <h3 className="font-kohinoor font-semibold text-lg mb-4 uppercase tracking-wide text-center">
            We accept
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Shop Pay'].map(
              (method) => (
                <div
                  key={method}
                  className="bg-white/10 px-3 py-2 rounded text-xs font-kohinoor"
                >
                  {method}
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 flex justify-center items-center">
          <p className="font-kohinoor text-sm text-white/80">
            © 2026, The Jewellery Department, Sydney Australia
          </p>
        </div>
      </div>
    </footer>
  )
}

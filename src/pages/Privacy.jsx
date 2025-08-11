import React from "react";

export default function Privacy() {
  return (
    <main className="bg-black text-white min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Privacy Policy
        </h1>
        <p className="text-gray-400 mb-8">Last updated: August 11, 2025</p>

        <section className="space-y-6 text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">1. Information We Collect</h2>
            <p>We may collect contact information (e.g., email) when you submit forms on this site.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">2. How We Use Information</h2>
            <p>To respond to messages, improve the site, and send updates you opt in for.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">3. Cookies</h2>
            <p>We may use cookies to enhance the user experience and analyze traffic.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">4. Data Sharing</h2>
            <p>We do not sell personal data. We may share limited data with service providers to operate the site.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">5. Your Rights</h2>
            <p>You can request access, update, or deletion of your data by contacting us.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">6. Contact</h2>
            <p>
              Questions? Email:{" "}
              <a className="text-green-400 hover:text-blue-500" href="mailto:minoo.yaghoubi@gmail.com">
                minoo.yaghoubi@gmail.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

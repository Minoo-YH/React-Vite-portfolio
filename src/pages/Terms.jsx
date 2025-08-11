import React from "react";

export default function Terms() {
  return (
    <main className="bg-black text-white min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Terms of Service
        </h1>
        <p className="text-gray-400 mb-8">Last updated: August 11, 2025</p>

        <section className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            These Terms of Service (“Terms”) govern your use of this website and any related services.
            By accessing or using the site, you agree to be bound by these Terms.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">1. Use of the Site</h2>
            <p>
              You agree to use the site only for lawful purposes and in a way that does not infringe
              the rights of others or restrict their use and enjoyment of the site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">2. Intellectual Property</h2>
            <p>
              All content on this site (design, text, graphics, logos, images, and code) is owned by
              the site owner unless otherwise stated. You may not reproduce or redistribute content
              without prior written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">3. Third-Party Links</h2>
            <p>
              The site may contain links to third-party websites. We are not responsible for the content
              or practices of those sites. Following any link is at your own risk.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">4. Disclaimer</h2>
            <p>
              The site is provided on an “as is” and “as available” basis. We make no warranties, express
              or implied, regarding the site, including but not limited to merchantability, fitness for a
              particular purpose, or non-infringement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising from your use of the site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">6. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Changes become effective when posted on this page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">7. Contact</h2>
            <p>
              Questions? Email: <a className="text-green-400 hover:text-blue-500" href="mailto:minoo.yaghoubi@gmail.com">minoo.yaghoubi@gmail.com</a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

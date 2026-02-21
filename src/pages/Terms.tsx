import Hero from '../components/Hero';

export default function Terms() {
  return (
    <>
      <Hero heading="Terms of Service" subheading="Terms and conditions governing the use of our services." compact />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Acceptance of Terms</h2>
                <p className="text-muted leading-relaxed">By accessing and using this website, you accept and agree to be bound by these terms and conditions. If you do not agree, please do not use our services.</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Products and Services</h2>
                <p className="text-muted leading-relaxed">All products and pricing are subject to availability and confirmation. Quotes provided are valid for the period specified and subject to terms agreed in formal contracts.</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
                <p className="text-muted leading-relaxed">All content on this website, including text, images, and logos, is the property of JEOBALA and protected by intellectual property laws. Unauthorized use is prohibited.</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted leading-relaxed">JEOBALA shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or our services.</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
                <p className="text-muted leading-relaxed">These terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through appropriate legal channels.</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
                <p className="text-muted leading-relaxed">For questions about these terms, contact us at info@jeobala.com.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

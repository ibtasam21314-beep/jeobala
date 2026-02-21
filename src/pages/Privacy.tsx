import Hero from '../components/Hero';

export default function Privacy() {
  return (
    <>
      <Hero heading="Privacy Policy" subheading="How we collect, use, and protect your information." compact />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                <p className="text-muted leading-relaxed">We collect information you provide directly, including name, email, company name, and phone number when you submit inquiries or request quotes. We also collect usage data through cookies and analytics tools.</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-muted leading-relaxed">Your information is used to respond to inquiries, provide quotes, process orders, send relevant communications, and improve our services. We do not sell your personal information to third parties.</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                <p className="text-muted leading-relaxed">We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted leading-relaxed">You have the right to access, correct, or delete your personal information. Contact us at info@jeobala.com to exercise these rights.</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted leading-relaxed">For privacy-related inquiries, contact us at info@jeobala.com.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

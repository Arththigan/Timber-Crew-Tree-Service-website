import type { ReactNode } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const smsMessages = [
  'Free estimate confirmations and scheduling notifications',
  'Appointment reminders and project status updates',
  'Customer support and service follow-up communications',
  'Promotional offers and seasonal announcements related to our tree care services',
];

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <section className="relative overflow-hidden bg-brand-charcoal pb-20 pt-36 text-white">
        <div className="absolute inset-0 opacity-10 hero-mesh" />
        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-brand-green-light/20 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-green-light">Legal</p>
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl lg:text-6xl">Terms &amp; Conditions</h1>
          <p className="mt-5 text-sm text-white/70 sm:text-base">
            Effective Date: January 19, 2025 <span className="mx-2">|</span> Last Updated: July 9, 2026
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="rounded-[2rem] bg-white p-7 shadow-3d sm:p-10 lg:p-14">
            <p className="mb-10 text-lg leading-relaxed text-brand-charcoal/70">
              Welcome to Timber Crew Tree Service. By accessing this website or using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.
            </p>

            <div className="space-y-10 text-brand-charcoal/70">
              <TermsSection title="1. Business Identity">
                <p>
                  These Terms and Conditions govern your use of the services provided by Timber Crew Tree Service, located at 9950 County Rd, Clarence Center, NY 14032. Contact:{' '}
                  <a className="font-semibold text-brand-green-dark hover:underline" href="tel:+17164428118">+1 (716) 442-8118</a>{' '}|{' '}
                  <a className="font-semibold text-brand-green-dark hover:underline" href="mailto:info@timbercrew.com">info@timbercrew.com</a>.
                </p>
              </TermsSection>

              <TermsSection title="2. Age Requirement (18+)">
                <p>By using this website or enrolling in our services, including SMS messaging, you confirm that you are at least 18 years of age. Our SMS program is not directed to individuals under 18.</p>
              </TermsSection>

              <TermsSection title="3. Terminology">
                <p>“Client,” “You,” and “Your” refer to the user of this website. “The Company,” “We,” “Our,” and “Us” refer to Timber Crew Tree Service.</p>
              </TermsSection>

              <TermsSection title="4. SMS Messaging Terms of Service">
                <div className="space-y-7">
                  <Subsection title="4.1 Program Description & Message Types">
                    <p>By providing your phone number and checking the SMS consent checkbox on our contact forms, you agree to receive recurring automated text messages from Timber Crew Tree Service. Messages may include:</p>
                    <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-brand-green">
                      {smsMessages.map((message) => <li key={message}>{message}</li>)}
                    </ul>
                  </Subsection>
                  <Subsection title="4.2 Message Frequency">
                    <p>Message frequency varies based on your service activity and interactions with us. You may receive up to 4–8 messages per month. Frequency may increase during active service periods.</p>
                  </Subsection>
                  <Subsection title="4.3 Message & Data Rates">
                    <p>Message and data rates may apply for any messages sent to you from us and to us from you. Charges are determined by your mobile carrier and your individual service plan. Timber Crew Tree Service is not responsible for any carrier charges.</p>
                  </Subsection>
                  <Subsection title="4.4 How to Opt Out (STOP)">
                    <p>You can opt out of receiving SMS messages at any time by replying STOP to any message we send. After opting out, you will receive a one-time confirmation message and will no longer receive SMS messages from us unless you re-enroll.</p>
                  </Subsection>
                  <Subsection title="4.5 How to Get Help (HELP)">
                    <p>For help with our SMS program, reply HELP to any message or contact us directly at +1 (716) 442-8118 or info@timbercrew.com.</p>
                  </Subsection>
                  <Subsection title="4.6 Carrier Liability Disclaimer">
                    <p>Mobile carriers are not liable for delayed or undelivered messages. Timber Crew Tree Service cannot guarantee delivery of SMS messages. Delivery of information through SMS may be subject to your mobile carrier’s capability and coverage area.</p>
                  </Subsection>
                  <Subsection title="4.7 Supported Carriers">
                    <p>Our SMS program is supported by major U.S. wireless carriers, including AT&amp;T, Verizon, and T-Mobile. Not all carriers are supported for all messages.</p>
                  </Subsection>
                </div>
              </TermsSection>

              <TermsSection title="5. Cookies">
                <p>We use cookies in accordance with our Privacy Policy to improve user experience and website functionality.</p>
              </TermsSection>
              <TermsSection title="6. Intellectual Property & License">
                <p>Unless otherwise stated, Timber Crew Tree Service owns the intellectual property rights for all content on this website. You may not copy, reproduce, republish, sell, or redistribute any material without prior written permission.</p>
              </TermsSection>
              <TermsSection title="7. Comments & User Content">
                <p>Timber Crew Tree Service reserves the right to monitor and remove any comments or user-generated content on our platforms that are inappropriate, offensive, or violate these terms.</p>
              </TermsSection>
              <TermsSection title="8. Content Liability">
                <p>We are not responsible for content that appears on external websites linking to us. You agree to defend and protect Timber Crew Tree Service against any claims arising from your website or digital properties.</p>
              </TermsSection>
              <TermsSection title="9. Disclaimer">
                <p>To the maximum extent permitted by applicable law, Timber Crew Tree Service excludes all warranties, representations, and conditions relating to our website and services. We are not liable for any loss or damage, including damage for loss of business, profits, or revenue, arising from the use of our website or services.</p>
              </TermsSection>
              <TermsSection title="10. Changes to These Terms">
                <p>We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with a revised “Last Updated” date. Continued use of our website or services constitutes acceptance of the updated terms.</p>
              </TermsSection>
              <TermsSection title="11. Contact Information">
                <p className="mb-5">For questions about these Terms and Conditions, please contact us:</p>
                <div className="grid gap-4 rounded-2xl bg-brand-cream p-5 sm:grid-cols-2">
                  <ContactItem icon={MapPin}>9950 County Rd, Clarence Center, NY 14032</ContactItem>
                  <ContactItem icon={Phone} href="tel:+17164428118">+1 (716) 442-8118</ContactItem>
                  <ContactItem icon={Mail} href="mailto:info@timbercrew.com">info@timbercrew.com</ContactItem>
                </div>
              </TermsSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TermsSection({ title, children }: { title: string; children: ReactNode }) {
  return <section><h2 className="mb-4 font-display text-2xl font-extrabold text-brand-charcoal">{title}</h2><div className="leading-relaxed">{children}</div></section>;
}

function Subsection({ title, children }: { title: string; children: ReactNode }) {
  return <div><h3 className="mb-2 font-display text-lg font-bold text-brand-charcoal">{title}</h3><div className="leading-relaxed">{children}</div></div>;
}

function ContactItem({ icon: Icon, children, href }: { icon: typeof Phone; children: ReactNode; href?: string }) {
  const content = <><Icon className="h-5 w-5 shrink-0 text-brand-green" /><span>{children}</span></>;
  return href ? <a href={href} className="flex items-start gap-3 font-semibold hover:text-brand-green-dark">{content}</a> : <div className="flex items-start gap-3 font-semibold">{content}</div>;
}

import type { ReactNode } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const collectedInformation = [
  'Full name',
  'Mailing or service address',
  'Email address',
  'Mobile phone number',
  'Service request details and project descriptions',
  'Communication history and preferences',
];

const messageTypes = [
  'Free estimate confirmations and appointment reminders',
  'Project status updates and scheduling notifications',
  'Customer support and follow-up communications',
  'Promotional offers and seasonal service announcements related to our tree care services',
];

const informationUses = [
  'Provide and manage tree care services',
  'Respond to inquiries and service requests',
  'Schedule appointments and send reminders',
  'Send promotional communications (with your consent)',
  'Improve our website and service quality',
  'Comply with applicable laws and regulations',
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <section className="relative overflow-hidden bg-brand-charcoal pb-20 pt-36 text-white">
        <div className="absolute inset-0 opacity-10 hero-mesh" />
        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-brand-green-light/20 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-green-light">Legal</p>
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl lg:text-6xl">Privacy Policy</h1>
          <p className="mt-5 text-sm text-white/70 sm:text-base">
            Effective Date: January 19, 2025 <span className="mx-2">|</span> Last Updated: July 9, 2026
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="rounded-[2rem] bg-white p-7 shadow-3d sm:p-10 lg:p-14">
            <p className="mb-10 text-lg leading-relaxed text-brand-charcoal/70">
              Timber Crew Tree Service (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data in compliance with applicable U.S. data protection laws, including the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation (GDPR) where applicable.
            </p>

            <div className="space-y-10 text-brand-charcoal/70">
              <PolicySection title="1. Information We Collect">
                <p>We may collect the following categories of personal information when you contact us, request a quote, submit a web form, or use our services:</p>
                <PolicyList items={collectedInformation} />
              </PolicySection>

              <PolicySection title="2. SMS / Text Message Communications">
                <div className="space-y-7">
                  <Subsection title="2.1 How We Collect Your Mobile Number">
                    <p>We collect your mobile phone number when you voluntarily provide it through our website contact forms, phone calls, or other direct communication channels. By providing your mobile number and checking the SMS consent checkbox on our forms, you expressly consent to receive SMS (text message) communications from Timber Crew Tree Service.</p>
                  </Subsection>
                  <Subsection title="2.2 Types of Messages We Send">
                    <p>By opting in, you may receive recurring automated text messages from Timber Crew Tree Service, including:</p>
                    <PolicyList items={messageTypes} />
                  </Subsection>
                  <Subsection title="2.3 Message Frequency">
                    <p>Message frequency varies based on your interactions with us, ongoing service needs, and active promotions. You may receive up to 4–8 messages per month depending on your service activity.</p>
                  </Subsection>
                  <Subsection title="2.4 Message & Data Rates">
                    <p>Message and data rates may apply. Charges are determined by your mobile carrier and your individual service plan. Timber Crew Tree Service is not responsible for any charges incurred from your mobile carrier.</p>
                  </Subsection>
                  <Subsection title="2.5 How to Opt Out (STOP)">
                    <p>You may cancel SMS messages at any time by replying STOP to any text message you receive from us. After opting out, you will receive one final confirmation message and will no longer receive SMS communications from Timber Crew Tree Service unless you re-enroll.</p>
                  </Subsection>
                  <Subsection title="2.6 How to Get Help (HELP)">
                    <p>For help with our SMS program, reply HELP to any message, call <a href="tel:+17164428118" className="font-semibold text-brand-green-dark hover:underline">+1 (716) 442-8118</a>, or email <a href="mailto:info@timbercrew.com" className="font-semibold text-brand-green-dark hover:underline">info@timbercrew.com</a>.</p>
                  </Subsection>
                </div>
              </PolicySection>

              <PolicySection title="3. Mobile Information & SMS Consent — No Third-Party Sharing">
                <div className="space-y-4">
                  <p>No mobile information, including your mobile phone number and SMS opt-in consent data, will be shared with third parties or affiliates for marketing or promotional purposes.</p>
                  <p>All other categories of personal data exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties under any circumstances.</p>
                </div>
              </PolicySection>

              <PolicySection title="4. How We Use Your Information">
                <p>We use the personal information we collect to:</p>
                <PolicyList items={informationUses} />
              </PolicySection>

              <PolicySection title="5. Cookies and Tracking Technologies">
                <p>We use cookies and similar technologies to improve website functionality, analyze traffic, and enhance user experience. Cookies do not store sensitive personal information. By continuing to use this website, you consent to our use of cookies in accordance with this policy.</p>
              </PolicySection>

              <PolicySection title="6. Data Security">
                <p>We implement reasonable administrative, technical, and physical security measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction. However, no method of electronic transmission or storage is 100% secure.</p>
              </PolicySection>

              <PolicySection title="7. Data Retention">
                <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable law. When your data is no longer needed, we securely delete or anonymize it.</p>
              </PolicySection>

              <PolicySection title="8. Your Privacy Rights">
                <p>Depending on your location, you may have the following rights regarding your personal data:</p>
                <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-brand-green">
                  <li><strong className="text-brand-charcoal">Access:</strong> Request a copy of the personal data we hold about you</li>
                  <li><strong className="text-brand-charcoal">Correction:</strong> Request correction of inaccurate personal data</li>
                  <li><strong className="text-brand-charcoal">Deletion:</strong> Request deletion of your personal data, including your mobile number and SMS consent record</li>
                  <li><strong className="text-brand-charcoal">Opt-Out of SMS:</strong> Reply STOP to any text message at any time</li>
                  <li><strong className="text-brand-charcoal">Opt-Out of Marketing:</strong> Contact us directly to be removed from marketing lists</li>
                </ul>
                <p className="mt-4">To exercise any of these rights, email <a href="mailto:info@timbercrew.com" className="font-semibold text-brand-green-dark hover:underline">info@timbercrew.com</a> or call <a href="tel:+17164428118" className="font-semibold text-brand-green-dark hover:underline">+1 (716) 442-8118</a>.</p>
              </PolicySection>

              <PolicySection title="9. Changes to This Privacy Policy">
                <p>We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised “Last Updated” date. Continued use of our website or services after any changes constitutes your acceptance of the updated policy.</p>
              </PolicySection>

              <PolicySection title="10. Contact Information">
                <p className="mb-5">If you have questions or concerns about this Privacy Policy, please contact us:</p>
                <div className="grid gap-4 rounded-2xl bg-brand-cream p-5 sm:grid-cols-2">
                  <ContactItem icon={MapPin}>9950 County Rd, Clarence Center, NY 14032</ContactItem>
                  <ContactItem icon={Phone} href="tel:+17164428118">+1 (716) 442-8118</ContactItem>
                  <ContactItem icon={Mail} href="mailto:info@timbercrew.com">info@timbercrew.com</ContactItem>
                </div>
              </PolicySection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PolicySection({ title, children }: { title: string; children: ReactNode }) {
  return <section><h2 className="mb-4 font-display text-2xl font-extrabold text-brand-charcoal">{title}</h2><div className="leading-relaxed">{children}</div></section>;
}

function Subsection({ title, children }: { title: string; children: ReactNode }) {
  return <div><h3 className="mb-2 font-display text-lg font-bold text-brand-charcoal">{title}</h3><div className="leading-relaxed">{children}</div></div>;
}

function PolicyList({ items }: { items: string[] }) {
  return <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-brand-green">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function ContactItem({ icon: Icon, children, href }: { icon: typeof Phone; children: ReactNode; href?: string }) {
  const content = <><Icon className="h-5 w-5 shrink-0 text-brand-green" /><span>{children}</span></>;
  return href ? <a href={href} className="flex items-start gap-3 font-semibold hover:text-brand-green-dark">{content}</a> : <div className="flex items-start gap-3 font-semibold">{content}</div>;
}

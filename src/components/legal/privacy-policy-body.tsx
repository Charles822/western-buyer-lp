export function PrivacyPolicyBody() {
  return (
    <>
      <section className="space-y-4">
        <p>
          <strong className="text-stone-900">Convertree</strong> is a service brand operated by{' '}
          <strong className="text-stone-900">Metaverse Lab Limited</strong>, a company incorporated in
          Hong Kong. References to &quot;we,&quot; &quot;us,&quot; or &quot;our&quot; in this Privacy
          Policy refer to Metaverse Lab Limited in its capacity as the provider of Convertree services,
          unless the context requires otherwise.
        </p>
        <p>
          Convertree is committed to protecting your privacy. This Privacy Policy explains how we collect,
          use, and safeguard information when you visit our website, use our AI Voice Concierge services,
          or interact with our AI agents.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-900">1. Information We Collect</h2>

        <div className="space-y-3">
          <h3 className="font-semibold text-stone-900">A. Information You Provide to Us</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-stone-900">Contact Details:</strong> When you sign up for a demo or
              service, we collect your name, work email, company name, and phone number.
            </li>
            <li>
              <strong className="text-stone-900">Communication Data:</strong> Any information you provide
              when communicating with our team or using our demo agent.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-stone-900">B. Information Collected via the AI Voice Concierge</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-stone-900">Call Recordings &amp; Transcripts:</strong> To provide the
              service, our AI agents record and transcribe incoming calls to our clients&apos; business
              lines.
            </li>
            <li>
              <strong className="text-stone-900">Caller Metadata:</strong> We may collect the phone number,
              date, time, and duration of calls.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-stone-900">C. Cookies and Technical Data</h3>
          <p>
            We collect standard website usage data, such as IP addresses and browser types. We use cookies
            to improve site performance and analyze traffic. Visitors can manage their cookie preferences
            through their browser settings or our on-site consent banner.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-900">2. How We Use Your Information</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>To provide, operate, and maintain our AI Voice Concierge services.</li>
          <li>
            To improve our AI models and service quality (using anonymized data where possible).
          </li>
          <li>To process bookings and enquiries for our clients.</li>
          <li>
            To send service-related notifications and marketing updates (which you can opt out of).
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-900">3. Data Sharing and Third Parties</h2>
        <p>We do not sell your data. We share information only with trusted service providers necessary to run our business, including:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-stone-900">AI Model Providers:</strong> Such as OpenAI, Anthropic, and
            ElevenLabs (for processing voice and text).
          </li>
          <li>
            <strong className="text-stone-900">Infrastructure Providers:</strong> Such as Twilio (for
            telephony) and cloud hosting services.
          </li>
          <li>
            <strong className="text-stone-900">Automation Tools:</strong> Such as n8n or Make for workflow
            integrations.
          </li>
          <li>
            <strong className="text-stone-900">CRMs:</strong> If requested by the client, we sync data to
            their specific CRM systems.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-900">4. Call Recording Disclosure</h2>
        <p>
          For clients using our Voice Concierge: Convertree configures agents to provide recording notices
          by default. However, you are responsible for ensuring your business complies with local laws.
          Convertree acts as a &quot;Data Processor&quot; regarding these recordings, while the client acts
          as the &quot;Data Controller/User.&quot;
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-900">5. Data Retention</h2>
        <p>
          We retain personal data and call recordings for as long as you have an active account. Upon
          termination of service, we retain data for a period of 12 months to allow for data exports and
          business continuity, after which it is permanently deleted unless a longer retention period is
          required by law.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-900">6. Security</h2>
        <p>
          We implement industry-standard security measures, including encryption and access controls, to
          protect your data from unauthorized access or disclosure.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-900">7. Your Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Access the personal data we hold about you.</li>
          <li>Request the correction or deletion of your data.</li>
          <li>Withdraw consent for data processing.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-900">8. Governing Law</h2>
        <p>This policy is governed by the laws of the Hong Kong Special Administrative Region.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-900">9. Contact Us</h2>
        <p>
          If you have questions about this policy, contact us at{' '}
          <a
            href="mailto:sam@convertree.com"
            className="font-medium text-emerald-700 underline decoration-emerald-700/30 underline-offset-2 hover:text-emerald-800"
          >
            sam@convertree.com
          </a>
          .
        </p>
      </section>
    </>
  );
}

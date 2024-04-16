import React from 'react';
import Link from '../../../shared/link';

const Tickets = () => (<section className="safe-paddings container-md text-center">
  <h1 id="tickets">Tickets</h1>
  <p>
    Tickets for KCD Austria will be available soon. Stay tuned for the official release date and pricing information.
    Follow us on
    <Link ariaLabel="Kubernetes Community Days Austria page on LinkedIn"
          to="https://www.linkedin.com/company/kcdaustria" openInNewTab> LinkedIn</Link> to be the
    first to know when ticket sales open.
  </p>
</section>);
export default Tickets;

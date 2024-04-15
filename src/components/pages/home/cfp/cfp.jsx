import React from 'react';
import Button from '../../../shared/button';

const Cfp = () => (
  <section className="safe-paddings container-md text-center">
    <h1 id="cfp">Call for Proposals</h1>
    <p>
      Got a Cloud Native story to tell? A cool project to showcase? Brilliant tips to share? We're
      all ears! Submit your talk and <strong>be a part of this exciting community event</strong>.
      Your voice matters, and we encourage new speakers to apply! Let's learn and grow together!
    </p>
    <Button className="mt-6" to="https://sessionize.com/kcd-austria" target="_blank">
      Submit your talk now
    </Button>
  </section>
);
export default Cfp;

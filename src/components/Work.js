import React from 'react';
import Icons from "../components/Icons";
import "../styles/Home.css";

export default function Work() {
    return (
      <div className="Work">
        <main className="main">
          <Icons />
          <div className="work-intro">
            <h2>WORK</h2>
            <p>
              This is a showcase of my some best work. These projects were built
              with HTML, CSS, Javascript and React.
            </p>
          </div>
          <div>
            <div className='work-desc'>
              <h3>Kalawallet</h3>
              <p>
                A fin-tech website that serves as a mini wallet or bank. It
                enables users to send and receive money, make payments, save,
                invest and borrow all on any of their devices. Tools used; HTML,
                CSS and Javascript.
              </p>
            </div>
            <div>
              <h3>Bumpa Clone</h3>
              <p>
                The landing page of a marketing website that allow users to
                showcase their businesses and finalize transactions on the
                website. Tools used are; HTML, CSS and Javascript.
              </p>
            </div>
            <div>
              <h3>Aboki-Africa clone</h3>
              <p>
                Cloned a popular fintech website that helps users check the
                current black market rate for conversion of currencies.
              </p>
            </div>
          </div>
        </main>
      </div>
    );
}
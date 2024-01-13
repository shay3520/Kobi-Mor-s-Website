import React, { useState } from 'react';
import './test.scss';

function Test() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (sectionId) => {
        if (openSection === sectionId) {
            setOpenSection(null); // Close the currently opened section
        } else {
            setOpenSection(sectionId); // Open the new section
        }
    };

    return (
        <main>
            <h1>CSS-Only Animated Accordion</h1>
            
            {/* Overview Section */}
            <section className={`accordion ${openSection === 'overview' ? 'open' : ''}`} onClick={() => toggleSection('overview')}>
                <h1 className="title">Overview</h1>
                <div className={`content ${openSection === 'overview' ? 'show' : ''}`}>
                    <div className="wrapper">
                        {/* Your content for Overview */}
                    </div>
                </div>
            </section>

            {/* How Does It Work Section */}
            <section className={`accordion ${openSection === 'how-does-it-work' ? 'open' : ''}`} onClick={() => toggleSection('how-does-it-work')}>
                <h1 className="title">How does it work?</h1>
                <div className={`content ${openSection === 'how-does-it-work' ? 'show' : ''}`}>
                    <div className="wrapper">
                        {/* Your content for How Does It Work */}
                    </div>
                </div>
            </section>

            {/* Inspiration Section */}
            <section className={`accordion ${openSection === 'inspiration' ? 'open' : ''}`} onClick={() => toggleSection('inspiration')}>
                <h1 className="title">Inspiration</h1>
                <div className={`content ${openSection === 'inspiration' ? 'show' : ''}`}>
                    <div className="wrapper">
                        {/* Your content for Inspiration */}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Test;

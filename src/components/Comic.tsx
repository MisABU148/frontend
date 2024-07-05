import React from 'react';
import Link from 'next/link';

const Comic: React.FC = () => {
    return (
        <div className="comic-part">
            <Link href="/comic-page">
                <button>View Comic Page</button>
            </Link>
        </div>
    );
};

export default Comic;

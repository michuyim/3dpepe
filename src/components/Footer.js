import React, { useState } from 'react';
import './footer.css';

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    const [copySuccess, setCopySuccess] = useState('');

    const walletAddress = 'F7okM43irtSrTYdR6sQJmTox1SrNPchZRWkcJhkvJQN7'; // Replace with your actual wallet address

    const copyToClipboard = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(walletAddress).then(() => {
                setCopySuccess('Copied!');
                setTimeout(() => setCopySuccess(''), 2000); // Clear the message after 2 seconds
            }).catch(() => {
                setCopySuccess('Failed to copy!');
            });
        } else {
            // Fallback method
            const textArea = document.createElement('textarea');
            textArea.value = walletAddress;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                setCopySuccess('Copied!');
                setTimeout(() => setCopySuccess(''), 2000); // Clear the message after 2 seconds
            } catch (err) {
                setCopySuccess('Failed to copy!');
            }
            document.body.removeChild(textArea);
        }
    };

    return (
        <div className='footer'>
            <p className='fs-6 fw-bold pb-1'>
                Contract Info: <span className='wallet-address'>{walletAddress}</span>
                <button className='copy-button' onClick={copyToClipboard}>Copy</button>
            </p>
            {copySuccess && <p className='copy-success'>{copySuccess}</p>}
            <p className='fs-6 fw-bold pb-1'>
                <span>
                    <a href='https://t.me/Pepe3Dmemes' className='footer-link' target='_blank' rel='noreferrer noopener'>
                        TELEGRAM
                    </a>
                </span>
                {" "}|{" "}
                 <span>
                    <a href='https://twitter.com/3Dpepememe' className='footer-link' target='_blank' rel='noreferrer noopener'>
                        TWITTER
                    </a>
                </span>
            </p>
          <p className='fs-6 fw-bold'>3D Pepe &copy; {year}. All Rights Reserved.</p>
        </div>
    );
};

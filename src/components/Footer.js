import React from 'react';
import twitter from '../images/Twitter-Icon.png';
import facebook from '../images/Facebook-Icon.png';
import instagram from '../images/Instagram-Icon.png';
import linkdin from '../images/Linkedin-Icon.png';
import github from '../images/GitHub-Icon.png';

export default function Footer() {
    return (
        <footer className='footer'>
            <ul className='icon-list'>
                <li>
                    {' '}
                    <a
                        href='https://twitter.com/maxkram/'
                        rel='noreferrer'
                        target='_blank'
                    >
                        <img src={twitter} alt='twitter' />
                    </a>{' '}
                </li>
                <li>
                    {' '}
                    <a
                        href='https://www.facebook.com/maxkram/'
                        rel='noreferrer'
                        target='_blank'
                    >
                        <img src={facebook} alt='facebook' />
                    </a>{' '}
                </li>
                <li>
                    {' '}
                    <a
                        href='https://www.instagram.com/maxkram/'
                        rel='noreferrer'
                        target='_blank'
                    >
                        <img src={instagram} alt='instagram' />{' '}
                    </a>{' '}
                </li>
                <li>
                    {' '}
                    <a
                        href='https://www.linkedin.com/in/maxkram/'
                        rel='noreferrer'
                        target='_blank'
                    >
                        {' '}
                        <img src={linkdin} alt='linkedin' />
                    </a>{' '}
                </li>
                <li>
                    {' '}
                    <a
                        href='https://github.com/maxkram/'
                        rel='noreferrer'
                        target='_blank'
                    >
                        <img src={github} alt='github' />{' '}
                    </a>{' '}
                </li>
            </ul>
        </footer>
    );
}

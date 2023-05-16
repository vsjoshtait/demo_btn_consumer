import React from 'react';
import Button from '@vsdemo/demo_button';
import { createRoot } from 'react-dom/client';

document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('app');
    console.log('hello from react');

    const button = (
        <Button onClick={() => console.log('clicked')}>Hi!</Button>
    );

    console.log('button -> ', button);

    const root = createRoot(el);

    root.render(button);
});

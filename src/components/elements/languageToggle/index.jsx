import React from 'react';
import "./styles.scss"

const LanguageToggle = () => {
    return (
        <>
            <input type="checkbox" id="switch" />
            <label for="switch">Toggle</label>
        </>
    );
}

export default LanguageToggle;
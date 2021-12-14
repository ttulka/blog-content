(function _darkThemeSetup(document) {
    const COOKIE_NAME = 'darktheme';
    const CLAS_NAME = 'dark';
    
    let dark = 'true' === (document.cookie.split('; ')
        .find(row => row.startsWith(COOKIE_NAME)) || '').split('=')[1];
    
    toggleTheme(dark); 
    
    document.querySelector('a.theme').onclick = evt => {
        evt.preventDefault();
        dark = !dark;
        toggleTheme(dark);                
        document.cookie = `${COOKIE_NAME}=${dark}; expires=` + new Date(2100, 1);        
    };
    
    function toggleTheme(dark) {
        dark
            ? document.body.classList.add(CLAS_NAME)
            : document.body.classList.remove(CLAS_NAME);
    }
})(document);
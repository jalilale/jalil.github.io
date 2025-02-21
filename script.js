function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
            alert('Alias "' + text + '" copiado al portapapeles!');
        }).catch(function(err) {
            console.error('Error al copiar al portapapeles: ', err);
        });
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            alert('Alias "' + text + '" copiado al portapapeles!');
        } catch (err) {
            console.error('Error al copiar al portapapeles: ', err);
        }
        document.body.removeChild(textarea);
    }
}
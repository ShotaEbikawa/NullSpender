export const DownloadButtonBehavior = (() => {

    const downloadImage = async (el,isModal) => {
        let downloadButton = isModal === true ? 
                            getModalDownloadButtonDOM(el) :
                            getDownloadButtonDOM(el);
                            
        let imageLink = downloadButton.getAttribute('data-href');
        let response = await fetch(imageLink);
        let blob = await response.blob();;
        saveAs(blob, downloadButton.getAttribute('data-id'));
    }
    
    const getDownloadButtonDOM = (el) => {
        if (el.classList.contains('download-button')) return el;
        else return el.parentElement;
    }
    
    const getModalDownloadButtonDOM = (el) => {
        if (el.classList.contains('modal-download-button')) return el;
        else return el.parentElement;   
    }

    return {
        downloadImage,
        getDownloadButtonDOM,
        getModalDownloadButtonDOM,
    }
})();
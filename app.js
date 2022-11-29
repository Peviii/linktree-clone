const shareButtons = document.querySelectorAll('.tile-share-button');
console.log(shareButtons);

async function copyText(e){
    e.preventDefault();
    const link = this.getAttribute('link');
    console.log(link);
    try {
        await navigator.clipboard.writeText(link);
        alert(`text: ${link} copied!`);
    } catch (error) {
        console.error(error);
    }
}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText));

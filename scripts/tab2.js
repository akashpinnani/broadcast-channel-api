const bc= new BroadcastChannel('name-change');
const title = document.getElementById('title');

bc.onmessage = (messageEvent) => {
    if(messageEvent.data === 'update-title') {
        const val = localStorage.getItem('title');
        title.textContent = 'Hello ' + val;
    }
}
<script>
function newSite() {
    var sites = ['http://getprismatic.com',
                 'http://gizmodo.com/',
                 'http://lifehacker.com/']

    document.getElementById('myIframe').src = sites[Math.floor(Math.random() * sites.length)];
}   

newSite();

</script>

function spLiveChatLoaded() {
    document.addEventListener('spLiveChatLoaded', function() {
        window.sp.liveChat.config({
            primaryColor: '#000000',
            colorScheme: "light"
        });
    });
}

export { spLiveChatLoaded };
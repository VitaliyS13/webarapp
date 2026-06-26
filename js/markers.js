const MarkersManager = {
    activeMarkers: new Set(),

    init() {
        console.log("MarkersManager: Ініціалізація обробників подій маркерів.");
        const markers = document.querySelectorAll('a-marker');

        markers.forEach(marker => {
            marker.addEventListener('markerFound', (e) => {
                const markerId = e.target.id;
                this.activeMarkers.add(markerId);
                this.updateStatus();
                console.log(`[Marker Found]: ${markerId}`);
            });

            marker.addEventListener('markerLost', (e) => {
                const markerId = e.target.id;
                this.activeMarkers.delete(markerId);
                this.updateStatus();
                console.log(`[Marker Lost]: ${markerId}`);
            });
        });
    },

    updateStatus() {
        const statusPanel = document.getElementById('status-panel');
        if (this.activeMarkers.size > 0) {
            statusPanel.classList.add('active');
            const list = Array.from(this.activeMarkers).map(id => id.replace('marker-', '').toUpperCase());
            statusPanel.innerText = `Активні маркери: ${list.join(', ')}`;
        } else {
            statusPanel.classList.remove('active');
            statusPanel.innerText = "Статус: Очікування маркерів...";
        }
    }
};
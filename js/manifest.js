const CACHE_NAME = 'greenbite-v1.0.0';
const urlsToCache = [
  './index.html',
  './recipes.html',
  './calculator.html',
  './workouts.html',
  './mindfulness.html',
  './contact.html',
  './css/style.css',
  './js/script.js',
  './js/recipes.js',
  './js/calculator.js',
  './js/workout.js',
  './js/mindfulness.js',
  './js/contact.js',
  './assests/images/favicon/favicon.ico',
  './assests/images/favicon/favicon.svg',
  './assests/images/ws-1.jpg',
  './assests/images/ws-12.jpg',
  './assests/images/ws-13.jpg',
  './assests/images/ws-14.jpg',
  './assests/images/ws-15.jpg',
  './assests/images/ws-17.jpg',
  './assests/images/ws-20.jpg',
  './assests/images/facebook.png',
  './assests/images/instagram.png',
  './assests/images/twitter.png',
  './assests/images/pinterest.png',
  './assests/sounds/rain.wav',
  './assests/sounds/forest.wav',
  './assests/sounds/ocean.wav',
  './assests/sounds/whitenoice.wav',
  './assests/sounds/bells.wav',
  './assests/sounds/bell.mp3'
];

// Install event - cache all essential files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.log('Cache installation failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }

        return fetch(event.request).then(response => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(() => {
        // Fallback for failed requests
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      })
  );
});

// Background sync for offline form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// Handle push notifications
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'New update from GreenBite!',
    icon: '/assests/images/favicon/favicon.ico',
    badge: '/assests/images/favicon/favicon.ico',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Explore',
        icon: '/assests/images/favicon/favicon.ico'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/assests/images/favicon/favicon.ico'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('GreenBite', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  } else {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Background sync function
async function doBackgroundSync() {
  try {
    // Get stored form submissions from IndexedDB or localStorage
    const db = await openDB();
    const submissions = await getStoredSubmissions(db);
    
    for (const submission of submissions) {
      try {
        // Try to submit the form data
        await submitFormData(submission);
        // Remove from storage if successful
        await removeSubmission(db, submission.id);
      } catch (error) {
        console.log('Failed to submit form data:', error);
      }
    }
  } catch (error) {
    console.log('Background sync failed:', error);
  }
}

// Helper functions for background sync
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('GreenBiteDB', 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = event => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('submissions')) {
        const store = db.createObjectStore('submissions', { keyPath: 'id' });
        store.createIndex('timestamp', 'timestamp', { unique: false });
      }
    };
  });
}

function getStoredSubmissions(db) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['submissions'], 'readonly');
    const store = transaction.objectStore('submissions');
    const request = store.getAll();
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

function removeSubmission(db, id) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['submissions'], 'readwrite');
    const store = transaction.objectStore('submissions');
    const request = store.delete(id);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve();
  });
}

async function submitFormData(submission) {
  // Implement your form submission logic here
  const response = await fetch('/api/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(submission.data)
  });
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  return response.json();
}
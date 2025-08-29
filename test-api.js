// Test script for Google Custom Search API
// Using native fetch (Node.js 18+)

async function testGoogleAPI() {
  try {
    console.log('🧪 Testing Google Custom Search API...');
    
    const response = await fetch('http://localhost:3000/api/google-search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        keyword: 'bilgi güvenliği tehditleri',
        targetUrl: 'https://kalibre.com.tr',
        location: 'tr'
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    console.log('✅ API Response:');
    console.log('📊 Mock Data:', data.mockData ? 'Yes (API not configured)' : 'No (Real Google Data)');
    console.log('🔍 Keyword:', data.keyword);
    console.log('🌐 Target URL:', data.targetUrl);
    console.log('📍 Position:', data.position || 'Not found');
    console.log('✔️ Found:', data.found ? 'Yes' : 'No');
    console.log('📝 Results Count:', data.searchResults.length);
    
    if (data.searchResults.length > 0) {
      console.log('\n🔗 First 3 Results:');
      data.searchResults.slice(0, 3).forEach((result, index) => {
        console.log(`${index + 1}. ${result.title}`);
        console.log(`   🔗 ${result.link}`);
        console.log(`   📄 ${result.snippet.substring(0, 100)}...`);
        console.log('');
      });
    }
    
  } catch (error) {
    console.error('❌ API Test Failed:', error.message);
  }
}

testGoogleAPI();

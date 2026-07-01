import React, { useState } from 'react';

function Counter() {
  // State ডিক্লেয়ার করা হচ্ছে
  // count হলো বর্তমান মান, আর setCount হলো মান পরিবর্তন করার ফাংশন
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>বর্তমান সংখ্যা: {count}</h2>
      
      {/* বাটনে ক্লিক করলে setCount-এর মাধ্যমে count-এর মান ১ বাড়বে */}
      <button onClick={() => setCount(count + 1)}>
        + ১ যোগ করুন
      </button>
    </div>
  );
}

export default Counter;
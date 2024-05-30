import http from 'k6/http';
import { check } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 50 },   
    { duration: '2m', target: 100 },  
    { duration: '1m', target: 200 },  
    { duration: '2m', target: 200 },  
    { duration: '1m', target: 0 },    
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], 
    http_req_failed: ['rate<0.1'],    
  },
};

export default function () {
  let response = http.get('http://45.90.123.11:5001/measurements');
  check(response, {
    'status is 200': (r) => r.status === 200,
  });
}

import http from 'k6/http';
import { check } from 'k6';

export let options = {
  stages: [
    { duration: '5s', target: 100 }, 
    { duration: '10s', target: 0 },  
    { duration: '5s', target: 80 }, 
    { duration: '10s', target: 0 },  
    { duration: '5s', target: 120 },
  ],
};

export default function () {
  let response = http.get('http://45.90.123.11:5001/weatherforecast');
  check(response, {
    'status is 200': (r) => r.status === 200,
  });
}

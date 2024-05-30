import http from 'k6/http';
import { check } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 50 },  
    { duration: '3m', target: 50 },  
    { duration: '1m', target: 0 },  
  ],
};

export default function () {
  let response = http.get('http://45.90.123.11:5001/weatherforecast');
  check(response, {
    'status is 200': (r) => r.status === 200,
  });
}

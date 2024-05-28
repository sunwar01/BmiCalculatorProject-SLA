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
  let response = http.get('http://localhost:5222/api/v1/catalog/items');
  check(response, {
    'status is 200': (r) => r.status === 200,
  });
}

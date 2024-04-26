import http from 'k6/http';
import { sleep, group } from 'k6';

let groupResponseTimes = {};

export let options = {
    stages: [
        { duration: '2m', target: 5 },  // Ramp-up to 5 users over 2 mins
        { duration: '4m', target: 50 }, // Ramp-up to 50 users over next 4 mins
	    { duration: '4m', target: 100}, // Ramp-up to 100 users over the next 4 mins
	    { duration: '5m', target: 100 },   // Stay at 100 users for 5 mins
    ],
//    vus: 1,
//    duration: '300s',
};

export default function () {
    // Homepage
    group('Homepage', function () {
        let start = new Date();
        http.get('http://localhost:8080/tools.descartes.teastore.webui/');
        let end = new Date();
        let duration = end - start;
        groupResponseTimes['Homepage'] = (groupResponseTimes['Homepage'] || 0) + duration;
        sleep(1);
    });

    // Categories details
    group('Categories details', function () {
        let start = new Date();
        http.get('http://localhost:8080/tools/descartes.teastore.webui/category?category=2&page=1');
        let end = new Date();
        let duration = end - start;
        groupResponseTimes['Categories details'] = (groupResponseTimes['Categories details'] || 0) + duration;
        sleep(1);
    });

    // Product details
    group('Product details', function () {
        let start = new Date();
        http.get('http://localhost:8080/tools.descartes.teastore/webui/product?id=7');
        let end = new Date();
        let duration = end - start;
        groupResponseTimes['Product details'] = (groupResponseTimes['Product details'] || 0) + duration;
        sleep(1);
    });

    // View cart
    group('View cart', function () {
        let start = new Date();
        http.get('http://localhost:8080/tools.descartes.teastore.webui/cart');
        let end = new Date();
        let duration = end - start;
        groupResponseTimes['View cart'] = (groupResponseTimes['View cart'] || 0) + duration;
        sleep(1);
    });
}

export function handleSummary(data) {
    console.log("\nResponse times by group:");
    for (let groupName in groupResponseTimes) {
        console.log(`   ${groupName}: ${groupResponseTimes[groupName]} ms`);
    }
}

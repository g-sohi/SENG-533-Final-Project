# TeaStore Performance Evaluation Project

This repository contains the scripts and measurement metrics used for our SENG 533 Final Project focused on load testing and performance evaluation of the TeaStore microservices environment. The project aimed to assess the scalability, responsiveness, and reliability of the TeaStore application under varying user loads and deployment strategies.

## Project Components

### Load Testing Script (`tea_script.js`)

The `tea_script.js` file contains the load testing script developed using [k6](https://k6.io/), an open-source load testing tool. The script simulates user interactions with the TeaStore API endpoints, such as accessing the homepage, viewing product details, and interacting with the shopping cart. Different scenarios with varying numbers of virtual users were executed to generate load on the system.

### Measurement Metrics

The measurement metrics captured during load testing include:
- **Response Time**: Average time taken to process and respond to HTTP requests.
- **Throughput**: Number of successful HTTP requests processed per second.
- **Failure Rate**: Rate of failed HTTP requests or error responses under load.

## Repository Structure

- `tea_script.js`: Load testing script used to simulate user interactions and generate load on the TeaStore environment.
- `tea_script_metrics/`: Directory containing measurement metrics captured during load testing.
- `README.md`: Project documentation.
